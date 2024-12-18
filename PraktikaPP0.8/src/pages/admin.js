import React, { useContext, useState } from "react";
import { Card, Container, Form, Button } from 'react-bootstrap'
import { ADMIN_ROUTE } from "../utils/consts";
import { useLocation, useNavigate } from "react-router-dom";
import { login, registration } from "../http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import Dropdown from 'react-bootstrap/Dropdown';
import NavBar from "../components/NavBar";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
const NewRequest = observer(() => {
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPositionY = "450px"
    document.body.style.backgroundColor = "#DBDBDB"
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const [adress, setAdress] = useState('')
    const [phone, setPhone] = useState('')
    const admin = async () => {
        let admin = `admin`
        navigate(ADMIN_ROUTE)
    }
    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 1 }}>
            <Card style={{
                position: 'fixed', borderRadius: '36px', borderColor: 'white', width: 1796, height: 790, marginTop:'150px',
                fontFamily: "Abhaya Libre", backgroundColor: '#878787', display: 'flex', justifyContent: 'center', alignItems: 'center',
                boxShadow: '43px 45px 36.099998474121094px 22px rgba(0, 0, 0, 0.25)'
            }} className="p-3 #FFFAF4">
                <p style={{ left: 688, top: 40, position: 'absolute', color: 'white', fontSize: 48, fontFamily: 'SeoulHangang CEB', fontWeight: '400', letterSpacing: 8.16 }}>Админ панель</p>

                {/* Палки горизонтальные */}
                <div style={{ width: 1341, height: 16, left: 33, top: 218, position: 'absolute', background: '#676767', borderRadius: 93 }} />

                {/* Палки вертикальные */}
                <div style={{ width: 98, height: 16, left: 137, top: 234, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: '#676767', borderRadius: 93 }} />
                <div style={{ width: 98, height: 16, left: 310, top: 234, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: '#676767', borderRadius: 93 }} />
                <div style={{ width: 88, height: 16, left: 670, top: 224, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: '#676767', borderRadius: 93 }} />
                <div style={{ width: 85, height: 16, left: 1090, top: 221, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', background: '#676767', borderRadius: 93 }} />



                {/* Атрибуты */}
                <div style={{ left: 68, top: 146, position: 'absolute', color: 'white', fontSize: 48, fontFamily: 'SeoulHangang CEB', letterSpacing: 8.16 }}>№</div>
                <div style={{ left: 171, top: 146, position: 'absolute', color: 'white', fontSize: 48, fontFamily: 'SeoulHangang CEB', letterSpacing: 8.16 }}>Тема</div>
                <div style={{ left: 350, top: 146, position: 'absolute', color: 'white', fontSize: 48, fontFamily: 'SeoulHangang CEB', letterSpacing: 8.16 }}>Сообщение</div>
                <div style={{ left: 710, top: 146, position: 'absolute', color: 'white', fontSize: 48, fontFamily: 'SeoulHangang CEB', letterSpacing: 8.16 }}>Дата и время</div>
                <div style={{ left: 1135, top: 149, position: 'absolute', color: 'white', fontSize: 48, fontFamily: 'SeoulHangang CEB', letterSpacing: 8.16 }}>Статус</div>

                {/* <ButtonToolbar style={{}}>
                    <Button
                        style={{
                            width: 180, position: 'relative', height: 49, background: '#F56F10',
                            boxShadow: '0px 0px 12.899999618530273px 18px rgba(0, 0, 0, 0.25) inset', borderRadius: 88
                        }}>
                        <p style={{ color: '#403F3F', fontSize: 20, fontFamily: 'SeoulHangang CEB', letterSpacing: 3.40 }}>
                            Ответить</p>
                    </Button>
                    <Button
                        style={{
                            width: 180, position: 'relative', height: 49, background: '#F56F10',
                            boxShadow: '0px 0px 12.899999618530273px 18px rgba(0, 0, 0, 0.25) inset', borderRadius: 88
                        }}>
                        <p style={{ color: '#403F3F', fontSize: 17, fontFamily: 'SeoulHangang CEB', letterSpacing: 3.40 }}>
                            Редактировать</p>
                    </Button></ButtonToolbar> */}
                    </Card><NavBar /></Container>);
});
export default NewRequest;