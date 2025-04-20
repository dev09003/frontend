
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Booking from './pages/Booking';
import Creating from './pages/Creating';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ParkingDetails from './pages/ParkingDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Booking />} />
          <Route path='/Creating' element={<Creating />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/parking-details' element={<ParkingDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
