import {Routes,Route} from "react-router-dom"
import { Login } from "../AllPages/Login"
import { Signup } from "../AllPages/Signup"
import {  Books } from  "../AllPages/Books"
import { Cart } from "../AllPages/Cart"
import { PrivateRoute } from "../PrivateRoute/PrivateRoute"
import DetailPage from "../AllPages/DetailPage"

export const AllRoutes=()=>{
    return <Routes>
        <Route path="/" element={<Signup/>}/> 
        <Route path="/home" element={<PrivateRoute><Cart/></PrivateRoute>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/book" element={<PrivateRoute><Books/></PrivateRoute>}/>
        <Route path="/book/:id" element={<PrivateRoute><DetailPage/></PrivateRoute>}/>
    </Routes>
}