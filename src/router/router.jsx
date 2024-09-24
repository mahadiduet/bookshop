import { createBrowserRouter } from "react-router-dom";
import Homepage from "../page/homepage/Homepage";
import Bookdetails from "../page/books/bookdeatils/bookdetails";
import Faqpage from "../page/faq/Faqpage";
import Bookpage from "../page/books/bookpage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
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