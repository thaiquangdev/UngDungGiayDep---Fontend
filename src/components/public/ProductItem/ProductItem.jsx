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
import { addToWishlist, deleteWishlist } from "@/apis/wishlistService";
import { SiderBarContext } from "@/contexts/SideBarProvider";
import { ToastContext } from "@/contexts/ToastProvider";

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
    boxNoWishlist,
    boxWishlist,
  } = styles;
  // const { isShowGrid } = useContext(OurShopContext);
  const { toast } = useContext(ToastContext);
  const token = localStorage.getItem("token");
  const {
    setIsOpen,
    setType,
    handleGetListProductWishlists,
    listProductWishlists,
  } = useContext(SiderBarContext);
  const [isSetWishlist, setIsSetWishlist] = useState(false);
  const [sizeChoose, setSizeChoose] = useState("");

  const handleAddToWishlist = () => {
    if (!token) {
      setIsOpen(true);
      setType("wishlist");
      toast.warning("please login to add product to wishlist");
      return;
    }

    if (!isSetWishlist) {
      console.log(productId);
      addToWishlist(productId).then(
        (res) => {
          console.log(res);
          setIsSetWishlist(true);
          setIsOpen(true);
          setType("wishlist");
          handleGetListProductWishlists("wishlist");
        },
        (err) => {
          console.log(err);
          toast.error("Add to wishlist is error");
        }
      );
    } else {
      deleteWishlist(productId).then(
        (res) => {
          console.log(res);
          setIsSetWishlist(false);
          handleGetListProductWishlists("wishlist");
        },
        (err) => {
          console.log(err);
          toast.error("Remove wishlist is error");
        }
      );
    }
  };

  const handleChooseSize = (size) => {
    setSizeChoose(size);
  };

  const handleClearChooseSize = () => {
    setSizeChoose("");
  };

  useEffect(() => {
    const handleChangeWishlist = () => {
      const wishlists = listProductWishlists.map((item) => item.productId);
      if (wishlists.includes(productId)) {
        setIsSetWishlist(true);
      }
    };
    handleChangeWishlist();
  }, [productId]);

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
            <div
              className={classNames(boxIcon, {
                [boxNoWishlist]: !isSetWishlist,
                [boxWishlist]: isSetWishlist,
              })}
              onClick={() => handleAddToWishlist()}
            >
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
