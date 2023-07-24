import React from "react";

import retranca from '../../../assets/images/retranca.png'
import torreCloud from '../../../assets/images/torre-cloud.png'

import './styles.css'

export default function Header() {
  return (
    <>
       <img className="retranca" src={retranca} alt="retranca" />
       <img className="torres-cloud" src={torreCloud} alt="torres cloud" />
    </>
  );
}