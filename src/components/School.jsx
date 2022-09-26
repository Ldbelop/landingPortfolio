import React from "react";

export default function School({ children, title, mainColor}){
    console.log(mainColor)
    return <div className={`flex flex-col justify-center items-center w-[1438px] h-[360px] border-[1px] border-[${mainColor   }]`}>
        <h2 className={`min-w-[409px] max-w-[500px] h-[50px] bg-[${mainColor}] rounded-[15px] flex justify-center items-center text-[32px] font-bold px-[20px]`}>{ title }</h2>
        <div>
            { children }
        </div>
        <p>Ver más cursos </p>
    </div>
}
// 