"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/image-slider";
import Button from "./Button";

export function CurrentWork() {
    const images = [
        "/_C__Users_harsh_Downloads_habitat_suitability_map.html(Nest Hub Max).png",
        "/map.png",
        "/mapworld.png",
    ];


    console.log(images);
    return (
        <ImagesSlider className="h-[55rem]" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >

                <h2 className="mt-10 pt-20 text-[2rem] md:text-[4rem] lg:text-[5rem] text-center mb-6 text-zinc-400 font-semibold inter-var">
                    Current Work <br /> Forestry Recommendation System
                </h2>
                <p className="text-left text-zinc-700 text-base lg:text-xl sm:text-xs mx-auto sm:ml-10 ml-40 sm:mr-20 mr-40">
                    Working on building a multi-modal recommendation system to predict a suitability score for tree species to enhance Forest yield based on proprietary tree species data for a forestry company. (Working on a GSI paper)
                </p>
                <br />

            </motion.div>
        </ImagesSlider>
    );
}
export default CurrentWork;