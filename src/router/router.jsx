import { createBrowserRouter } from "react-router-dom";
import Homepage from "../page/homepage/Homepage";
import Faqpage from "../page/faq/Faqpage";
import Bookpage from "../page/books/bookpage";
import Errorpage from "../page/error/Errorpage";
import Aboutpage from "../page/about/Aboutpage";
import Blogpage from "../page/blog/Blogpage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <Errorpage />
    },
    {
        path: `/book/:id`,
        element: <Bookpage />
    },
    {
        path: `/faq`,
        element: <Faqpage />
    },
    {
        path: `/about`,
        element: <Aboutpage />
    },
    {
        path: `/blog`,
        element: <Blogpage />
    }
]);