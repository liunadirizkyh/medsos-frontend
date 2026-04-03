import { Outlet } from "react-router";
import { useAuth } from "../stores/authStore";
import { Navigate } from "react-router";

const AuthLayout = () => {
  const { isAuthentication } = useAuth();

  if (isAuthentication) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow flex items-center justify-center bg-base-200">
        <Outlet />
      </main>
      <footer className="footer footer-horizontal footer-center bg-info/5 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Liunadi Rizky
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default AuthLayout;
