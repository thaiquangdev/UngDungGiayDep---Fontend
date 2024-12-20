import { lazy } from "react";

const router = [
  {
    path: "/",
    component: lazy(() => import("@/pages/Home/Home")),
  },
  {
    path: "/shop",
    component: lazy(() => import("@/pages/Outshop/Outshop")),
  },
  {
    path: "/wishlist",
    component: lazy(() => import("@pages/Wishlist/Wishlist")),
  },
  {
    path: "/product/:slug",
    component: lazy(() => import("@pages/ProductDetail/ProductDetail")),
  },
  {
    path: "/change-password",
    component: lazy(() => import("@pages/ChangePassword/ChangePassword")),
  },
  {
    path: "/profile",
    component: lazy(() => import("@pages/Profile/Profile")),
  },
];

export default router;
