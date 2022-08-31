import React, { FC } from "react";
import style from "./cartCircle.module.scss";
import cart from "../assets/img/cart2.svg";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const CartCircle: FC = () => {
  const { productCart } = useSelector(
    (state: RootState) => state.persistedReducer.cart
  );
  const countCartProduct = productCart.reduce((previosValue, currentValue) => {
    return previosValue + currentValue.count;
  }, 0);

  return (
    <Link to="cart">
      <div className={style.cart}>
        {countCartProduct > 0 && <span>{countCartProduct}</span>}
        <img className={style.cartSVG} src={cart} alt="Корзина" />
      </div>
    </Link>
  );
};

export default CartCircle;
