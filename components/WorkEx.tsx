'use client';
import React from 'react'
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { LinkPreview } from "@/components/ui/link-preview";
import Link from 'next/link';
const WorkEx = () => {
    const data = [
        {
            title: "May 2025 - Present",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-m font-normal mb-2">
                        Software Engineering Intern, <Link href="https://spencerhealthsolutions.com/" style={{
                            color: '#F0A8D0',
                            textDecoration: 'none'
                        }}
                            onMouseEnter={e => ((e.target as HTMLAnchorElement).style.textDecoration = 'underline')}
                            onMouseLeave={e => ((e.target as HTMLAnchorElement).style.textDecoration = 'none')}
                            target="_blank"
                            rel="noopener noreferrer">Spencer Health Solutions, Raleigh, NC</Link>
                    </p>
                    <div className="grid grid-cols-2 gap-5">
                        <p>
                            <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-lg md:text-m font-normal mb-2">
                                <li>Deployed object detection model with field errors reduced by 97% on embedded device software in an ONNX runtime environment</li>
                                <li>Automated embedded device image capture using Rabbit Messages to do motor movements reducing capture time by 99%</li>
                                <li>Architected and deployed log parsing on ELK (Elasticsearch Logstash Kibana) and created an automatic log parser agent using LLMs and Visual Question Answering Systems  </li>
                            </ul>
                          
                        </p>
                        <Image
                            src="/labels_correlogram.jpg"
                            alt="habitatsuitabilitymodelling"
                            width={300}
                            height={300}
                            className="rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/PR_curve.png"
                            alt="clusters"
                            width={300}
                            height={300}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/results.png"
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
            title: "Jan 2025 - May 2025",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-m font-normal mb-2">
                        Research Assistant, <Link href="https://www.camcore-ncsu.org/" style={{
                            color: '#F0A8D0',
                            textDecoration: 'none'
                        }}
                            onMouseEnter={e => ((e.target as HTMLAnchorElement).style.textDecoration = 'underline')}
                            onMouseLeave={e => ((e.target as HTMLAnchorElement).style.textDecoration = 'none')}
                            target="_blank"
                            rel="noopener noreferrer">Camcore, Raleigh, NC</Link>
                    </p>
                    <div className="grid grid-cols-2 gap-5">
                        <p>
                            <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-lg md:text-m font-normal mb-2">
                                <li>Increased forestry yield by through enviromics-based modeling, leveraging time series forecasting for statistics-based distribution models and recommendation systems to align to business models and optimize for business objectives.</li>
                                <li>Reduced processing time by 99.6% (from 45 minutes to 11 seconds) by creating an optimized ETL pipeline and building a 1 TB geospatial database with covariables, exposed via a unified geospatial REST API using FastAPI.</li>
                                <li>Enhanced workflow efficiency and data accessibility by orchestrating pipelines with Apache Airflow, deploying a robust PostgreSQL/PostGIS database on AWS, and delivering interactive dashboards via Power BI, Tableau, and Shiny. </li>
                                <li>Built a POSTGIS SQL Agent using LangGraph/ LangChain</li>
                            </ul>

                        </p>
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
                        <p>
                            <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-lg md:text-m font-normal mb-2">
                                <li>Improved intrusion anomaly detection accuracy to 99.07% by implementing and testing a computationally inexpensive machine learning technique, enhancing 5G security. Published an extracted dataset from simulated attacks.</li>
                                <li>Published a paper titled A Novel Deep Hierarchical Machine Learning Approach for Identification of Known and Unknown Multiple Security Attacks in a D2D Communications Network at IEEE Access cited by 15 papers and books.</li>
                            </ul>

                        </p>
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
                   <ul>
                        <li>Improved web application load time by 40% and enhanced user engagement by developing a highly responsive frontend architecture using React JS, ensuring seamless routing and database connectivity in a dynamic startup environment.</li>
                   </ul>
                    
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