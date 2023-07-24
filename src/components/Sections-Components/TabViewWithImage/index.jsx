import React, { useState } from "react";
import './styles.css';



const TabViewWithImage = ({ data }) => {
    const [indexItem, setIndexItem] = useState(0)

    const chooseItem = item => {
        setIndexItem(item)
    }

    return (
        <div className="tab-view-with-image">
            <div className="tab-icons">
                {data.map((item, index) => (
                    <div className={`icon ${index === indexItem ? 'active' : ''}`} key={index} onClick={_ => chooseItem(index)}>
                        {item.icon}
                    </div>
                ))}
            </div>
            <div className="content">
                <div className="content-title">
                    {data[indexItem].icon}
                    <h3>{data[indexItem].title}</h3>
                </div>
                <div className="text-area">
                    {data[indexItem].description.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TabViewWithImage