import React from "react";
import s from "./ProductMainPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import ProductCheckOut from './ProductCheckOut/ProductCheckOut'
import InputField from "./InputField/InputField";
import { useParams } from 'react-router-dom'
import { addToCart } from "../../redux/slices/cartSlice";
import { fetchDeviceId } from "../../redux/slices/deviceSlice";
import Rating from '@mui/material/Rating';
const ProductMainPage = () => {
  const { product } = useSelector((state) => state.device)
  const { id } = useParams()
  const dispatch = useDispatch()
  React.useEffect(() => {

    dispatch(fetchDeviceId(id))

  }, [id, dispatch,])

  return (
    <div className={s.wrapper2}>

      <div className={s.wrapper}>
        <div className={s.title1}>

          <h1>{product.title}</h1>
        </div>
        <div className={s.image}>
          <img
            width={333}
            height={333}
            src={product.imageUrl}
            alt=""
          />
          <div className={s.button}>
            <Rating
              value={+product.rating}
              className="rating"
              precision={0.2}
              name="half-rating"
              max={5}
              size="small"
              readOnly
            />
            <h5> Gaming {product.category} </h5>
            <h5>{product.price} $<button
              className={s.buttoned}
              onClick={() => dispatch(addToCart(product))}
            >
              buy
            </button></h5>

            <p className={s.description}>{product.description}</p>
          </div>
        </div>

        <InputField obj={product} />

      </div>
      <ProductCheckOut />
    </div>
  );
};

export default ProductMainPage;
