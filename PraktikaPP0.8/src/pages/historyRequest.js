import React, { useContext, useState, useEffect } from "react";
import { Card, Container, Button } from 'react-bootstrap'
import { ADMIN_ROUTE, NEWREQUEST } from "../utils/consts";
import { useLocation, useNavigate } from "react-router-dom";
import { login, registration, getAll } from "../http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import UserRequest from "../store/userRequest";
import NavBar from "../components/NavBar";
import RequestList from "../components/requestList";

const HistoryRequest = observer(() => {
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPositionY = "450px"
  document.body.style.backgroundColor = "#DBDBDB"
  const { user } = useContext(Context)
  const { UserRequest } = useContext(Context)
  const navigate = useNavigate()
  const location = useLocation()
  const newrequest = async () => {
    let newrequest = `newrequest`
    navigate(ADMIN_ROUTE)
  }

  const getAllRequest = async () => {
    try {
      const response = await getAll()
      return response
    } catch (error) {
      alert(error)
    }
  }

   useEffect(() => {
     getAllRequest().then(data => { UserRequest.setUserRequest(data)})
   }, [])

  return (
    <Container className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 1 }}>
      <Card style={{
        position: 'fixed', borderRadius: '36px', borderColor: 'white', width: 1796, height: 790, marginTop:'150px',
        fontFamily: 'SeoulHangang CEB', backgroundColor: '#878787', display: 'flex', justifyContent: 'center', alignItems: 'center'
      }} className="p-3 #FFFAF4">

        {/* Палки горизонтальные
        <div style={{ width: 1730, height: 16, left: 33, top: 218, position: 'absolute', background: '#676767', borderRadius: 93 }} />

        Палки вертикальные
        <div style={{ width: 98, height: 16, left: 137, top: 234, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: '#676767', borderRadius: 93 }} />
        <div style={{ width: 98, height: 16, left: 523, top: 234, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: '#676767', borderRadius: 93 }} />
        <div style={{ width: 88, height: 16, left: 955, top: 224, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: '#676767', borderRadius: 93 }} />
        <div style={{ width: 85, height: 16, left: 1407, top: 221, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: '#676767', borderRadius: 93 }} />


        Атрибуты
        <div style={{ left: 68, top: 146, position: 'absolute', color: 'white', fontSize: 48, fontFamily: 'SeoulHangang CEB', letterSpacing: 8.16 }}>№</div>
        <div style={{ left: 276, top: 146, position: 'absolute', color: 'white', fontSize: 48, fontFamily: 'SeoulHangang CEB', letterSpacing: 8.16 }}>Тема</div>
        <div style={{ left: 599, top: 146, position: 'absolute', color: 'white', fontSize: 48, fontFamily: 'SeoulHangang CEB', letterSpacing: 8.16 }}>Сообщение</div>
        <div style={{ left: 1021, top: 146, position: 'absolute', color: 'white', fontSize: 48, fontFamily: 'SeoulHangang CEB', letterSpacing: 8.16 }}>Дата и время</div>
        <div style={{ left: 1508, top: 149, position: 'absolute', color: 'white', fontSize: 48, fontFamily: 'SeoulHangang CEB', letterSpacing: 8.16 }}>Статус</div>
        <div style={{ left: 688, top: 40, position: 'absolute', color: 'white', fontSize: 48, fontFamily: 'SeoulHangang CEB', letterSpacing: 8.16 }}>История обращений</div>  */}

        <RequestList user={UserRequest.getUserRequest()}/>

        <Button
          style={{ width: 361, position: 'relative', marginTop: '15%', height: 130, background: '#F56F10', boxShadow: '0px 0px 12.899999618530273px 18px rgba(0, 0, 0, 0.25) inset', borderRadius: 88 }}
          size="lg"
          onClick={newrequest}>
          <div style={{
            width: 273, marginLeft: '30px', textAlign: 'center', color: '#403F3F',
            fontSize: 32, fontFamily: 'SeoulHangang CEB', letterSpacing: 5.44
          }}>
            Создать новое обращение</div>
        </Button>
      </Card><NavBar />
    </Container>);
});


export default HistoryRequest;