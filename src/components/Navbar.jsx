export default function Navbar() {
    const navItems = [
        { label: "Acerca de mi", href: "/about" }, 
        { label: "Investigación", href: "/research" },
        { label: "Proyectos", href: "/projects" },
        { label: "Contacto", href: "/contact" },
    ];

    return (
        <header className="fixed top-0 left-0 z-50 w-full px-4 pt-5 md:px-8">
            <div className="mx-auto w-full max-w-[1600px]">
                <div className="flex flex-col">
                    <div className="flex items-center justify-between px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.08)]">
                        <a href="/" className="text-sm font-semibold tracking-[0.18em] text-white/90 uppercase transition hover:text-white">
                            Home
                        </a>

                        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="transition hover:text-white"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="relative mt-3 flex items-center justify-center px-1 md:px-2">
                        <div className="h-px w-full bg-white/80" />
                        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-white/60 bg-[#0A0D14] p-1 shadow-[0_0_22px_rgba(255,255,255,0.25)]">
                            <img
                                src="/personal.jpeg"
                                alt="Profile"
                                className="h-10 w-10 rounded-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}