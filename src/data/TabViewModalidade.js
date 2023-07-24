import icon1 from '../assets/images/tabview/icon1.png';
import icon2 from '../assets/images/tabview/icon2.png';
import icon3 from '../assets/images/tabview/icon3.png';
import icon4 from '../assets/images/tabview/icon4.png';
import icon5 from '../assets/images/tabview/icon5.png';
import icon6 from '../assets/images/tabview/icon6.png';
import icon7 from '../assets/images/tabview/icon7.png';


export const data = [
  { 
    titleTab: 'Pública',
    titleContent: 'Cloud Pública',
    paragraph: [
        'Nessa modalidade, o conjunto de serviços de computação é oferecido por um provedor terceirizado, que disponibiliza os recursos de computação via internet, tais como servidores e armazenamento; ou seja, todo o hardware, software e demais infraestruturas necessárias para o funcionamento do sistema pertencem ao provedor. Além disso, o provedor é o responsável pela manutenção e segurança.',
        'Opções do portfólio: AWS, Google Cloud, Microsoft Azure, Huawei Cloud, IBM Cloud e Oracle Cloud e Vivo Cloud Plus compartilhado.',
    ],
    box: {
      title:'Principais Benefícios',
      items:[
        {
          icon:icon1,
          title: 'Redução de gastos',
          paragraph: 'Diminui a necessidade de comprar, gerenciar e fazer a manutenção de hardware local e infraestrutura.'
        },
        {
          icon:icon2,
          title: 'Maior agilidade',
          paragraph: 'Garante rapidez no processo de implantação quando comparado com infraestruturas locais.'
        },
        {
          icon:icon3,
          title: 'Escalabilidade',
          paragraph: 'Oferece a possibilidade de aumentar o uso de recursos de acordo com as demandas.'
        }
      ]
      
    }
  },
  { 
    titleTab: 'Privada',
    titleContent: 'Cloud Privada',
    paragraph: [
        'Como o nome já diz, trata-se de uma nuvem particular onde todos os recursos computacionais são utilizados por uma única organização. A nuvem pode estar alocada fisicamente no data center local ou hospedada em outro ambiente, por meio de um provedor de serviço terceirizado.',
        'Opção do portfólio: Vivo Cloud Plus dedicado.',
    ],
    box: {
      title:'Principais Benefícios',
      items:[
        {
          icon:icon4,
          title: 'Flexibilidade e escalabilidade',
          paragraph: 'Oferece quase os mesmos benefícios da nuvem pública, porém a gestão é feita pelo departamento de TI do negócio.'
        },
        {
          icon:icon5,
          title: 'Maior segurança',
          paragraph: 'Hospedagem interna e utilização de firewalls da empresa que aumentam a segurança e a privacidade.'
        },
        {
          icon:icon6,
          title: 'Nuvem exclusiva',
          paragraph: 'Maior possibilidade de customização e controle adicional.'
        }
      ]
    }
  },
  { 
    titleTab: 'Híbrida',
    titleContent: 'Cloud Híbrida',
    paragraph: [
        'É constituída por duas ou mais infraestruturas de nuvem, sendo elas pública e privada, que operam separadamente, mas que são conectadas por uma tecnologia padronizada ou proprietária, permitindo que dados e aplicativos sejam compartilhados entre as diferentes nuvens.',
    ],
    box: {
      title:'Principais Benefícios',
      items:[
        {
          icon:icon7,
          title: 'Maior produtividade',
          paragraph: 'Torna possível equilibrar a demanda de computação e processamento entre as nuvens.'
        },
        {
          icon:icon2,
          title: 'Economia de tempo e recursos',
          paragraph: 'Permite balancear os custos e o tempo de aquisição e instalação de servidores.'
        },
        {
          icon:icon3,
          title: 'Escalabilidade',
          paragraph: 'Permite reduzir ou aumentar a capacidade praticamente instantaneamente.'
        }
      ]
    }
  }
]

