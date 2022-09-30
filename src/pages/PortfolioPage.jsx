import React from "react";
import Proyect from "../components/Proyect";

export default function PortfolioPage(){
    return <section className="px-[174px] py-[111px]">
        <Proyect 
            proyectName="To-Do App" 
            imageSRC="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/proyect%2Fto-doApp.PNG?alt=media&token=d0814a03-33c6-4e35-8346-66857db02546" 
            githubLink="https://github.com/Ldbelop/To-DoApp" 
            pageLink="https://delightful-mooncake-c3e258.netlify.app/" 
            libs={
                [
                    {
                        src: "https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/logos%2Flogo-react.svg?alt=media&token=52fffc65-3656-4e30-bd0d-e142ddf6b867",
                        text: "React"
                    },
                    {
                        src: "https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/logos%2FTailwind_CSS_Logo.svg?alt=media&token=58034822-5ada-4bf0-a888-3413f7534da7",
                        text: "Tailwind"
                    },
                ]}>
            Este proyecto muestra un CRUD (Crear Leer Actualizar Borrar) hecho en React, en donde se le permite al usuario crear tarjetas, actualizarlas y borrarlas, conservando la información de las tarjetas en el localStorage.
            
        </ Proyect>
        <Proyect 
            proyectName="Heroes App" 
            imageSRC="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/proyect%2FmarvelAPI.png?alt=media&token=841761f4-14d9-4894-9382-634b3a558788" githubLink="https://github.com/Ldbelop/heroesAPI-consumingApp" 
            libs={
                [
                    {
                        src: "https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/logos%2Flogo-react.svg?alt=media&token=52fffc65-3656-4e30-bd0d-e142ddf6b867",
                        text: "React"
                    },
                    {
                        src: "https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/logos%2FTailwind_CSS_Logo.svg?alt=media&token=58034822-5ada-4bf0-a888-3413f7534da7",
                        text: "Tailwind"
                    },
                    {
                        src: "https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/logos%2Flogo-axios.svg?alt=media&token=b8cc8bc7-a6f4-4109-884a-d5b76bcd31d8",
                        text: "Axios"
                    }
                ]}
        >
            Este proyecto consta de una aplicación de React, que consume una Fake API hecha con JSONServer, consiste en un ranking de los mejores 20 superhéroes de DC, los cuales están dentro de la fake API. 
        </ Proyect>
        <Proyect 
            proyectName="App del Clima" 
            imageSRC="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/proyect%2FclimaApp.PNG?alt=media&token=d620297b-ce07-4bf8-97de-6ff866806339" 
            githubLink="https://github.com/Ldbelop/climaApp" 
            libs={
                [
                    {
                        src: "https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/logos%2Flogo-react.svg?alt=media&token=52fffc65-3656-4e30-bd0d-e142ddf6b867",
                        text: "React"
                    },
                    {
                        src: "https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/logos%2FTailwind_CSS_Logo.svg?alt=media&token=58034822-5ada-4bf0-a888-3413f7534da7",
                        text: "Tailwind"
                    },
                ]}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </ Proyect>
</section>
}