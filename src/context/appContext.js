import React,{useReducer,useContext,useState} from "react";
import reducer from "./reducer";
import { DISPLAY_ALERT,CLEAR_ALERT } from "./action";


const initialState={
    isLoading:false,
    showAlert:false,
    alertType:'',
    alertText:'',

}

const AppContext= React.createContext();

const AppProvider=({children})=>{
    const[state,dispatch]=useReducer(reducer,initialState)

const displayAlert=()=>{
    dispatch({type:DISPLAY_ALERT})
    clearAlert()
}

const clearAlert=()=>{
setTimeout(()=>{
dispatch({type:CLEAR_ALERT})
},3000)
}

    return(
<AppContext.Provider value={{...state,displayAlert}}>{children}</AppContext.Provider>
);

}
const useAppContext=()=>{
    return useContext(AppContext);
}

export {initialState,useAppContext,AppProvider};