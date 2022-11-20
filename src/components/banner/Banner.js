import { Grid } from '@mui/material'
import React from 'react'

import banner from "../../Assests/bannerImage/imagecart.jpg"
import bannercart from "../../Assests/bannerImage/banner-img-removebg.png"
// import bannerImg from "../../Assests/bannerImage/banner.jpg"
import bannerImg from "../../Assests/bannerImage/images.jfif"
import bannerImagetwo from "../../Assests/bannerImage/bannerimagetwo.jpg"
import images from "../../api/images.json"
import {motion} from "framer-motion"
import "./Banner.css"

const Banner = () => {

    const banneranimation = {
        hidden:{
       
        y:-15,
            opacity:1,
         
        },
        visible:{
         
            y:0,
          opacity:1,
      

          transition:{
            duration:2,
            repeatType: "reverse",
            repeat: Infinity,
          }
        }
       
      }
      
  return (
    <>

   

  <div className='grid-div'>
 {/* <Grid container>
    <Grid item xs={12} sm={6}> */}
  {/* <div className='banner-text' >
    <p className='text'>Online Store</p>
  
  </div> */}
{/* </Grid> */}
{/* 
<Grid item xs={12} sm={6}> */}
  <div className='banner-image-main' >
   
<p className='banner-text'>Online Shop</p>
 

  </div>
<motion.div className='cart-image-main'  variants={banneranimation} initial="hidden" animate="visible">
<img className='cart-image' src={bannercart} alt="" srcset="" />
</motion.div>


{/* </Grid>
</Grid> */}
</div>
    </>
  )
}

export default Banner