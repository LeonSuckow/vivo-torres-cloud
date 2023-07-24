import image1 from '../assets/images/vertical-tab-view/img1.png'
import image2 from '../assets/images/vertical-tab-view/img2.png'

export const data = [
    {
        image: image1,
        title: 'Serviços de nuvem',
        content: []
    },
    {
        image: image2,
        title: 'Serviços de colaboração',
        content: []
    },
    {
        title: 'Serviços profissionais e gerenciados',
        content: [
            `
            <h3>Serviços profissionais</h3>
            <p>Migração de e-mail para o Outlook on-line e Google Workspace;</p>
            <p>Migração de ambientes de qualquer origem para Cloud Pública;</p>
            <p>Assessment (avaliação) de ambientes de TI;</p>
            <p>Migração de aplicações.</p>
            `,
            `
            <h3>Serviços gerenciados</h3>
            <p>Sustentação de serviços on-line Microsoft;</p>
            <p>Sustentação de ambiente VCP;</p>
            <p>Serviço de monitoração com análise de performance, buscando se antecipar a potenciais incidentes;</p>
            <p>Gerenciamento de ambientes on-premise (sistemas operacionais, virtualização, aplicações, banco de dados, backup, redes e segurança);</p>
            <p>Práticas de observabilidade orientadas ao negócio adotadas em conjunto com soluções DevOps/FinOps;</p>
            <p>Gerenciamento avançado em Cloud pública, adotando práticas de SRE e com soluções de DevOps e FinOps.</p>
            `
            
        ]
    },
]