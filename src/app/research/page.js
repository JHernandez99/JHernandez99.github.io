import Navbar from "@/components/Navbar";
import Research from "@/app/research/Research";

import BackgroundOrbits from "@/components/BackgroundOrbits"; "../components/BackgroundOrbits"
import Footer from "@/components/Footer";



export default function About() {
    return (
        <main className=" relative bg-[#07090D] text-white min-h-screen px-6 md:px-16">


            {/*<BackgroundOrbits />*/}
            <Navbar />
            <Research />


            <Footer />

        </main>
    );
}
