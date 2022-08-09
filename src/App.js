import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import N404 from './Pages/Shared/404/N404';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

import ServiceDetail from './Pages/Shared/ServiceDetail/ServiceDetail';



function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/home' element={<Home></Home>}> </Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/register' element={<Register></Register>}> </Route>
        <Route path='*' element={<N404></N404>}> </Route>
      </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;
