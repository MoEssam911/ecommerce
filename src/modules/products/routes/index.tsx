import { Route } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage"

const ProductRoutes = [
  <Route path="/" element={<ProductListPage />} />
]

export default ProductRoutes;
