// main routes 

import Users from "../views/dashboards/AdmindashBoard/User";
import Vendors from "../views/dashboards/AdmindashBoard/Vendor";
import AccessCodes from "../views/dashboards/AdmindashBoard/AccessCode";
import AdminDashboard from "../views/dashboards/AdmindashBoard/Dashboard";
import MainLayout from '../Layout/MainLayout'


const DashboardRoutes={
   path:'/',
   element:<MainLayout/>,

   children:[
    {
        path:'users',
        element:<Users/>
    },
    {
        path:'vendors',
        element:<Vendors/>
    },
    {
        path:'codes',
        element:<AccessCodes/>
    },
    {
        path:'dashboard',
        element:<AdminDashboard/>
    },



   ]
 
    


}

export default DashboardRoutes;