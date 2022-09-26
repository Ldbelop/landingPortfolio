import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    return <nav className="z-10 h-[126px] flex bg-black pr-[126px] pl-[77px] justify-between items-center">
                <div className="w-[432px] flex justify-around">
                    <Link to="/">
                    <p className="text-white text-[20px]">Inicio</p>
                     </Link>
                    <Link to="/profile">
                    <p className="text-white text-[20px]">Perfil</p>
                    </Link>
                    <Link to="/studies">
                    <p className="text-white text-[20px]">Estudios</p>
                    </Link>
                    <Link to="/portfolio">
                    <p className="text-white text-[20px]">Portafolio</p>
                    </Link>
                </div>
                <Link to="/contact">
                    <p className="font-semibold text-[20px] flex justify-center items-center h-[52px] w-[125px] text-black bg-white rounded-[17px]">Contacto</p>
                </Link>
            </nav>
}