import React from "react";

export default function ProfilePage(){
    return <section className="px-[174px] py-[111px]">
    <div className="bg-greybg w-[1552px] h-[700px] rounded-[50px] px-[108px] py-[81px]">
        <div className="w-[1337px] h-[528px] flex">
            <div className="grid gap-2 grid-cols-2 grid-rows-[repeat(7,1fr)] w-[1299px] h-[501px] mr-[30px]">
                <div className= "bg-[#003766] row-span-3 rounded-[30px] max-h-[220px] overflow-hidden flex justify-center items-center"><img className="h-[90%]" src="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/logos%2FcssLogo.png?alt=media&token=c566987e-83ec-40bf-a81a-a44da6ac08d4" alt="css logo" /></div>
                <div className="bg-[#A23A22] row-span-2 rounded-[30px] overflow-hidden flex justify-center items-center"><img className="h-[90%]" src="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/logos%2FhtmlLogo.png?alt=media&token=e4eb4e79-a0a0-4886-8a2e-d3c644fbba2f" alt="html logo" /></div>
                <div className="bg-[#006878] row-span-5 rounded-[30px] overflow-hidden flex justify-center items-center"><img src="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/logos%2FreactLogo.png?alt=media&token=16f846a0-6d73-4ed2-8053-5b69db2179c5" alt="react logo" /></div>
                <div className="bg-[#937A0F] row-span-4 rounded-[30px] overflow-hidden flex justify-center items-center"><img className=" w-[90%]" src="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/logos%2FjavascriptLogo.png?alt=media&token=d38ccef1-744d-4416-a709-ad4f97094b73" alt="javascript logo" /></div>

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