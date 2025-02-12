const { merge } = require("webpack-merge"); // Permite combinar configuraciones de Webpack
const common = require("./webpack.common.js"); // Importamos la configuración común

module.exports = merge(common, {
  mode: "development", // Modo desarrollo (sin minificación, con más información para depuración)
  devServer: {
    static: "./dist", // Carpeta desde donde servimos los archivos
    hot: true, // Habilita Hot Module Replacement (HMR), que actualiza cambios sin recargar la página
    open: true, // Abre el navegador automáticamente al iniciar el servidor
  },
});
