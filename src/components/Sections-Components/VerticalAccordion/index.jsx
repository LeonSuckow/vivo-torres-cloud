import React, { useState } from "react";
import './styles.css';

const VerticalAccordion = ({data, withIcon = true}) => {
    const [accordion, setAccordion] = useState(-1)

    const toggleAccordion = (item, index) => {
        if(accordion === index) {
            setAccordion(-1)
            return
        }
        item.visualized = true;
        setAccordion(index)
    }
    return (
        <div className="vertical-accordion">
            <div className="accordion-wrapper">
                { data.map((item, index) => (
                    <div className={`accordion ${ accordion === index ? 'show' : '' } ${ item.visualized ? 'visualized' : '' }`} key={index}>
                        <div className="header" onClick={ _ => toggleAccordion(item, index) }>
                            <h4>{item.title}</h4> {withIcon && <span>{ accordion === index ? '-' : '+' }</span>}
                        </div>
                        <div className="content">
                            {item.description.map((description, index) => (
                                <p key={index} dangerouslySetInnerHTML={{__html: description}}></p>
                            ))}
                        </div>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default VerticalAccordion