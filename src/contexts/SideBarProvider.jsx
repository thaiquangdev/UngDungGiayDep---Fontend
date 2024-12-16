/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getAllWishlists } from "@/apis/wishlistService";

export const SiderBarContext = createContext();

export const SiderBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("");
  const [listProductWishlists, setListProductWishlists] = useState([]);

  const handleGetListProductWishlists = (type) => {
    if (type === "wishlist") {
      setIsLoading(true);
      getAllWishlists().then(
        (res) => {
          setListProductWishlists(res.wishlists);
          setIsLoading(false);
        },
        (err) => {
          console.log(err);
          setIsLoading(false);
        }
      );
    }
  };

  useEffect(() => {
    handleGetListProductWishlists("wishlist");
  }, []);

  return (
    <SiderBarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        type,
        setType,
        handleGetListProductWishlists,
        isLoading,
        listProductWishlists,
      }}
    >
      {children}
    </SiderBarContext.Provider>
  );
};
