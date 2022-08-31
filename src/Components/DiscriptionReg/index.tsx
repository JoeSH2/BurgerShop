import React from "react";
import { Link } from "react-scroll";
import style from "./discriptionReg.module.scss";

const DiscriptionReg = () => {
  return (
    <div className={style.regWrapper}>
      <ul className={style.cashback}>
        <li>
          300 бонусов при регистрации и 5% кэшбэк на все покупки (начисляются в
          течение часа после регистрации) оплата бонусами до 50% счета (1 бонус
          = 1 рубль)
        </li>
        <li>300 бонусов в день рождения</li>
        <li>10% кэшбэка при 3 посещениях за 30 дней</li>
        <li>15% кэшбэка при 4 посещениях за 30 дней</li>
      </ul>
      <Link to="formReg" spy={true} smooth={true} offset={-270} duration={500}>
        <button className={style.regBtn}>ЗАПОЛНИТЬ АНКЕТУ</button>
      </Link>
      <ul className={style.application}>
        <li>
          <b>1. </b> Заполни заявку.
        </li>
        <li>
          <b>2. </b> Подтверди свой телефон кодом из СМС и скачай нашу карту
          привилегий в Apple Wallet или программу “Wallet” на Android.
        </li>
        <li>
          <b>3. </b> Пользуйся нашими привилегиями и добро пожаловать в Burger
          Hunter Family!
        </li>
      </ul>
    </div>
  );
};

export default DiscriptionReg;
