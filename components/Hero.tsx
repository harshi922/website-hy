"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

const Hero = () => {
    return (
        <div className="pt-10">

            <div>
                <WavyBackground waveOpacity={0.4} speed="fast" blur={9} waveWidth={50} backgroundFill="#fff0f3" colors={
                    ["#F0A8D0", "#F7B5CA", "#F7B5CA", "#FFC6C6", "#FFEBD4"]

                } className="max-w-18xl mx-auto pb-40">

                    <p className="text-[4rem] md:text-[7rem] lg:text-[10rem] bg-gradient-to-r from-[hsl(0,0%,0%)] via-[] to-[#d6d6d6] bg-clip-text text-transparent font-base inter-var text-center">
                        Harshitaa Yarramsetti
                    </p>

                    <p className="text-center text-xl md:text-lg md:text-center mt-4 text-zinc-600 font-semibold inter-var sm:px-10 px-5 mx-4">
                        Data Enthusiast and Full Stack Developer with expertise in AI, geospatial technologies, and cloud solutions. Combining research experience from NC State University and the University of Cyprus with technical skills in Python, TensorFlow, AWS, and modern web frameworks to deliver innovative solutions. Passionate about leveraging data science and computer vision to solve complex problems, with published research in cloud image processing and security systems.                    </p>
                </WavyBackground>

            </div>
        </div>

    )
}

export default Hero