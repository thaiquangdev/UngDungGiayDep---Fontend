import Header from "@components/public/Header/Header";
import styles from "./styles.module.scss";
import Footer from "@components/public/Footer/Footer";
import MainLayout from "@components/public/Layout/Layout";
import Button from "@components/Button/Button";
import { VscTrash } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SiderBarContext } from "@/contexts/SideBarProvider";
import { deleteWishlist } from "@/apis/wishlistService";

const Wishlist = () => {
  const { container, title, content, btn, btnTrash } = styles;
  const navigate = useNavigate();

  const { listProductWishlists, handleGetListProductWishlists } =
    useContext(SiderBarContext);

  const handleDeleteWishlist = (pid) => {
    deleteWishlist(pid)
      .then((res) => {
        handleGetListProductWishlists("wishlist");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Header />
      <MainLayout>
        <div className={container}>
          <div className={title}>WISHLIST</div>
          <div className={content}>
            <table>
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>STOCK STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {listProductWishlists.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div>
                        <div>
                          <img
                            src={item.productId.images[0].imageUrl}
                            alt=""
                            width={60}
                            height={60}
                          />
                        </div>
                        <div>
                          <span>{item.productId.title}</span>
                        </div>
                      </div>
                    </td>
                    <td>${item.productId.price}</td>
                    <td>IN STOCK</td>
                    <td className={btn}>
                      <div>
                        <Button
                          content={"SELECT OPTIONS"}
                          onClick={() =>
                            navigate(`/product/${item.productId.slug}`)
                          }
                        />
                      </div>
                      <div className={btnTrash}>
                        <Button
                          isPrimary={false}
                          content={<VscTrash />}
                          onClick={() =>
                            handleDeleteWishlist(item.productId.id)
                          }
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </MainLayout>
      <Footer />
    </>
  );
};

export default Wishlist;
