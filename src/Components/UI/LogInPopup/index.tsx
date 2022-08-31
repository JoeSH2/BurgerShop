import React, { FC, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useClickOutside } from "../../../hooks/useClickOutside";
import style from "./logInPopup.module.scss";
import { addUser } from "../../../redux/userSlice";
import { useAppDispatch } from "../../../redux/store";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LogInPopup: FC = () => {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visibleLogInPop, setVisibleLogInPop] = useState(false);
  const dispatch = useAppDispatch();

  const refLogIn = useRef<HTMLDivElement>(null);
  const onClose = () => {
    setVisibleLogInPop(!visibleLogInPop);
  };
  useClickOutside(refLogIn, onClose, visibleLogInPop);

  const handleUser = async (email: string, password: string) => {
    const auth = getAuth();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      dispatch(
        addUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
          name: user.displayName,
          phone: user.photoURL,
        })
      );
    } catch {
      setLogin(true);
    }
  };

  return (
    <div ref={refLogIn} className={style.headerProfile}>
      <div
        onClick={() => setVisibleLogInPop(!visibleLogInPop)}
        className={style.LogIn}
      >
        Войти
      </div>
      {visibleLogInPop && (
        <div className={style.popupWrapper}>
          <div className={style.popupRow}>
            <h3 className={style.active}>Вход</h3>
            <Link to="/registration">
              <h3>Регистрация</h3>
            </Link>
          </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className={style.popupInput}
            placeholder="Почта"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className={style.popupInput}
            placeholder="Пароль"
          />
          {login && (
            <p className={style.loginFalse}>
              Неправильно заполнены поле EMail и/или пароль!
            </p>
          )}
          <button
            onClick={() => handleUser(email, password)}
            type="button"
            className={style.logBtn}
          >
            Войти
          </button>
          <p className={style.sendPassword}>Отправить пароль</p>
        </div>
      )}
    </div>
  );
};

export default LogInPopup;
