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

                        Aspiring Software Engineer | Innovating for good with Software, Data and AI
                        <br />

                        I love building cool, usable stuff which makes a real difference to people and I don't like typing up LinkedIn style taglines (I probably should). 
                    </p>
                </WavyBackground>

            </div>
        </div>

    )
}

export default Hero