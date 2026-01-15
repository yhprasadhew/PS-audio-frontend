// App.jsx
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/homePage.jsx';
import AdminPage from './pages/admin/AdminPage.jsx';
import Testing from './components/testing.jsx';
import LoginPage from "./pages/login/login.jsx";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
     <Toaster />
        <Routes path="/*">

      <Route path="/testing" element={<Testing/>} />
      
      <Route path="/login" element={<LoginPage/>} />
      
          <Route path="/*" element={<HomePage/>} />
        <Route path="/admin/*" element={<AdminPage />} />
       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
