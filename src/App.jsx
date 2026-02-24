import { BrowserRouter, Route, Routes } from "react-router";
import HomeView from "./views/homeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import DetailUserView from "./views/DetailUserView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/:username" element={<DetailUserView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
