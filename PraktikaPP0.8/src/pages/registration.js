import React, { useContext, useState } from "react";
import { Card, Container, Form, Button, Col } from 'react-bootstrap'
import { LOGIN_ROUTE, HISTORYREQUEST } from "../utils/consts";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Row from 'react-bootstrap/Row'
import { Context } from "../index";
import { registration } from "../http/userApi";


const Registration = observer(() => {
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.backgroundRepeat = "no-repeat";
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const [email, setEmail] = useState('')
    const [FIO, setFIO] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const click = async () => {
        try {
            const response = await registration(FIO, email, login, password)
            user.setIsAuth(true)
            user.setUser()
            navigate(HISTORYREQUEST)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 74 }}>
            <Card style={{ position: 'fixed', borderRadius: '36px', boxShadow: '43px 45px 36.099998474121094px 22px rgba(0, 0, 0, 0.25)',  borderColor: 'white', width: 969, height: 790, fontFamily: "Abhaya Libre", backgroundColor: '#878787', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="p-3 #FFFAF4">
                <p style={{ fontSize: '48px', display: 'flex', width: '216px', justifyContent: 'center', color: '#FFFFFF', fontWeight: 'bold', letterSpacing: 8.16  }}>
                    Регистрация</p>

                <Form className="d-flex flex-column" style={{}}>
                    <Form.Control
                        style={{ borderRadius: '36px', height: '56px', fontSize: "24px", border: "2px solid", width: '753px', height: '73px', backgroundColor: '#403F3F' }}
                        className="mt-3"
                        size="lg"
                        value={FIO}
                        placeholder="Введите ваше ФИО..."
                        onChange={e => setFIO(e.target.value)} />

                    <Form.Control
                        style={{ borderRadius: '36px', height: '56px', width: '753px', fontSize: "24px", border: "2px solid", height: '73px', backgroundColor: '#403F3F' }}
                        className="mt-3"
                        size="lg"
                        type="email"
                        value={email}
                        placeholder="Введите вашу почту..."
                        onChange={e => setEmail(e.target.value)} />

                    <Form.Control
                        style={{ borderRadius: '36px', height: '56px', fontSize: "24px", border: "2px solid", width: '753px', height: '73px', backgroundColor: '#403F3F' }}
                        className="mt-3"
                        size="lg"
                        value={login}
                        placeholder="Ваш логин..."
                        onChange={e => setLogin(e.target.value)} />

                    <Form.Control
                        style={{ borderRadius: '36px', height: '56px', fontSize: "24px", border: "2px solid", width: '753px', height: '73px', backgroundColor: '#403F3F' }}
                        className="mt-3"
                        size="lg"
                        type="password"
                        value={password}
                        placeholder="Ваш пароль..."
                        onChange={e => setPassword(e.target.value)} />
                        
                    <Row style={{ fontFamily: "Abhaya Libre" }}>
                        <Col className="d-flex justify-content-between mt-3 pl-3 pr-3">
                            <NavLink to={LOGIN_ROUTE} style={{color: '#2D34B9', fontSize: 32, fontFamily: 'SeoulHangang CEB', letterSpacing: 5.44}}> Авторизоваться </NavLink>
                            <Button
                                style={{width: 361, height: 100, background: '#F56F10', boxShadow: '0px 0px 12.899999618530273px 18px rgba(0, 0, 0, 0.25) inset', borderRadius: 88}}
                                variant={"outline-dark"}
                                size="lg"
                                onClick={click}>
                                <p style={{color: '#403F3F', fontSize: 30, fontFamily: 'SeoulHangang CEB', fontWeight: '400', letterSpacing: 4.08, wordWrap: 'break-word'}}>
                                Зарегистрироваться
                                </p>
                            </Button>
                        </Col></Row></Form> </Card></Container>);
});


export default Registration;