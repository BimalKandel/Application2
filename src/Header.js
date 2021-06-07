import React from 'react';
import './App.css';
import scpbanner from './scpfile.jpg';

function Header(){
    return(
        <div className="App-header">
            <img src={scpbanner} alt="scpbanner" className="Width100"/>
        </div>
    )
}

export default Header;