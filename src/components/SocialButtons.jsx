import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function SocialButtons() {
    return (
        <div className="flex justify-center gap-4 mt-10 flex-wrap">

            <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/10">
                <FaGithub />
                GitHub
            </button>

            <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/10">
                <FaLinkedin />
                LinkedIn
            </button>

        </div>
    );
}