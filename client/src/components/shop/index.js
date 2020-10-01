import Home from "./home";
import WishList from "./wishlist";
import ProtectedRoute from "./auth/ProtectedRoute";
import AdminProtectedRoute from "./auth/AdminProtectedRoute";
import { LayoutContext } from "./layout";
import { layoutState, layoutReducer } from "./layout/layoutContext";
import { isAdmin, isAuthenticate } from "./auth/fetchApi";
import PageNotFound from "./layout/PageNotFound";
import ProductDetails from "./productDetails";
import ProductByCategory from "./home/ProductByCategory";

export {
    Home,
    WishList,
    ProtectedRoute,
    AdminProtectedRoute,
    LayoutContext,
    layoutState,
    layoutReducer,
    isAdmin,
    isAuthenticate,
    PageNotFound,
    ProductDetails,
    ProductByCategory
}