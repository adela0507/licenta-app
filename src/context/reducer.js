import React from 'react'
import { LOGOUT_USER,
    CREATE_CERERE_BEGIN,
    CREATE_CERERE_ERROR,
    HANDLE_CHANGE,
    CREATE_CONTRACT_BEGIN,
    CREATE_CONTRACT_ERROR,
    CREATE_CONTRACT_SUCCESS,
    CREATE_CERERE_SUCCESS,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_ERROR,
    GET_SINGLE_PRODUCT_SUCCESS,
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
     SET_EDIT_CERERI,
    SET_EDIT_CONTRACT,
GET_CERERI_BEGIN,
GET_CERERI_SUCCESS,
GET_CONTRACT_BEGIN,
GET_CONTRACT_SUCCESS,
EDIT_CERERE_BEGIN,
EDIT_CERERE_ERROR,
EDIT_CERERE_SUCCESS,
EDIT_CONTRACT_BEGIN,
EDIT_CONTRACT_ERROR,
EDIT_CONTRACT_SUCCESS, } from "./action";
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
    if(action===GET_SINGLE_PRODUCT_BEGIN){
        return {
            ...state,
        }
    }
    if(action===GET_SINGLE_PRODUCT_ERROR){
        
            return{
            ...state,
            showAlert:true,
            alertType:'danger',
            alertText:action.payload.msg,
        }
        
    }
    if(action===GET_SINGLE_PRODUCT_SUCCESS){
        return{
            ...state,
           
            showAlert:true,
            alertType:'success',
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
     if(action.type===CREATE_CONTRACT_BEGIN)
    {
        return{
            ...state,
            
        }
    }
    if(action.type===CREATE_CONTRACT_SUCCESS)
    {
        return{
            ...state,
            isLoading:false,
            showAlert:true,
            alertType:'success',
            alertText:'CERERE CREATA',
        }
    }
    if(action.type===CREATE_CONTRACT_ERROR)
    {
        return{
            ...state,
            isLoading:false,
            showAlert:true,
            alertType:'danger',
            alertText:action.payload.msg,
        }
    }
    if(action.type===EDIT_CERERE_BEGIN)
    {
        return{
            ...state,
            isEditing:true,
            
        }
    }
    if(action.type===EDIT_CERERE_SUCCESS)
    {
        return{
            ...state,
            isLoading:false,
            showAlert:true,
            alertType:'success',
            alertText:'CERERE ACTUALIZATA',
        }
    }
    if(action.type===EDIT_CERERE_ERROR)
    {
        return{
            ...state,
            isLoading:false,
            showAlert:true,
            alertType:'danger',
            alertText:action.payload.msg,
        }
    }
    if(action.type===EDIT_CONTRACT_BEGIN)
    {
        return{
            ...state,
            
        }
    }
    if(action.type===EDIT_CONTRACT_SUCCESS)
    {
        return{
            ...state,
            isLoading:false,
            showAlert:true,
            alertType:'success',
            alertText:'CONTRACT ACTUALIZATA',
        }
    }
    if(action.type===EDIT_CONTRACT_ERROR)
    {
        return{
            ...state,
            isLoading:false,
            showAlert:true,
            alertType:'danger',
            alertText:action.payload.msg,
        }
    }
    if(action.type===GET_CERERI_BEGIN){
        return{
            ...state,
            showAlert:false,
        }
    }
    if(action.type===GET_CERERI_SUCCESS){
        return {
            ...state,
            showAlert:true,
            cererss:action.payload.cererss,
            totalCerers:action.payload.totalCerers,
            alertType:'success',
            alertText:'toate cererile',
        }
    }
    if(action.type===GET_CONTRACT_BEGIN){
        return{
            ...state,
            showAlert:false,
        }
    }
    if(action.type===GET_CONTRACT_SUCCESS){
        return {
            ...state,
            showAlert:true,
            contractss:action.payload.contractss,
            totalContractss:action.payload.totalContractss,
            alertType:'success',
            alertText:'toate cererile',
        }
    }
    if(action.type===SET_EDIT_CERERI){
        const cereri=state.cererss.find((cereri)=>cereri._id===action.payload.id)
        const {_id,grade,email,name}=cereri
        return{
            ...state,
            idEditing:true,
            editCereriId:_id,
            grade,
            email,
            name,
        }
    }
    if(action.type===SET_EDIT_CONTRACT){
        const contract=state.contracts.find((contracte)=>contracte._id===action.payload.id)
        const {_id,emailContract,nameContract}=contract
        return{
            ...state,
            editContracteId:_id,
            emailContract,
            nameContract,

        }
    }
      throw new Error(`no such action:${action.type}`)

}

export default reducer
