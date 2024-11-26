/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import styles from "../styles.module.scss";
import { SiderBarContext } from "@/contexts/SideBarProvider";
import { StoreContext } from "@/contexts/StoreProvider";
import { Link } from "react-router-dom";

const Menu = ({ content, href }) => {
  const { menu } = styles;
  const { setIsOpen, setType } = useContext(SiderBarContext);
  const { userInfo, setUserInfo } = useContext(StoreContext);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);

  const handleClickShowLogin = () => {
    if (content === "Sign in" && !userInfo) {
      setIsOpen(true);
      setType("login");
    }
  };

  const handleRenderText = () => {
    return content === "Sign in" && userInfo
      ? `Hello ${userInfo.fullName}`
      : content;
  };

  const handleHover = () => {
    if (content === "Sign in" && userInfo) {
      setIsShowSubMenu(true);
    }
  };

  return (
    <Link
      to={href}
      className={menu}
      onMouseEnter={handleHover}
      onClick={handleClickShowLogin}
    >
      {handleRenderText()}
    </Link>
  );
};

export default Menu;
