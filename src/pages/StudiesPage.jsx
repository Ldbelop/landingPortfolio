import React from "react";
import School from "../components/School";
import Course from "../components/Course";

export default function StudiesPage(){
    return <section className="px-[174px] py-[111px] h-auto">
    <div className="bg-platziblue w-[1552px] h-auto rounded-[50px] px-[108px] py-[81px] flex justify-center items-center">
        <div className="w-[1438px] h-[1auto">
            <img className="h-[70px]" src="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/logos%2FplatziLogo.png?alt=media&token=97a2066a-ca5f-4f85-b51d-3b14d3f0c14f" alt="Platzi Logo" />
            <School title="Escuela de Desarrollo Web" mainColor="#AED901" classProp="webSchool" secondaryColor="#AEDA00">
                <Course mainColor="#D6FF99" imgSrc="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/courses%2FwebDev%2Fprog-basica.avif?alt=media&token=47a9a3a8-061e-4cec-b0c0-13816ccde517">Curso de Programación Básica</Course>
                <Course mainColor="#D6FF99" imgSrc="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/courses%2FwebDev%2FGitGitHub.avif?alt=media&token=fdd30fff-545d-43cd-9e04-b70e8c9ee252">Curso Profesional de Git y GitHub</Course>
                <Course mainColor="#D6FF99" imgSrc="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/courses%2FwebDev%2FingSoft.webp?alt=media&token=eb138e61-d9f3-4d68-bb3f-b0061342d7d2">Fundamentos de Ingeniería de Software</Course>
                <Course mainColor="#D6FF99" imgSrc="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/courses%2FwebDev%2FhistoriaProg.avif?alt=media&token=ecf7691b-f69e-423f-b5df-9e5221addabd">Curso de Historia de la Programación</Course>
                <Course mainColor="#D6FF99" imgSrc="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/courses%2FwebDev%2FcomputPython.webp?alt=media&token=84ab9320-ca6a-4d88-b0db-3691f8dc626f">Curso de Introducción al pensamiento computacional</Course>
            </School>
            <School title="Escuela de DevOps" mainColor="#43C301" classProp="progSchool" secondaryColor="#DBFF9F">
                <Course mainColor="#b8fe94" imgSrc="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/courses%2FdevOps%2Fterminal.avif?alt=media&token=33378a3e-9b37-4cd3-8bdb-edd1e981ed7f">Curso de Terminal y línea de comandos</Course>
                <Course mainColor="#b8fe94" imgSrc="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/courses%2FdevOps%2Flinuts.avif?alt=media&token=48aa6290-f325-43c7-9a9c-7131bd02db84">Curso de Servidores Linux</Course>
                <Course mainColor="#b8fe94" imgSrc="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/courses%2FdevOps%2Fbackend.avif?alt=media&token=9ba85eba-17df-442e-b473-5988cb4e7668">Curso de Desarrollo Backend</Course>
                <Course mainColor="#b8fe94" imgSrc="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/courses%2FdevOps%2Fdespliegueapps.avif?alt=media&token=57eda87d-c567-48f3-8dcd-569f82996431">Curso de Despliegue de Aplicaciones</Course>
                <Course mainColor="#b8fe94" imgSrc="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/courses%2FdevOps%2Ftesting.avif?alt=media&token=9f7e19d6-150c-4bd9-91b6-6f52b4e5acec">Curso de Fundamentos de Pruebas de Software</Course>
            </School>
            <School title="Escuela de UX/UI" mainColor="#B9A1FE" classProp="jsSchool" secondaryColor="#e6deff">
                <Course mainColor="#d7c9fe" imgSrc="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/courses%2Fdesign%2FinterfaceDesign.avif?alt=media&token=05903ed8-c6d6-44b0-b618-e9984c6c34a2">Curso de Diseño de Interfaces</Course>
                <Course mainColor="#d7c9fe" imgSrc="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/courses%2Fdesign%2Filustracionproducts.webp?alt=media&token=9488f385-0833-4f0f-9e59-cdd1c0e2d69a">Curso de Ilustración para productos digitales</Course>
                <Course mainColor="#d7c9fe" imgSrc="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/courses%2Fdesign%2Fmetodolog%C3%ADasdedise%C3%B1o.avif?alt=media&token=a25de18e-c686-4e69-949d-e1c1cb8caded">Curso de Diseño para un Producto Digital</Course>
                <Course mainColor="#d7c9fe" imgSrc="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/courses%2Fdesign%2Fadobexd.avif?alt=media&token=21e5c82e-2932-4186-8e2c-2130c5a865d1">Curso de Adobe XD</Course>
                <Course mainColor="#d7c9fe" imgSrc="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/courses%2Fdesign%2Ffigma.avif?alt=media&token=b9a699db-1318-42d4-aa5e-992a28d7684f">Curso de Figma</Course>
            </School>
            <School title="Escuela de Data Science" mainColor="#73DA38" classProp="jsSchool" secondaryColor="#9EE575">
                <Course mainColor="#9ee575" imgSrc="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/courses%2FdataScience%2FanalisisNegocios.avif?alt=media&token=d924e339-7300-46ec-925c-6949f9a94a52">Curso de Análisis de Negocios para Data Science</Course>
                <Course mainColor="#9ee575" imgSrc="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/courses%2FdataScience%2Feticamanejodatos.avif?alt=media&token=12cd0e69-4dc1-4597-8889-2e88ffd044ac">Curso de Ética y Manejo de Datos</Course>
                <Course mainColor="#9ee575" imgSrc="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/courses%2FdataScience%2FfundamentosMAtws.avif?alt=media&token=316dd80c-22c6-498e-a8eb-c656dbfc8875">Curso de Fundamentos de Matemáticas</Course>
                <Course mainColor="#9ee575" imgSrc="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/courses%2FdataScience%2Falgebra.avif?alt=media&token=8369380e-8208-4945-b258-8fe301d4a734">Curso de Álgebra</Course>
                <Course mainColor="#9ee575" imgSrc="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/courses%2FdataScience%2Falgebra.avif?alt=media&token=8369380e-8208-4945-b258-8fe301d4a734">Curso de Lenguaje y Notación Matemática</Course>
            </School>
        </div>
    </div>
    <div className="bg-whiteTxt w-[1552px] h-auto rounded-[50px] px-[50px] py-[50px] flex mt-[70px]">
        <div>
            <div className="flex items-center">
                <img className="max-w-[149px] max-h-[142px]" src="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/logos%2FFIMLM.png?alt=media&token=88183805-8fa5-49fe-891e-f5e68cd5d87e" alt="FIMLM logo" />
                <h2 className="font-semibold text-[32px] max-w-[400px] leading-9">Fundación Internacional Maria Luisa de Moreno</h2>
            </div>
            <div className="flex justify-between mt-[90px]">
                <div className="overflow-hidden rounded-[30px]">
                    <img src="https://firebasestorage.googleapis.com/v0/b/personal-landing-540bc.appspot.com/o/logos%2Ffronted.png?alt=media&token=f1af1735-87b7-49b2-b77d-5856c42e6c78" alt="diplomate illustration" />
                </div>
                <div className="max-w-[440px] mx-[75px]">
                    <h2 className="font-semibold text-[36px] text-[#00436C] leading-9 mb-[30px]">Diplomado en Desarrollo Front-end con ReactJS</h2>
                    <p className="font-regular text-[24px] leading-[1.9rem]">Este diplomado es impartido por la Fundación Internacional Maria Luisa de Moreno, permite comprender completamente la librería de ReactJS</p>
                </div>
            </div>
        </div>
        <div className="w-[415px]">
            <div className="max-w-[415px] border-2 border-[#333333] rounded-[50px] flex flex-col justify-center items-center h-[540px]">
                <h2 className="font-semibold text-[36px] leading-9 text-center w-[317px] mb-[48px]">Ver certificación del diplomado</h2>
                <a href="" className="flex items-center p-[15px] font-regular text-[20px] max-w-[201px] max-h-[50px] bg-[#dddddd] rounded-[10px]"><span className="mr-[5px]">ir a certificado</span> <ion-icon name="document-attach-outline"></ion-icon></a>
            </div>
        </div>
    </div>
</section>
}