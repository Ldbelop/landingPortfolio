import React from "react";

export default function Course({ imgSrc, courseDescription }){
    return <div>
        <img src={imgSrc} alt="" />
        <p>{courseDescription}</p>
    </div>
}