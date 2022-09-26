import React from "react";
import School from "../components/School";
import Course from "../components/Course";

export default function StudiesPage(){
    return <section className="px-[174px] py-[111px] h-auto">
    <div className="bg-platziblue border-2 border-[#98CA] w-[1552px] h-[1545px] rounded-[50px] px-[108px] py-[81px] flex justify-center items-center">
        <div className="w-[1438px] h-[1410px]">
            <img className="h-[70px]" src="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/logos%2FplatziLogo.png?alt=media&token=97a2066a-ca5f-4f85-b51d-3b14d3f0c14f" alt="Platzi Logo" />
            <School title="Escuela de programación" mainColor="#98CA3F">
                <Course imgSrc="https://cdns-images.dzcdn.net/images/cover/bfb3eb32f23dc295c6ad4a9d6e8c5851/264x264.jpg" courseDescription="Placeholder"></Course>
            </School>
            <School title="Escuela de Javascript" mainColor="#F7E026">
                <Course imgSrc="https://cdns-images.dzcdn.net/images/cover/bfb3eb32f23dc295c6ad4a9d6e8c5851/264x264.jpg" courseDescription="Placeholder"></Course>
            </School>
            <School title="Escuela de Desarrollo Web" mainColor="#AEDA00">
                <Course imgSrc="https://cdns-images.dzcdn.net/images/cover/bfb3eb32f23dc295c6ad4a9d6e8c5851/264x264.jpg" courseDescription="Placeholder"></Course>
            </School>
        </div>
    </div>
</section>
}