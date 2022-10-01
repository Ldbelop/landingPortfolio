import React, { useState } from "react";

export default function ContactPage(){
    const [value, setValue] = useState("")

    function handleChange(event){
        setValue(event.target.value)
    }

    fetch("https://formsubmit.co/ajax/your@email.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: "FormSubmit",
        message: "I'm from Devro LABS"
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

    return <section className="px-[353px] py-[60px] h-auto">
    <div className=" overflow-hidden w-[1203px] h-[833px] rounded-[50px] flex flex-col justify-center items-center">
        <h1 className="bg-contactTitlebg w-full h-[13%] font-semibold text-[48px] text-whiteTxt flex items-center pl-[46px]">Contáctame</h1>
        <div className="bg-contactbg w-full h-[87%] py-[25px] px-[40px]">
            <form action="https://formsubmit.co/320dc02e6126ba94c7a0ecaadc6b45b0" method="POST" >
                <div className="flex h-auto">
                    <label className="flex flex-col">
                        <p className="font-semibold text-[24px] text-whiteTxt pl-[33px] w-[100%]">Nombres</p>
                        <input className="mt-[23px] w-[405px] h-[65px] rounded-[20px] mr-[62px] placeholder:text-[#6A7384] pl-[33px]" name="nombres"  type="text" placeholder="Escribe tu nombre completo" required/>
                    </label>
                    <label className="flex flex-col">
                        <p className="font-semibold text-[24px] text-whiteTxt pl-[33px] w-[100%]">Apellidos</p>
                        <input className="mt-[23px] w-[405px] h-[65px] rounded-[20px] placeholder:text-[#6A7384] pl-[33px]" name="apellidos" type="text" placeholder="Escribe tus Apellido" required/>
                    </label>
                </div>
                <label className="flex flex-col mt-[26px]">
                    <p className="font-semibold text-[24px] text-whiteTxt pl-[33px] w-[100%]">Correo Electrónico</p>
                    <input className="mt-[23px] w-[870px] h-[61px] rounded-[20px] placeholder:text-[#6A7384] pl-[33px]" type="email" name="email" placeholder="Escribe tu correo electrónico" required/>
                </label>
                <label className="flex flex-col mt-[26px]">
                    <p className="font-semibold text-[24px] text-whiteTxt pl-[33px] w-[100%]">Mensaje</p>
                    <textarea name="mensaje" className="pt-[24px] mt-[23px] h-[213px] rounded-[20px] text-[#6A7384] pl-[33px]" value={value} onChange={handleChange} placeholder="Escribe tu mensaje" required/>
                </label>
                <button type="submit" className="w-[181px] h-[61px] rounded-[20px] mt-[45px] bg-blackBtn font-semibold text-whiteTxt text-[24px] flex justify-center items-center">
                    Envíar 
                    <div className="text-whiteTxt text-[30px] flex items-center ml-[20px]">
                        <ion-icon name="send"></ion-icon>
                    </div>
                </button>
            </form>
        </div>
    </div>
    </section>
}