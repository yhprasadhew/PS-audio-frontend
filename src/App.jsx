// App.jsx
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/homePage.jsx';
import AdminPage from './pages/admin/AdminPage.jsx';

function App() {
  return (
    <BrowserRouter>
     
        <Routes path="/*">

      
          <Route path="/*" element={<HomePage/>} />
        <Route path="/admin/*" element={<AdminPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
