"use client";
import React from "react";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

// Define DummyContent as a reusable component
interface DummyContentProps {
    category: string;
    title: string;
    description: string;
    src: string[];
    skills: string[];
}

const DummyContent = ({ category, title, description, src, skills }: DummyContentProps): React.JSX.Element => {
    const skillsList = [
        { name: "C", icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" },
        { name: "C++", icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
        { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
        { name: "Java", icon: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
        { name: "JavaScript", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
        { name: "HTML", icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
        { name: "CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
        { name: "PHP", icon: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
        { name: "R", icon: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg" },
        { name: "MySQL", icon: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
        { name: "SQLite", icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg" },
        { name: "Postgres", icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
        { name: "MongoDB", icon: "https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg" },
        { name: "Windows", icon: "https://upload.wikimedia.org/wikipedia/en/5/5f/Windows_logo_-_2021.svg" },
        { name: "Linux", icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png" },
        { name: "TensorFlow", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" },
        { name: "PyTorch", icon: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" },
        { name: "Scikit-Learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
        { name: "Numpy", icon: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" },
        { name: "Pandas", icon: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" },
        { name: "Matplotlib", icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
        { name: "Seaborn", icon: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" },
        { name: "Flask", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg" },
        { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
        { name: "ExpressJS", icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
        { name: "AngularJS", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" },
        { name: "Wireshark", icon: "https://upload.wikimedia.org/wikipedia/commons/7/76/Wireshark_Logo.svg" },
        { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
        { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "Google Cloud", icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
        { name: "ArcGIS", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c9/ArcGIS_logo.svg" },
        { name: "QGIS", icon: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHoA3wMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAABwUGAgMEAf/EAE0QAAAFAgEECwwIBAQHAAAAAAABAgMEBREGEiIxsRMhMkFRYXFzgZGhByMkNUJSU2JydMHRFBUWMzaSk7I0Q1SCJUWi8CZEVWODwuH/xAAaAQACAwEBAAAAAAAAAAAAAAADBAACBQEG/8QALBEAAgIBAwIEBgIDAAAAAAAAAAECAxEEITEFEiIyQXETIzNRgZEUoUJh8P/aAAwDAQACEQMRAD8AeIAAEIA1PPNsNm484ltCdKlHYhB1zEjFNymI9npJaS8lHKfDxF2Clzp8me9skt5Tnmp3i5C0EM/U9QhV4Y7s5kuM7F0JjNjNuSFcO5T1nt9ghpOLqi79wlplPqpufWe12Cu3BcZFmvvn/lj2/wCyVySbldqju6nO/wBtk6iIafrWpf8AUJX66vmOK4As7bHzJ/smSTbr1Wa3M53+6ytZGJCNjCoNffttPJ9k0n1ltdgrgASOpvjxJkyX2Di2BIzZKVx1+ttp6y+JEJ1l1t9snGXEuIVoUkyMgpR0w50mA9skR5TavKydB8paDD1PVJp4sWTvcNYArNGxSxKyWagko7+8ryFn06D5esWYbNV0Lo90GWAAAApBdysQVZEl9KJikpStSU5iNBGZFvDX9o6x/Wn+mj5CPnH4fJ51esxouPJyuu7n4n+2UyS/2jrH9af6aPkLZhWZJn01TstzZHNlNOVkkW1YuDlMLy4vmB/E6ufVqIO9OtsldiUm9vudTLGAABvlgAAVDEuJFMrXCpqs9Oa695p8BcfCe9qDffCmPdIjZOVKtQadmvu3c9GjbV1b3TYVqZjKSvNiR0Np85ecfwIu0VlSsvOUrKUrdKVpvyjy4wruoXTfh2RTJJvV6qO7qc6n2LJ1EQ5jqM5W6nSf11/MctwXCbssfLf7Jkb4qeKcQqYyoUBfff5rheRxEfDx73LokMUVf6rgZLai+kvXS36pb6ujWZBcmY2uoatw+VDn1Oyfoe3BceAGIUPbguN8KFJnydhiNqcV2EXCZ7xC4U3B8ZkkrqC1SHPNTckF8T7OQHp0tl3lWx1LJSLjPY3N1sbn5TDVjRI0VNo8dprm0EWodI0F0n7z/ot2ieuC4bMiJGlFaRHad9tBGIGoYQhSM+GpUVz8yeo9vqMCs6XZHyvP9HHEolwXHdVKPNpa/CW+97zyNtJ/I+IxHjPlCUHiSwypujMOSnkssJynHFZKU/73gz6VEVBgMR1vG8ptNjUr4cRaC4hFYUon1dG+kyU+FuFufRp4OXh6t4WMbnT9K6o98uWXisAAABpFhSzv4+Tzq/3GNFxtnn4fJ51esxouPISXiYIyuL7gXxMrn1aiFAuL9gTxI5z6tRB7pv1/wdjyWUAAD0IQg8U1RVNpvelZL72Y3wlwn0F2mQXVxYcdSNlq6WPJZaLrMzv2WFcuPOa+12XNei2Bye5lcAxuOinxlT5zMVKslTiyLK4C0mfQRGE1Ft4Rw1JJS15KUqUrzU7Z9Q6SptQXnJgy/wBBXyDKp9NiU1rY4jSU+crylcZnvjtGtDpW3iluW7RW4hqH1jVX3srvScxr2S3+k7n0iNGNwXGZOTnJyfqDyZDpp8N6oy248dOcryt4i3zPiIclxfsD05LFO+muJ77I3PEgtHWdz6uAG01HxrO309TsVlkzSaZHpcZLMZPtr31nwmO8AB6SMVFYXAYAAALEAAACENbraXUKbcSlSVbRpUVyMhAxMLQ4tU+mpUpTac5to9skK4b8BbxCxAA51Qm05LgmAAAAIQAAAIQUU8/D5POr1mNFxtnn4fJ51esxz3Hk5Ldi5ncX/AfiRzn1aiC9uGDgLxI5z6tRB3p31/wXhyWYAADfCi1xkX/EMn1ko/aRfAxCXFpx/FUifGlp3DiNjP2kmZl1kfYKpceZ1UXG6XuBlyZXHZSZn0CpRpaty2vO5D2j7DMcNwXAYtxaaK5HEy42+0l1pRLbUm6VFoMjG0Kqk1ybSc1lzKY32XNtPRwHydotsDGdPfLJlocjL/MnrLb7BvU6+ua8WzDKaYv7guPADCwAMkpUtaUp3SlZKeU9og4o7KWI7TLe4bSSU8hEFFTz8PjZXp0ayDiGt0yKxJ+wWv1AAADVCAAABCAAABCAAVTE2JZNHqKYzLLKkqaJeUu97mZlvHxCK+3NQ/pY3+r5hSetqhJxfoVc0ngYAAv/ALc1D+ljf6vmLjRpap9Ljy3EklTqcoyTo0i9WprteIkUkzvAAAYLCenn4fJ51esxouNtQPw+Tz6/3GNFx5aS3YsZXDBwB4kd59WpIXlww+5/4ld94VqSHOnr534LVvxFnAAA3Q5G1umt1SnuRl5qjzkK81RaD+HIYV0uM9DkqjSW1NuNqzk/EuEuMOMRVaokSrs5L6cl1O4dTuk/MuII6zSfG8UeSk454FYPBL1fDlSpuUpTezMemaTcrcZaS1cYh7jFlXKDxJYA7rk9APLguK4OZMbguMbj24sVMkrUheUndJzk8ockWQiTGafb3LiCWnkMgmbhgYBqiZEFVPcV3yPto40GfwM7dJB/p9ijNxfqFqe+C2gAAbIcAAAIQAAAIQXPdA8eo92TrWKzcWXug+PWvdk/uWKxced1K+dL3FZ+ZmVw1cK/h6DzfxMKgNfCn4eg838TDXTvqP2L1ckuAABsBxN1A/D5PPr1mOe43VD+Pk8+vWY5x5iS3Yo2ZBidz7xK77wrUkLkMXueeI3feVakhzQfW/BerzFpAAA2xgADWtxCDTlrSnKVkpudrnwFwjYIQBE1DD9Mn5z8VOyK/mIzVdJlp6biWAKyhGaxJZJjJSJuBD3UCb/a+X/sXyEDMwzVoemGp1PnNZ+rb7A1QBSegqlxsDdcRSYmp31XV32Ep725nteye90HcugRdw0MXUb63pp7CRfSWbqa4+FPTYukiCtPMzVZSRn6ml1z/wBMDOPazK43wJr8CY1JjKyXW1ZvAfCR8RltDmuC4XWU8opkblDrEasxdkZPJcT960rSg/lwGJUJSHLfhSUvxHlNup3Kk6jLfLiMXWk46ZUlLdVaU2r0zRXT0lpLouNajWxksT2YxG1PkuwBHxKvTppeDTmHD80lkR9JHtkO3KTpyiDyknumFTyZgEdLrVMh7UmcwlXm5ZGrqLbFdqWO4jWUmnMLfV6RzNT1aT7AKd9cOWVc4rlkV3Q/HzXuyP3LFYuOmqVKTVJn0mWpKnMnJTkpsREVzIiLpPSOQYlslObkvUVk8tsyuGvhP8OQeb+JhTBs4S/DkHm/iYb6f537BKuSYAAA1hgS9QPw+Tz69ZjnuN1RP/EpnPr1mOe483LzMSb3Mrhj9zzxG57yrUkLa4ZHc68RO+8q1JDWh+r+AlT8RagAEbXKgml0t6WrdJTmJ4VnoLrGzKSissZbwUrHlV+kVFMJpXeo26yfSH8isXKZjow/jRTWTGq2U4ncpkJ21J9ot/lLb5dIpzjinVqccVlKUo1KUrSZmdzPrGNxh/yLFY7E+RT4j7sodcaQzKZS9HcQ42rcqQdyG8Jin1KbTntkhSFt+clOg+Uj2jFupuPU2SmqRv8AyMaOlJntdBmNCrWwltLZho2p8l5AImJiGkzPuJ7OUfkrPIPqOxiTQpK85KiVyBuMoyWUwiafBmKXjLDCpWVUaa33/S6yny/WIuHhLf5dN0AK21Rtj2yOSipLDEZcFwy8RYSj1TKkRFFHlq3XmOH6xFoPjLpuF7UadLpr2wzY6m1eTlaFeyegxjW6edT34FJwcTmuC4xuC4DgoZDyyfNHlwXEwiGQBjcFxMEMgDG47KdTZtUXkwo63vOUnaSXKZ7RDqi28I7yctw2sI/hun818TENQsEsxTS9U1JkOehT92XLfbV2FxC4IJKE5KSyUkNPSUShmUhmqDjuzIAAB8MJSo+MpnPr/cY5xuqR/wCJTOfXrMc9x55rdiD5Mgye514id95VqSFpcMruceInfeVftSGdGvmhKfMWsU/H0CoTYzLkROyRmbqcbTur7yuMiK+jb2z6LgAaltasi4saku5YEXcehnV7CUKqGt5jwWUry0lmrPjL4lY+UUKrUGo0nK+lsK2L0zecj/502GRbpp188Cc63EjgDG4LgGCh6Ah5cFxMEHqAAB6I0AGiTHYlMqaktIcbVpS4kjLtG8AnJCo1HAlPfI1QnHIquDdp6j2+0V6XgWrNfcKYkJ9VeSfUe12hngC09JVL0wDdUGJ93DFba3VNd/tyVajMayw9WV/5bJ/IZaw5AAf8GH3KfAj9xSsYSrrv/I7H6y1pL437BKQ+5/NX/FzGGS4G0ms+2xawxgC0dFUudzqoiVqn4KpEPOcbXKV/31XL8pWLruLC22hpCUNpSlKdCUlYi5CGwAYhXGHlWAqilwAAAFzoAAAQgsJeDa09MfdQ01kuOqUXfS0GZmQ1fYmu+hY/VINQAU/h1gfgRFX9iK36Fr9UhdMG0uTSKWuPNJJOqeUvNVfaMi3+gWAAvXpoVy7olo1KLygAAAYCAAABCEDUcKUeflKVF2F1X8xjNP5H0kK9M7nrlrwqglXqvt27U/IX8ADPT1z5RR1xfKFS9gquNbiO097DqfjYcysLV1P+Wu/mQeow3wAL0Nf3YP4ET//Z" },
        { name: "Apache Spark", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg" },
        { name: "Flink", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Apache_Flink_logo.svg" },
    ];

    // Get icons for the skills used in the project
    const skillsIcons = skills.map((skillName: React.Key | null | undefined) => {
        const skill = skillsList.find((s) => s.name === skillName);
        return skill ? (
            <img key={skillName} src={skill.icon} alt={skill.name} className="w-8 h-8 mx-2" />
        ) : null;
    });

    return (
        <div className="bg-[#F5F5F7] p-8 md:p-14 mb-4">
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700">{category}: {title}</span>{" "}
                {description}
            </p>

           
            <Image
                src={src[0]}
                alt="Project image"
                height={500}
                width={500}
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
            <div className="mt-6 flex justify-center">
                {skillsIcons}
            </div>
        </div>
    );
};

const data = [
    {
        category: "Computer Vision", 
        title: "Cloud Removal in Satellite Images",
        titlesrc: "/cloud-removal_title.png",
        src: ["/cloud-reomval.png"],
        link: "https://drive.google.com/drive/folders/13gaO6Yz2DeGBTU6qlU4xlKICr0iwKt-f?usp=sharing",
        description: "Worked on a cloud removal architecture that beat SOTA without the use of cloud masks, built a model to mask clouds out dynamically using Autoencoders that consider clouds as noise, built a novel algorithm that combines images leveraging SSIM metric, built stable diffusion from scratch to work on latent diffusion super resolution to harmonize satellite sensor images from multiple sources, research paper at ICDM conference in Dubai",
        skills: ["Python", "TensorFlow", "OpenCV", "Scikit-Learn", "Matplotlib", "Seaborn", "Numpy", "Pandas"],
    },
    {
        category: "Generative AI",
        title: "Automatic Test Case Generation",
        titlesrc: "/codetitle.svg",
        link: "https://drive.google.com/file/d/1PLBsWepKnYNX8gkv8eap53XQ4nsscwSK/view?usp=sharing",
        src: ["/test-gen.png"],
        description: "Worked on a LLM to perform automatic test case generation using Junit Test Cases, fine-tuned code LLMs like CodeLLama and Code-T5 to perform test case gen, built a RAG model with a vector PineCone DB to perform code retrieval to increase coverage, built a RAG based fine-tuned model using CodeLLama ",
        skills: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn", "Numpy", "Pandas"],
    },
    {
        category: "Deep Learning",
        title: "Speech Enhancement for Dysarthria",
        titlesrc: "/speechtitle.svg",
        src: ["/speech-enhance.png"],
        link: "https://github.com/harshi922/Slurred-Speech-Enhancement",
        description: "Worked on a speech enhancement system for dysarthria affected individuals, built a one-shot learner that preserves speaker characteristics using neural style transfer models, built a novel speech algorithm that works as a one-shot learner and preserves speaker characteristics",
        skills: ["Python", "TensorFlow", "Keras", "PyTorch", "Matplotlib", "Seaborn"],
    },
    {
        category: "Privacy and Deep Learning",
        title: "Anonymization of PII in Videos",
        titlesrc: "/privacytitle.svg",
        src: ["/privacy.png"],
        link: "https://github.com/SaikrishnaRajaraman/video-pii",
        description: "Developed a video PII anonymization framework leveraging computer vision and transformers, implemented multilingual BERT for Named Entity Recognition (NER) in text classification, optimized frame processing with parallelization, and integrated OpenAI’s Whisper for speech-to-text PII detection and muting",
        skills: ["React", "Node.js", "TensorFlow", "Flask", "JavaScript", "HTML", "CSS"],
    },
    {
        category: "GPU Programming",
        title: "Optimized Flash Attention for Deep Learning",
        titlesrc: "/gputitle.svg",
        src: ["/gpu.png"],
        link: "https://drive.google.com/file/d/1O0WjujzVi6uJpLLu2Tmf5fw7Yjbwftud/view?usp=sharing",
        description: "Implemented a parallelized attention mechanism using Flash Attention to optimize memory and computational efficiency in transformers, developed a custom Triton kernel for SRAM-based tiled matrix multiplication, integrated with GPT-2 and LoRA for performance evaluation, and achieved significant speedups in forward pass computations",
        skills: ["C++", "CUDA", "Python", "TensorFlow", "PyTorch"],
    },
    {
        category: "Statistical Modelling",
        title: "Suitabilty Prediction for Forestry",
        titlesrc: "/foresttitle.svg",
        src: ["/hsm.png"],
        link: "https://docs.google.com/presentation/d/1Cp_cic37WQlHZN1CTKY5X1XoI0lmc0-U/edit?usp=sharing&ouid=116499659741137431309&rtpof=true&sd=true",
        description: "Working on building a multi-modal recommendation system to predict a suitability score for tree species to enhance forest yield based on proprietary tree species data for a forestry company, working on a GSI paper. Building an open- source tool to provide aggregated climate, physiological, and surface data(RSI) of the earth at a common resolution by architecting a solution centered around a PostGIS(Postgres) database of large raster data with SQL querying of spatio - temporal information, exposing the gathered data using a REST API built on FastAPI, working on a data paper, providing dashboards built on Tableau for client visualizations, using Airflow to populate the database with periodically updated data sources",
        skills: ["Postgres", "TensorFlow", "Scikit-Learn", "Matplotlib", "Seaborn", "Numpy", "Pandas"],
    },
    {
        category: "Machine Learning",
        title: "DDoS Intrusion Detection System",
        titlesrc: "/ddostitle.svg",
        src: ["/HMLM.png"],
        link: "https://github.com/harshi922/ddos-in-d2d",
        description: "Worked on a DDoS intrusion detection that worked on improving security in 5G D2D networks, Built a dataset by emulating attacks on a D2D network and processing and cleaning packets to build a new dataset by expanding on the benchmark,  i.	Built a model that beat the SOTA using a hierarchical ML model built on simple neural nets in terms of time vs accuracy tradeoff, ii.	Worked on publishing a dataset collected by simulating attacks on a 5G D2D system using CicFloMeter and Wireshark ",
        skills: ["C++", "CUDA", "Python", "TensorFlow", "PyTorch"],
    },
];
export function Projects() {
    const cards = data.map((project, index) => (
        <Card key={index} cardd={{ ...project, content: <DummyContent {...project} /> }} index={index} layout={true} />
    ));

    return (
        <div className="h-full w-full max-w-7xl min-w-xs mx-auto pb-0 pl-10 pr-10" id="projects">
            <h2 className="mt-10 text-[2rem] md:text-[4rem] lg:text-[5rem] text-center mb-6 text-zinc-400 font-semibold inter-var">
                Projects
            </h2>
            <Carousel items={cards} />
        </div>
    );
}
export default Projects;