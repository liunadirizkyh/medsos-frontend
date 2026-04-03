import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { customAPI } from "../config/axios";
import { useAuth } from "../stores/authStore";

const RegisterView = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    username: "",
  });

  const { setTokenData } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setDisabled(true);
    try {
      const { data } = await customAPI.post("/auth/register", formData);
      setTokenData(data.token, data.user);
      navigate("/");
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed to register. Please try again.");
    } finally {
      setDisabled(false);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center card bg-base-100 text-center w-96">
        <form action="" onSubmit={handleRegister}>
          <div className="card-body px-8 py-10">
            <h1 className="text-5xl font-logo">VistaGram</h1>
            <p className="max-w-60 my-2 font-semibold">
              Sign up to see photos and videos from your friends.
            </p>
            <button className="btn bg-info">Log In with Facebook</button>
            <div className="flex w-full flex-col">
              <div className="divider">OR</div>
            </div>
            {errorMessage && (
              <p className="text-error text-center my-2">{errorMessage}</p>
            )}
            <input
              type="email"
              placeholder="Emai"
              className="input w-full bg-base-200"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              className="input w-full bg-base-200"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Full Name"
              className="input w-full bg-base-200"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Username"
              className="input w-full bg-base-200"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />

            <button
              className="btn bg-info w-full mt-5"
              type="submit"
              disabled={disabled}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>

      <div className="flex w-full flex-col">
        <div className="divider"></div>
      </div>

      <div className="flex justify-center items-center card bg-base-100 text-center w-96">
        <div className="card-body px-8">
          <h1>Have an account?</h1>
          <Link to={"/login"}>
            <span className="link link-primary font-semibold cursor-pointer">
              Log In
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
