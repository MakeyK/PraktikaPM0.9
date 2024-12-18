import React, { useContext, useState } from "react";
import { Card, Container, Form, Button, Col } from 'react-bootstrap'
import { HISTORYREQUEST, REGISTRATION_ROUTE } from "../utils/consts";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import Row from 'react-bootstrap/Row'
import { logins } from '../http/userApi'


const Authorization = observer(() => {
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundColor = "#FFFFFF";
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const click = async () => {
        try {
            const response = await logins(login, password)
            user.setIsAuth(true)
            user.setUser()
            navigate(HISTORYREQUEST)
        } catch (error) {
            alert(error)
        }
    }
    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 74 }}>
            <Card style={{ position: 'fixed', boxShadow: '43px 45px 36.099998474121094px 22px rgba(0, 0, 0, 0.25)', borderRadius: 49, borderColor: 'white', width: 969, height: 616, fontFamily: 'SeoulHangang CEB', backgroundColor: '#878787', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="p-3 #FFFAF4">
                <p style={{ fontSize: '48px', display: 'flex', width: '216px', justifyContent: 'center', color: '#FFFFFF', fontWeight: 'bold', letterSpacing: 8.16 }}>
                    Авторизация</p>
                <Form className="d-flex flex-column">

                    <Form.Control
                        style={{ borderRadius: 88, height: '56px', fontSize: "24px", border: "2px solid", width: '753px', height: '73px', backgroundColor: '#403F3F' }}
                        className="mt-3"
                        size="lg"
                        value={login}
                        placeholder="Ваш логин..."
                        onChange={e => setLogin(e.target.value)} />

                    <Form.Control
                        style={{ borderRadius: 88, height: '56px', fontSize: "24px", border: "2px solid", width: '753px', height: '73px', backgroundColor: '#403F3F' }}
                        className="mt-3"
                        size="lg"
                        type="password"
                        value={password}
                        placeholder="Ваш пароль..."
                        onChange={e => setPassword(e.target.value)} />

                    <Row style={{ fontFamily: "Abhaya Libre" }}>
                        <Col className="d-flex justify-content-between mt-3 pl-3 pr-3">
                            <NavLink to={REGISTRATION_ROUTE} style={{ color: '#2D34B9', fontFamily: "Abhaya Libre", fontSize: '32px', letterSpacing: 5.44 }}> Регистрация </NavLink>
                            <Button
                                style={{ width: 199, height: 100, background: '#F56F10', boxShadow: '0px 0px 12.899999618530273px 18px rgba(0, 0, 0, 0.25) inset', borderRadius: 88 }}
                                variant={"outline-dark"}
                                size="lg"
                                onClick={click}>
                                <p style={{ color: '#403F3F', fontSize: 36, fontFamily: 'SeoulHangang CEB', fontWeight: '400', letterSpacing: 6.12}}>
                                    Войти</p>
                            </Button> </Col></Row></Form></Card></Container>);
});

export default Authorization;