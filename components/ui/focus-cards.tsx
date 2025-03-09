"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
    ({
        card,
        index,
        hovered,
        setHovered,
    }: {
        card: Project;
        index: number;
        hovered: number | null;
        setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    }) => (
        <div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
                hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
            )}
        >
            <Image
                src={card.src}
                alt={card.title}
                fill
                className="object-cover absolute inset-0"
            />
            <div
                className={cn(
                    "absolute inset-0 bg-black/60 flex flex-col justify-end py-6 px-4 transition-opacity duration-300",
                    hovered === index ? "opacity-100" : "opacity-0"
                )}
            >
                <h3 className="text-xl md:text-2xl font-medium text-white">{card.title}</h3>
                {card.description && (
                    <p className="text-sm text-gray-300 mt-2">{card.description}</p>
                )}
                {card.link && (
                    <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block bg-white text-black px-4 py-2 rounded-lg text-sm font-medium transition hover:bg-gray-200"
                    >
                        View Project
                    </a>
                )}
            </div>
        </div>
    )
);

Card.displayName = "Card";

type Project = {
    title: string;
    src: string;
    description?: string;
    link?: string;
};

export function FocusCards({ projects }: { projects: Project[] }) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
            {projects.map((project, index) => (
                <Card
                    key={project.title}
                    card={project}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            ))}
        </div>
    );
}
