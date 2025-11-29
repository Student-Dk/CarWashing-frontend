import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Header from './components/Header'
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './components/Dashboard'
function App() {
  return (

    <div>

      <Router>
       
        <Routes>

          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        </Routes>


      </Router>


    </div>


  );
}

export default App;
