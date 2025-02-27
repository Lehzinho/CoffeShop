import { Route, Routes } from "react-router-dom";
import Home from "./page/home";
import { DefaultLayout } from "./layouts/defaultLayout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};
