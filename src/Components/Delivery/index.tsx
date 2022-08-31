import { FC, memo, useState } from "react";
import style from "./delivery.module.scss";

const Delivery: FC = memo(() => {
  const [activeBtn, setActiveBtn] = useState<boolean>(true);
  const [value, setValue] = useState<string>("");

  return (
    <div className={style.delivery}>
      <div className={style.deliveryType}>
        <button
          onClick={() => setActiveBtn(true)}
          type="button"
          className={
            activeBtn
              ? style.deliveryBtn + " " + style.active
              : style.deliveryBtn
          }
        >
          Доставка
        </button>
        <button
          onClick={() => setActiveBtn(false)}
          className={
            !activeBtn
              ? style.deliveryBtn + " " + style.active
              : style.deliveryBtn
          }
          type="button"
        >
          Самовывоз
        </button>
      </div>
      {activeBtn ? (
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={style.deliveryAddressInput}
          id="DELIVERY_ADDRESS"
          placeholder={
            activeBtn ? "Укажите адрес доставки" : "Укажите адрес нужного бара"
          }
        />
      ) : (
        <select
          id="PICKUP_DOT"
          name="pickup_dot_id"
          className={style.deliverySelect}
        >
          <option defaultValue="1">ул. Пушинка, 1</option>
          <option value="3">ул. Непушкина, 1</option>
          <option value="4">пер. Пушкина, 3</option>
          <option value="5">ул. Непушкинская, 2</option>
          <option value="6">пер. Пушкина, 2, 6/2</option>
          <option value="9">Ленинградский проспект, 36</option>
          <option value="11">ул. Ленина, 1 </option>
          <option value="12">ул. Неленина, 5</option>
          <option value="13">пер. Ленининский, 5, 3/1</option>
        </select>
      )}
      <button
        disabled={activeBtn ? false : true}
        className={style.deliverySaveBtn}
      >
        Сохранить
      </button>
    </div>
  );
});

export default Delivery;
