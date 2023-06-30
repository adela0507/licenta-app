import React,{useReducer,useContext,useState, useEffect} from "react";
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
    LOGIN_USER_SUCCESS,
    GET_CERERI_BEGIN,
    GET_CERERI_SUCCESS,
    GET_CONTRACT_BEGIN,
    GET_CONTRACT_SUCCESS,
    DELETE_CERERI_BEGIN,
    DELETE_CONTRACT_BEGIN,
 } from "./action";

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
    situationOption:['Buget','Taxă'],
    situation:'Buget',
    studentOption:['Student român(nivel de licenţă,master)',
    'Student român(nivel de licenţă,master) copil de cadru didactic sau cadru didactic auxiliar aflat în activitate sau pensionat din sistemul de învăţământ',
'Student român orfan de unul sau ambii părinţi, student provenit din casele de copii sau plasament familial, student bursier CEEPUS',
'Student al Uniunii Europene, Spaţiul Economic European şi Confederaţia Elveţiană',
'Student străin bursier al statului român, student străin cu acorduri interruniversitare, interguvernamentale',
'Student străin bursier, fără bursă, student străin cu acorduri interruniversitare,interguvernamentale pe care universitatea are obligaţia să-l cazeze în aceleaşi condiţii ca şi pe studenţii români',
'Student străin de origine etnică română, student cetăţean român cu domiciliul în străinătate',
'Student străin în baza acordurilor interuniversitare, interdepartamentale,programe mobilităţi (Erasmus, Atlantis, Tempus, DAAD, Fullbright etc.) ',
'Student străin necomunitar, student străin pe cont propriu valutar, alte forme de pregătire universitară, alte categorii de persoane',
'Student cu dizabilităţi'],
 student:'Student român(nivel de licenţă,master)',
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
    singleCerere:[],
    totalSingleCerere:0,
    cererss:[],
    totalCerers:0,
    contractss:[],
    totalContractss:0,
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
        await axios.post('/api/v1/cerers',{
            name,lastName,tel,grade,email,studyYear,address,date,sign,situation,
        })
        dispatch({type:CREATE_CERERE_SUCCESS})
        } catch (error) {
            if(error.response.status===401) return
                dispatch({type:CREATE_CERERE_ERROR,
                payload:{msg:error.response.data.msg},})
            }
        clearAlert()
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
        student
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
        student,
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
    dispatch({type:HANDLE_CHANGE,
        payload:{name,value},})
}
const authFetch=axios.create({
    baseURL:'/api/v1',
})
const getCerers=async()=>{
       let url=`/cerers`

                dispatch({type:GET_CERERI_BEGIN})
    try {
     const {data}=await authFetch(url);
        const {cererss,totalCerers}=data
        //  const response=await axios.get('/api/v1/cerers',{ cererss,totalCerers})
        dispatch({type:GET_CERERI_SUCCESS,payload:{
            cererss,
            totalCerers,
        }})
    } catch (error) {
        console.log(error.response);
    }
    clearAlert()
}

const deleteCerers=async(cerereId)=>{
    dispatch({type:DELETE_CERERI_BEGIN})
    try {
     await authFetch.delete(`/cerers/${cerereId}`);
     getCerers()
    } catch (error) {
        console.log(error.response);
    }
    clearAlert()
}
const getContracts=async()=>{
       let url=`/contracts`

                dispatch({type:GET_CONTRACT_BEGIN})
    try {
     const {data}=await authFetch(url);
        const {contractss,totalContractss}=data
        dispatch({type:GET_CONTRACT_SUCCESS,payload:{
            contractss,
            totalContractss,
        }})
    } catch (error) {
        console.log(error.response);
        logoutUser()

    }
    clearAlert()
}
const deleteContracts=async(contractId)=>{
    dispatch({type:DELETE_CONTRACT_BEGIN})
    try {
     await authFetch.delete(`/contracts/${contractId}`);
     getContracts()
    } catch (error) {
        console.log(error.response);
    }
    clearAlert()
}
    return(
<AppContext.Provider value={{...state,
deleteCerers,
deleteContracts,
getCerers,
getContracts,
displayAlert,
contracts,
registerUser,
loginUser,logoutUser,openSidebar,closeSidebar,handleChange,cerers}}>
    {children}
</AppContext.Provider>
);

}
const useAppContext=()=>{
    return useContext(AppContext);
}

export {initialState,useAppContext,AppProvider};