import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/page';
import Footer from './components/Footer/footer';
import AdminLayout from './Layout/AdminLayout';
import UserList from './views/pages/User/UserList';
import CreateUser from './views/pages/User/CreateUser';
import PagesLanding from './views/pages/PagesLanding';
import AdminDashboard from './views/dashboards/Default/AdminDashboard';
import Vendors from './views/pages/Vendor';
import AccessCodes from './views/pages/AccessCode';
import Payment from './views/pages/Payment'; 
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="bg-gray-200">
      <ThemeProvider>
        {!isAdminRoute && <Navbar />}
        
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PagesLanding />} />
          <Route path="/payment" element={<Payment />} /> {/* Add the /payment route */}
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<UserList />} />
            <Route path="new-user" element={<CreateUser />} />
            <Route path="vendors" element={<Vendors />} />
            <Route path="access-codes" element={<AccessCodes />} />
          </Route>
        </Routes>

        {!isAdminRoute && <Footer />}
      </ThemeProvider>
    </div>
  );
}

export default App;
