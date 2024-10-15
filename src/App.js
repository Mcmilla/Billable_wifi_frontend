import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/page';
import Hero from './components/Hero/hero';
import Pricing from './components/Pricing/price';
import SocialProof from './components/SocialProof/proof';
import FAQSection from './components/Faq/faq';
import Footer from './components/Footer/footer';
import Login from './components/auth/active';
import PaymentPage from './components/Purchase/purchase'; 
import AdminDashboard from './dashboards/AdmindashBoard/Dashboard';


function App() {
  return (
    <div className="bg-gray-200 pt-16">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Pricing />
              <Login />
              <SocialProof />
              <FAQSection />
              
            </>
          }
        />
        <Route path="/payment" element={<PaymentPage />} /> {/* Route ya kufanya payment */}

        {/* Admin Dashboard Route */}
        <Route path="/admin" element={<AdminDashboard />} /> {/* Admin Dashboard route */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
