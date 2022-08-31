import React, { FC, memo, useMemo } from "react";
import { useDispatch } from "react-redux";
import style from "./cartProductCard.module.scss";
import {
  minusCartProduct,
  plusCartProduct,
  removeCartProduct,
} from "../../redux/cartSlice";
import { cartProduct } from "../../redux/cartSlice/cartSliceType";

const CartProductCard: FC<cartProduct> = memo(
  ({ title, price, imageUrl, count, dopings, dopings2, id }) => {
    const dispatch = useDispatch();
    const cartProductItem = useMemo(() => {
      return {
        title,
        imageUrl,
        price,
        count,
        id,
        dopings,
        dopings2,
      };
    }, [title, imageUrl, price, count, dopings, dopings2, id]);
    const clickPlus = () => {
      dispatch(plusCartProduct(cartProductItem));
    };
    const clickMinus = () => {
      dispatch(minusCartProduct(cartProductItem));
    };
    const clickRemove = () => {
      dispatch(removeCartProduct(cartProductItem));
    };

    const poductPrice = price * count;

    return (
      <div className={style.cartBlock}>
        <div className={style.cartBlockRow}>
          <svg
            onClick={clickRemove}
            className={style.svgCross}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 490 490"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M76.563,490h336.875C455.547,490,490,455.547,490,413.438V76.563C490,34.453,455.547,0,413.437,0H76.563
		C34.453,0,0,34.453,0,76.563v336.875C0,455.547,34.453,490,76.563,490z M124.835,175.445l50.61-50.611L245,194.39l69.555-69.555
		l50.61,50.611L295.611,245l69.555,69.555l-50.61,50.611L245,295.611l-69.555,69.555l-50.61-50.61L194.389,245L124.835,175.445z"
              />
            </g>
          </svg>
          <div className={style.img}>
            <img className={style.cartBlockImg} src={imageUrl} alt="product" />
          </div>
          <h4 className={style.cartBlockTitle}>{title}</h4>
          {dopings && dopings2 && (
            <p className={style.discription}>
              {dopings},<br />
              {dopings2}
            </p>
          )}
          <div className={style.cartCount}>
            <span
              onClick={count === 1 ? clickRemove : clickMinus}
              className={style.count}
            >
              -
            </span>
            <div className={style.countNumber}>{count}</div>
            <span onClick={clickPlus} className={style.count}>
              +
            </span>
          </div>
          <div className={style.cartBlockPrice}>{poductPrice}Р</div>
        </div>
      </div>
    );
  }
);

export default CartProductCard;
