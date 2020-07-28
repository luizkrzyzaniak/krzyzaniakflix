import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo-branco.png';
import ButtonLink from '../button/button';
import Button from '../button/buttonS';
import './menu.css'

function Menu (){
    return(
        <nav className="menu">
            <Link to="/">
                <img className="logo" src={Logo} alt="KrzyzaniakFlix-logo"/>
            </Link>
            <Button as={Link} className={ButtonLink} to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;
