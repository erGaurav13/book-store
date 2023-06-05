import { Box,Input,Button,ChakraProvider} from "@chakra-ui/react"
import { SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState  } from "react"
 
import Card from "../Component/Card"; 
import { Footer } from "../Component/Footer";

export const Books=()=>{
 
 
  const [bookData,setData]=useState([]);
  const [loading,setLoading]=useState(false)

//  to get data from api
  const getData=(querry="javascript")=>{
    setLoading(true)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${querry}t&filter=paid-ebooks&key=AIzaSyCo5dRloWorweRBz_uzpDh6MoI7bKLsfDA&maxResults=40`).
    then((res)=>res.json()).then((res)=>{
    //  console.log(res.items) 
    setData(res.items)
    setLoading(false)
    }).catch((e)=>{
    //  console.log(e);
     setLoading(false)
    })
  } 

  useEffect(()=>{
     getData()
  },[])
 
// debounce for search qry
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
// loading condition
   if(loading){
    return  <Box 
    value={80} 
    w="100%" 
    h="100vh" 
    display={"flex"} 
    justifyContent={"center"} 
    alignItems={"center"} 
    fontSize={"24px"} >
         {/* Loading Indicator */}
        Loading...</Box>
   }

     return  <Box
             pt="10px"
             fontFamily={"'Poppins', sans-serif;"} 
            >

              <Box 
              m="auto" 
              border="2px solid black" 
              w="50%"  >
                {/* Search Query Here Using Debounce  */}
                 <Input type="text" onChange={handelChange}  
                   w="100%"  placeholder="  search Your Book Here..." />
                  </Box>

    <Box w="100%" bg="#f0f0f0" pt="10px">
         {/*For displaying Book data  */}
    <SimpleGrid    columns={[1, 2, 3]} spacing={10} w="80%" m="auto"  >             
                {/* Render Book Items */}
                {bookData?.map((e,i)=>{
                    return   <Box  boxShadow='dark-lg'  bg="white" 
                    p="10px"  key={Date.now()+i} > 
                    <Card data={e} /> 
                    </Box>  
                })}
              
    </SimpleGrid>
    </Box> 
    <ChakraProvider>
    <Footer/>
    </ChakraProvider>
    </Box>
}