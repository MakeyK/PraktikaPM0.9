import React, { useContext } from "react"; 
import {Routes, Route, Navigate} from 'react-router-dom'  
import { authRoutes, publicRoutes } from "../routes"; 
import {LOGIN_ROUTE, REGISTRATION_ROUTE, HISTORYREQUEST, NEWREQUEST, ADMIN_ROUTE} from "../utils/consts"; 
import { Context } from "../index"; 

const AppRouter = () => { 
    const {user} = useContext(Context)
    
    // let isAuth = true 
    let isAuth = user.getisAuth()
    
    return(
         
    <Routes> 
        <Route path="*" element = {<Navigate to={REGISTRATION_ROUTE} />} replace />  
        {isAuth && publicRoutes.map(({path, Component}) => 
            <Route key = {path} path ={path} element = {<Component/>} exact/> 
    )} 
        {publicRoutes.map(({path, Component}) => 
        <Route key = {path} path ={path} element = {<Component/>} exact/> 
    )} 
        <Route path="*" element = {<Navigate to={REGISTRATION_ROUTE} />} replace />  
    <Route>
        {publicRoutes.map(({path, Component}) =>
        <Route  path="*" element = {<Navigate> to={HISTORYREQUEST}</Navigate>} replace/>
        
    )} 
    </Route>
    <Route>
        {publicRoutes.map(({path, Component}) =>
        <Route  path="*" element = {<Navigate> to={NEWREQUEST}</Navigate>} replace/>
        
    )} 
    </Route>
    <Route>
        {publicRoutes.map(({path, Component}) =>
        <Route  path="*" element = {<Navigate> to={ADMIN_ROUTE}</Navigate>} replace/>
        
    )} 
    </Route>
    <Route>
        {publicRoutes.map(({path, Component}) =>
        <Route  path="*" element = {<Navigate> to={LOGIN_ROUTE}</Navigate>} replace/>
        
    )} 
    </Route>
    </Routes> 
    ) 
};
export default AppRouter;