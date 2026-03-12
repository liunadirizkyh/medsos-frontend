import { Link, useNavigate } from "react-router";
import Logo from "../assets/images/social-media.png";
import { customAPI } from "../config/axios";
import { useState } from "react";
import { useAuth } from "../stores/authStore";

const LoginView = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(false);

  const { setTokenData } = useAuth();
  const navigate = useNavigate();

  const HandleLogin = async (e) => {
    e.preventDefault();
    setDisabled(true);

    try {
      const { data } = await customAPI.post("/auth/login", formData);
      console.log(data);
      setTokenData(data.token, data.user);

      navigate("/");
    } catch (error) {
      setErrorMessage("Invalid email or password");
      console.log(error);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <div className="flex w-full max-w-5xl">
      {/* left */}
      <div className="hidden md:flex flex-1 items-center justify-center">
        <img src={Logo} alt="" className="w-96 h-96 mt-3" />
      </div>

      {/* right */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-xs">
          {/* login */}
          <form onSubmit={HandleLogin}>
            <div className="card bg-base-100">
              <div className="card-body px-8 py-10">
                <h1 className="text-5xl font-logo text-center mb-8">
                  VistaGram
                </h1>
                {errorMessage && (
                  <p className="text-error text-center">{errorMessage}</p>
                )}
                <input
                  type="text"
                  placeholder="Emai"
                  className="input w-full bg-base-200"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input w-full bg-base-200 mb-3"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                />
                <button
                  className="btn w-full bg-info"
                  type="submit"
                  disabled={disabled}
                >
                  Login
                </button>
              </div>
            </div>
          </form>

          <div className="flex w-full flex-col">
            <div className="divider">OR</div>
          </div>

          {/* link register */}
          <div className="card bg-base-100">
            <div className="card-body py-4 text-center text-sm">
              Don't have an account?
              <Link to={"/register"}>
                <span className="link link-primary font-semibold cursor-pointer">
                  Sign Up
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
