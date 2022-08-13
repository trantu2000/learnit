import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import learnItLogo from '../../assets/logo.svg';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import logoutIcon from '../../assets/logout.svg';

function NavbarMenu() {
    return (
        <Navbar expand='lg' bg='primary' variant='dark' className='shadow'>
            <Navbar.Brand className='font-weight-bolder text-white'>
                <img
                    src={learnItLogo}
                    alt='learnItLogo'
                    width='32'
                    height='32'
                    className='mr-2'
                />
                LearnIt
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link className='font-weight-bolder text-white' to='/dashboard' as={Link}>
                        Dashboard
                    </Nav.Link>
                    <Nav.Link className='font-weight-bolder text-white' to='/about' as={Link}>
                        About
                    </Nav.Link>

                    <Nav.Link className='font-weight-bolder text-white' disabled>
                        Welcome TranTu
                    </Nav.Link>
                    <Button variant='sencondary' className='font-weight-bolder text-white'>
                        <img
                            src={logoutIcon}
                            alt='logoutIcon'
                            width='32'
                            height='32'
                            className='mr-2'
                        />
                        Logout
                    </Button>
                </Nav>

                
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarMenu