import React, { useContext, useState } from "react";
import { Card, Container, Form, Button } from 'react-bootstrap'
import { HISTORYREQUEST } from "../utils/consts";
import { useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import NavBar from "../components/NavBar";
import { createRequest } from "../http/userApi"

const Admin = observer(() => {
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPositionY = "450px"
  document.body.style.backgroundColor = "#DBDBDB"
  const { user } = useContext(Context)
  const [tema, setTema] = useState('')
  const [description_problem, setDescription_problem] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const click = async () => {
    try {
        const response = await createRequest(tema, description_problem)
        console.log(tema)
        navigate(HISTORYREQUEST)
    } catch (error) {
        alert(error)
    }
}


  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 1 }}>
      <Card style={{
        position: 'fixed', marginTop: '160px', borderRadius: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'150px',
        fontFamily: 'SeoulHangang CEB', borderColor: 'white', width: '1796px', height: '790px', backgroundColor: '#878787',
        boxShadow: '43px 45px 36.099998474121094px 22px rgba(0, 0, 0, 0.25)'
      }} className="p-3 #FFFAF4">
        <p style={{ fontSize: '48px', display: 'flex', justifyContent: 'center', color: '#FFFFFF', fontWeight: 'bold', letterSpacing: 8.16, }}>
          Новое обращение</p>

        <Form className="d-flex flex-column">
          <div style={{ color: 'white', fontSize: '24px', fontFamily: 'SeoulHangang CEB', letterSpacing: 4.08 }}>Тема</div>
          <Form.Control
            style={{ borderRadius: '36px', height: '56px', fontSize: "24px", border: "2px solid", width: '1596px', height: '108px', backgroundColor: '#403F3F' }}
            className="mt-3"
            size="lg" 
            onChange={e => setTema(e.target.value)}/>
          <div style={{ color: 'white', fontSize: '24px', fontFamily: 'SeoulHangang CEB', letterSpacing: 4.08, marginTop: '40px' }}>Объясните проблему</div>
          <Form.Control
            style={{ borderRadius: '36px', height: '56px', fontSize: "24px", border: "2px solid", width: '1596px', height: '108px', backgroundColor: '#403F3F', height: '300px' }}
            className="mt-3"
            size="lg"
            onChange={e => setDescription_problem(e.target.value)}/>
          <div style={{ marginLeft: '30px' }}>

            <Button
              style={{
                width: 361, height: 100, background: '#F56F10', marginTop: '30px', marginLeft: '600px',
                boxShadow: '0px 0px 12.899999618530273px 18px rgba(0, 0, 0, 0.25) inset', borderRadius: 88}}
              size="lg"
              onClick={click}>
              
              <p style={{
                color: '#403F3F', fontSize: 32, fontFamily: 'SeoulHangang CEB',
                fontWeight: '400', letterSpacing: 5.44, marginTop: '10px'}}>
                Отправить</p>
            </Button>
          </div>
          <NavBar /></Form></Card></Container>);
});


export default Admin;