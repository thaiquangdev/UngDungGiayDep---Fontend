/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./styles.module.scss";
import { IoIosEye } from "react-icons/io";
import { IoEyeOffSharp } from "react-icons/io5";

const InputCommon = ({ label, type, isRequired = false, ...props }) => {
  const { container, labelInput, boxInput, boxIcon } = styles;
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const isShowTextPassword =
    type === "password" && showPassword ? "text" : type;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={container}>
      <div className={labelInput}>
        {label} {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input type={isShowTextPassword} {...props} />
        {isPassword && (
          <div className={boxIcon} onClick={handleShowPassword}>
            {showPassword ? <IoEyeOffSharp /> : <IoIosEye />}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputCommon;
