import React,{useReducer,useContext,useState} from "react";
import reducer from "./reducer";
import axios from 'axios'
import { LOGOUT_USER,HANDLE_CHANGE,
    CREATE_CERERE_BEGIN,
    CREATE_CERERE_ERROR,
    CREATE_CERERE_SUCCESS,
    CREATE_CONTRACT_BEGIN,
    CREATE_CONTRACT_ERROR,
    CREATE_CONTRACT_SUCCESS,
    SIDEBAR_CLOSE,
    SIDEBAR_OPEN,
     DISPLAY_ALERT,
     CLEAR_ALERT,
     REGISTER_USER_BEGIN,
     REGISTER_USER_ERROR,
     REGISTER_USER_SUCCESS,
    LOGIN_USER_BEGIN,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS } from "./action";

const token=localStorage.getItem('token')
const user=localStorage.getItem('user')

const initialState={
    isLoading:false,
    showAlert:false,
    alertType:'',
    alertText:'',
    token:token,
    user:user? JSON.parse(user):null,
    name:'',
    email:'',
    lastName:'',
    address:'',
    tel:'',
    sign:'',
    studyYear:'',
    situation:'',
    grade:'',
    date:'',
    signContract:'',
        dateI:'',
        dateF:'',
        dateId:'',
        caminNumber:'',
        caminAddress:'',
    nameContract:'',
        dadName:'',
        momName:'',
        school:'',
        studyYearContract:'',
        addressContract:'',
        ci:'',
        numberCI:'',
        ciAddress:'',
        dateContract:'',
        cnpContract:'',
        telContract:'',
        emailContract:'',
        taxe:'',

}

const AppContext= React.createContext();

const AppProvider=({children})=>{
    const[state,dispatch]=useReducer(reducer,initialState)
const openSidebar=()=>{
    dispatch({type:SIDEBAR_OPEN})
  }
  const closeSidebar=()=>{
    dispatch({type:SIDEBAR_CLOSE})
  }
const displayAlert=()=>{
    dispatch({type:DISPLAY_ALERT})
    clearAlert()
};

const clearAlert=()=>{
setTimeout(()=>{
dispatch({type:CLEAR_ALERT})
},3000)
};
const addUserToLocalStorage=({user,token})=>{
    localStorage.setItem('user',JSON.stringify(user))
    localStorage.setItem('token',token)
}
const removeUserFromLocalStorage=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
}

const registerUser=async(currentUser)=>{
    dispatch({type:REGISTER_USER_BEGIN})
    try {
        const response=await axios.post('/api/v1/auth/register',
        currentUser)
        console.log(response);
        const{user,token}=response.data;
        dispatch({type:REGISTER_USER_SUCCESS,
            payload:{user,token},
        })
        addUserToLocalStorage({token,user})
    } catch (error) {
        console.log(error.response);
        dispatch({type:REGISTER_USER_ERROR,
            payload:{msg:error.response.data.msg},})
    }
    clearAlert()

}
const loginUser=async(currentUser)=>{
    dispatch({type:LOGIN_USER_BEGIN})
    try {
        const response=await axios.post('/api/v1/auth/login',currentUser)
        const{user,token}=response.data
        dispatch({type:LOGIN_USER_SUCCESS,payload:{user,token}})
        addUserToLocalStorage({user,token})
    } catch (error) {
        console.log(error.response);
        dispatch({type:LOGIN_USER_ERROR,payload:{msg:error.response.data.msg}})
    }
    clearAlert()
}
const logoutUser=()=>{
dispatch({type:LOGOUT_USER})
removeUserFromLocalStorage()
}
const cerers=async()=>{
            dispatch({type:CREATE_CERERE_BEGIN})

    try {
        const{name,lastName,email,tel,grade,
        studyYear,address,date,sign,situation}=state
        const response=await axios.post('/api/v1/cerers',{
            name,lastName,tel,grade,email,studyYear,address,date,sign,situation,
        })
        dispatch({type:CREATE_CERERE_SUCCESS})
        } catch (error) {
            if(error.response.status){
                dispatch({type:CREATE_CERERE_ERROR,
                payload:{msg:error.response.data.msg},})
            }
        clearAlert()
    }
}
const contracts=async()=>{
            dispatch({type:CREATE_CONTRACT_BEGIN})

    try {
        const{nameContract,
        dadName,
        momName,
        school,
        studyYearContract,
        addressContract,
        ci,
        numberCI,
        ciAddress,
        dateContract,
        cnpContract,
        telContract,
        emailContract,
        taxe,
        signContract,
        dateI,
        dateF,
        caminNumber,
        caminAddress,
        }=state
        const response=await axios.post('/api/v1/contracts',{
            nameContract,
        dadName,
        momName,
        school,
        studyYearContract,
        addressContract,
        ci,
        numberCI,
        ciAddress,
        dateContract,
        cnpContract,
        telContract,
        emailContract,
        taxe,
        signContract,
        dateI,
        dateF,

        caminNumber,
        caminAddress,
        })
        dispatch({type:CREATE_CONTRACT_SUCCESS})
        } catch (error) {
            if(error.response.status){
                dispatch({type:CREATE_CONTRACT_ERROR,
                payload:{msg:error.response.data.msg},})
            }
        clearAlert()
    }
}
const handleChange=({name,value})=>{
    dispatch({type:HANDLE_CHANGE,payload:{name,value}})
}

    return(
<AppContext.Provider value={{...state,displayAlert,contracts,
registerUser,loginUser,logoutUser,openSidebar,closeSidebar,handleChange,cerers}}>
    {children}
</AppContext.Provider>
);

}
const useAppContext=()=>{
    return useContext(AppContext);
}

export {initialState,useAppContext,AppProvider};