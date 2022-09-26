import React from "react";

export default function ProfilePage(){
    return <section className="px-[174px] py-[111px]">
    <div className="bg-greybg w-[1552px] h-[700px] rounded-[50px] px-[108px] py-[81px]">
        <div className="w-[1337px] h-[528px] flex">
            <div className="grid gap-2 grid-cols-2 grid-rows-7 w-[1299px] h-[501px] mr-[30px]">
                <div className="bg-blue-300 row-span-3 rounded-[30px]">css</div>
                <div className="bg-orange-300 row-span-2 rounded-[30px]">html</div>
                <div className="bg-blue-600 row-span-5 rounded-[30px]">react</div>
                <div className="bg-yellow-300 row-span-4 rounded-[30px]">javascript</div>

            </div>
            <div className="w-[2775px]">
                <h1 className="text-[71px] font-bold text-whiteTxt leading-[80px]">Soy desarrollador frontend con <span className="text-[#51C2E0]">ReactJS</span></h1>
                <p className="mt-[47px] mb-[20px] text-[25px] text-whiteTxt font-light">
                Todo lo que tenga que ver con el desarrollo de software me apasiona, incluido el desarrollo web, disfruto hacer proyectos 
                que pongan a prueba mis conocimientos y  me permiten crecer como profesional. 
                </p>
                <p className="text-whiteTxt font-light text-[25px] mb-[15px]">
                A continuación, está mi hoja de vida, donde está más condensada la información acerca de mi.
                </p>
                    <button className="flex justify-center items-center text-[24px] font-bold text-whiteTxt w-[214px] h-[73px] bg-bluishGreyBtn rounded-[25px]">Hoja de vida <ion-icon name="newspaper"></ion-icon></button>
            </div>
        </div> 
    </div>
</section>
}