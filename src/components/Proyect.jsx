import React from "react";

export default function Proyect({ proyectName, children, imageSRC, githubLink, pageLink }){
    return <div className="flex items-center bg-whiteTxt w-[1560px] h-[480px] rounded-[50px] px-[60px] py-[58px] mb-[94px]">
        <div className="overflow-hidden w-[669px] max-h-[497px] rounded-[40px]">
            <img src={imageSRC} alt="" />
        </div>
        <div className="max-w-[770px] ml-[63px] relative bottom-[30px] flex flex-col justify-center h-[100%]">
            <h2 className="font-bold text-[36px] mb-[20px]">{ proyectName }</h2>
            <p className="font-light text-[24px]">{ children }</p>
            <div className="flex mt-[22px]">
                <a href={githubLink} className="rounded-[10px] px-[16px] py-[11px] w-[170px] h-[36px] bg-blackbg  text-whiteTxt flex justify-center items-center mr-[31px]" target="_blank"><p className="mr-[7px]">Link Github</p> <ion-icon name="logo-github"></ion-icon></a>
                <a href={pageLink} className="rounded-[10px] px-[16px] py-[11px] w-[170px] h-[36px] bg-blackbg  text-whiteTxt flex justify-center items-center" target="_blank"><p className="mr-[7px]">Link webpage</p> <ion-icon name="document"></ion-icon></a>
            </div>
        </div>
    </ div>
}