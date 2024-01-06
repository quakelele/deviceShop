import s from "./App.module.scss";
import React from "react";
import Cart from "./pages/Cart/Cart";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Favorite from "./pages/Favorite/Favorite";
import Footer from "./components/Footer/Footer";
import ProductMainPage from "./pages/ProductMainPage/ProductMainPage";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCart } from "./redux/slices/cartSlice";
import { fetchFavorite } from "./redux/slices/favoriteSlice";
function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchFavorite());
  }, [dispatch ]);
  return (
    <div className={s.App}>
      <div className={s.stik}>
        <Header />
      </div>
      <Routes>
        <Route path="/:id" element={<ProductMainPage />} />
        <Route path="/" element={<Home />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
