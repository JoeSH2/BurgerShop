import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProduct } from "../../redux/fetchSlice";
import { productType } from "../../redux/fetchSlice/fetchSliceType";
import { setModalCard } from "../../redux/modalSlice";
import { RootState, useAppDispatch } from "../../redux/store";
import { MenuBlock, NavigationMenu } from "../index";
import ErrorSVG from "../assets/img/Error.svg";

const Menu: FC = () => {
  const dispatch = useAppDispatch();
  const { product, statusLoading } = useSelector(
    (state: RootState) => state.fetch
  );

  const openModalCard = () => {
    dispatch(setModalCard(true));
  };

  const fetchProduct = async () => {
    dispatch(getProduct());
  };

  useEffect(() => {
    fetchProduct();
    console.log();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (statusLoading === "rejected") {
    return (
      <div className="ErrorPage">
        <h1>Ошибка при загрузке данных</h1>
        <p>Перезагрузите страницу или возвращайтесь позже!</p>
        <img className="ErrorSVG" src={ErrorSVG} alt="" />
      </div>
    );
  }

  const burgers: productType[] = product.filter(
    (item: productType) => item.category === "burgers"
  );
  const burgersBoul: productType[] = product.filter(
    (item) => item.category === "burgersBoul"
  );
  const snacks: productType[] = product.filter(
    (item) => item.category === "snacks"
  );
  const salads: productType[] = product.filter(
    (item) => item.category === "salads"
  );
  const skeaks: productType[] = product.filter(
    (item) => item.category === "skeaks"
  );
  const drink: productType[] = product.filter(
    (item) => item.category === "drink"
  );
  const sauces: productType[] = product.filter(
    (item) => item.category === "sauces"
  );

  return (
    <>
      <NavigationMenu />
      <div className="menu">
        <MenuBlock
          countProduct={6}
          id={"burger"}
          name={"Бургеры"}
          product={burgers}
          discription={
            "В наших бургерах мы используем премиальную мраморную говядину Black Angus, которую закупаем только у проверенных российских поставщиков."
          }
          openModal={openModalCard}
        />
        <MenuBlock
          countProduct={2}
          id={"burgersBoul"}
          name={"Бургер боулы"}
          product={burgersBoul}
          openModal={openModalCard}
        />
        <MenuBlock
          countProduct={5}
          id={"snacks"}
          name={"Закуски"}
          product={snacks}
          openModal={openModalCard}
        />
        <MenuBlock
          countProduct={3}
          id={"salads"}
          name={"Салаты"}
          product={salads}
          openModal={openModalCard}
        />
        <MenuBlock
          countProduct={2}
          id={"steaks"}
          name={"Стейки"}
          product={skeaks}
          openModal={openModalCard}
        />
        <MenuBlock
          countProduct={5}
          id={"drinksDesserts"}
          name={"Напитки и десерты"}
          product={drink}
          openModal={openModalCard}
        />
        <MenuBlock
          countProduct={6}
          id={"sauces"}
          name={"Соусы"}
          product={sauces}
          openModal={openModalCard}
        />
      </div>
    </>
  );
};

export default Menu;
