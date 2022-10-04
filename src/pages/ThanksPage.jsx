import React from "react";

export default function ThanksPage(){
    return <section className="flex flex-col justify-center items-center h-[100vh]">
        <div className="bg-[#1e2328] flex flex-col items-center p-[30px] rounded-[40px]">
            <h1 className="font-semibold text-whiteTxt text-[300px]">Gracias!</h1>
            <a className="text-whiteTxt text-[40px] active:text-[#24D0DB]" href="/">Volver a la página web</a>
        </div>
    </section>
}