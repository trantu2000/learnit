import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import learnItLogo from '../../assets/logo.svg'

function NavbarMenu() {
    return (
        <Navbar expand='lg' bg='primary' variant='dark' className='shadow'>
            <Navbar.Brand className=''>
                <img 
                    src={learnItLogo}
                    alt='learnItLogo'
                    width='32'
                    
                />
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavbarMenu