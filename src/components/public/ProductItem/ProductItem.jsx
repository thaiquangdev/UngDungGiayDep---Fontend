/* eslint-disable react/prop-types */
import styles from "./styles.module.scss";
import compareIcon from "@icons/svgs/compareIcon.svg";
import heartIcon from "@icons/svgs/heartIcon.svg";
import cartIcon from "@icons/svgs/cartIcon.svg";
import eyeIcon from "@icons/svgs/eyeIcon.svg";
import Button from "@components/Button/Button";
import classNames from "classnames";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductItem = ({
  src,
  prevSrc,
  brand,
  name,
  price,
  details,
  isHomePage = true,
  productId,
  slug,
}) => {
  const {
    boxImg,
    showImgWhenHover,
    showFunctionWhenHover,
    boxIcon,
    title,
    priceCl,
    boxSize,
    size,
    brandCl,
    btn,
    textCenter,
    content,
    containerItem,
    isActiveSize,
    btnClear,
  } = styles;
  // const { isShowGrid } = useContext(OurShopContext);
  const [sizeChoose, setSizeChoose] = useState("");

  const handleChooseSize = (size) => {
    setSizeChoose(size);
  };

  const handleClearChooseSize = () => {
    setSizeChoose("");
  };

  return (
    <div className={containerItem}>
      <div>
        <div className={boxImg}>
          <Link to={`/product/${slug}`} style={{ display: "block" }}>
            <img src={src} alt="" />
            <img src={prevSrc} alt="" className={showImgWhenHover} />
          </Link>
          <div className={showFunctionWhenHover}>
            <div className={boxIcon}>
              <img src={cartIcon} alt="" />
            </div>
            <div className={boxIcon}>
              <img src={heartIcon} alt="" />
            </div>
            <div className={boxIcon}>
              <img src={compareIcon} alt="" />
            </div>
            <div className={boxIcon}>
              <img src={eyeIcon} alt="" />
            </div>
          </div>
        </div>
        <div className={content}>
          {!isHomePage && (
            <div className={boxSize}>
              {details.map((item) => (
                <div
                  key={item.sku}
                  className={classNames(size, {
                    [isActiveSize]: sizeChoose === item.size,
                  })}
                  onClick={() => handleChooseSize(item.size)}
                >
                  {item.size}
                </div>
              ))}
            </div>
          )}
          {sizeChoose && (
            <div className={btnClear} onClick={() => handleClearChooseSize()}>
              Clear
            </div>
          )}
          <Link
            to={`/product/${slug}`}
            style={{ display: "block", textDecoration: "none" }}
            className={classNames(title, { [textCenter]: !isHomePage })}
          >
            {name}
          </Link>
          {!isHomePage && <div className={brandCl}>{brand}</div>}
          <div className={classNames(priceCl, { [textCenter]: !isHomePage })}>
            ${price}
          </div>
          {!isHomePage && (
            <div className={btn}>
              <Button content={"ADD TO CART"} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
