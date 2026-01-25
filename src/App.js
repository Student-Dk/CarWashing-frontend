import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthContex from "./contex/AuthContex";

/* Layouts */
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

/* Public Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import WashingP from "./pages/WashingP";
import WashingPlans from "./pages/WashingPlans";

/* Admin Pages */
import Dashboard from "./pages/AdminPages/Dashboard";
import WashingPoints from "./pages/AdminPages/WashingPoints";
import AddCarWashBooking from "./pages/AdminPages/AddCarWashBooking";
import CarWashingBooking from "./pages/AdminPages/CarWashingBooking";
import ManageEnquiries from "./pages/AdminPages/ManageEnquiries";
import Pages from "./pages/AdminPages/Pages";
import AddWashingpoint from "./pages/Adminfolder/AddWashingpoint";
import EditWashingPoint from "./pages/AdminPages/EditWashingPoint";
import NewBooking from "./pages/AdminPages/NewBooking";
import CompleteBooking from "./pages/AdminPages/CompleteBooking";
import ManageBookings from "./pages/AdminPages/ManageBookings";
import Bot from "./components/Bot";

function App() {
  return (
    <AuthContex>
      <Router>
        <Routes>

          {/* 🌍 PUBLIC ROUTES (Header + Footer) */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Wpoints" element={<WashingP />} />
            <Route path="/Wplans" element={<WashingPlans />} />
            <Route path="/login" element={<Login></Login>}></Route>
           
          </Route>

          {/* 🔐 AUTH ROUTES (NO Header/Footer) */}
         

          {/* 🛠 ADMIN ROUTES (NO Header/Footer) */}
          <Route element={<AdminLayout />}>
           <Route path="/chatbot" element={<Bot></Bot>}></Route>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Washingpoints" element={<WashingPoints />} />
            <Route path="/Addbooking" element={<AddCarWashBooking />} />
            <Route path="/carbookings" element={<CarWashingBooking />} />
            <Route path="/manages_Enquiries" element={<ManageEnquiries />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/AddWashingPoints" element={<AddWashingpoint />} />
            <Route path="/EditWashingPoint/:id" element={<EditWashingPoint />} />
            <Route path="/Newbooking" element={<NewBooking />} />
            <Route path="/completebookings" element={<CompleteBooking />} />
            <Route path="/viewNewBookings/:id" element={<ManageBookings />} />
          </Route>

        </Routes>
      </Router>
    </AuthContex>
  );
}

export default App;
