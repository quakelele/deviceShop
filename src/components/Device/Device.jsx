import React from "react";
import "../Device/Device.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { addToFavorites } from "../../redux/slices/favoriteSlice";
import { fetchDeviceId } from "../../redux/slices/deviceSlice";
import liked from "..//..//img/heart-liked.png";
import unLiked from "..//..//img/heart-unliked.png";
import { Link } from "react-router-dom";
import Product from "./../../pages/Product/Product";
const Device = ({ obj }) => {


  const { favorite } = useSelector((state) => state.favorite);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartDiscount = (obj) => {
    return Math.round(obj.price * 1.3);
  };

  const classBuy = () => {
    if (cart.map((item) => item.title).includes(obj.title)) {
      return "device_green_btn";
    }
    return "device_buy_btn";
  };
  const classFavorite = () => {
    if (favorite.map((i) => i.title).includes(obj.title)) {
      return liked;
    }
    return unLiked;
  };
  const [isOn, setIsOn] = React.useState(false);
  return (
    <div>
      <div className={isOn ? "active" : "product"}>
        <Product cart={cart} setIsOn={setIsOn} obj={obj} isOn={isOn} />{" "}
      </div>
      <div className="device">
        <div className="device__first">
          <img
            onClick={() => setIsOn(!isOn)}
            src={obj.imageUrl}
            className="umageUrl"
            alt=""
          />
          <Link style={{ textDecoration: 'none', color:"black" }} to={`/${obj.id}`}>
            <span
              // onClick={() => dispatch(fetchDeviceId(obj))}
              className="title"
            >
              {obj.title}
            </span>
          </Link>
        </div>
        <div className="device__price">
          <div className="device__text">
            <p>Price: {cartDiscount(obj)} $</p>
            <h2 className="title-2">{obj.price} $</h2>
          </div>
          <div className="device__button">
            <button
              className={classBuy()}
              onClick={() => dispatch(addToCart(obj))}
            >
              Buy
            </button>
            <div className="border">
              <img
                onClick={() => dispatch(addToFavorites(obj))}
                src={classFavorite()}
                width={33}
                height={33}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Device;
