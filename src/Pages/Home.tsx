import React, { FC } from "react";
import { useSelector } from "react-redux";
import {
  Delivery,
  Menu,
  CartCircle,
  ModalCard,
  Layout,
} from "../Components/index";
import { RootState } from "../redux/store";

const Home: FC = () => {
  const { modalCard } = useSelector((state: RootState) => state.modal);

  return (
    <Layout>
      <div className="container">
        <Delivery />
        <Menu />
        <CartCircle />
      </div>
      {modalCard && <ModalCard />}
    </Layout>
  );
};

export default Home;
