import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Compenents/Login';
import HomePage from './Compenents/HomePage';
import Reset from './Compenents/Reset';
import ForgotPassword from './Compenents/ForgotPassword';

function App() {
    return (
       
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/ForgotPassword" element={<ForgotPassword />} />
                <Route path="/Reset" element={<Reset />} />
                </Routes>
            </div>
       
    );
}

export default App;
