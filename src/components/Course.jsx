import React from "react";

export default function Course({ imgSrc, children, mainColor }){
    return <div className="flex flex-col items-center">
        <div style={{'--divCourse-color-data': mainColor,}} className={`overflow-hidden rounded-[15px] w-[230px] h-[200px] flex justify-center items-center clasePrueba`}>
            <img className="max-h-[160px]" src={imgSrc} alt="" />
        </div>
        <p className="mt-[15px] max-w-[260px] max-h-[100px] bg-[#121F3D] text-whiteTxt p-[21px] rounded-[15px] font-semibold flex justify-center items-center text-[20px] text-center">{children}</p>
    </div>
}