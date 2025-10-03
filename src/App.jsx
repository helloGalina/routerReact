import { Link, Route, Routes } from "react-router-dom";
import Basket from "./Pages/Basket";
import Description from "./Pages/Description";
import Main from "./Pages/Main";

export default function App() {
  return (
    <>
      <div className="d-flex flex-row mb-3 gap-3 bg-dark text-light p-3 user-select-none">
        <Link className="text-light text-decoration-none" to="/">
          Главная
        </Link>
        <Link className="text-light text-decoration-none" to="/about">
          О нас
        </Link>
        <Link className="text-light text-decoration-none" to="/basket">
          Корзина
        </Link>
      </div>

      <div className="m-3">
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/basket" element={<Basket></Basket>}></Route>
          <Route path="/about" element={<Description></Description>}></Route>
        </Routes>
      </div>
    </>
  );
}
