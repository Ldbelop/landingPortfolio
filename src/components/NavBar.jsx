import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    return <nav className="h-[126px] flex bg-blackbg pr-[126px] pl-[77px] justify-between items-center">
                <div className="w-[432px] flex justify-around">
                    <Link to="/">
                    <p className="text-white text-[20px] [&:local-link]:text-[#24D0DB]">Inicio</p>
                     </Link>
                    <Link to="/profile">
                    <p className="text-white text-[20px] [&:local-link]:text-[#24D0DB]">Perfil</p>
                    </Link>
                    <Link to="/studies">
                    <p className="text-white text-[20px] [&:local-link]:text-[#24D0DB]">Estudios</p>
                    </Link>
                    <Link to="/portfolio">
                    <p className="text-white text-[20px] [&:local-link]:text-[#24D0DB]">Portafolio</p>
                    </Link>
                </div>
                <Link to="/contact">
                    <p className="font-semibold text-[20px] flex justify-center items-center h-[52px] w-[125px] text-black bg-white rounded-[17px] active:bg-[#24D0DB] active:text-whiteTxt">Contacto</p>
                </Link>
            </nav>
}