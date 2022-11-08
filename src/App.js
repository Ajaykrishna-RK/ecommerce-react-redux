
import {  useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './components/header/Header';
import Productlist from './components/productlist/Productlist';
import { addUser} from './redux/Cart';
import axios from "axios"

function App() {

const counterRef = useRef(1);

const dispatch = useDispatch()

const {userDetail} = useSelector((state)=>state.cart)
useEffect(() => { 
  fetchUser(counterRef.current)
}, [] )

const addMoreUsers = ()=>{
fetchUser( ++ counterRef.current)
}

const fetchUser =  async (id) =>{
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`) 

  
  dispatch(addUser(response.data))
}

  return (
    <div className="App">
   
  <Header/>
  <button onClick={addMoreUsers}>Add users</button>
  <pre style={{color:"#fff"}}>{JSON.stringify(userDetail,undefined,4)}</pre>
  <Productlist/>

    </div>
  );
}

export default App;
