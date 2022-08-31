import { getAuth, signOut } from "firebase/auth";
import React, { FC, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { removeUser } from "../../../redux/userSlice";
import style from "./profilePop.module.scss";

interface IProfilePopProps {
  name: string | null;
  phone: string | null;
  email: string | null;
}

const ProfilePop: FC<IProfilePopProps> = ({ name, phone, email }) => {
  const dispatch = useDispatch();
  const [visibleLogInPop, setVisibleLogInPop] = useState(false);

  const refLogIn = useRef<HTMLDivElement>(null);
  const onClose = () => {
    setVisibleLogInPop(!visibleLogInPop);
  };
  useClickOutside(refLogIn, onClose, visibleLogInPop);

  const clickSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div ref={refLogIn} className={style.profileRow}>
      <div
        onClick={() => setVisibleLogInPop(!visibleLogInPop)}
        className={style.profile}
      >
        Профиль
      </div>
      {visibleLogInPop && (
        <div className={style.popupWrapper}>
          <div className={style.popupRow}>
            <div className={style.emailProfile}>{email}</div>
            <h3>
              Имя : <span className={style.active}>{name}</span>
            </h3>
            <h3>
              Номер : <span className={style.active}>{phone}</span>
            </h3>
          </div>
          <button onClick={clickSignOut} type="button" className={style.logBtn}>
            Выйти
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePop;
