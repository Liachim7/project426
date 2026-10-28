import { Route, Routes } from "react-router";
import { HomePage } from "../page/HomePage/HomePage";
import { CatalogPage } from "../page/CatalogPage/CatalogPage";
import { ProductPage } from "../page/ProductPage/ProductPage";
import { PageNotFound } from "../page/PageNotFound/PageNotFound";

export const PATH = {
  Home: "/",
  Catalog: "/catalog",
  Product: "/product",
  NotFound: "*",
};
export function Routing() {
  return (
    <Routes>
      <Route path={PATH.Home} element={<HomePage />} />
      <Route path={PATH.Catalog} element={<CatalogPage />} />
      <Route path={PATH.Product} element={<ProductPage />} />
      <Route path={PATH.NotFound} element={<PageNotFound />} />
    </Routes>
  );
}
