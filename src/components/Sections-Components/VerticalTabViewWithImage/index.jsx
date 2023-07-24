import { useState } from "react";
import './styles.css'


const VerticalTabViewWithImage = ({data}) => {
    const [indexItem, setIndexItem] = useState(0)

    const chooseItem = item => {
        setIndexItem(item)
    }

    return (
        <div className="verticalTabViewWithImage-wrapper">
            <div className="tab-icons">
                { data.map((item, index) => (
                    <div className={`icon ${ index === indexItem ? 'active' : '' }`} key={index} onClick={_ => chooseItem(index)}>
                        {item.title}
                    </div>
                )) }
            </div>
            <div className="content">
                {data[indexItem].image  && <img src={ data[indexItem].image } alt={ data[indexItem].title } />}
                {data[indexItem].content.map((item, index) => (
                    <div key={index} dangerouslySetInnerHTML={{__html: item}}>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VerticalTabViewWithImage