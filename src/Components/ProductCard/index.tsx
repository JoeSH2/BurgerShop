import React, { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { addCartProduct } from "../../redux/cartSlice";
import { productType } from "../../redux/fetchSlice/fetchSliceType";
import { addProductModal } from "../../redux/modalSlice";
import style from "./productCard.module.scss";

export interface IProduct {
  item: productType;
  openModal?: any;
}

const BurgerCard: FC<IProduct> = memo(({ item, openModal }) => {
  const dispatch = useDispatch();

  const clickModale = () => {
    const productValue = {
      id: item.id,
      category: item.category,
      imageUrl: item.imageUrl,
      title: item.title,
      price: item.price,
      description: item.description,
      mainDescription: item.mainDescription,
      titleDoping: item.titleDoping,
      dopings: item.dopings,
      dopingsPrice: item.dopingsPrice,
      titleDoping2: item.titleDoping2,
      dopings2: item.dopings2,
      count: 0,
    };
    dispatch(openModal);
    dispatch(addProductModal(productValue));
  };
  const clickAddCart = () => {
    const productCartValue = {
      id: item.id,
      category: item.category,
      imageUrl: item.imageUrl,
      title: item.title,
      price: item.price,
      dopings: item.dopings[0],
      dopings2: item.dopings2[0],
      count: 0,
    };
    dispatch(addCartProduct(productCartValue));
  };
  return (
    <div className={style.card}>
      <div onClick={clickModale} className={style.cardWrapper}>
        <img className={style.cardImg} src={item.imageUrl} alt="Фото товара" />
        <div className={style.discription}>
          <div className={style.cardTitle}>{item.title}</div>
          <div className={style.cardPrice}>{item.price}Р</div>
          <div className={style.cardText}>{item.mainDescription}</div>
        </div>
      </div>
      <button onClick={clickAddCart} className={style.btn}>
        Выбрать
      </button>
    </div>
  );
});

export default BurgerCard;
