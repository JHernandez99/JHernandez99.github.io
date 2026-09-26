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
                <div className="grid grid-cols-2 grid-rows-2 gap-y-10 items-center">

                    {/* TOP LEFT */}
                    <h1 className="text-[64px] md:text-[96px] font-bold leading-[1.05] tracking-tight">
                        Ingeniero de
                    </h1>

                    {/* TOP RIGHT */}
                    <div className="flex justify-start md:justify-end">
                        <button className="px-8 py-4 rounded-full bg-white text-black font-medium text-lg hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.9)]">
                            Proyectos
                        </button>
                        <p className="pl-3">  </p>
                        <button className="px-4 py-4 rounded-full bg-white text-black font-medium text-lg hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.9)]" >
                            →
                        </button>
                    </div>

                    {/* BOTTOM LEFT */}
                    <p className="text-gray-400 max-w-md text-lg">
                        Ingeniero mecatronico con maestria en Ingeniería Eléctrica, especialista en automatización de procesos industriales.
                    </p>

                    {/* BOTTOM RIGHT */}
                    <h1 className="text-[64px] md:text-[96px] font-bold leading-[1.05] tracking-tight text-right">
                        Automatización
                    </h1>

                </div>




                <div id="contact" className="flex justify-center gap-4 mt-10 flex-wrap">

                    <div className="flex justify-start md:justify-end">
                        <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-white hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]">
                            <FaLinkedin />LinkedIn
                        </button>
                    </div>

                    <div className="flex justify-start md:justify-end">
                        <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-white hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]">
                            <FaGithub />GitHub
                        </button>
                    </div>
                    <div className="flex justify-start md:justify-end">
                        <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-white hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]">
                            <FaWhatsapp />WhatsApp
                        </button>
                    </div>
                    <div className="flex justify-start md:justify-end">
                        <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-white hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]">
                            <FaInstagram />Instagram
                        </button>
                    </div>

                </div>

            </div>
        </section >
    );
}