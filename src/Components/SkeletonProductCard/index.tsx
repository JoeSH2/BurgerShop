import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";
import style from "../ProductCard/productCard.module.scss";

const SkeletonProductCard = (
  props: JSX.IntrinsicAttributes & IContentLoaderProps
) => (
  <ContentLoader
    className={style.card}
    speed={2}
    width={320}
    height={250}
    viewBox="0 0 320 250"
    backgroundColor="#616161"
    foregroundColor="#B0B0B0"
    {...props}
  >
    <rect x="0" y="25" rx="5" ry="5" width="250" height="60" />
    <rect x="0" y="165" rx="2" ry="2" width="190" height="10" />
    <rect x="0" y="145" rx="2" ry="2" width="210" height="10" />
    <rect x="0" y="100" rx="5" ry="5" width="115" height="33" />
    <rect x="0" y="205" rx="5" ry="5" width="140" height="42" />
  </ContentLoader>
);

export default SkeletonProductCard;
