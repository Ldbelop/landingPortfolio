import React from "react";

export default function HomePage(){
    return <section className="px-[174px] py-[111px]">
        <div className="bg-greybg w-[1552px] h-[700px] rounded-[50px] px-[108px] py-[81px]">
            <div className="w-[1337px] h-[528px] flex">
                <div className="overflow-hidden w-[970.48px] rounded-[40px]">
                    <img className="max-w-none w-[1000px] relative right-[240px] bottom-[400px]" src="https://firebasestorage.googleapis.com/v0/b/superheroes-fakeapi.appspot.com/o/profilePic.jpeg?alt=media&token=6f654e36-6f90-49c7-8e58-6d2394d0e98f" alt="" />
                </div>
                <div className="pl-[108px] py-[65px]">
                    <h1 className="text-[71px] font-bold text-whiteTxt leading-[80px]">Hola, soy David Barón, trabajemos juntos!</h1>
                    <p className="mt-[47px] text-[25px] text-whiteTxt font-light">
                        La programación y el desarrollo de software me apasiona, 
                        encuentro fascinante absolutamente todo en este mundo del
                        desarrollo. ¿Trabajamos?
                    </p>
                    <div className="flex w-[550px] justify-between mt-[51px]">
                        <button className="flex justify-center items-center text-[24px] font-bold text-whiteTxt w-[214px] h-[73px] bg-bluishGreyBtn rounded-[25px]">Perfil <ion-icon name="person"></ion-icon></button>
                        <button className="flex justify-center items-center text-[24px] font-bold text-whiteTxt w-[214px] h-[73px] bg-bluishGreyBtn rounded-[25px]">GitHub <ion-icon name="logo-github"></ion-icon></button>
                    </div>
                </div>
            </div> 
        </div>
    </section>
}