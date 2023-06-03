import axios from "axios"
import { GET_BLOGS_FAILED, GET_BLOGS_REQUEST, GET_BLOGS_SUCESS, POST_BLOGS_FAILED, POST_BLOGS_REQUEST, POST_BLOGS_SUCESS } from "./Blog.Action.Types";

let token=localStorage.getItem("token");
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
console.log(token,"SS")
let baseurl="http://localhost:8080"
export const getBlogs=()=>async (dispatch)=>{
     try{
         dispatch({type:GET_BLOGS_REQUEST})
         let data= await axios.get(`${baseurl}/api/blog/`);
         console.log(data)
         dispatch({type:GET_BLOGS_SUCESS,payload:data.data.post})
     }catch(e){
        dispatch({type:GET_BLOGS_FAILED})
     }
}


export const postBlogs=(info)=>async (dispatch)=>{
    try{
        dispatch({type:POST_BLOGS_REQUEST})
        let data= await axios.post(`${baseurl}/api/blog/`,info);
        // console.log(data.data.message)
         alert(data.data.message)
        dispatch({type:POST_BLOGS_SUCESS,payload:data.data.post})
    }catch(e){
        alert(e.response.data.message)
       dispatch({type:POST_BLOGS_FAILED})
    }
}