/* eslint-disable react/prop-types */
import { useContext } from "react";
import styles from "../styles.module.scss";
import { SiderBarContext } from "@/contexts/SideBarProvider";
import { Link } from "react-router-dom";

const Menu = ({ content, href }) => {
  const { menu } = styles;
  const { setIsOpen, setType } = useContext(SiderBarContext);

  const handleClickShowLogin = () => {
    if (content === "Sign in") {
      setIsOpen(true);
      setType("login");
    }
  };

  const handleRenderText = () => {
    return content;
  };

  return (
    <Link to={href} className={menu} onClick={handleClickShowLogin}>
      {handleRenderText()}
    </Link>
  );
};

export default Menu;
