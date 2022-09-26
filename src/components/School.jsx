import React from "react";

export default function School({ children, title, mainColor}){
    console.log(mainColor)
    return <div className={`w-[1438px] h-[360px] border-[1px] border-[${mainColor.replace(/['"]+/g, '')}]`}>
        <h2>{ title }</h2>
        { children }
        <p>Ver más cursos </p>
    </div>
}
// 