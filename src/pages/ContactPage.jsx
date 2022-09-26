import React from "react";

export default function ContactPage(){
    return <section className="px-[353px] py-[60px] h-auto">
    <div className=" overflow-hidden border-2 border-red-400 w-[1203px] h-[833px] rounded-[50px] flex flex-col justify-center items-center">
        <h1 className="bg-contactTitlebg w-full h-[10%]">Contáctame</h1>
        <div className="bg-contactbg w-full h-[90%]">
            <form>
                <label htmlFor="">
                    Nombres
                    <input type="text" placeholder="Escribe tu nombre completo" />
                </label>
                <label htmlFor="">
                    Apellidos
                    <input type="text" placeholder="Escribe tus Apellido" />
                </label>
                <label htmlFor="">
                    Correo Electrónico
                    <input type="text" placeholder="Escribe tu nombre completo" />
                </label>
                <label htmlFor="">
                    Mensaje
                    <input type="text" placeholder="Escribe tu nombre completo" />
                </label>
                <button>Envíar <ion-icon name="send"></ion-icon></button>
            </form>
        </div>
    </div>
    </section>
}