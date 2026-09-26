"use client";

import { useEffect, useRef, useState } from "react";

export default function Projects() {
    const scrollRef = useRef(null);
    const [index, setIndex] = useState(0);

    const projects = [
        { title: "", desc: "Deep learning model", img: "/img1.jpeg" },
        { title: "Sistema de control X", desc: "Transformer for video", img: "/img2.jpeg" },
        { title: "Automatización de estación CIP", desc: "Automatización de una estación Clean In Place para industria tequilera de mas de 100 tanques, en un proyecto llave en mano.", img: "/img3.jpeg" },
    ];

    // 🔥 Centrar card activa
    const scrollToIndex = (i) => {
        const container = scrollRef.current;
        const card = container.children[i];

        if (!card) return;

        const containerWidth = container.offsetWidth;
        const cardWidth = card.offsetWidth;

        const scrollLeft =
            card.offsetLeft - containerWidth / 2 + cardWidth / 2;

        container.scrollTo({
            left: scrollLeft,
            behavior: "smooth",
        });
    };

    // 🔥 Auto scroll
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % projects.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        scrollToIndex(index);
    }, [index]);

    return (
        <section id="projects" className="mt-0 relative">

            {/* 🔥 Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-20 bg-gradient-to-r from-[#07090D] to-transparent" />

            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-20 bg-gradient-to-l from-[#07090D] to-transparent" />

            {/* 🔥 Flechas */}
            <button
                onClick={() => setIndex((prev) => (prev - 1 + projects.length) % projects.length)}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 
        w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10"
            >
                ←
            </button>

            <button
                onClick={() => setIndex((prev) => (prev + 1) % projects.length)}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 
        w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10"
            >
                →
            </button>

            {/* 🔥 Carrusel centrado */}
            <div
                ref={scrollRef}
                className="flex gap-8 overflow-x-hidden px-[20%]"
            >
                {projects.map((p, i) => (
                    <div
                        key={i}
                        className={`flex-shrink-0 w-[420px] h-[260px] rounded-2xl overflow-hidden 
            relative transition-all duration-500 
            ${i === index ? "scale-100 opacity-100" : "scale-90 opacity-50"}`}
                    >

                        {/* Imagen */}
                        <img
                            src={p.img}
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition flex flex-col justify-end p-6">
                            <h3 className="text-xl">{p.title}</h3>
                            <p className="text-sm text-gray-300">{p.desc}</p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}