import React, { FC, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { arrayCity, setCity } from "../../../redux/citySlice";

import { RootState } from "../../../redux/store";
import style from "./cityPopup.module.scss";

const CityPopup: FC = () => {
  const { city } = useSelector(
    (state: RootState) => state.persistedReducer.city
  );
  const dispatch = useDispatch();

  const [visibleCityPop, setVisibleCityPop] = useState(false);
  const refPop = useRef<HTMLDivElement>(null);
  const onClose = () => {
    setVisibleCityPop(false);
  };
  useClickOutside(refPop, onClose, visibleCityPop);

  const clickOnCity = (i: number) => {
    setVisibleCityPop(false);
    dispatch(setCity(arrayCity[i]));
  };

  return (
    <div ref={refPop} className={style.headerCity}>
      <div
        onClick={() => setVisibleCityPop(!visibleCityPop)}
        className={style.activeCity}
      >
        {city}
      </div>
      {visibleCityPop && (
        <ul className={style.allCity}>
          {arrayCity.map((item, i) => (
            <li onClick={() => clickOnCity(i)} key={i}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CityPopup;
