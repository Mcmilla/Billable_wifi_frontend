// this is where we import all our routes 
import { useRoutes,Navigate } from "react-router-dom";


import MainRoutes from "./MainRoutes";
import PagesLanding from "../pages/PagesLanding";

export default function ThemeRoutes(){
    return useRoutes([{path:'/', element: <PagesLanding/>}, 
        {path:'/admin', element:<MainRoutes/>},
        {path:'*', element:<Navigate to='/'/>}
    ])
}






