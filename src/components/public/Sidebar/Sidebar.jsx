import { useContext } from "react";
import styles from "./styles.module.scss";
import { SiderBarContext } from "@/contexts/SideBarProvider";
import classNames from "classnames";
import { MdOutlineClose } from "react-icons/md";
import Login from "@components/public/ContentSidebar/Login/Login";
import Wishlist from "../ContentSidebar/Wishlist/Wishlist";

const SideBar = () => {
  const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
  const { isOpen, setIsOpen, type } = useContext(SiderBarContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleRenderContent = () => {
    switch (type) {
      case "login":
        return <Login />;
      //   case "compare":
      //     return <Compare />;
      case "wishlist":
        return <Wishlist />;
      //   case "cart":
      //     return <Cart />;
      //   case "detail":
      //     return <DetailProduct />;
      default:
        return <Login />;
    }
  };

  return (
    <div className={container}>
      <div
        className={classNames({
          [overlay]: isOpen,
        })}
        onClick={handleToggle}
      />
      <div
        className={classNames(sideBar, {
          [slideSideBar]: isOpen,
        })}
      >
        {isOpen && (
          <div className={boxIcon} onClick={handleToggle}>
            <MdOutlineClose />
          </div>
        )}

        {handleRenderContent()}
      </div>
    </div>
  );
};

export default SideBar;
