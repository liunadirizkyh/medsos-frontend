import { Link } from "react-router";
import Logo from "../assets/images/social-media.png";
import { customAPI } from "../config/axios";
import { useBear } from "../stores/authStore";

const LoginView = () => {
  const { bears } = useBear();

  const HandleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await customAPI.post("/auth/login", {});
      console.log(data);
    } catch (error) {
      console.log(error);
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
                <input
                  type="text"
                  placeholder="Emai"
                  className="input w-full bg-base-200"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input w-full bg-base-200 mb-3"
                />
                <button className="btn w-full bg-info">Login</button>
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
