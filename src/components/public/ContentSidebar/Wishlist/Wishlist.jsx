import Button from "@components/Button/Button";
import styles from "./styles.module.scss";
import { IoMdHeartEmpty } from "react-icons/io";
import { useContext } from "react";
import HeaderSideBar from "@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar";
import ItemProduct from "@components/ContentSideBar/components/ItemProduct/ItemProduct";
import { SiderBarContext } from "@/contexts/SideBarProvider";

const Wishlist = () => {
  const { container, boxContent, btn } = styles;
  const { listProductWishlists, isLoading } = useContext(SiderBarContext);
  return (
    <div className={container}>
      <div className={boxContent}>
        <HeaderSideBar
          icon={<IoMdHeartEmpty size={20} />}
          title={"WISHLIST"}
          type={"/wishlist"}
        />
        {isLoading
          ? "Loading..."
          : listProductWishlists.map((item) => (
              <ItemProduct
                key={item.id}
                src={item.productId?.images[0]?.imageUrl}
                name={item.productId?.title}
                priceProduct={item.productId?.price}
                productId={item?.productId?._id}
              />
            ))}
      </div>
      <div className={btn}>
        <Button content={"VIEW WISHLIST"} />
        <Button content={"ADD ALL TO CART"} isPrimary={false} />
      </div>
    </div>
  );
};

export default Wishlist;
