import React from 'react';
import "./NAV.css";



const NavBar = (props) => {
    return (
        <div className='navbar-fixed'>
            <nav>
                <div className='nav-wrapper grey darken-3 row center-align flow-text'>
                    <div className='col s4'>
                        <a href='https://github.com/nkanderson86/athf-click-game'><b className='light-green-text'>Clicky Game</b></a>
                    </div>
                    <div className='col s4'>
                        <span>{props.message}</span>
                    </div>
                    <div className='col s4'>
                        <span className='light-green-text'>Score: {props.score} | Top Score: {props.topScore}</span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;