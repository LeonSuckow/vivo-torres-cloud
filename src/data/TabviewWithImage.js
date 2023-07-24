import React from 'react';

import {ReactComponent as Icon1} from '../assets/images/tab-view-with-img/icon1.svg';
import {ReactComponent as Icon2} from '../assets/images/tab-view-with-img/icon2.svg';
import {ReactComponent as Icon3} from '../assets/images/tab-view-with-img/icon3.svg';
import {ReactComponent as Icon4} from '../assets/images/tab-view-with-img/icon4.svg';

export const data = [
    {
        icon: <Icon1 />,
        title: 'Atendimento personalizado',
        description: [
            'Contamos com Gerentes de Negócios especializados, pré-vendas e suporte, que podem ajudar os clientes em todo o ciclo do projeto.',
        ]
    },
    {
        icon: <Icon2/>,
        title: 'Praticidade e comodidade',
        description: [
            'Conta com a Plataforma Digital, que oferece o controle de diversos ambientes de nuvem e de todos os fornecedores a partir de um único painel de controle, proporcionando agilidade, gestão e capacidade de otimização de custos.',
        ]
    },
    {
        icon: <Icon3/>,
        title: 'Variedade de opções',
        description: [
            'Portfólio amplo de produtos e serviços para cobrir as mais variadas necessidades dos clientes.',
        ]
    },
    {
        icon: <Icon4/>,
        title: 'Conveniência',
        description: [
            'Contratação facilitada em moeda local, sem vigência contratual e faturamento mínimo.',
        ]
    },
]