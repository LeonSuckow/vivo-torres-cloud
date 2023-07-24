import { useState } from "react";
import './styles.css'

import BoxItems from "../BoxItems";

const VerticalTabView = ({ contentColor= '#370054', data}) => {
    const [indexItem, setIndexItem] = useState(0)

    const chooseItem = item => {
        setIndexItem(item)
    }

    return (
        <div className="vertical-tab-view-wrapper ">
            <div className="tab-icons">
                {data.map((item, index) => (
                    <div className={`icon ${index === indexItem ? 'active' : ''}`} key={index} onClick={_ => chooseItem(index)}>
                        {item.titleTab}
                    </div>
                ))}
            </div>
            <div className="content">
                <h2 style={{ color: contentColor }}>{data[indexItem].titleContent}</h2>
                {data[indexItem].paragraph.map((paragraph, key) => (
                    <p key={key} style={{ color: contentColor }} className="tab-paragraph">{paragraph}</p>
                ))}
                <BoxItems title={data[indexItem].box.title} items={data[indexItem].box.items} />
            </div>
        </div>
    )
}

export default VerticalTabView 