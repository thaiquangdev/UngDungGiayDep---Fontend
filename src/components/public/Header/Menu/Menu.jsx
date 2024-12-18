/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import styles from "../styles.module.scss";
import { SiderBarContext } from "@/contexts/SideBarProvider";
import { StoreContext } from "@/contexts/StoreProvider";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "@/contexts/SearchProvider";

const Menu = ({ content, href }) => {
  const { menu, subMenu, subMenuItem } = styles;
  const { setIsOpen, setType } = useContext(SiderBarContext);
  const { userInfo, setUserInfo } = useContext(StoreContext);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  const { setIsSearchVisiable, isSearchVisiable } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleClickShowLogin = () => {
    if (content === "Sign in" && !userInfo) {
      setIsOpen(true);
      setType("login");
    }

    if (content === "Our Shop") {
      navigate("/shop");
    }

    if (content === "Search") {
      setIsSearchVisiable(true);
      console.log(isSearchVisiable);
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
      {isShowSubMenu && (
        <div className={subMenu} onMouseLeave={() => setIsShowSubMenu(false)}>
          <Link className={subMenuItem} to="/profile">
            PROFILE
          </Link>
          <Link className={subMenuItem} to="/change-password">
            CHANGE PASSWORD
          </Link>
          <Link className={subMenuItem} to="/orders-history">
            ORDERS HISTORY
          </Link>
          <div className={subMenuItem}>LOG OUT</div>
        </div>
      )}
    </Link>
  );
};

export default Menu;
