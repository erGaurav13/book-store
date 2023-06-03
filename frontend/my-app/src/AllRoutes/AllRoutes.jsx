import {Routes,Route} from "react-router-dom"
import { Login } from "../AllPages/Login"
import { Signup } from "../AllPages/Signup"
import {  Books } from  "../AllPages/Books"
import { Home } from "../AllPages/Home"
import { PrivateRoute } from "../PrivateRoute/PrivateRoute"
import DetailPage from "../AllPages/DetailPage"

export const AllRoutes=()=>{
    return <Routes>
        <Route path="/" element={<Signup/>}/> 
        <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/blog" element={<PrivateRoute><Books/></PrivateRoute>}/>
        <Route path="/blog/:id" element={<DetailPage/>}/>
    </Routes>
}