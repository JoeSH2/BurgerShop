import React, { FC, useState } from "react";
import NavHeader from "../NavHeader";
import style from "./burgerMenu.module.scss";

const BurgerMenu: FC = () => {
  const [activeBurger, setActiveBurger] = useState(false);
  return (
    <div className={style.burger}>
      <div
        onClick={() => setActiveBurger(!activeBurger)}
        className={style.burgerMenu}
      ></div>
      {activeBurger && (
        <div
          onClick={() => setActiveBurger(false)}
          className={style.navWrapper}
        >
          <NavHeader closeMenu={setActiveBurger} />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
