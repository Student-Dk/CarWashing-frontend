import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Header from './components/Header'
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/AdminPages/Dashboard'
import WashingPoints from './pages/AdminPages/WashingPoints';
import AddCarWashBooking from './pages/AdminPages/AddCarWashBooking';
import CarWashingBooking from './pages/AdminPages/CarWashingBooking';
import ManageEnquiries from './pages/AdminPages/ManageEnquiries';
import Pages from './pages/AdminPages/Pages';
import AddWashingpoint from './pages/Adminfolder/AddWashingpoint';
import AuthContex from './contex/AuthContex';



function App() {
  return (
    <div>
<AuthContex>
        <Router>
       <Routes>

          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/Washingpoints' element={<WashingPoints></WashingPoints>}></Route>
          <Route path='/Addbooking' element={<AddCarWashBooking></AddCarWashBooking>}></Route>
          <Route path='/carbookings' element={<CarWashingBooking></CarWashingBooking>}></Route >
          <Route path='/manages_Enquiries' element={<ManageEnquiries></ManageEnquiries>}></Route>
          <Route path='/pages' element={<Pages></Pages>}></Route>
          <Route path='/AddWashingPoints' element={<AddWashingpoint></AddWashingpoint>}></Route>
        </Routes>


      </Router>

</AuthContex>

    </div>


  );
}

export default App;
