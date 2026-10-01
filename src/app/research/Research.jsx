
"use client";

import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Estimación de Fracción de Eyección",
        category: "Deep Learning · Computer Vision",
        image: "/images/research/ECHO_HSNET.png",

        description:
            [
                "Desarrollo de un modelo de aprendizaje profundo para estimar automáticamente la fracción de eyección ventricular izquierda a partir de videos ecocardiográficos y clasificar en múltiples categorías",
                "La red neuronal propuesta obtuvo un desempeño sumamente competitivo en comparación con otros métodos existentes, demostrando su potencial para mejorar la eficiencia y precisión en la evaluación de la función cardíaca reduciendo el número de parametros en hasta casi 100 veces respecto a otros modelos.",
                "Enlace al artículo: PENDIENTE",

            ],



        content: [
            "Procesamiento y preparación de videos ecocardiográficos.",
            "Diseño de una arquitectura propia Conv3D-LSTM para análisis espacio-temporal.",
            "Entrenamiento y evaluación de modelos de Deep Learning.",
            "Experimentación con diferentes estrategias de muestreo y longitud de secuencia.",
            "Evaluación mediante métricas de error."
        ],

        technologies: [
            "Python",
            "TensorFlow",
            "Keras",
            "OpenCV",
            "NumPy",
            "Pandas",
            "Conv3D",
            "LSTM"
        ],

        images: [
            "/images/research/ECHO_HSNET.png",
            "/images/research/clasificador4cat_propuesto.png",
            "/images/research/diagramaDispersionCalor.png",

        ]
    },

    {
        id: 2,
        title: "Aprendizaje Auto-supervisado",
        category: "Self-Supervised Learning",
        image: "/images/research/self-supervised.jpg",

        description:
            "Investigación de métodos de aprendizaje auto-supervisado para obtener representaciones robustas a partir de videos médicos.",

        content: [
            "Implementación de métodos de aprendizaje auto-supervisado.",
            "Generación de diferentes vistas de los datos.",
            "Entrenamiento de representaciones mediante aprendizaje contrastivo.",
            "Comparación de diferentes estrategias de representación."
        ],

        technologies: [
            "Python",
            "TensorFlow",
            "Keras",
            "SimCLR",
            "VICReg",
            "NumPy",
            "Computer Vision"
        ],

        images: [
            "/images/research/ssl-architecture.jpg",
            "/images/research/ssl-results.jpg"
        ]
    }
];

export default function Research() {

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="research" className="py-24 relative overflow-hidden">

            {/* BACKGROUND */}

            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[#07090D]" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-[#0A0D18] to-[#07131A]" />

                <div className="absolute top-1/2 left-[55%] -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-purple-600 to-cyan-500 opacity-10 blur-[180px]" />
            </div>


            <div className="max-w-6xl mx-auto px-6">

                {/* HEADER */}

                <div className="mb-16">

                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-semibold mb-3">
                        Investigación
                    </p>

                    <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                        Proyectos de investigación
                    </h2>

                    <p className="mt-5 text-gray-400 text-lg max-w-2xl leading-relaxed">
                        Proyectos desarrollados durante mi formación de
                        posgrado, enfocados principalmente en inteligencia
                        artificial, aprendizaje profundo y procesamiento
                        de datos.
                    </p>

                </div>


                {/* PROJECT CARDS */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {projects.map((project) => (

                        <button
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group text-left overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.05]"
                        >

                            <div className="relative h-64 overflow-hidden">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent" />

                            </div>


                            <div className="p-6">

                                <p className="text-sm text-cyan-400 font-medium mb-2">
                                    {project.category}
                                </p>

                                <h3 className="text-2xl font-semibold text-white">
                                    {project.title}
                                </h3>

                                <p className="mt-3 text-gray-400 leading-relaxed line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="mt-5 text-sm text-gray-500 group-hover:text-cyan-400 transition">
                                    Ver proyecto →
                                </div>

                            </div>

                        </button>

                    ))}

                </div>

            </div>


            {/* MODAL */}

            {selectedProject && (

                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
                    onClick={() => setSelectedProject(null)}
                >

                    <div
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0B0F17] shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* CLOSE */}

                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition"
                        >
                            ✕
                        </button>


                        {/* MAIN IMAGE */}

                        <div className="relative h-72 md:h-96">

                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent" />

                        </div>


                        {/* CONTENT */}

                        <div className="p-7 md:p-10">

                            <p className="text-cyan-400 text-sm uppercase tracking-widest font-semibold">
                                {selectedProject.category}
                            </p>

                            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
                                {selectedProject.title}
                            </h2>


                            {/* DESCRIPTION */}

                            <div className="mt-8">

                                <h3 className="text-xl font-semibold text-white mb-3">
                                    Descripción
                                </h3>

                                <div className="space-y-4 text-gray-300 leading-relaxed">
                                    {selectedProject.description.map((paragraph, index) => (
                                        <p key={index}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                            </div>


                            {/* WORK */}

                            <div className="mt-8">

                                <h3 className="text-xl font-semibold text-white mb-4">
                                    Trabajo realizado
                                </h3>

                                <ul className="space-y-3">

                                    {selectedProject.content.map((item, index) => (

                                        <li
                                            key={index}
                                            className="flex gap-3 text-gray-400"
                                        >

                                            <span className="text-cyan-400">
                                                ◆
                                            </span>

                                            <span>
                                                {item}
                                            </span>

                                        </li>

                                    ))}

                                </ul>

                            </div>


                            {/* IMAGES */}

                            <div className="mt-10">

                                <h3 className="text-xl font-semibold text-white mb-5">
                                    Metodología y resultados
                                </h3>

                                <div className="columns-1 md:columns-2 gap-5">

                                    {selectedProject.images.map((image, index) => (

                                        <div
                                            key={index}
                                            className="mb-5 break-inside-avoid"
                                        >
                                            <img
                                                src={image}
                                                alt={`${selectedProject.title} ${index + 1}`}
                                                className="w-full rounded-xl border border-white/10 block"
                                            />
                                        </div>

                                    ))}

                                </div>

                            </div>


                            {/* TECHNOLOGIES */}

                            <div className="mt-10">

                                <h3 className="text-xl font-semibold text-white mb-5">
                                    Tecnologías utilizadas
                                </h3>

                                <div className="flex flex-wrap gap-2">

                                    {selectedProject.technologies.map((technology) => (

                                        <span
                                            key={technology}
                                            className="px-3 py-1.5 rounded-lg text-sm text-gray-300 bg-white/[0.05] border border-white/10"
                                        >
                                            {technology}
                                        </span>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            )}

        </section>
    );
}

