import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import './index.css'; // Import global styles
import Footer from './components/Footer'; // Import Footer
import Info from './components/Info';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Team from './pages/Team';
import FAQ from './pages/FAQ';
import VerifyNow from './pages/VerifyNow';
import Processing from './pages/Processing';
import Result from './pages/Result';
import Register from './pages/Register';



function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      <div className="translate-wrapper">
        <div id="google_translate_element"></div>
      </div>

      {/* Hero Section */}
      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/info" element={<Info />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/verify-now" element={<VerifyNow />} />
          <Route path="/processing" element={<Processing />} />
          <Route path="/result" element={<Result />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      
      {/* Footer */}
        <Footer />
    </div>
  );
}

export default App;

