import { createBrowserRouter } from "react-router-dom";
import Homepage from "../page/homepage/Homepage";
import Bookdetails from "../page/books/bookdeatils/bookdetails";
import Faq from "../page/faq/Faq";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: `/book/:id`,
        element: <Bookdetails />
    },
    {
        path: `/faq`,
        element: <Faq />
    }
]);