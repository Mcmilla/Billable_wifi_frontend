import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/page';

import Footer from './components/Footer/footer';
import AdminLayout from './Layout/AdminLayout';
import Users from './views/dashboards/AdmindashBoard/User';

import PagesLanding from './pages/PagesLanding'
import AdminDashboard from './views/dashboards/AdmindashBoard/Dashboard';
import Vendors from './views/dashboards/AdmindashBoard/Vendor';
import AccessCodes from './views/dashboards/AdmindashBoard/AccessCode';
import {ThemeProvider} from './contexts/ThemeContext'


function App() {
  const location =useLocation();
  const isAdminRoute=location.pathname.startsWith('/admin')

  return (
    <div className="bg-gray-200 ">

      <ThemeProvider>

      {!isAdminRoute &&  <Navbar />}
      
      
      
      <Routes>
      <Route path='/' element={<PagesLanding/>}/>
       
        
      {/* <Route path="/admin" element={<DashboardRoutes />} /> */}
      <Route path='/admin' element={<AdminLayout/>}>
      <Route path='dashboard' element={<AdminDashboard/>}/>
      <Route path='users' element={<Users/>}/>
      <Route path='vendors' element={<Vendors/>}/>
      <Route path='access-codes' element={<AccessCodes/>}/>

      </Route>
        

      </Routes>

    {!isAdminRoute &&  <Footer />}

    </ThemeProvider>
      
      
    
      
      
     
      
    

    </div>
  );
}

export default App;
