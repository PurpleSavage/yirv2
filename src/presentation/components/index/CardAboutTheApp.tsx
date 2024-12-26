import { CardAboutI } from "../../../const/cardsAboutTheApp"
import styles from '../../css/indexcss/abouttheapp.module.css'


interface  CardAboutTheAppProps{
    card:CardAboutI
}

function CardAboutTheApp({card}:CardAboutTheAppProps) {
  return (
    <div className={`w-[350px] rounded-3xl flex flex-col border border-slate-500/50 h-[360px] ${styles.radialGradient}`}>
        <div className="flex items-center justify-center py-10">
            <div className="p-4 rounded-full bg-white text-black">
                <card.icon size={50}/>
            </div>
        </div>
        <div className="w-full grow space-y-4 px-3">
            <span className="block text-center text-xl py-2 text-white">{card.title}</span>
            <p className="text-center text-white">{card.description}</p>
        </div>
    </div>
  )
}

export default CardAboutTheApp