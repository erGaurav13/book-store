import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box,Image,Text,Heading,Textarea, Button } from '@chakra-ui/react'

const DetailPage=()=>{
 const {id}=useParams()
 const [data,setData]=useState()
 const [load,setLoad]=useState(false)
 useEffect(()=>{
  setLoad(true)
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}
    `).then((res)=>res.json()).then((res)=>{
setData(res);
setLoad(false)
    }).catch((e)=>{
      console.log(e);
      setLoad(false)
    })
 },[id])
 
 
 if(load){
  return <Box value={80} mt="20%" ml="45%" >Loading...</Box>
 }

 if(data){
  return <Box w="100%"   bg="#f0f0f0" pt="20px" pl="10%"  > 
  <Box display={"flex"}     w="80%"  >  
    <Box boxShadow='lg' bg="white"  p="1%"><Image src={data?.volumeInfo.imageLinks.thumbnail}/>  </Box>
          <Box boxShadow='lg' bg="white"  p="1%" >

          <Heading as='h1' size='4xl'>Title : {data?.volumeInfo.title}</Heading>
         <Text>Author : {data?.volumeInfo.authors.map((e)=>e+" ")}</Text>
         <Text>Rs {data?.saleInfo.listPrice.amount}</Text>
         <Button w="80%" bg="blue.100" >Add to Cart</Button>
           </Box>
  </Box>
  <Box w="60%" mt="4%">
    Small Description
  <Text noOfLines={[12, 13, 15]} dangerouslySetInnerHTML={{ __html: data?.volumeInfo.description }} >
  
   </Text>
</Box>
</Box>
 }

 
}

export default DetailPage