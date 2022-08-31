import React, { FC } from "react";
import { Header, Footer } from "../index";

interface ILayout {
  children: any;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mainWrapper">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
