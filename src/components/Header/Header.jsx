import React from "react";
import s from "../Header/Header.module.scss";
import ShopButton from "../Buttons/ShopButton/ShopButton";
import { Link } from "react-router-dom";
import Menu from "..//../components/Menu/Menu";
import Sort from "../Sort/Sort";
import { setIsOpen } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { resetCategory } from "../../redux/slices/deviceSlice";
const Header = () => {
  const dispatch = useDispatch();
  const handleMenuButtonClick = () => {
    dispatch(setIsOpen(isOpen));
  };
  const { isOpen } = useSelector((state) => state.cart);

  return (
    <>
      <div className={s.header__wrapper}>
        <Link style={{ textDecoration: "none" }} to="/">
          <h1 onClick={() => dispatch(resetCategory())}
          >Cyber Shop</h1>
        </Link>
        <div className={s.input2}>
          <div>
            {" "}
            <button onClick={handleMenuButtonClick}> x</button>
          </div>
          <input />
        </div>

        <Sort />
        <ShopButton />

      </div>
      <Menu isOpen={isOpen} header={"Sort functions"} />

    </>
  );
};

export default Header;
