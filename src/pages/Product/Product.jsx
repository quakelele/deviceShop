import React from "react";
import s from "./Product.module.scss";
import { addToCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Rating  } from '@mui/material';
const Product = ({ cart, obj, setIsOn, isOn }) => {
  const dispatch = useDispatch();
  const classBuy = () => {
    if (cart.map((item) => item.title).includes(obj.title)) {
      return "device_green_btn";
    }
    return "device_buy_btn";
  };

  
  return (
    <div className={s.wrapper}>
      <div>
        <h4 onClick={() => setIsOn(!isOn)} className={s.x}>
          x
        </h4>
        <img onClick={() => setIsOn(!isOn)} src={obj.imageUrl} alt="" />

        <h2>{obj.title}</h2>
        <Rating precision={0.5} name="half-rating" className="rating" max={5} size="small" value={obj.rating} readOnly />
        <p>{obj.description}</p>
        <button onClick={() => dispatch(addToCart(obj))} className={classBuy()}>
          <h5>{obj.price} $</h5>
        </button>
      </div>
    </div>
  );
};

export default Product;
