const path = require("path"); // Módulo de Node.js para manejar rutas
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Plugin para generar el HTML automáticamente

module.exports = {
  entry: "./src/index.tsx", // Punto de entrada de la aplicación
  output: {
    filename: "bundle.js", // Nombre del archivo de salida
    path: path.resolve(__dirname, "dist"), // Ruta donde se guardarán los archivos generados
    clean: true, // Borra el contenido anterior de `dist` antes de cada build
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Permite importar archivos sin necesidad de escribir sus extensiones
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Procesa archivos .ts y .tsx (TypeScript y React)
        use: "ts-loader", // Usa ts-loader para convertir TypeScript a JavaScript
        exclude: /node_modules/, // No procesa archivos de `node_modules`
      },
      {
        test: /\.scss$/, // Procesa archivos SCSS (estilos)
        use: ["style-loader", "css-loader", "sass-loader"], // Convierte SCSS en CSS válido para el navegador
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Procesa imágenes
        type: "asset/resource", // Hace que Webpack las copie a la carpeta `dist/assets`
        generator: {
          filename: "assets/[name][ext]", // Guarda las imágenes con su nombre original en `dist/assets`
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Usa nuestro `index.html` como base
      filename: "index.html", // Nombre del archivo generado en `dist/`
    }),
  ],
};
