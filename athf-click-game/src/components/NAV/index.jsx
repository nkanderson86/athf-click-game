import React from 'react';
import "./NAV.css";



const NavBar = (props) => {
    return (
        <div className='navbar-fixed'>
            <nav>
                <div className='nav-wrapper grey darken-3 row flow-text'>
                    <div className='col s6 m4'>
                        <a href='https://github.com/nkanderson86/athf-click-game'><b className='light-green-text'>Clicky Game</b></a>
                    </div>
                    <div className='col s4 hide-on-small-only'>
                        <p className='message-text'>{props.message}</p>
                    </div>
                    <div className='col s6 m4'>
                        <span className='light-green-text flow-text score-text right'>Score: {props.score} | Top Score: {props.topScore}</span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;