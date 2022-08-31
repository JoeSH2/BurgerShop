import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import style from "../Header/header.module.scss";

interface INavHeader {
  closeMenu?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}

const NavHeader: FC<INavHeader> = ({ closeMenu }) => {
  return (
    <ul onClick={(e) => e.stopPropagation()} className={style.headerInfo}>
      <svg
        onClick={closeMenu ? () => closeMenu(false) : undefined}
        className={style.navCross}
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
      <li>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "#f3b200" : "",
            };
          }}
          to={"/"}
        >
          Доставка
        </NavLink>
      </li>
      <li>Бургер-бары</li>
      <li>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "#f3b200" : "",
            };
          }}
          to="/registration"
        >
          Кэшбек{" "}
        </NavLink>
      </li>
      <li>О компании</li>
      <li>Контакты</li>
    </ul>
  );
};

export default NavHeader;
