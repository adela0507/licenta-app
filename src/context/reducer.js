import React from 'react'
import { LOGOUT_USER,
    CREATE_CERERE_BEGIN,
    CREATE_CERERE_ERROR,
    HANDLE_CHANGE,
    CREATE_CERERE_SUCCESS,
    SIDEBAR_CLOSE,SIDEBAR_OPEN, DISPLAY_ALERT,CLEAR_ALERT,REGISTER_USER_BEGIN,REGISTER_USER_ERROR,REGISTER_USER_SUCCESS,LOGIN_USER_BEGIN,LOGIN_USER_ERROR,LOGIN_USER_SUCCESS } from "./action";
import { initialState } from './appContext';

const reducer = (state,action) => {
    if(action.type===SIDEBAR_OPEN)
  {
    return{...state,isSidebarOpen:true}
  }
  if(action.type===SIDEBAR_CLOSE)
  {
    return{...state,isSidebarOpen:false}
  }
  if(action.type===DISPLAY_ALERT)
    {
        return {...state,
            showAlert:true,
            alertType:'danger',
            alertText:'Te rog completeaza toate valorile!',
        }
    }
    if(action.type===CLEAR_ALERT)
    {
        return {...state,
            showAlert:false,
            alertType:'',
            alertText:'',
        }
    }
    if(action.type===REGISTER_USER_BEGIN){
        return{
            ...state,
        }
    }
    if(action.type===REGISTER_USER_SUCCESS){
        return{
            ...state,
            token:action.payload.token,
            user:action.payload.user,
            showAlert:true,
            alertType:'success',
            alertText:'Utilizator creat',
        }
    }
    if(action.type===REGISTER_USER_ERROR){
        return{
            ...state,
            showAlert:true,
            alertType:'danger',
            alertText:action.payload.msg,
        }
    }
    if(action.type===LOGIN_USER_BEGIN)
    {
        return{
            ...state,
            
        }
    }
    if(action.type===LOGIN_USER_SUCCESS)
    {
        return{
            ...state,
            isLoading:false,
            token:action.payload.token,
            user:action.payload.user,
            userLocation:action.payload.location,
            jobLocation:action.payload.location,
            showAlert:true,
            alertType:'success',
            alertText:'user conectat',
        }
    }
    if(action.type===LOGIN_USER_ERROR)
    {
        return{
            ...state,
            isLoading:false,
            showAlert:true,
            alertType:'danger',
            alertText:action.payload.msg,
        }
    }
    if(action.type===LOGOUT_USER){
        return {
            ...initialState,
            user:null,
            token:null,
            
        }
    }
    if(action.type===HANDLE_CHANGE)
    {
        return{
            ...state,
            [action.payload.name]:action.payload.value,
        }
    }
    if(action.type===CREATE_CERERE_BEGIN)
    {
        return{
            ...state,
            
        }
    }
    if(action.type===CREATE_CERERE_SUCCESS)
    {
        return{
            ...state,
            isLoading:false,
            showAlert:true,
            alertType:'success',
            alertText:'CERERE CREATA',
        }
    }
    if(action.type===CREATE_CERERE_ERROR)
    {
        return{
            ...state,
            isLoading:false,
            showAlert:true,
            alertType:'danger',
            alertText:action.payload.msg,
        }
    }
      throw new Error(`no such action:${action.type}`)

}

export default reducer
