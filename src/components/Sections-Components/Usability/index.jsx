import React from "react";

import './styles.css'
import imgDefault from '../../../assets/images/usability-help.png'


export default function UsabilityHelp({
  children,
  config,
  color= '#fff',
  img = imgDefault,
  imgConfig = {},
  textConfig
}){
  return(
    <div className="usability-box" style={{color, borderColor: color,...config}}>
      <p style={{color, ...textConfig}}>
        {children}
      </p>
      <img src={img} alt="Dica de usabilidade" style={imgConfig}/>
    </div>
  );
}