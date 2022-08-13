import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import learnItLogo from '../../assets/logo.svg'

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
            <Navbar.Toggle aria-controls='font-weight-bolder text-white'/>
        </Navbar>
    )
}

export default NavbarMenu