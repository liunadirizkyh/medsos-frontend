import { BrowserRouter, Route, Routes } from "react-router";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import DetailUserView from "./views/DetailUserView";
import AuthLayout from "./layout/AuthLayout";
import HomeLayout from "./layout/HomeLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/:username" element={<DetailUserView />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
