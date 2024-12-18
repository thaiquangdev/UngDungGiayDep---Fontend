import Footer from "@components/public/Footer/Footer";
import Header from "@components/public/Header/Header";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import MainLayout from "@components/public/Layout/Layout";
import { useFormik } from "formik";
import * as yup from "yup";
import { useContext } from "react";
import { ToastContext } from "@/contexts/ToastProvider";

const ChangePassword = () => {
  const { toast } = useContext(ToastContext);
  const validationSchema = yup.object({
    oldPassword: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Old Password is required"),
    newPassword: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("New Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "Passwords do not match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const { container, infoTitle, error } = styles;
  return (
    <>
      <Header />
      <div className={container}>
        <MainLayout>
          <div className={infoTitle}>
            <h2>CHANGE PASSWORD</h2>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="oldPassword">Old Password</label>
              <input
                id="oldPassword"
                name="oldPassword"
                type="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.oldPassword}
              />
              {formik.touched.oldPassword && formik.errors.oldPassword && (
                <div className={error}>{formik.errors.oldPassword}</div>
              )}
            </div>
            <div>
              <label htmlFor="newPassword">New Password</label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.newPassword}
              />
              {formik.touched.newPassword && formik.errors.newPassword && (
                <div className={error}>{formik.errors.newPassword}</div>
              )}
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div className={error}>{formik.errors.confirmPassword}</div>
                )}
            </div>
            <Button content={"CHANGE PASSWORD"} />
          </form>
        </MainLayout>
      </div>
      <Footer />
    </>
  );
};

export default ChangePassword;
