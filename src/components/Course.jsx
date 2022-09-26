import React from "react";

export default function Course({ imgSrc, children }){
    return <div className="flex flex-col items-center mr-[23px]">
        <img className="rounded-[15px] w-[230px] max-h-[185px]" src={imgSrc} alt="" />
        <p className="mt-[15px] max-w-[260px] max-h-[60px] bg-[#121F3D] text-whiteTxt p-[21px] rounded-[15px] font-semibold flex justify-center items-center text-[20px] text-center">{children}</p>
    </div>
}