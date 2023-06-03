import {legacy_createStore,combineReducers,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk"
import { AuthReducer } from "./AuthRedux/Auth.Reducer";
import { BlogReducer } from "./BlogRedux/Blog.Reducer";

export const store=legacy_createStore(combineReducers({
    AuthReducer:AuthReducer,
    BlogReducer:BlogReducer
}),compose(applyMiddleware(thunk)))