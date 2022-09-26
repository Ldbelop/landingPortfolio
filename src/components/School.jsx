import React from "react";

export default function School({ children, title, mainColor, secondaryColor, classProp}){
    console.log(mainColor)
    return <div style={{'--div-color-data': mainColor,}} className={`flex flex-col justify-center items-center w-[1438px] h-[360px] border-[1px] mt-[81px] rounded-[20px] ${classProp}`}>
        <h2 style={{'--h1-color-data': mainColor,}} className={`relative bottom-[25px] min-w-[409px] max-w-[500px] h-[50px] rounded-[15px] flex justify-center items-center text-[32px] font-bold px-[20px] ${classProp}`}>{ title }</h2>
        <div className="flex flex-row items-center justify-around">
            { children }
        </div>
        <p style={{'--p-color-data': secondaryColor,}} className={`relative top-[25px] rounded-[10px] px-[15px] py-[11px] ${classProp}P`}>Ver más cursos </p>
    </div>
}
// 