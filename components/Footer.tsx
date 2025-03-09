import React from 'react'
import { WavyBackgrounddd } from "./ui/wavy-backgrounddd";
import Button from './Button';
export const socialMedia = [
  {
    id: 1,
    img: "Github",
    link: "https://github.com/harshi922"
  },
  {
    id: 2,
    img: "Linkedin",
    link: "https://www.linkedin.com/in/harshitaa-y/"
  },
];
const Footer = () => {
  return (
<div className="pt-0" id='contact'>
            
            <div>
                <WavyBackgrounddd waveOpacity={0.4} speed="fast" blur={9} waveWidth={50} backgroundFill="#fff0f3" colors={
                    ["#F0A8D0", "#F7B5CA", "#F7B5CA", "#FFC6C6", "#FFEBD4"]

                } className="max-w-18xl mx-auto pb-40">
                  
                                       

      

            <div className="flex flex-col items-center">
            <p className="text-[4rem] md:text-[7rem] lg:text-[10rem] bg-gradient-to-r from-[hsl(0,0%,0%)] via-[] to-[#ffffff] bg-clip-text text-transparent font-base inter-var text-center">
              Let's connect!
            </p> 
            <img
              src="harshitaa yarramsetti resume.png"
              alt="Harshitaa Yarramsetti"
              width={300}
              height={300}
              className="rounded-lg object-contain w-20 md:w-44 lg:w-60 h-20 md:h-44 lg:h-60 bg-white "
            />  
        
    
            </div>
            <div className="flex mb-0 md:flex-row flex-col justify-between items-center absolute bottom-0 w-full">
            <a href="mailto:harshitaay@gmail.com">
              <Button
                title="Let's get in touch"
                theme='dark'
              />
            </a>
            <div className="flex items-center md:gap-3 gap-6">
              {socialMedia.map((info) => (
                <div
                  key={info.id}
                >
                  <a href={info.link} className="text-sm sm:text-5xl md:text-md font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#F0A8D0] to-[#FFC6C6]"
>{info.img}</a>
                </div>
              ))}
            </div>
              <p className="md:text-base text-sm md:font-normal font-light">
                Copyright © 2025 Harshitaa Yarramsetti
              </p>

            </div>

                </WavyBackgrounddd>

            </div>
        </div>
  )
}

export default Footer