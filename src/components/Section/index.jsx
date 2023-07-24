import React from "react";
import './styles.css';

const Section = ({
    children,
    bg = '',
    bgSize = 'cover',
    bgOrientation = 'center center',
    mt = '0',
    id,
    lineBG = '',
    bgMask = '',
    bgMaskSize = 'cover',
    customClass = ''
}) => {
    return (
        <section
            className={customClass}
            style={{
                backgroundImage: bg ? `url(${bg})` : '',
                backgroundPosition: bgOrientation,
                backgroundSize: bgSize,
                marginTop: mt,
                zIndex: mt !== '0' ? '-1' : '0'
            }} id={id}>
            <div className="section-mask" style={{
                backgroundImage: bgMask ? `url(${bgMask})` : '',
                backgroundSize: bgMaskSize,
            }}>
                {children}
            </div>
            {/* <div class="custom-shape">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div> */}
            {lineBG && <div className="bottom-line" style={{ backgroundColor: lineBG }} />}
        </section>
    )
}

export default Section