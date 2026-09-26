import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function SocialButtons() {
    return (
        <div className="flex justify-center gap-4 mt-10 flex-wrap">

            <a href="https://github.com/JHernandez99"  target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors"
                >
                <FaGithub />
                <span>GitHub</span>
            </a>

            <a 
                href="https://linkedin.com/in/jhernandez99" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
                <FaLinkedin />
                <span>LinkedIn</span>
            </a>

        </div>
    );
}