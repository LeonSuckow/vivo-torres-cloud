import React from "react";
import './styles.css';

import torresCloud from '../../../assets/images/header/torre-cloud.png';

const Logo = () => {
    return (
        <div className="logo">
            <img src={torresCloud} alt="logo" />
        </div>
    )
}

export default Logo