import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import Home from "./page/checkout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};
