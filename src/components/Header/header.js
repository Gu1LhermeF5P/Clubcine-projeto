import React from "react";
import './header.css';
//imagens
import Image from './Logo.png';
import ImageUser from './user2.png'
export default ({grey})=> {
    return (
        <header className={grey ? 'grey' : ''}>
           <div className="header--logo">
            <a href="">
                <img src={Image} alt="clubcine"/>
            </a>
           </div>
           <div className="header--user">
                <a href="">
                    <img src={ImageUser}alt="Usuário"></img>
                </a>
           </div>
        </header>
    )
}