import React from "react";
import s from "../Header/Header.module.scss";
import ShopButton from "../Buttons/ShopButton/ShopButton";
import { Link } from "react-router-dom";
import Categories from "../Categories/Categories";
import MuiDrawer from "../MuiDrawer/MuiDrawer";
import Menu from "..//../components/Menu/Menu";
import { setIsOpen } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const handleMenuButtonClick = () => {
    dispatch(setIsOpen(isOpen));
  };

  const { isOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.scrollTo(0, 25);
  }, []);

  return (
    <>
      <div className={s.header__wrapper}>
        <Link style={{ textDecoration: "none" }} to="/">
          <h1>Cyber Shop</h1>
        </Link>
        <div className={s.input2}>
          <div>
            {" "}
            <button onClick={handleMenuButtonClick}> x</button>
          </div>
          <input />
        </div>
        <ShopButton />
      </div>
      {/* <MuiDrawer/> */}
      <Menu isOpen={isOpen} header={"Home"} />
    </>
  );
};

export default Header;
{
  /*  */
}
