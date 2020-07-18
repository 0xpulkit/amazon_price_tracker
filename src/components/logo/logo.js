import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import money from './logo.png';

const Logo = () => {
    return (
        <div className='ma0 mt2'>  
            <Tilt className="Tilt br2 shadow-2" options={{ max : 90 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner"> <img alt='logo' src={money} style={{ height: 90, width: 90 }}/> </div>
            </Tilt>
        </div>
    );

}

export default Logo;