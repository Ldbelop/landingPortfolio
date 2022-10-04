import React from "react";

export default function HomePage(){
    return <section className="flex justify-center items-center py-[111px] h-[100vh]">
        <div className="bg-greybg max-w-[1552px] max-h-[700px] rounded-[50px] px-[108px] py-[81px]">
            <div className="max-w-[1337px] max-h-[528px] flex">
                <div className="overflow-hidden max-w-[970.48px] rounded-[40px]">
                    <img className="min-w-[361px] max-w-[1000px] relative right-[240px] bottom-[400px]" src="https://firebasestorage.googleapis.com/v0/b/superheroes-fakeapi.appspot.com/o/profilePic.jpeg?alt=media&token=6f654e36-6f90-49c7-8e58-6d2394d0e98f" alt="" />
                </div>
                <div className="pl-[108px] flex flex-col justify-center max-w-[910px]">
                    <h1 className="text-[71px] font-bold text-whiteTxt leading-[80px]">Hola, soy David Barón, trabajemos juntos!</h1>
                    <p className="mt-[47px] text-[25px] text-whiteTxt font-light">
                        Soy un apasionado por la tecnología y el desarrollo de software, me encuentro estudiando desarrollo Fullstack en <a href="https://platzi.com/" className="text-[#7DCA2A] font-semibold">Platzi</a>, siempre busco aprender algo nuevo y me emociona trabajar en nuevos proyectos, así que te pregunto... <a className="font-semibold">¿Trabajamos?</a>.
                    </p>
                    <div className="flex w-[550px] justify-between mt-[51px]">
                        <a href="/profile" className="flex justify-center items-center text-[24px] font-bold text-whiteTxt w-[214px] h-[73px] bg-bluishGreyBtn rounded-[25px]"><p className="text-[24px] font-bold text-whiteTxt mr-[15px]">Perfil</p><ion-icon name="person"></ion-icon></a>
                        <a href="https://github.com/Ldbelop" className="flex justify-center items-center text-[24px] font-bold text-whiteTxt w-[214px] h-[73px] bg-bluishGreyBtn rounded-[25px]" target="_blank"><p className="text-[24px] font-bold text-whiteTxt mr-[15px]">GitHub</p><ion-icon name="logo-github"></ion-icon></a>
                    </div>
                </div>
            </div> 
        </div>
    </section>
}