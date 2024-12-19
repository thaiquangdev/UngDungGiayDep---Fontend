import Footer from "@components/public/Footer/Footer";
import Header from "@components/public/Header/Header";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import MainLayout from "@components/public/Layout/Layout";
import { useContext, useEffect, useState } from "react";
import { ToastContext } from "@/contexts/ToastProvider";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const {
    container,
    layout,
    left,
    infoTitle,
    infoForm,
    infoFormItem,
    right,
    infoAddress,
    infoAddressItem,
    infoAdressStreet,
    infoAddressZipCode,
    infoAddressPhoneNumber,
  } = styles;

  const navigate = useNavigate();
  const { toast } = useContext(ToastContext);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [addresses, setAddresses] = useState([]);

  const handleNavigateAddAddress = () => {
    navigate("/add-address");
  };

  return (
    <>
      <Header />
      <div className={container}>
        <MainLayout>
          <div className={layout}>
            <div className={left}>
              <div className={infoTitle}>
                <h2>INFOMATION USER</h2>
              </div>
              <form className={infoForm}>
                <div className={infoFormItem}>
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className={infoFormItem}>
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={infoFormItem}>
                  <label htmlFor="">Phone Number</label>
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <Button content={"EDIT PROFILE"} />
              </form>
            </div>
            <div className={right}>
              <div className={infoAddress}>
                {addresses.map((item) => (
                  <div className={infoAddressItem} key={item.id}>
                    <p className={infoAdressStreet}>
                      Street: {item.street} - {item.country}
                    </p>
                    <p className={infoAddressZipCode}>
                      ZipCode: {item.zipCode}
                    </p>
                    <p className={infoAddressPhoneNumber}>
                      PhoneNumber: {item.phoneNumber}
                    </p>
                  </div>
                ))}
              </div>
              <Button
                content={"ADD NEW ADDRESS"}
                onClick={handleNavigateAddAddress}
              />
            </div>
          </div>
        </MainLayout>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
