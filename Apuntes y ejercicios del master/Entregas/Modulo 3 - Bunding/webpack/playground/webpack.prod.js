const path = require("path"); // Módulo de Node.js para manejar rutas
const { merge } = require("webpack-merge"); // Permite combinar configuraciones de Webpack
const common = require("./webpack.common.js"); // Importamos la configuración común
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"); // Plugin para analizar el tamaño del bundle

const plugins = []; // Lista de plugins que usaremos en producción

// Si ejecutamos `ANALYZE=true npm run build`, activamos el analizador de Webpack
if (process.env.ANALYZE) {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = merge(common, {
  mode: "production", // Configuramos Webpack en modo producción (minifica y optimiza el código)
  plugins: plugins, // Aplicamos los plugins definidos
});
