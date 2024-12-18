import React, { useContext } from "react";
import { ButtonGroup } from 'react-bootstrap'
import { Context } from "../index";
import { useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import {ADMIN_ROUTE, NEWREQUEST} from "../utils/consts";
import Container from "react-bootstrap/Container";
import { useNavigate } from 'react-router-dom';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Menu from '../components/Files/menu.png'
import Profil from '../components/Files/profil.png'
import Logo from '../components/Files/logo.png'


const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const admin = async () => {
        let admin = `admin`
        navigate(NEWREQUEST)
    }
    return (
        <Navbar style={{ height: '154px', backgroundColor: '#999999' }} fixed='top'>
            <Container>
                <img src={Logo} style={{ width: '643px', height: '154px'}} />
                <ButtonToolbar style={{ marginRight: '40px' }}>
                    <ButtonGroup className="me-2">
                        <Button
                            style={{ borderRadius: '50px', width: '100px', height: '100px', backgroundColor: 'white', marginRight: '20px' }}
                            onClick={admin}>
                            <img src={Profil} style={{ width: '75px', height: '75px' }} />
                        </Button>

                        <Button
                            style={{ borderRadius: '50px', width: '100px', height: '100px', backgroundColor: 'white' }}
                            onClick={admin}>
                            <img src={Menu} style={{ width: '75px', height: '75px' }} />
                        </Button>

                    </ButtonGroup>
                </ButtonToolbar>
            </Container>
        </Navbar>
    );
});

export default NavBar;