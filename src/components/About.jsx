export default function Hero() {
    return (
        <section className="pt-12 pb-12 flex items-center">

            <div className="max-w-6xl mx-auto w-full px-6">

                {/* GRID */}
                <div className="grid grid-cols-2 gap-y-8 items-start">

                    {/* TOP LEFT */}
                    <div className="space-y-6">

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Acerca de mí
                        </h1>

                        <p className="text-gray-300 text-lg">
                            Mi portafolio de habilidades:
                        </p>

                        {/* 🔧 INDUSTRIA */}
                        <div >
                            <h2 className="text-xl font-semibold mb-2 text-gray-200">
                                Automatización Industrial
                            </h2>

                            <ul className="space-y-2 text-black bg-[#F5F5F5] pl-4 pt-4 pb-4 rounded-xl max-w-md hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]">
                                <li className="flex items-center gap-2">
                                    ✔ Programación de PLC
                                </li>

                                <li className="flex items-center gap-2">
                                    ✔ HMI y SCADA
                                </li>

                                <li className="flex items-center gap-2">
                                    ✔ Entornos de desarrollo
                                </li>

                                <li className="flex items-center gap-2">
                                    ✔ Variadores de frecuencia y control de motores
                                </li>

                                <li className="flex items-center gap-2">
                                    ✔ Protocolos industriales (Modbus, Profinet, Ethernet/IP)
                                </li>

                                <li className="flex items-center gap-2">
                                    ✔ Instrumentación (sensores, actuadores, IO-Link)
                                </li>
                            </ul>
                        </div>

                        {/* 🤖 POSGRADO / IA */}
                        <div>
                            <h2 className="text-xl font-semibold mb-2 text-gray-200">
                                Inteligencia Artificial y Sistemas
                            </h2>
                            <ul className="space-y-2 text-gray-200 bg-[#3D3D3D] pl-4 pt-4 pb-4 rounded-xl max-w-md hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]">

                                <li className="flex items-center gap-2">
                                    ✔ Visión por computadora
                                </li>

                                <li className="flex items-center gap-2">
                                    ✔ Machine Learning (clasificación, regresión)
                                </li>

                                <li className="flex items-center gap-2">
                                    ✔ Redes neuronales profundas (CNN, modelos espacio-temporales)
                                </li>

                                <li className="flex items-center gap-2">
                                    ✔ Procesamiento de video médico
                                </li>
                            </ul>
                        </div>

                        {/* 💻 PROGRAMACIÓN */}
                        <div>
                            <h2 className="text-xl font-semibold mb-2 text-gray-200">
                                Programación
                            </h2>

                            <ul className="space-y-2 text-black bg-[#F5F5F5] pl-4 pt-4 pb-4 rounded-xl max-w-md hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]">
                                <li className="flex items-center gap-2">
                                    ✔ Lenguajes: Python, C, C++, MATLAB, VHDL
                                </li>

                                <li className="flex items-center gap-2">
                                    ✔ Desarrollo de modelos en TensorFlow
                                </li>

                                <li className="flex items-center gap-2">
                                    ✔ Integración hardware-software
                                </li>
                            </ul>
                        </div>

                    </div>



                    {/* TOP RIGHT */}
                    <div className="pl-3 text-gray-300 space-y-4 max-w-md pt-22">

                        <p>
                            Hola soy Luis, Ingeniero mecatrónico especializado en automatización de procesos industriales con maestría en Ingeniería Eléctrica.
                        </p>

                        <p>
                            He trabajado en la industria de alimentos, bebidas, tequila, farmacéutica y de cartón.
                        </p>

                        <p className="text-gray-400">
                            Empresas en las que he colaborado:
                        </p>

                        {/* LOGOS */}
                        <div className="flex flex-wrap gap-6 mt-4">

                            <div className="relative w-[120px] h-[120px] rounded-full bg-white/5 flex items-center justify-center">

                                {/* LOGO */}
                                <img
                                    src="/logos_emp/nestle.svg"
                                    className="h-6 opacity-60 hover:opacity-100 transition"
                                    alt="Nestle"
                                />

                                {/* 🔥 ORBITA */}
                                <div className="absolute inset-0 animate-spin-slow">

                                    {/* partícula */}
                                    <div className="w-2 h-2 bg-white rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_10px_white]" />

                                </div>

                            </div>

                            <div className=" w-[120px] h-[120px] rounded-full bg-white/60 flex items-center justify-center">
                                <img
                                    src="/logos_emp/LOREAL.png"
                                    className="h-4 opacity-60 hover:opacity-100 transition"
                                    alt="L'Oréal"
                                />
                            </div>

                            <div className="relative w-[120px] h-[120px] rounded-full bg-white/5 flex items-center justify-center">
                                <img
                                    src="/logos_emp/danone.png"
                                    className="h-20 opacity-60 hover:opacity-100 transition"
                                    alt="Danone"
                                />

                                {/* 🔥 ORBITA */}
                                <div className="absolute inset-0 animate-spin-slow-d">

                                    {/* partícula */}
                                    <div className="w-2 h-2 bg-white rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_10px_white]" />

                                </div>
                            </div>

                            <div className="w-[120px] h-[120px] rounded-full bg-white/60 flex items-center justify-center">
                                <img
                                    src="/logos_emp/cuervo.png"
                                    className="h-6 opacity-60 hover:opacity-100 transition"
                                    alt="Jose Cuervo"
                                />
                            </div>

                            <div className="w-[120px] h-[120px] rounded-full bg-white/60 flex items-center justify-center">
                                <img
                                    src="/logos_emp/bonafont.png"
                                    className="h-16 opacity-60 hover:opacity-100 transition"
                                    alt="Bonafont"
                                />
                            </div>
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10">
                                <img
                                    src="/personale.jpeg"
                                    className="w-full h-full object-cover"
                                    alt="Foto personal"
                                />
                            </div>

                        </div>

                    </div>

                    {/* BOTTOM LEFT */}
                    <p className="text-gray-300 max-w-md text-lg">

                    </p>

                    {/* BOTTOM RIGHT */}
                    <div className="flex justify-end">

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Trabajos
                        </h1>

                    </div>

                </div>

            </div>
        </section>
    );
}