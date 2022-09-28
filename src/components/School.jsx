import React from "react";

export default function School({ children, title, mainColor, secondaryColor, classProp}){
    return <div style={{'--div-color-data': mainColor,}} className={`flex flex-col justify-center items-center w-[1438px] h-[460px] border-[1px] mt-[120px] rounded-[20px] ${classProp}`}>
        <h2 style={{'--h1-color-data': mainColor,}} className={`relative bottom-[50px] min-w-[409px] max-w-[550px] h-[50px] rounded-[15px] flex justify-center items-center text-[32px] font-bold px-[20px] ${classProp}`}>{ title }</h2>
        <div className="flex flex-row justify-around w-full items-baseline">
            { children }
        </div>
        <p style={{'--p-color-data': secondaryColor,}} className={`relative top-[45px] rounded-[10px] px-[15px] py-[11px] ${classProp}P`}>Ver más cursos </p>
    </div>
}
// 