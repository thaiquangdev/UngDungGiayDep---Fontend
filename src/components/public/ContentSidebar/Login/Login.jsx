import InputCommon from "@components/public/InputCommon/InputCommon";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import { useState } from "react";

const Login = () => {
  const { container, title, boxRememberMe, lostPassword, btn } = styles;
  const [isRegister, setIsRegister] = useState(false);

  const handleToggle = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className={container}>
      <div className={title}>{isRegister ? "SIGN UP" : "SIGN IN"}</div>
      <form>
        {isRegister && (
          <InputCommon
            id="fullName"
            label="Full name"
            type="text"
            isRequired={true}
          />
        )}

        <InputCommon id="email" label="Email" type="text" isRequired={true} />

        <InputCommon
          id="password"
          label="Password"
          type="password"
          isRequired={true}
        />

        {isRegister && (
          <InputCommon
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            isRequired={true}
          />
        )}

        {!isRegister && (
          <div className={boxRememberMe}>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
        )}
        <div className={btn}>
          <Button
            content={isRegister ? "REGISTER" : "LOGIN"}
            type="submit"
            // onClick={() => toast.success('success')}
          />
        </div>
      </form>
      <Button
        content={
          isRegister ? "Already have an account?" : "Don't have an account?"
        }
        type="submit"
        isPrimary={false}
        style={{ marginTop: "10px", width: "100%" }}
        onClick={handleToggle}
      />
      {!isRegister && <div className={lostPassword}>Lost your password?</div>}
    </div>
  );
};

export default Login;
