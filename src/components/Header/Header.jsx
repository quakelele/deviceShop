import React from "react";
import s from "../Header/Header.module.scss";
import ShopButton from "../Buttons/ShopButton/ShopButton";
import { Link } from "react-router-dom";
import Menu from "..//../components/Menu/Menu";
import Sort from "../Sort/Sort";
import { setIsOpen } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { resetCategory, setSearchValue } from "../../redux/slices/deviceSlice";
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import debounce from 'lodash.debounce'
const Header = () => {
  const dispatch = useDispatch();
  const handleMenuButtonClick = () => {
    dispatch(setIsOpen(isOpen));
  };
  const clearValue = () => {
    dispatch(setSearchValue(''))
    inputRef.current.focus()
  }
  const { isOpen } = useSelector((state) => state.cart);
  const { searchValue } = useSelector(state => state.device)
  const inputRef = React.useRef()

  React.useEffect(() => {
  }, [dispatch,])


  return (
    <>
      <div className={s.header__wrapper}>
        <Link style={{ textDecoration: "none" }} to="/">
          <h1 onClick={() => dispatch(resetCategory())}
          >Cyber Shop</h1>
        </Link>
        <div className={s.input2}>
          <button onClick={handleMenuButtonClick}> x</button>

          <div className={s.inputBlock}>
            <div className={s.svgSearch}> <SearchIcon /></div>
            <input
              ref={inputRef}
              value={searchValue}
              placeholder="Search by item name.."
              onChange={(e) => dispatch(setSearchValue(e.target.value))}
            />
            <div className={s.svgClose}>
              <ClearIcon onClick={() => clearValue()} />
            </div>
          </div>
        </div>
        <Sort />
        <ShopButton />
      </div>
      <Menu isOpen={isOpen} header={"Sort functions"} />
    </>
  );
};

export default Header;
