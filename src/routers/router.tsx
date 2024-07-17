import { useRoutes } from "react-router-dom";
import { SignUpPage } from "../pages/signUp.page";


export default function Router() {
  return useRoutes([
    {
      children: [{ path: "/", element: <SignUpPage />, index: true }],
    },

    {
      path: "/account",
      element: <></>,
    },
    {
      path: "/profile/:id",
      element: <></>,
    },
    {
      path: "/sign-in",
      element: <></>,
    },
    {
      path: "/sign-up",
      element: <SignUpPage />,
    },
  ]);
}



