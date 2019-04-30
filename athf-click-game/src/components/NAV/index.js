import React from 'react';
import "./NAV.css";



const NavBar = ({ score, topScore, message }) => {
    return (
        <div className='navbar-fixed'>
            <nav>
                <div className='nav-wrapper grey darken-3 row center-align flow-text'>
                    <div className='col l4 s6'>
                        <a href='/'><b className='light-green-text'>Clicky Game</b></a>
                    </div>
                    <div className='col l4 s0'>
                        <span>{message}</span>
                    </div>
                    <div className='col l4 s6'>
                        <span className='light-green-text'>Score: {score} | Top Score: {topScore}</span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;