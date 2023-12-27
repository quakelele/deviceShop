import React from "react";
import s from "./ProductMainPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import ProductCheckOut from './ProductCheckOut/ProductCheckOut'
import InputField from "./InputField/InputField";
import { useParams } from 'react-router-dom'
import { fetchDeviceId } from "../../redux/slices/deviceSlice";
const ProductMainPage = () => {
  const { id } = useParams()
  const { product } = useSelector((state) => state.device);
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchDeviceId(id))
  }, [id, dispatch])

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
            <h5> Gaming {product.category}</h5>
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
