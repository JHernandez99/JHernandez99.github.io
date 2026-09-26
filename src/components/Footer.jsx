export default function Footer() {
    return (
        <footer className="bg-[#07090D] text-white py-10">
            <div className="container mx-auto px-6 md:px-16">
                <p className="text-center text-gray-400">
                    &copy; {new Date().getFullYear()} Luis Hernández. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
