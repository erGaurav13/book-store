import { useEffect } from 'react';
import {useSelector} from 'react-redux'
import {useNavigate ,Navigate} from "react-router-dom";

export const PrivateRoute=({children})=>{
const {token,isAuth}=useSelector(state=>state.AuthReducer)
console.log(isAuth,token)
const navigate=useNavigate()
  useEffect(() => {
    if (!isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  return isAuth ? children : <Navigate to="/login" replace />;

}