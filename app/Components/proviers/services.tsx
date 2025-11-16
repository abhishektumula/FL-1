import { title } from "process"
import React from "react"

export const LightLogo = () => {
    return (
        <svg width="72" height="70" viewBox="0 0 72 70" fill="none" xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink">
        <rect width="72" height="70" fill="url(#pattern0_1_50)"/>
        <defs>
        <pattern id="pattern0_1_50" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use href="#image0_1_50" transform="scale(0.0138889 0.0142857)"/>
        </pattern>
        <image id="image0_1_50" width="72" height="70" preserveAspectRatio="none" href="data:image/png;base64,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"/>
        </defs>
        </svg>

    )
}

export const SecondLogo = () => {
    return (
        <svg width="72" height="70" viewBox="0 0 72 70" fill="none" xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink">
            <rect width="72" height="70" fill="url(#pattern0_1_52)"/>
            <defs>
            <pattern id="pattern0_1_52" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use href="#image0_1_52" transform="scale(0.0138889 0.0142857)"/>
            </pattern>
            <image id="image0_1_52" width="72" height="70" preserveAspectRatio="none" href="data:image/png;base64,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"/>
            </defs>
        </svg>

    )
}

export const ThirdLogo = () => {
    return (
        <svg width="72" height="70" viewBox="0 0 72 70" fill="none" xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink">
            <rect width="72" height="70" fill="url(#pattern0_1_51)"/>
            <defs>
            <pattern id="pattern0_1_51" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use href="#image0_1_51" transform="scale(0.0138889 0.0142857)"/>
            </pattern>
            <image id="image0_1_51" width="72" height="70" preserveAspectRatio="none" href="data:image/png;base64,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"/>
            </defs>
        </svg>
    )
}

export const ServiceCard = ({ser, title, desc} : {ser: React.ReactNode; title:string; desc: string}) => {
    return (
        <div className="flex flex-col gap-3 md:gap-5 justify-start items-start">
            <div className="rounded-2xl">{ser}</div>
            <div className="flex flex-col justify-start items-start gap-2">
                <h1 className="text-lg md:text-2xl">{title}</h1>
                <p className="text-lg text-neutral-500 tracking-tight">{desc}</p>
            </div>
        </div>

    )
}

export function Services() {
    const dets = [
        {
            comp : <LightLogo/>,
            title : "Lighting Desing",
            desc : "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere."
        }, 
        {
            comp: <SecondLogo/>, 
            title : "Interior Desing", 
            desc : "From concept to completion, we oversee every detail to bring your vision to life efficiently"
        }, 
        {
            comp: <ThirdLogo/>, 
            title : "Outdoor Design", 
            desc : "Celebrate the changing seasons with our seasonal outdoor decor services"
        }
    ]
    return(
        <div className="flex flex-col gap-2 md:gap-6 p-2 md:p-4 items-start justify-start">
            <h1 className="text-3xl md:text-5xl p-2 md:p-4 font-semibold">Our Services</h1>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 p-3">
                {dets.map((each, index) => (
                    <ServiceCard key={index} ser={each.comp} title={each.title} desc={each.desc}/>
                ))}

            </div>
        </div>   
    )
}