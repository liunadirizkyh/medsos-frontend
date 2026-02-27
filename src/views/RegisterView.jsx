import { Link } from "react-router";

const RegisterView = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center card bg-base-100 text-center w-96">
        <div className="card-body px-8 py-10">
          <h1 className="text-5xl font-logo">VistaGram</h1>
          <p className="max-w-60 my-2 font-semibold">
            Sign up to see photos and videos from your friends.
          </p>
          <button className="btn bg-info">Log In with Facebook</button>
          <div className="flex w-full flex-col">
            <div className="divider">OR</div>
          </div>
          <input
            type="email"
            placeholder="Emai"
            className="input w-full bg-base-200"
          />
          <input
            type="password"
            placeholder="Password"
            className="input w-full bg-base-200"
          />
          <input
            type="text"
            placeholder="Full Name"
            className="input w-full bg-base-200"
          />
          <input
            type="text"
            placeholder="Username"
            className="input w-full bg-base-200"
          />

          <button className="btn bg-info w-full mt-5">Sign Up</button>
        </div>
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
