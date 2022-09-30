import React from "react";

export default function ProyectLib({libArray}){
    const logos = libArray;

    return (
        <div className="bg-whiteTxt p-[32px] max-h-[480px] flex flex-col rounded-[30px]">
        { logos.map((logo) => 
            <div className="max-w-[95px] max-h-[120px] flex flex-col items-center mb-[20px]" key={Math.random().toString(20).substr(2)}>
                <img className="max-w-[81px]" src={logo.src} />
                <h2 className="font-semibold text-[24px]">{logo.text}</h2>
            </div> )}
        </div>
    )    
}