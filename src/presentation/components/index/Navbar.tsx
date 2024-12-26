
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="fixed top-0 z-10 flex justify-center  w-full py-10 px-10 ">
        <div className="w-[70%] flex py-3 rounded-full border border-slate-500/50 px-6
         items-center bg-opacity-70" style={{ backdropFilter: 'blur(8px)' }}>
            <Link to="/">
                <img src="/logotipo_yirai.svg" className="w-20" alt="" />
            </Link>
            <ul className="flex grow gap-8 items-center justify-end">
                <li>
                    <Link 
                        to="/login"
                        className="text-white text-base font-semibold hover:text-cyan-500"
                    >Sign In</Link>
                </li>
                <li>
                    <Link 
                        to="/register" 
                        className=" rounded-full bg-white text-black px-8 py-2 hover:text-white
                        font-semibold hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50"
                    >Sign Up</Link>
                </li>    
            </ul>
        </div>
    </nav>
  )
}

export default Navbar