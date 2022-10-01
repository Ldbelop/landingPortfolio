import React from "react";

export default function ProfilePage(){
    return <section className="flex flex-col justify-center items-center">
    <div className="bg-greybg p-[81px] rounded-[50px] my-[30px] max-w-[1520px]">
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
                Siempre me ha apasionado el desarrollo de aplicaciones, y me encuentro en un punto en el que puedo desarrollar aplicaciones web con la librería React, tengo un <span className="font-semibold">excelente manejo y conocimiento</span> en <span className="bg-[#A23A22]">HTML</span>, <span className="bg-[#937A0F]"> Javascript</span>, <span className="bg-[#006878]"> React</span> y <span className="bg-[#003766]"> Css</span>.
                </p>
                <p className="text-whiteTxt font-light text-[25px] mb-[15px]">
                </p>
                <a href="/portfolio" className="flex justify-center items-center text-[24px] font-bold text-whiteTxt w-[230px] h-[73px] bg-bluishGreyBtn rounded-[25px]" target="_blank"><p className="text-[24px] font-bold text-whiteTxt mr-[15px]">Portafolio </p><ion-icon name="image"></ion-icon></a>
            </div>
        </div>
    </div>
    <div className="bg-greybg p-[81px] rounded-[50px] my-[30px] max-w-[1520px]">
        <div className="w-[1337px] h-[528px] flex">
            <div className="w-[1299px] h-[501px] mr-[30px]">
                <div className= "max-w-[416px] bg-[#ECECEC] rounded-[30px] h-full overflow-hidden flex justify-center items-center"><img className="h-[90%] max-w-[675px]" src="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/logos%2FVuelogo.png?alt=media&token=65efb08d-a4e6-4cfa-9771-6a17bdb4e519" alt="Vue logo" /></div>
            </div>
            <div className="w-[2775px]">
                <h1 className="text-[71px] font-bold text-whiteTxt leading-[80px]">Soy estudiante de Frontend con <span className="text-[#68B281]">Vue</span></h1>
                <p className="mt-[47px] mb-[20px] text-[25px] text-whiteTxt font-light">
                Dentro de mi desarrollo profesional VueJs es uno de los mejores frameworks para estudiar, es ligero, su sintaxis es similar a la de jsx de React, y posee una alta demanda laboral <br /> 
                <br /> Lo estoy estudiando en la siguiente ruta de Platzi:
                </p>
                <p className="text-whiteTxt font-light text-[25px] mb-[15px]">
                </p>
                <a href="https://platzi.com/web-vue/?school=_escuela_escuela-web_" className="flex justify-center items-center text-[24px] font-bold text-whiteTxt w-[230px] h-[73px] bg-bluishGreyBtn rounded-[25px]" target="_blank"><p className="text-[24px] font-bold text-whiteTxt mr-[15px]">Ir a Platzi </p><ion-icon name="link"></ion-icon></a>
            </div>
        </div>
    </div>
    <div className="bg-greybg p-[81px] rounded-[50px] my-[30px] max-w-[1520px]">
        <div className="w-[1337px] h-[528px] flex">
            <div className="grid gap-2 grid-cols-1 grid-rows-[repeat(2,1fr)] w-[1299px] h-[501px] mr-[30px]">
                <div className= "bg-[#ECECEC] rounded-[30px] h-full overflow-hidden flex justify-center items-center"><img className="h-[90%]" src="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/logos%2FNodeLogo.png?alt=media&token=f4b0033e-44dd-4bb4-9be7-0eedf0e70f78" alt="css logo" /></div>
                <div className="bg-[#ECECEC] rounded-[30px] overflow-hidden flex justify-center items-center"><img className="max-w-[80%]" src="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/logos%2FExpressLogo.png?alt=media&token=42a5dc91-b90d-4db7-aad8-e850375fdc32" alt="html logo" /></div>
            </div>
            <div className="w-[2775px]">
                <h1 className="text-[71px] font-bold text-whiteTxt leading-[80px]">Soy estudiante de Backend con <span>Node</span> y <span>ExpressJS</span></h1>
                <p className="mt-[47px] mb-[20px] text-[25px] text-whiteTxt font-light overflow-scroll overflow-x-hidden max-h-[110px]" id="scrollbar">
                NodeJS es una de las librerías más usadas para el backend, la cual es muy usada y tiene bastante soporte, y ExpressJS es una librería que se usa para crear APIs, <br />
                <br />
                Lo estoy estudiando en la siguiente ruta de Platzi
                </p>
                <a href="https://platzi.com/javascript-full-stack/?school=_escuela_escuela-web_" className="flex justify-center items-center text-[24px] font-bold text-whiteTxt w-[230px] h-[73px] bg-bluishGreyBtn rounded-[25px]" target="_blank"><p className="text-[24px] font-bold text-whiteTxt mr-[15px]">Ir a Platzi </p><ion-icon name="link"></ion-icon></a>
            </div>
        </div>
    </div>
</section>
}