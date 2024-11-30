import AddvanceHeadling from "@components/public/AddcanceHeadling/AddvanceHeading";
import Banner from "@components/public/Banner/Banner";
import Header from "@components/public/Header/Header";
import Info from "@components/public/Info/Info";
import { useEffect, useState } from "react";
import { getProducts } from "@/apis/productService";
import HeadlingListProduct from "@components/public/HeadlingListProduct/HeadingListProduct";
import SaleHomePage from "@components/public/SaleHomePage/SaleHomePage";
import Footer from "@components/public/Footer/Footer";

const Home = () => {
  const [listProducts, setListProducts] = useState([]);
  useEffect(() => {
    getProducts({ page: 1, limit: 8 }).then((res) => {
      setListProducts(res.products);
    });
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <Info />
      <AddvanceHeadling />
      <HeadlingListProduct data={listProducts} />
      <SaleHomePage />
      <Footer />
    </>
  );
};

export default Home;
