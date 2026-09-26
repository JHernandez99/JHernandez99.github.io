"use client";

export default function BackgroundOrbits() {
    return (
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">

            {/* ORBITA IZQUIERDA */}
            <div className="absolute left-[-250px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/20 animate-orbit-slow">

                {/* partícula */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/60 shadow-[0_0_12px_rgba(255,255,255,0.6)]" />

                {/* trail */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white/10 blur-md" />

            </div>

            {/* ORBITA DERECHA */}
            <div className="absolute right-[-300px] top-1/3 w-[700px] h-[700px] rounded-full border border-white/20 animate-orbit-reverse">

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/60 shadow-[0_0_12px_rgba(255,255,255,0.6)]" />

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white/10 blur-lg" />

            </div>

            {/* ORBITA EXTRA (profundidad) */}
            <div className="absolute left-1/3 top-[70%] w-[400px] h-[400px] rounded-full border border-white/30 animate-orbit-ultra opacity-40">

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/50" />

            </div>

        </div>
    );
}