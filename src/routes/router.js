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
];

export default router;
