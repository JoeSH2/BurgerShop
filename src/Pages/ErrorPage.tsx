import React, { FC } from "react";
import { Delivery, Layout } from "../Components";

const ErrorPage: FC = () => {
  return (
    <Layout>
      <div className="container">
        <Delivery />
        <div className="ErrorPage">
          <h1>
            Error <span>(ошибка)</span>
          </h1>
          <p>Вы перешли на несуществующую страницу!</p>
        </div>
      </div>
    </Layout>
  );
};

export default ErrorPage;
