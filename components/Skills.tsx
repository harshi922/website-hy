"use client";
import React, { useState } from "react";

const skills = [
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
    { name: "QGIS", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c2/QGIS_logo_professional.svg" },
    { name: "Apache Spark", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg" },
    { name: "Flink", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Apache_Flink_logo.svg" },
];

const Skills = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section id="Skills" className="px-4 py-10">
            <h2 className="text-[2rem] md:text-[4rem] lg:text-[5rem] text-center mb-10 text-zinc-400 font-extrabold">
                Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        className="flex justify-center items-center h-14 w-full sm:w-24 md:w-28 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        style={{
                            background: "linear-gradient(90deg, rgba(240,168,208,1) 10%, rgba(255,235,212,1) 100%)",
                        }}
                    >
                        {hovered === index ? (
                            <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                        ) : (
                            <span className="text-sm md:text-base lg:text-lg font-medium text-center">{skill.name}</span>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
