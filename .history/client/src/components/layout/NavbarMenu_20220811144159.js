import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import learnItLogo from '../../assets/logo.svg';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import logoutIcon from '../../assets/logout.svg';
import { AuthContext } from '../../contexts/authContext';

function NavbarMenu() {

    const {
        authState:{
            user:{username}
        }
    } = useContext(AuthContext)
    return (
        <Navbar expand='lg' bg='primary' variant='dark' className='shadow'>
            <Navbar.Brand className='font-weight-border text-white'>
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
                    <Nav.Link className='font-weight-border text-white' to='/dashboard' as={Link}>
                        Dashboard
                    </Nav.Link>
                    <Nav.Link className='font-weight-border text-white' to='/about' as={Link}>
                        About
                    </Nav.Link>

                    <Nav.Link className='font-weight-border text-white' disabled>
                        Welcome <b>{username}</b>
                    </Nav.Link>
                    <Button variant='secondary' className='font-weight-border text-white'>
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