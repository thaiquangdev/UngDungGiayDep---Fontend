import styles from "./styles.module.scss";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const ItemProduct = ({
  src,
  name,
  sizeProduct,
  priceProduct,
  quantity,
  //   cartId,
  //   productId,
}) => {
  const {
    container,
    boxContent,
    title,
    price,
    boxClose,
    size,
    overlayLoading,
  } = styles;
  //   const [isDelete, setIsDelete] = useState(false);

  return (
    <div className={container}>
      <img src={src} alt="" />
      <div className={boxClose}>
        <IoCloseOutline size={20} color="#c1c1c1" />
      </div>
      <div className={boxContent}>
        <div className={title}>{name}</div>
        <div className={size}>{sizeProduct}</div>
        <div className={price}>
          {" "}
          {quantity} * ${priceProduct}
        </div>
        <div className={price}>SKU: 123349</div>
      </div>
      {/* {isDelete && (
        <div className={overlayLoading}>
          <span>Loading...</span>
        </div>
      )} */}
    </div>
  );
};

export default ItemProduct;
