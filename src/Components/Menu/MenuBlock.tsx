import React, { FC } from "react";
import { useSelector } from "react-redux";
import { productType } from "../../redux/fetchSlice/fetchSliceType";
import { RootState } from "../../redux/store";
import { ProductCard } from "../index";
import SkeletonProductCard from "../SkeletonProductCard";

type menuBlockProps = {
  countProduct: number;
  id: string;
  name: string;
  product: productType[];
  discription?: string;
  openModal?: () => void;
};

const MenuBlock: FC<menuBlockProps> = ({
  countProduct,
  id,
  name,
  product,
  discription,
  openModal,
}) => {
  const { statusLoading } = useSelector((state: RootState) => state.fetch);

  return (
    <div id={id} className="menu__block">
      <div className="menu__description">
        <div className="menuTitle">{name}</div>
        <div className="menuText">{discription}</div>
      </div>
      <div className="menu__item">
        {statusLoading === "pending"
          ? [...new Array(countProduct)].map((_, i) => (
              <SkeletonProductCard key={i} />
            ))
          : product.map((item, i) => (
              <ProductCard
                openModal={openModal}
                key={`${item.id}_${i}`}
                item={item}
              />
            ))}
      </div>
    </div>
  );
};

export default MenuBlock;
