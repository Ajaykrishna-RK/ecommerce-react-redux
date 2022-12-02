import { Grid } from '@mui/material'
import React from 'react'

import banner from "../../Assests/bannerImage/imagecart.jpg"
import bannercart from "../../Assests/bannerImage/bike-boy-new.png"
// import bannerImg from "../../Assests/bannerImage/banner.jpg"
import bannerImg from "../../Assests/bannerImage/images.jfif"
import bannerImagetwo from "../../Assests/bannerImage/bannerimagetwo.jpg"
import images from "../../api/images.json"
import {motion} from "framer-motion"
import "./Banner.css"

const Banner = () => {

    const banneranimation = {
        hidden:{
       
       scale:1.2,
            opacity:1,
         
        },
        visible:{
         
            scale:1.1,
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

<div>
  <img src={bannerImagetwo} alt=""/>
</div>
    </>
  )
}

export default Banner