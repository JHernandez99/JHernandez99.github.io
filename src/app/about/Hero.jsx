
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Hero() {
    return (
        <section
            id="about_me"
            className="pt-32 pb-20 flex items-center relative overflow-hidden"
        >
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[#07090D]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-[#0A0D18] to-[#07131A]" />

                <div className="absolute top-1/2 left-[40%] -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600 to-cyan-500 opacity-20 blur-[180px]" />
            </div>

            <div className="max-w-6xl mx-auto w-full px-6">

                {/* TÍTULO */}
                <div className="flex justify-center mb-16">
                    <h1 className="text-[56px] md:text-[64px] font-bold leading-[1.05] tracking-tight text-white">
                        Acerca de mí
                    </h1>
                </div>

                {/* CONTENIDO PRINCIPAL */}
                <div className="grid grid-cols-[auto_1fr] gap-8 md:gap-12 items-stretch">

                    {/* TEXTO VERTICAL */}
                    <div className="flex items-center justify-center">
                        <h5
                            className="
                                text-[32px] md:text-[40px]
                                font-bold
                                leading-none
                                tracking-tight
                                text-transparent
                                bg-clip-text
                                bg-gradient-to-b
                                from-purple-500
                                to-cyan-400
                                [writing-mode:vertical-rl]
                                rotate-180
                                whitespace-nowrap
                                select-none
                            "
                        >
                            Software Data & AI Engineer
                        </h5>
                    </div>

                    {/* INFORMACIÓN */}
                    <div className="max-w-3xl">

                        {/* DESCRIPCIÓN */}
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            Soy ingeniero mecatrónico y estudiante de posgrado en
                            Ingeniería Eléctrica, orientado al desarrollo de
                            soluciones de software, datos e inteligencia artificial.
                            Mi experiencia combina programación, procesamiento de
                            datos, aprendizaje automático y desarrollo de soluciones
                            tecnológicas para resolver problemas del mundo real.
                        </p>

                        {/* FORMACIÓN */}
                        <div className="mt-10">

                            <h3 className="text-sm uppercase tracking-[0.25em] text-cyan-400 font-semibold mb-4">
                                Formación
                            </h3>

                            <div className="border-l border-gray-700 pl-5">

                                <h4 className="text-xl font-semibold text-white">
                                    Maestría en Ingeniería Eléctrica - IA
                                </h4>

                                <p className="text-gray-400 mt-1">
                                    Enfoque profundo en inteligencia artificial, aprendizaje automático y procesamiento de datos.
                                </p>

                                <p className="text-gray-500 text-sm mt-1">
                                    Universidad de Guanajuato · 2024 – 2026
                                </p>

                            </div>

                            <div className="border-l border-gray-700 pl-5 mt-6">

                                <h4 className="text-xl font-semibold text-white">
                                    Ingeniería en Mecatrónica
                                </h4>
                                <p className="text-gray-400 mt-1">
                                    Enfoque profundo en desarrollo de software, sistemas embebidos, visión por computadora y automatización.
                                </p>

                                <p className="text-gray-500 text-sm mt-1">
                                    Universidad de Guanajuato · 2018 – 2023
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

