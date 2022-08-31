import React, { FC, useEffect } from "react";
import { DiscriptionReg, FormReg, Layout } from "../Components";

const SignUpPage: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="reg">
          <div className="menuTitle">BURGER HUNTER FAMILY</div>
          <DiscriptionReg />
          <div className="menuTitle">
            РЕГИСТРАЦИЯ <br /> КАРТЫ
          </div>
          <FormReg />
        </div>
      </div>
    </Layout>
  );
};

export default SignUpPage;
