"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";


import { BackgroundGradientAnimation } from "./background-gradient-animation";
import Button from "../Button";
import Image from "next/image";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    //   remove unecessary things here
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
    video?: string;
}) => {
    const leftLists = ["'Air' Male Dysarthric", "'Air' Male Normal", "'Air' Male Enhanced"];
    const rightLists = ["/M01_Sess_01_0059.wav", "/MC01_Sess_01_0062.wav", "/output_denoised_vgg.wav"];

    const [copied, setCopied] = useState(false);



    const handleCopy = () => {
        const text = "harshitaay@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
    };

    return (
        <div
            className={cn(
                // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
                "row-span-1 relative overflow-hidden rounded-3xs border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                background: "rgb(240,168,208)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(240,168,208,1) 4%, rgba(255,235,212,1) 96%)",
            }}
        >
            {/* add img divs */}
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full absolute">

                    {img && (
                        <Image
                            src={img}
                            alt={img}
                            width={500}
                            height={500}
                            className={cn(imgClassName, "object-cover object-center ")}
                            style={id === 4 ? { height: "100%" } : {}} // Added inline style for id 4
                        // fill={id === 4 ? true : undefined} // Use fill prop for id 4 to take full container height
                        />
                    )}
                </div>
                <div
                    className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
                        } `}
                >
                    {spareImg && (
                        <Image
                            src={spareImg}
                            alt={spareImg}
                            width={500}
                            height={500}
                            className="object-cover object-center w-2xl h-full"
                        />
                    )}
                </div>
                {id === 6 && (
                    // add background animation , remove the p tag
                    <BackgroundGradientAnimation firstColor="#F0A8D0" secondColor="#F7B5CA" thirdColor="#FFEBD4" fourthColor="#FFC6C6" fifthColor="#F7B5CA">
                        {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div> */}
                    </BackgroundGradientAnimation>
                )}


                <div
                    className={cn(
                        titleClassName,
                        "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-50 flex flex-col px-5 p-5 lg:p-10"
                    )}
                >

                    {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
                    <div className="font-sans font-extralight md:max-w-37 md:text-xs lg:text-base text-sm text-zinc-600 z-10">
                        {description}
                    </div>
                    {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
                    {/* remove mb-2 mt-2 */}
                    <div
                        className={`font-sans text-sm lg:text-2xl max-w-96 font-bold z-10 text-[#000000]`}
                        style={{ "paddingTop": ".5rem" }}
                    >
                        {title}

                    </div>
                    {/* for the github 3d globe */}
                    {id === 2 &&


                        <BackgroundGradientAnimation firstColor="#F0A8D0" secondColor="#F7B5CA" thirdColor="#FFEBD4" fourthColor="#FFC6C6" fifthColor="#F7B5CA">
                            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                            </div>
                        </BackgroundGradientAnimation>}

                    {
                        id == 4 && (

                            <div className="absolute justify-center ">
                                <p className="text-zinc-500 text-base">Interests: I love painting in my free time, I have a black belt in Karate and I'm very interested in all things medical!</p>
                                <h1 className={`font-sans text-sm lg:text-2xl max-w-96 font-bold z-10 text-[#000000]`}
                                    style={{ "paddingTop": ".5rem" }}>About Me</h1>

                            </div>

                        )
                    }
                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-2 w-full absolute h-full p-8 pb-0">
                            {/* tech stack lists */}
                            <div className="flex flex-col gap-2 md:gap-2 lg:gap-1">
                                {leftLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#0000] text-white "
                                    >
                                        {item}
                                    </span>
                                ))}
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center "></span>
                            </div>
                            {/* Right column with playable .wav files */}
                            <div className="flex flex-col gap-1 md:gap-3 lg:gap-8">
                                <span className="lg:py-1 lg:px-3 px-3 rounded-lg text-center bg-pink"></span>
                                {rightLists.map((item, i) => (
                                    <button
                                        key={i}
                                        className="lg:py-1 lg:px-1 py-1 px-1 text-xxs lg:text-xs opacity-50 
                    lg:opacity-100 rounded-sm text-center bg-[#10132E] hover:bg-[#c0c1c5] transition"
                                        onClick={() => {
                                            const audio = new Audio(`${item}`);
                                            audio.play();
                                        }}
                                    >
                                        {item} 🔊
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    {id === 6 && (
                        <div className="mt-5 relative">

                            <div
                                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                                    }`}
                            >

                            </div>

                            <Button
                                title={copied ? "Email Copied" : "Copy email"}
                                handleClick={handleCopy}
                                themee="light"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};