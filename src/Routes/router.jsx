import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/homeLayout";


const router= createBrowserRouter(

    [

        {

            path: "/",

            element: <HomeLayout></HomeLayout>

        },
         {

            path: "/auth",

            element: <h1>Authentication layout</h1>

        },
         {

            path: "/news",

            element: <h1>news layout</h1>

        },
         {

            path: "/*",

            element: <h1>Eroror 404</h1>

        },

    ]);
    export default router;