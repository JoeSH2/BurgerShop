import React, { FC, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../../redux/userSlice";
import style from "../DiscriptionReg/discriptionReg.module.scss";
import { useAppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";

const FormReg: FC = () => {
  const [reg, setReg] = useState(false);
  const [regError, setRegError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleUser = async (email: string, password: string) => {
    const auth = getAuth();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await updateProfile(user, { displayName: name, photoURL: phone }).then(
        () =>
          dispatch(
            addUser({
              email: user.email,
              id: user.uid,
              token: user.refreshToken,
              name: user.displayName,
              phone: user.photoURL,
            })
          )
      );
      setReg(true);
      setRegError(false);
      navigate("/");
    } catch (error) {
      setRegError(true);
      setReg(false);
    }
  };

  return (
    <div id="formReg" className={style.regWrapper}>
      {reg && (
        <p className={style.regActive}>Вы успешно зарегистрировались !</p>
      )}
      <form className={style.regForm}>
        <div>
          <label className={style.label} htmlFor="name">
            Имя
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className={style.standartInput + " " + style.all}
          />
        </div>
        <div>
          <label className={style.label} htmlFor="gender">
            Пол
          </label>
          <select className={style.inputDate + " " + style.all}>
            <option>Мужской</option>
            <option>Женский</option>
          </select>
        </div>
        <div>
          <label className={style.label} htmlFor="tel">
            Телефон
          </label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className={style.standartInput + " " + style.all}
          />
        </div>
        <div>
          <label className={style.label} htmlFor="email">
            Электронная почта
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className={style.standartInput + " " + style.all}
          />
        </div>
        <div>
          <label className={style.label} htmlFor="email">
            Пароль
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className={style.standartInput + " " + style.all}
          />
        </div>
        <div className={style.inputWrapper}>
          <label className={style.label}>Город</label>
          <select className={style.inputDate + " " + style.all}>
            <option>Москва</option>
            <option>Санкт-Петербург</option>
            <option>Нижний Новгород</option>
            <option>Казань</option>
            <option>Екатеринбург</option>
            <option>Десногорск</option>
            <option>Новосибирск</option>
            <option>Саратов</option>
            <option>В моём городе нет Burger Hunter</option>
          </select>
        </div>
      </form>
      {regError && (
        <p className={style.regFalse}>Заполните все поля правильно!</p>
      )}
      <button
        onClick={
          name !== "" && phone !== ""
            ? () => handleUser(email, password)
            : () => setRegError(true)
        }
        className={style.regBtn}
      >
        ЗАРЕГИСТРИРОВАТЬ
      </button>
    </div>
  );
};

export default FormReg;
