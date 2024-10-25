import Home from "./Pages/Home/Home";
import Books from "./Pages/Books/Books";
import ContactUs from "./Pages/ContactUs/ContactUs";

const router = [
    { path: "/", element: <Home /> },
    { path: "/ContactUs", element: <ContactUs /> },
    { path: "/Books", element: <Books /> },
]

export default router