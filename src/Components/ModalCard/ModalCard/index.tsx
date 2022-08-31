import React, { FC, memo, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./modalCard.module.scss";
import { setModalCard } from "../../../redux/modalSlice";
import { RootState } from "../../../redux/store";
import { addCartProduct } from "../../../redux/cartSlice";

const ModalCard: FC = memo(() => {
  const dispatch = useDispatch();
  const closeModalBurger = () => {
    dispatch(setModalCard(false));
  };
  const { productModal } = useSelector((state: RootState) => state.modal);

  const [activeCategory, setActiveCategory] = useState(0);
  const [activeCategory2, setActiveCategory2] = useState(0);
  const productCartValue = useMemo(() => {
    return {
      id: productModal.id,
      category: productModal.category,
      imageUrl: productModal.imageUrl,
      title: productModal.title,
      price: productModal.price,
      dopings: productModal.dopings[activeCategory],
      dopings2: productModal.dopings2[activeCategory2],
      count: 0,
    };
  }, [productModal, activeCategory, activeCategory2]);
  const clickAddModalCart = () => {
    dispatch(addCartProduct(productCartValue));
    closeModalBurger();
  };

  const dopingActive = (i: number) => {
    setActiveCategory(i);
  };
  const dopingActive2 = (i: number) => {
    setActiveCategory2(i);
  };

  return (
    <div onClick={closeModalBurger} className={style.modalWrapper}>
      <div onClick={(e) => e.stopPropagation()} className={style.modalRow}>
        <div className={style.modaleInfo}>
          <svg
            onClick={closeModalBurger}
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
          <img className={style.modalImg} src={productModal.imageUrl} alt="" />
          <h1>{productModal.title}</h1>
          <span>{productModal.price}Р</span>
          <p>{productModal.description}</p>
          {productModal.titleDoping && (
            <div className={style.dopingTitle}>{productModal.titleDoping}</div>
          )}
          <ul className={style.dopingRow}>
            {productModal.dopings &&
              productModal.dopings.map((_, i) => (
                <li
                  onClick={() => dopingActive(i)}
                  className={activeCategory === i ? style.active : ""}
                  key={i}
                >
                  {productModal.dopings[i]}
                </li>
              ))}
          </ul>
          {productModal.titleDoping2 && (
            <div className={style.dopingTitle}>{productModal.titleDoping2}</div>
          )}
          <ul className={style.dopingRow}>
            {productModal.dopings2 &&
              productModal.dopings2.map((_, i) => (
                <li
                  onClick={() => dopingActive2(i)}
                  className={activeCategory2 === i ? style.active : ""}
                  key={i}
                >
                  {productModal.dopings2[i]}
                </li>
              ))}
          </ul>
        </div>
        <button onClick={clickAddModalCart} className={style.btn}>
          Добавить
        </button>
      </div>
    </div>
  );
});

export default ModalCard;
