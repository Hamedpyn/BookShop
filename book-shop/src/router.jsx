import Home from "./Pages/Home/Home";
import Books from "./Pages/Books/Books";
import UserBasket from "./Pages/UserBasket/UserBasket";
import ContactUs from "./Pages/ContactUs/ContactUs";
import EachBookPage from "./Pages/EachBookPage/EachBookPage";

const router = [
    { path: "/", element: <Home /> },
    { path: "/ContactUs", element: <ContactUs /> },
    { path: "/Books", element: <Books /> },
    { path: "/Basket", element: <UserBasket /> },
    { path: "/Books/:id", element: <EachBookPage /> },
]

export default router