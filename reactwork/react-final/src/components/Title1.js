import React from 'react';
import titleimg from '../image/final_logo.gif';

function Title1(props) {
    return (
        <div>
            <img src={titleimg} style={{height:'150px'}}/>
            <b style={{fontSize:'20px',color:'green'}}>
                React_Springboot Project
            </b>
        </div>
    );
}

export default Title1;