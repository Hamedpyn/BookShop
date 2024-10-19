import Books from "./Pages/Books/Books";
import Home from "./Pages/Home/Home";

const router = [
    { path: "/", element: <Home /> },
    { path: "/books", element: <Books /> },
]

export default router