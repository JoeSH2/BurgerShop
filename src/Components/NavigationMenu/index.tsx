import React, { FC } from "react";
import style from "./navigationMenu.module.scss";
import { Link } from "react-scroll";

export const menuNav: string[] = [
  "БУРГЕРЫ",
  "БУРГЕР БOУЛЫ",
  "ЗАКУСКИ",
  "САЛАТЫ",
  "СТЕЙКИ",
  "НАПИТКИ И ДЕСЕРТЫ",
  "СОУСЫ",
];

const NavigationMenu: FC = () => {
  return (
    <ul className={style.nav}>
      <li className={style.nevList}>
        <Link
          activeClass="activeNav"
          to="burger"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          БУРГЕРЫ
        </Link>
      </li>
      <li className={style.nevList}>
        <Link
          activeClass="activeNav"
          to="burgersBoul"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          БУРГЕР БOУЛЫ
        </Link>
      </li>
      <li className={style.nevList}>
        <Link
          activeClass="activeNav"
          to="snacks"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
        >
          ЗАКУСКИ
        </Link>
      </li>
      <li className={style.nevList}>
        <Link
          activeClass="activeNav"
          to="salads"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
        >
          САЛАТЫ
        </Link>
      </li>
      <li className={style.nevList}>
        <Link
          activeClass="activeNav"
          to="steaks"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
        >
          СТЕЙКИ
        </Link>
      </li>
      <li className={style.nevList}>
        <Link
          activeClass="activeNav"
          to="drinksDesserts"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
        >
          НАПИТКИ И ДЕСЕРТЫ
        </Link>
      </li>
      <li className={style.nevList}>
        <Link
          activeClass="activeNav"
          to="sauces"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
        >
          СОУСЫ
        </Link>
      </li>
      {/* {menuNav.map((item) => (
        <li className={style.nevList}>{item}</li>
      ))} */}
    </ul>
  );
};

export default NavigationMenu;
