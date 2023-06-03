import { 
    Button,
    Box,
    
  } from '@chakra-ui/react'
  import { FiAlignJustify } from "react-icons/fi";
  import { IoClose } from "react-icons/io5";
import React, {   useState } from 'react'
import {Link,NavLink } from "react-router-dom"

export function BurgerMenu() {
     const [state,setState]=useState(false)

    const handelClose=(e)=>{
      console.log("close")
        setState(false);
    }

    const handelOpen=(event)=>{
         
         event.stopPropagation();
        setState(true)
    }
 

   

    return (


      <>
         {!state?<Button onClick={handelOpen} zIndex={100}    position={"absolute" }top="10px" right="10px"><FiAlignJustify size="30"/></Button>:<Button   onClick={handelClose} zIndex={3} position={"absolute" }top="10px" right="10px"><IoClose  size="30"/></Button>  }
          <Box fontSize={"1.4rem"} position={"fixed"} zIndex={1} w="100%" h="100vh"   onClick={handelClose} display={state?"block":"none"} >
                 <Box onClick={handelOpen} display={"flex"} flexDirection={"column"} gap="10px" zIndex={20}  w="45%" h="100vh" backgroundColor="rgba(64,123,255,0.5)" float="right"   textAlign={"center"} pt="15%">
                 <NavLink  to="/home"  >  <Button  bg="white ">Home</Button></NavLink>
                    <NavLink  to="/"  > <Button  bg="white">Signup</Button></NavLink>
                    <NavLink  to="/login" > <Button   bg="white" >Login</Button></NavLink>
       </Box>         
      </Box>
      
      </>
    )
  }