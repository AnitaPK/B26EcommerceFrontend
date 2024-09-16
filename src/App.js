import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { UserProvider } from './context/userContext';
import DashboardAsideBar from './pages/DashboardAsideBar';

function App() {
  return (
   <BrowserRouter>
   <UserProvider>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path="/dashboard/*" element={<DashboardAsideBar />}></Route>

    </Routes>
    </UserProvider>
   </BrowserRouter>
  );
}

export default App;
