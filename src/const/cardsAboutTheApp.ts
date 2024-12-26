import { IconType } from "react-icons";
import { GoChecklist } from "react-icons/go";
import { CiMap } from "react-icons/ci";
import { PiBuildingApartment } from "react-icons/pi";
import { GoSun } from "react-icons/go";
import { FaLeaf } from "react-icons/fa";


export interface CardAboutI {
    id:string
    icon: IconType; // Mantener como IconType
    title: string;
    description: string;
}

export const LIST_CARDS_ABOUT: CardAboutI[] = [
    {
        id:'1',
        icon: GoChecklist, 
        title: 'Personalización de itinerarios',
        description: 'Recibe un plan de viaje que se adapta perfectamente a tus gustos y preferencias. Te garantizamos una experiencia única y personalizada.',
    },
    {
        id:'2',
        icon: CiMap, 
        title: 'Optimización de rutas',
        description: 'Te facilitamos una planificación eficiente y fluida del viaje, asegurando que pases más tiempo disfrutando de tu destino y menos tiempo preocupándote por el transporte.',
    },
    {
        id:'3',
        icon: PiBuildingApartment, 
        title: 'Sugerencias inteligentes de lugares y actividades',
        description: 'Descubre nuevos lugares y actividades que se alinean con tus intereses, enriqueciéndote con experiencias únicas y memorables.',
    },
    {
        id:'4',
        icon: GoSun, 
        title: 'Recomendaciones climatológicas',
        description: 'Puedes planificar mejor tus días, estar preparado para diversas condiciones climáticas y ajustar tus planes en consecuencia, optimizando tu experiencia de viaje.',
    },
    {
        id:'5',
        icon: FaLeaf, 
        title: 'Sustentabilidad',
        description: 'Contribuyamos juntos a reducir nuestra huella de carbono y a hacer tus viajes más amigables con el medio ambiente.',
    }
];