import React from "react";

export default function ContactPage(){
    return <section className="px-[353px] py-[60px] h-auto">
    <div className=" overflow-hidden w-[1203px] h-[833px] rounded-[50px] flex flex-col justify-center items-center">
        <h1 className="bg-contactTitlebg w-full h-[13%] font-semibold text-[48px] text-whiteTxt flex items-center pl-[46px]">Contáctame</h1>
        <div className="bg-contactbg w-full h-[87%] py-[25px] px-[40px]">
            <form>
                <div className="flex h-auto">
                    <label className="flex flex-col">
                        <p className="font-semibold text-[24px] text-whiteTxt pl-[33px] w-[100%]">Nombres</p>
                        <input className="mt-[23px] w-[405px] h-[65px] rounded-[20px] mr-[62px] placeholder:text-[#6A7384] pl-[33px]" type="text" placeholder="Escribe tu nombre completo" />
                    </label>
                    <label className="flex flex-col">
                        <p className="font-semibold text-[24px] text-whiteTxt pl-[33px] w-[100%]">Apellidos</p>
                        <input className="mt-[23px] w-[405px] h-[65px] rounded-[20px] placeholder:text-[#6A7384] pl-[33px]" type="text" placeholder="Escribe tus Apellido" />
                    </label>
                </div>
                <label className="flex flex-col mt-[26px]">
                    <p className="font-semibold text-[24px] text-whiteTxt pl-[33px] w-[100%]">Correo Electrónico</p>
                    <input className="mt-[23px] w-[870px] h-[61px] rounded-[20px] placeholder:text-[#6A7384] pl-[33px]" type="text" placeholder="Escribe tu correo electrónico" />
                </label>
                <label className="flex flex-col mt-[26px]">
                    <p className="font-semibold text-[24px] text-whiteTxt pl-[33px] w-[100%]">Mensaje</p>
                    <textarea className="mt-[23px] h-[213px] rounded-[20px] text-[#6A7384] pl-[33px]" name="" id="" cols="30" rows="10">Escribe tu mensaje</textarea>
                </label>
                <button className="w-[181px] h-[61px] rounded-[20px] mt-[45px] bg-blackBtn font-semibold text-whiteTxt text-[24px] flex justify-center items-center">Envíar <ion-icon name="send"></ion-icon></button>
            </form>
        </div>
    </div>
    </section>
}