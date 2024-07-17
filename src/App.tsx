import { BrowserRouter } from "react-router-dom";
import Router from "./routers/router";

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

