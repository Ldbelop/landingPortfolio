import React from "react";

export default function Proyect({ proyectName, children, imageSRC }){
    return <div className="flex items-center bg-greybg w-[1552px] h-[600px] rounded-[50px] px-[108px] py-[81px] mb-[94px]">
        <div className="overflow-hidden w-[669px] max-h-[497px] rounded-[40px]">
            <img src={imageSRC} alt="" />
            <div className="flex">
                <h3 className="flex justify-center items-center w-[50%] h-[50px] bg-[#1F7337] text-[25px] font-semibold text-whiteTxt">Link Github <ion-icon name="logo-github"></ion-icon></h3>
                <h3 className="flex justify-center items-center w-[50%] h-[50px] bg-[#1F6973] text-[25px] font-semibold text-whiteTxt">Link webpage <ion-icon name="document"></ion-icon></h3>
            </div>
        </div>
        <div className="w-[642px] h-[422px] ml-[63px] relative bottom-[30px]">
            <h2 className="z-10 relative left-[10px] max-w-[551px] h-[90px] bg-blackBtn text-whiteTxt font-semibold text-[50px] flex justify-center items-center rounded-[30px]">{ proyectName }</h2>
            <p className="z-0 relative bottom-[43px] rounded-[20px] px-[30px] pb-[20px] pt-[50px] text-[32px] text-whiteTxt font-light border-[1px] border-whiteTxt">{ children }</p>
        </div>
    </ div>
}