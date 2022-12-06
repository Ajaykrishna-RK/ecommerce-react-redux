

import './App.css';
import Header from './components/header/Header';
import Productlist from './components/productlist/Productlist';


import {  Routes, Route } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cartpage from './pages/cart/Cartpage';
import Productdetail from './components/productdetail/Productdetail';







function App() {




  return (
    <div className="App">
       <Header/>
   

 
   
   <ToastContainer/>
  
   <Routes>
        <Route path="/" element={<Productlist/>}/>
        
        <Route path="/cartpage" element={<Cartpage/>}/>

        <Route path="/product/:id" element={<Productdetail/>}/>

        <Route path="/product/:category" element={<Productdetail/>}/>
      
      </Routes>


    </div>
  );
}

export default App;
