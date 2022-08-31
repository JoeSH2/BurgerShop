import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import style from "./cartForm.module.scss";

const CartForm = () => {
  const { totalPrice } = useSelector(
    (state: RootState) => state.persistedReducer.cart
  );

  return (
    <div className={style.cartForm}>
      <div className={style.formWrapper}>
        <div className={style.formProfile}>
          <h2 className={style.formTitle}>КОМУ</h2>
          <div className={style.inputWrapper}>
            <div className={style.formField}>
              <label className={style.label} htmlFor="CUSTOMER_NAME">
                Телефон
              </label>
              <input
                className={style.inputPhone}
                placeholder="Ваш телефон +7..."
              />
            </div>
            <div className={style.formField}>
              <label className={style.label} htmlFor="CUSTOMER_NAME">
                Имя
              </label>
              <input className={style.inputPhone} placeholder="Имя" />
            </div>
          </div>
        </div>
        <div className={style.formDelivery}>
          <h2 className={style.formTitle}>ДОСТАВКА</h2>
          <p className={style.formTime}>Время ожидания доставки до 90 минут</p>
          <div className={style.formAdaptive}>
            <div className={style.formBlock}>
              <label className={style.label} htmlFor="CUSTOMER_NAME">
                Город
              </label>
              <input type="text" />
            </div>
            <div className={style.formBlock}>
              <label className={style.label} htmlFor="CUSTOMER_NAME">
                Улица
              </label>
              <input type="text" />
            </div>
            <div className={style.formBlock}>
              <label className={style.label} htmlFor="CUSTOMER_NAME">
                Дом
              </label>
              <input type="text" />
            </div>
          </div>
          <div className={style.formAdaptive}>
            <div className={style.formHome}>
              <label className={style.label} htmlFor="CUSTOMER_NAME">
                Подъезд
              </label>
              <input type="text" />
            </div>
            <div className={style.formHome}>
              <label className={style.label} htmlFor="CUSTOMER_NAME">
                Этаж
              </label>
              <input type="text" />
            </div>
            <div className={style.formHome}>
              <label className={style.label} htmlFor="CUSTOMER_NAME">
                Квартира
              </label>
              <input type="text" />
            </div>
          </div>
          <div className={style.buttonCenter}>
            <p className={style.offer}>
              Оформляя заказ, вы соглашаетесь с условиями оферты
            </p>
            <button className={style.formButton}>
              ОПЛАТИТЬ КАРТОЙ {totalPrice}Р
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartForm;
