import React from 'react'
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { LinkPreview } from "@/components/ui/link-preview";
import { text } from 'stream/consumers';
const WorkEx = () => {
    const data = [
        {
            title: "Jan 2015 - Present",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-m font-normal mb-2">
                        Research Assistant, Camcore Cooperative (NC State University)
                    </p>
                    <div className="grid grid-cols-2 gap-5">
                        <Image
                            src="/hsm1.png"
                            alt="habitatsuitabilitymodelling"
                            width={300}
                            height={300}
                            className="rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/mapp.png"
                            alt="clusters"
                            width={300}
                            height={300}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/hsmm3.svg"
                            alt="mapandpoints"
                            width={300}
                            height={300}
                            className="rounded-lg object-contain w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        /> <Image
                            src="/hsmm1.svg"
                            alt="mapandpoints"
                            width={300}
                            height={300}
                            className="rounded-lg object-contain w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        
        {
            title: "May 2022 - Oct 2022",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-m font-normal mb-2">
                        Research Intern, University of Cyprus
                    </p>
                    <div className='flex flex-row justify-between' style={{ 'textDecoration': 'text-underline' }}>
                        {/* <p className="text-neutral-800 dark:text-neutral-200 text-s md:text-m font-normal mb-2"> */}
                           
                            <LinkPreview
                            url="https://ieeexplore.ieee.org/document/10227259"
                            className="border-b-2 text-normal sm:text-sm md:text-md font-bold bg-clip-text text-transparent bg-zinc-400"
                                imageSrc='/cyprus.png'
                                isStatic={true}

                            >
                                A Novel Deep Hierarchical Machine Learning
                                Approach for Identification of Known and
                                Unknown Multiple Security Attacks in a D2D
                                Communications Network

                            </LinkPreview>
                        {/* </p> */}
                        <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-m font-normal mb-2">
                            15+ Citations
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <Image
                            src="/cyprus1.png"
                            alt="startup template"
                            width={300}
                            height={300}
                            className="rounded-lg object-contain w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/cyprus2.png"
                            alt="startup template"
                            width={300}
                            height={300}
                            className="rounded-lg object-contain w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Jun 2020 - Aug 2020",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-s md:text-m font-normal mb-2">
                        Full Stack Software Development Intern, Ingenium
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-s md:text-m font-normal mb-2">
                        Developed Fresh 2 Kitchen's Website with Responsive Design
                    </p>
                    
                </div>
            ),
        },

    ];
    return (
        <div className="w-full" id="work">
            <Timeline data={data} />
        </div>
    );
};
export default WorkEx