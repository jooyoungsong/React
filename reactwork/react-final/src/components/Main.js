import React from 'react';
import mainimg1 from '../image/banner1.png';
import mainimg2 from '../image/banner2.png';
import mainimg3 from '../image/banner3.png';
import mainimg4 from '../image/dog.jpg';

function Main(props) {
    return (
        <div>
            <img src={mainimg1} className='main'/>
            <img src={mainimg2} className='main'/>
            <br/><br/>
            <img src={mainimg3} className='main'/>
            <img src={mainimg4} className='main'/>
        </div>
    );
}

export default Main;