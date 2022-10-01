import React from "react";

export default function FooterComponent(){
    return <footer className="py-[20px] flex bg-black pr-[126px] pl-[77px] justify-between items-center">
            <div className="flex">
                <p className="text-white font-light text-[20px] mr-[17px]">Diseño creado por <a className="underline decoration-solid underline-offset-4" href="">Jesus Porras</a></p>
                <a className="flex items-center text-white text-[30px] mr-[20px]" href="https://www.linkedin.com/in/david-leonardo-bar%C3%B3n-avilan-b14214242/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>                    
                <a className="flex items-center text-white text-[30px]" href="https://github.com/Ldbelop" target="_blank"><ion-icon name="logo-behance"></ion-icon></a>
            </div>
            <div className="flex">
                <p className="text-white font-light text-[20px] mr-[17px]">Código por <a className="underline decoration-solid underline-offset-4" href="">David Barón</a></p>
                <a className="flex items-center text-white text-[30px] mr-[20px]" href="https://www.linkedin.com/in/david-leonardo-bar%C3%B3n-avilan-b14214242/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
                <a className="flex items-center text-white text-[30px]" href="https://github.com/Ldbelop" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
            </div>
</footer>
}