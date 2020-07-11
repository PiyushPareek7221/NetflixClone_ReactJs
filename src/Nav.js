import React, { useEffect, useState } from 'react';
import './Nav.css';
import netflixLogo from './assets/netflix.png';
import user from './assets/user.png';

function Nav(){

    const [show, handleShow] = useState(false);

    //scrollListener, like when u scroll down i want u to do something
    //runs when the navbar component loads
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            //when we are a 100px probably it works
            if(window.scrollY >100){
                handleShow(true);
            }else handleShow(false);
        });
        return () =>{
            window.removeEventListener('scroll');
        }
    }, []); 

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img style={{
                    position: 'fixed',
                    left: '20px',
                    width: '80px',
                    objectFit: 'contain'
            }} src={netflixLogo} alt='Netflix Logo' />
            <img style={{
                    position: 'fixed',
                    right: '20px',
                    marginRight:'10px',
                    width: '40px',
                    objectFit: 'contain'
            }} src={user} alt='Profile Logo' />
        </div>
    )
}

export default Nav;