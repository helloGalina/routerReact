import { NavLink, Route, Routes } from "react-router-dom";
import Basket from "./Pages/Basket";
import Description from "./Pages/Description";
import Main from "./Pages/Main";
import CustomFeedbackForm from "./Pages/CustomFeedbackForm";

export default function App() {
  return (
    <>
      <nav className="d-flex flex-row mb-3 gap-3 bg-dark text-light p-3 user-select-none">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-warning text-decoration-none"
              : "text-light text-decoration-none"
          }
        >
          Главная
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-warning text-decoration-none"
              : "text-light text-decoration-none"
          }
        >
          О нас
        </NavLink>
        <NavLink
          to="/basket"
          className={({ isActive }) =>
            isActive
              ? "text-warning text-decoration-none"
              : "text-light text-decoration-none"
          }
        >
          Корзина
        </NavLink>
        <NavLink
          to="/feedback"
          className={({ isActive }) =>
            isActive
              ? "text-warning text-decoration-none"
              : "text-light text-decoration-none"
          }
        >
          Обратная связь
        </NavLink>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/about" element={<Description />} />
          <Route path="/feedback" element={<CustomFeedbackForm />} />
        </Routes>
      </div>
    </>
  );
}