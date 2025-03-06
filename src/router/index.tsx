import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ProductRoutes from "../modules/products/routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {...ProductRoutes}
    </>
  )
);

export default router;
