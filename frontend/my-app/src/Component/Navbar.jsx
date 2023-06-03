import { Box,Button,Image, Stack   } from "@chakra-ui/react"
import { BurgerMenu } from "./BurgerMenu"
import { useEffect,   useState } from "react"
import {Link} from "react-router-dom"
import { LOGOUT } from "../Redux/AuthRedux/Auth.Action.Types"
import { useDispatch } from "react-redux"
export const Navbar=()=>{
   const dispatch=useDispatch()
    const [width,setWidth]=useState(814)
   //api key= AIzaSyCo5dRloWorweRBz_uzpDh6MoI7bKLsfDA
    window.onresize=function (){
    
      setWidth(window.innerWidth)
       
     }
  
  useEffect(()=>{


  },[width])


   return <>
   
   {width>=814?true:<BurgerMenu/>}
   <Box zIndex={+2}  position={"sticky"} top="0px" left="0px" display="flex" justifyContent={"space-between"} w="100%" h="3rem" bg="
    #407bff" color="white">
      <Box> <Image w="100%" h="3rem" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAlH009QfnPwwu_Wz1cDuZhxMm8ieAzvxjrppy2E&s"/> </Box>
      <Box  w="30%" display={"block"} justifyContent={"space-around"}  p="0.8rem"> 
      
     {width<814?true: <Stack direction='row' spacing={4} align='center'> 
  <Link to={"/home"}>  <Button colorScheme='teal' variant='solid'>
  Home
     </Button></Link>
  <Link to={'/blog'}> <Button colorScheme='black' variant='solid'>
   Blog
  </Button></Link>
 <Link to="/login">  <Button colorScheme='black' variant='solid'>
    Login
  </Button></Link>
  <Link to="/"> <Button colorScheme='black' variant='solid'>
    Signup
  </Button></Link>
  <Link  > <Button onClick={()=>dispatch({type:LOGOUT})} colorScheme='black' variant='solid'>
    Logout
  </Button></Link>
      </Stack>
}  
      </Box>
   </Box>
   </>
}