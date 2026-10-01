import { FaGithub, FaLinkedin, FaWhatsapp, } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";



export default function Hero() {
    return (
        <section id="home" className="pt-32 pb-10 flex items-center">


            {/* Fondo */}
            <div className="absolute inset-0 -z-10">

                <div className="absolute inset-0 bg-[#07090D]" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-[#0A0D18] to-[#07131A]" />

                <div className="absolute top-1/2 left-[40%] -translate-y-1/2 w-[800px] h-[800px] 
          bg-gradient-to-r from-purple-600 to-cyan-500 opacity-20 blur-[180px]" />


            </div>

            <div className="max-w-6xl mx-auto w-full px-6">

                {/* 🔥 GRID 2x2 */}
                <div className="grid grid-cols-1 grid-rows-2 gap-y-10 items-center">

                    {/* TOP LEFT */}
                    <div className="flex justify-start md:justify-center">
                        <h1 className="text-[64px] font-bold leading-[1.05] tracking-tight md:justify-center">
                            Bienvenido a mi portafolio
                        </h1>

                    </div>
                    <div className="flex justify-start md:justify-center">

                        <h5 className="
                                text-[48px] md:text-[48px]
                                font-bold
                                leading-none
                                tracking-tight
                                text-transparent
                                bg-clip-text
                                bg-gradient-to-b
                                from-purple-500
                                to-cyan-400
                                
                                
                                whitespace-nowrap
                                select-none
                            ">
                            Software, Data & AI Engineer
                        </h5>
                    </div>

                    {/* TOP RIGHT 
                    <div className="flex justify-start md:justify-center">
                        <button className="px-8 py-4 rounded-full bg-white text-black font-medium text-lg hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.9)]">
                            Proyectos
                        </button>
                        <p className="pl-3">  </p>
                        <button className="px-4 py-4 rounded-full bg-white text-black font-medium text-lg hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.9)]" >
                            →
                        </button>
                    </div>*/}

                    {/* BOTTOM LEFT */}
                    <p className="text-gray-400  text-lg">
                        Mi nombre es Luis Hernández. Soy ingeniero de datos con un fuerte background en automatización industrial,
                        y cuento con una maestría en Ingeniería Eléctrica  con especialización en visión por computadora e inteligencia artificial.

                    </p>
                    <p className="text-gray-400  text-lg">
                        Actualmente busco oportunidades para aplicar mis habilidades en desarrollo de software, ingeniería de datos y machine learning,
                        contribuyendo al éxito de proyectos innovadores y desafiantes en el ramo de IT, Ciberseguridad y los cruces en redes IT-OT.
                    </p>



                </div>


                <div className="flex justify-start md:justify-center">
                    <h5 className="text-[24px] font-bold leading-[1.05] tracking-tight md:justify-center ">
                        Descubre más sobre mi experiencia y proyectos
                    </h5>

                </div>


                <div id="contact" className="flex justify-center gap-4 mt-10 flex-wrap">

                    <div className="flex justify-start md:justify-end">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
                        >
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                    </div>

                    <div className="flex justify-start md:justify-end">
                        <a
                            href="https://linkedin.com/in/joseluis-hdz99"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
                        >
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </a>
                    </div>


                </div>

                <div id="contact" className="flex justify-center gap-4 mt-10 flex-wrap">
                    <h1 className="text-[32px] font-bold leading-[1.05] tracking-tight md:justify-center">
                        Lo que encontrarás:
                    </h1>
                    <p className="text-gray-400  text-lg">
                        En este portafolio, descubrirás una amplia gama de proyectos que reflejan mi experiencia en desarrollo de software, ingeniería de datos y machine learning
                        así como sistemas de control. Además, encontrarás ejemplos de mi trabajo en visión por computadora e inteligencia
                        artificial, demostrando mi capacidad para aplicar tecnologías avanzadas en la resolucion de problemas complejos.
                    </p>
                    <ul className=" space-y-1 text-body list-inside">
                        <li className="flex items-center">
                            <svg className="w-4 h-4 text-fg-success me-1.5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            Acerca de mi: Quien soy, mi experiencia y habilidades.
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 text-fg-success me-1.5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            Investigación: Proyectos de investigación en visión por computadora e inteligencia artificial.
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 text-fg-success me-1.5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            Proyectos: Trabajos realizados en automatización, desarrollo de software, ingeniería de datos y machine learning.
                        </li>
                        <li className="flex items-center">
                            <svg className="w-4 h-4 text-fg-success me-1.5 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                            Contacto: Formas de contactarme.
                        </li>
                    </ul>
                </div>

            </div>
        </section >
    );
}