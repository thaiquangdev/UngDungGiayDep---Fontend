import InputCommon from "@components/public/InputCommon/InputCommon";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { register } from "@/apis/authService";
import { ToastContext } from "@/contexts/ToastProvider";
import { login } from "@/apis/authService";

const Login = () => {
  const { container, title, boxRememberMe, lostPassword, btn } = styles;
  const [isRegister, setIsRegister] = useState(false);
  const { toast } = useContext(ToastContext);

  const handleToggle = () => {
    setIsRegister(!isRegister);
    formik.resetForm();
  };

  const validationSchema = yup.object({
    fullname: isRegister
      ? yup.string().required("Full name is required")
      : yup.string(),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: isRegister
      ? yup
          .string()
          .oneOf([yup.ref("password"), null], "Password does not match")
          .required("Confirm Password is required")
      : yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      if (isRegister) {
        const { email, fullname, password } = values;
        await register({ email, password, fullname })
          .then((res) => {
            toast.success(res.data.message);
          })
          .catch((err) => {
            toast.error(err.response.data.message);
          });
      }
      if (!isRegister) {
        const { email, password } = values;

        await login({ email, password })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            toast.error(err.response.data.message);
          });
      }
    },
  });

  return (
    <div className={container}>
      <div className={title}>{isRegister ? "SIGN UP" : "SIGN IN"}</div>
      <form onSubmit={formik.handleSubmit}>
        {isRegister && (
          <InputCommon
            id="fullname"
            label="Full name"
            type="text"
            isRequired={true}
            formik={formik}
          />
        )}

        <InputCommon
          id="email"
          label="Email"
          type="text"
          isRequired={true}
          formik={formik}
        />

        <InputCommon
          id="password"
          label="Password"
          type="password"
          isRequired={true}
          formik={formik}
        />

        {isRegister && (
          <InputCommon
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            isRequired={true}
            formik={formik}
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
