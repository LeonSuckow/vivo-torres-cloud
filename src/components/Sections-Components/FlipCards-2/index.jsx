import { useState } from 'react'
import './styles.css'

export function FrontCard({ children, customClass = '' }) {
    return (
        <div className={`flipcard-front ${customClass}`}>
            {children}
        </div>
    );
}

export function BackCard({ children, customClass = '', style = {}, }) {
    return (
        <div className={`flipcard-back ${customClass}`} style={{...style}}>
            {children}
        </div>
    );
}

export function FlipCardItem({ children, customClass = '' }) {
    const [activeCard, setActiveCard] = useState(false);

    const handleFlipCardActive = (statusActive) => {
        setActiveCard(!statusActive)
    }
    return (
        <div className={`flipcard ${customClass}`} onClick={_ => handleFlipCardActive(activeCard)}>
            <div className={`flipcard-inner ${activeCard ? 'active' : ''}`}>
                {children}
            </div>
        </div>
    );
}


export function FlipCards2({ children, customClass = '' }) {
    return (
        <div className={`flipcards-area ${customClass}`}>
            {children}
        </div>
    )
}

export default { FlipCards2, FlipCardItem, FrontCard, BackCard };