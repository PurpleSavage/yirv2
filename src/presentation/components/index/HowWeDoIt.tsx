import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa";
function HowWeDoIt() {
  return (
    <section className="h-screen w-full space-y-8 ">
        <div className="space-y-4 px-14">
            <h2 className="text-2xl font-bold text-primary01">¿Cómo lo hacemos?</h2>
            <h3 className="text-4xl font-bold text-white">Planificar tu itinerario nunca fue tan fácil</h3>
        </div>
        <div className="flex items-center">
            <div className="grow flex flex-col items-start gap-10 pl-14">
              <div className="space-y-4">
                <div className="rounded-full p-5 size-20 flex items-center justify-center  text-black bg-white">
                  <FaUser size={40}/>
                </div>
                <div>
                  <span className="text-white text-2xl block font-bold">Crea tu perfil</span>
                  <p className="text-slate-200">Completa tu perfil para darte unas mejores sugerencias</p>
                </div>
              </div>

              <div className="space-y-2 ">
                <div className="rounded-full p-5 size-20 flex items-center justify-center  text-black bg-white">
                  <IoSearch size={40}/>
                </div>
                <div>
                  <span className="text-white text-2xl block font-bold">Busca tu destino</span>
                  <p className="text-slate-200">Además puedes seleccionar los días que tendrás para conocer</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-full p-5 size-20 flex items-center justify-center  text-black bg-white">
                  <FaRegCalendar size={40}/>
                </div>
                <div>
                  <span className="text-white text-2xl block font-bold">Comienza a planificar tu viaje</span>
                  <p className="text-slate-200">Obtén tu guía completa</p>
                </div>
              </div>
            </div>
            <div className="w-3/4  px-14">
              <div className="w-full h-[600px] ">
                <video loop className="w-full h-full object-cover">
                  <source 
                    src="https://firebasestorage.googleapis.com/v0/b/yir-asistente-virtual.appspot.com/o/landing%2Fvideos%2Ftelefono-video.mp4?alt=media"
                  />
                </video>
              </div>
              <div>
                <span>En este video</span>
                <span>te mostramos cómo hacerlo</span>
              </div>
            </div>
        </div>
    </section>
  )
}

export default HowWeDoIt