/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',       // Genera una carpeta 'out' con archivos estáticos
  images: {
    unoptimized: true,    // GitHub Pages no soporta la optimización nativa de imágenes de Next.js
  },
};


//module.exports = nextConfig;
export default nextConfig;
