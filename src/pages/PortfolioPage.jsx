import React from "react";
import Proyect from "../components/Proyect";

export default function PortfolioPage(){
    return <section className="px-[174px] py-[111px]">
        <Proyect proyectName="To-Do App" imageSRC="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/proyect%2Fto-doApp.PNG?alt=media&token=d0814a03-33c6-4e35-8346-66857db02546" githubLink="https://github.com/Ldbelop/To-DoApp" pageLink="https://delightful-mooncake-c3e258.netlify.app/">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </ Proyect>
        <Proyect proyectName="Heroes App" imageSRC="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/proyect%2FmarvelAPI.png?alt=media&token=841761f4-14d9-4894-9382-634b3a558788" githubLink="https://github.com/Ldbelop/heroesAPI-consumingApp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </ Proyect>
        <Proyect proyectName="App del Clima" imageSRC="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/proyect%2FclimaApp.PNG?alt=media&token=d620297b-ce07-4bf8-97de-6ff866806339" githubLink="https://github.com/Ldbelop/climaApp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </ Proyect>
</section>
}