
import { Grid } from '@mui/material'
import React from 'react'

import Typewriter from 'typewriter-effect';

import "./Banner.css"
import {AiOutlineArrowDown} from "react-icons/ai";
import Button from '../Buttons/Button'

const Banner = () => {

 
  return (
    <>

<div className='banner'>
  <div className='banner-image'>
    
  <div className='content'>
<ul >
  <li>
WELCOME TO
  </li>
  <li>

  <Typewriter
  options={{
    strings: [" OUR SHOP"],
    autoStart: true,
    loop: true,
  }}
/>
 
  </li>
  <div>
  
  </div>

  <div className='shop-now'>
 
 <Button className="shop-now-btn shop-anim">scroll down<AiOutlineArrowDown/> </Button> 

  </div>
 
</ul>

</div>

  </div>
  <Grid container>
   
  <Grid item xs={12} sm={12} md={6}>

</Grid>



</Grid>
</div>






    </>
  )
}

export default Banner