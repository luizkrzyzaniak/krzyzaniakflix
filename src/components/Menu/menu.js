import React from 'react';
import Logo from '../../assets/img/logo-branco.png';
import ButtonLink from '../button/button';
import Button from '../button/buttonS';
import './menu.css'

function Menu (){
    return(
        <nav className="menu">
            <a href="/">
                <img className="logo" src={Logo} alt="KrzyzaniakFlix-logo"/>
            </a>
            <Button as="a" className="buttonLink" href="/">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;
