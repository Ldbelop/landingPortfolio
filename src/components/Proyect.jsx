import React from "react";
import ProyectLib from "./ProyectLibs";

export default function Proyect({ proyectName, children, imageSRC, githubLink, pageLink, libs, figmaLink}){
    let pageOrFigmaLink = "https://www.figma.com/file/vO90bCU2VWkkd9RkGSjI14/Marvel-webpage?node-id=0%3A1";
    if(figmaLink == true){
        pageOrFigmaLink = <a href={pageLink} className="rounded-[10px] px-[16px] py-[11px] w-[170px] h-[36px] bg-blackbg  text-whiteTxt flex justify-center items-center" target="_blank"><p className="mr-[7px]">Link Figma</p> <ion-icon name="logo-figma"></ion-icon></a>;
    }
    else{
        pageOrFigmaLink = <a href={pageLink} className="rounded-[10px] px-[16px] py-[11px] w-[170px] h-[36px] bg-blackbg  text-whiteTxt flex justify-center items-center" target="_blank"><p className="mr-[7px]">Link webpage</p> <ion-icon name="document"></ion-icon></a>;
    }
    return <div className="flex justify-between items-center  mb-[94px]">
        <div className="flex items-center bg-whiteTxt max-w-[1390px] h-[480px] rounded-[50px] px-[60px] py-[58px]">
            <div className="overflow-hidden max-w-[550px] max-h-[497px] rounded-[40px]">
                <img src={imageSRC} alt="" />
            </div>
            <div className=" max-w-[770px] ml-[63px] flex flex-col justify-center h-[90%]">
                <div className="flex mb-[20px] max-w-[380px]">
                    <h2 className="font-bold text-[36px]">{ proyectName }</h2>
                </div>
                <p className="font-light text-[24px] max-h-[144px] max-w-[688px] overflow-hidden">{ children }</p>
                <div className="flex mt-[22px]">
                    <a href={githubLink} className="rounded-[10px] px-[16px] py-[11px] w-[170px] h-[36px] bg-blackbg  text-whiteTxt flex justify-center items-center mr-[31px]" target="_blank"><p className="mr-[7px]">Link Github</p> <ion-icon name="logo-github"></ion-icon></a>
                    { pageOrFigmaLink }
                </div>
            </div>
        </div>
        <ProyectLib libArray={libs}/>
    </div>
}