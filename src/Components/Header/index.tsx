import { FC, memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./header.module.scss";
// import Logo from "../assets/img/LogoBurger.svg";
import Logo from "../assets/img/logo-2.png";
import LogInPopup from "../UI/LogInPopup";
import CityPopup from "../UI/CityPopup";
import { useAuth } from "../../hooks/useAuth";
import ProfilePop from "../UI/ProfilePop";
import { NavHeader, BurgerMenu } from "../index";

const Header: FC = memo(() => {
  const { isAuth, email, phone, name } = useAuth();
  const [width, setWidth] = useState(window.innerWidth);
  const brakePoint = 800;

  useEffect(() => {
    const handleWidthWindow = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWidthWindow);

    return () => {
      window.removeEventListener("resize", handleWidthWindow);
    };
  }, []);

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.headerWrapper}>
          <Link to="/" className={style.headerLogo}>
            <img className={style.LogoImage} src={Logo} alt="" />
          </Link>
          <div className={style.headerRow}>
            {width > brakePoint ? <NavHeader /> : <BurgerMenu />}
            <div className="wrapperPop">
              <CityPopup />
              {!isAuth ? (
                <LogInPopup />
              ) : (
                <ProfilePop name={name} phone={phone} email={email} />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
