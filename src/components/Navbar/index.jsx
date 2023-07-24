import React, { useState } from 'react';
import Scroll, { Link, Events } from 'react-scroll';

import './styles.css';

const Navbar = () => {
    const [burgerClass, setBurgerClass] = useState('burger-bar unclicked')
    const [menuClass, setMenuClass] = useState('menu hidden')
    const [menuClicked, setMenuClicked] = useState(false)

    const links = [
        {
            name: 'Início',
            to: 'start',
            functions: () => updateMenu()
        },
        {
            name: 'A revolução da TI',
            to: 'revolution',
            functions: () => updateMenu()
        },
        {
            name: 'Os tipos de Cloud Computing',
            to: 'types-cloud-computing',
            functions: () => updateMenu()
        },
        {
            name: 'Modelos de serviço',
            to: 'model-services',
            functions: () => updateMenu()
        },
        {
            name: 'Soluções de cada modalidade',
            to: 'benefits-pyramid',
            functions: () => updateMenu()
        },
        {
            name: 'Exemplos de aplicação',
            to: 'application-examples',
            functions: () => updateMenu()
        },
        {
            name: 'Vivo cloud',
            to: 'solutions-section',
            functions: () => updateMenu()
        },
        {
            name: 'Soluções completas para Cloud',
            to: 'complete-solutions-section',
            functions: () => updateMenu()
        },
        {
            name: 'Cloud pública',
            to: 'cloud-services-public',
            functions: () => updateMenu()
        },
        {
            name: 'Cloud privada',
            to: 'cloud-services-private',
            functions: () => updateMenu()
        },
        {
            name: 'Benefícios Vivo Cloud Plus',
            to: 'cloud-services-vivo-plus',
            functions: () => updateMenu()
        },
        {
            name: 'Vivo Cloud Server',
            to: 'cloud-services-vivo-server',
            functions: () => updateMenu()
        },
        {
            name: 'Serviços de colaboração',
            to: 'service-collaboration',
            functions: () => updateMenu()
        },
        {
            name: 'Serviços profissionais',
            to: 'professional-services',
            functions: () => updateMenu()
        },
        {
            name: 'Serviços gerenciados',
            to: 'managed-services',
            functions: () => updateMenu()
        },
        {
            name: 'Diferenciais das soluções Vivo',
            to: 'differentials-solutions',
            functions: () => updateMenu()
        },
        {
            name: 'Questionário',
            to: 'question',
            functions: () => updateMenu()
        },
    ]

    const updateMenu = () => {
        if(!menuClicked) {
            setBurgerClass('burger-bar clicked')
            setMenuClass('menu visible')
        } else {
            setBurgerClass('burger-bar unclicked')
            setMenuClass('menu hidden')
        }
        setMenuClicked(!menuClicked)
        scrollMore()
    }

    const scrollMore = () => {
        Events.scrollEvent.register('end', () => {
            const scroll = Scroll.animateScroll
            scroll.scrollMore(1)
            Events.scrollEvent.remove('end')
        })
    }

    return (
        <div className='navigation'>
            <nav onClick={updateMenu}>
                <button className='burger-menu'>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                </button>
            </nav>
            <div className={menuClass}>
                <ul>
                    { links.map(link => {
                        return (
                            <li key={link.name}>
                                <Link 
                                    onClick={link.functions}
                                    activeClass="active" 
                                    to={ link.to } spy={true} 
                                    isDynamic={true} 
                                    smooth={true} 
                                    offset={0} 
                                    duration={500}>
                                    { link.name }
                                </Link>
                            </li>
                        )
                    }) }
                </ul>
            </div>
        </div>
    )
}

export default Navbar