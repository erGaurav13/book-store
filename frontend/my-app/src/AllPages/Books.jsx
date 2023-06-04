import { Box,Input,Button} from "@chakra-ui/react"
import { SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState  } from "react"
 
import Card from "../Component/Card"; 

export const Books=()=>{
 
 
  const [bookData,setData]=useState([]);
  const [loading,setLoading]=useState(false)

 
  const getData=(querry="javascript")=>{
    setLoading(true)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${querry}t&filter=paid-ebooks&key=AIzaSyCo5dRloWorweRBz_uzpDh6MoI7bKLsfDA&maxResults=40`).then((res)=>res.json()).then((res)=>{
     console.log(res.items) 
    setData(res.items)
    setLoading(false)
    }).catch((e)=>{
     console.log(e);
     setLoading(false)
    })
  } 

  useEffect(()=>{
     getData()
  },[])
 

  let id=""
  const handelChange=(e)=>{
     let qry=e.target.value
    if(id){
        clearTimeout(id)
    }  
     
   id= setTimeout(()=>{
         getData(qry)
    },1000)
  }

   if(loading){
    return  <Box value={80} mt="20%" ml="45%" >Loading...</Box>
   }

     return  <Box pt="10px" fontFamily={"'Poppins', sans-serif;"} >
              <Box m="auto" border="2px solid black" w="50%"  > <Input type="text" onChange={handelChange}   w="100%"  placeholder="  search Your Book Here..." />  </Box>
    <Box w="100%" bg="#f0f0f0" pt="10px"> <SimpleGrid    columns={[1, 2, 3]} spacing={10} w="80%" m="auto"  >
                 
                
                {bookData?.map((e,i)=>{
                    return   <Box  boxShadow='dark-lg'  bg="white" p="10px"  key={Date.now()+i} > <Card data={e} /> </Box>  
                })}
              
    </SimpleGrid></Box> 
    </Box>
}