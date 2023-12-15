import React from 'react';
import infoimg from '../image/banner1.png';

function info(props) {
    return (
        <div>
            <img src={infoimg} style={{width:'250px'}}/>
            <br/><br/>
            <div>쌍용교육센터</div>
            <div>02-555-1111</div>
        </div>
    );
}

export default info;