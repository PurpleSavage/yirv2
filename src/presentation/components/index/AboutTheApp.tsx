import { LIST_CARDS_ABOUT } from "../../../const/cardsAboutTheApp"
import CardAboutTheApp from "./CardAboutTheApp"

function AboutTheApp() {
  return (
    <section className="px-28 w-full flex justify-center gap-14 h-screen items-center flex-wrap">
        {
            LIST_CARDS_ABOUT.map(card=>(
              <CardAboutTheApp key={card.id} card={card}/>
            ))
        }
    </section>
  )
}

export default AboutTheApp