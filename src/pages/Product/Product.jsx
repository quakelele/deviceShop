import React from "react";
import s from "./Product.module.scss";
import { addToCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Product = ({ cart, obj, setIsOn, isOn }) => {
  const dispatch = useDispatch();
  const classBuy = () => {
    if (cart.map((item) => item.title).includes(obj.title)) {
      return "device_green_btn";
    }
    return "device_buy_btn";
  };

  console.log(obj)
  
  return (
    <div className={s.wrapper}>
      <div>
        <h4 onClick={() => setIsOn(!isOn)} className={s.x}>
          x
        </h4>
        <img onClick={() => setIsOn(!isOn)} src={obj.imageUrl} alt="" />

        <h2>{obj.title}</h2>

        <p>{obj.description}</p>
        <button onClick={() => dispatch(addToCart(obj))} className={classBuy()}>
          <h5>{obj.price} $</h5>
        </button>
      </div>
    </div>
  );
};

export default Product;
