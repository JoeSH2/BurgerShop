import React, { FC } from "react";
import style from "./footer.module.scss";
import vkIcon from "../assets/img/vk.png";
import instIcon from "../assets/img/inst.png";
import telegramIcon from "../assets/img/telegram.png";
import facebookIcon from "../assets/img/facebook.png";

const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footerWrapper}>
          <h2 className={style.footerTitle}>Burger Hunter</h2>
          <ul className={style.iconWrapper}>
            <li className={style.footerImage}>
              <img className={style.footerIcon} src={vkIcon} alt="vkontakte" />
            </li>
            <li className={style.footerImage}>
              <img
                className={style.footerIcon}
                src={instIcon}
                alt="instagram"
              />
            </li>
            <li className={style.footerImage}>
              <img
                className={style.footerIcon}
                src={telegramIcon}
                alt="telegram"
              />
            </li>
            <li className={style.footerImage}>
              <img
                className={style.footerIcon}
                src={facebookIcon}
                alt="facebook"
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
