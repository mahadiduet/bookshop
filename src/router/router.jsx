import { createBrowserRouter } from "react-router-dom";
import Homepage from "../page/homepage/Homepage";
import Faqpage from "../page/faq/Faqpage";
import Bookpage from "../page/books/bookpage";
import Errorpage from "../page/error/Errorpage";

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
    }
]);