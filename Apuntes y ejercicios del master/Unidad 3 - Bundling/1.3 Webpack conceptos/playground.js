// ¿Qué es Webpack?
//
// Webpack es una herramienta de código abierto que se utiliza para empaquetar y optimizar los recursos de una aplicación web.
// Permite combinar múltiples archivos de código fuente en un solo archivo (bundle) que puede ser servido a través de un servidor web o una CDN.
// Webpack es ampliamente utilizado en el desarrollo web moderno para mejorar el rendimiento, optimizar el tamaño de los archivos y facilitar el desarrollo de aplicaciones web.
// Algunas de las características clave de Webpack son:
// - Soporte para múltiples tipos de archivos, como JavaScript, CSS, HTML, imágenes, fuentes, etc.
// - Capacidad para importar módulos y gestionar dependencias entre ellos.
// - Integración con loaders y plugins para aplicar transformaciones y optimizaciones a los archivos de origen.
// - Compatibilidad con navegadores antiguos mediante el uso de polyfills y transformaciones de código.
// - Funcionalidades avanzadas, como la recarga en caliente (hot module replacement) y la división de código (code splitting).
// - Configuración flexible a través de un archivo de configuración (webpack.config.js) o de la línea de comandos.
// En resumen, Webpack es una herramienta poderosa y versátil que permite a los desarrolladores empaquetar, optimizar y gestionar los recursos de una aplicación web de forma eficiente.
// Los desarrolladores web pueden utilizar Webpack para mejorar el rendimiento, optimizar el tamaño de los archivos y facilitar el desarrollo de aplicaciones web modernas.

// Pros y contras de Webpack
//
// Pros:
// - Mejora el rendimiento de la aplicación al reducir el número de solicitudes HTTP.
// - Optimiza el tamaño de los archivos mediante técnicas como la minificación y la eliminación de código muerto.
// - Facilita el desarrollo de aplicaciones web mediante funcionalidades avanzadas como la importación de módulos y la recarga en caliente.
// - Soporta múltiples tipos de archivos, lo que permite a los desarrolladores gestionar todos los recursos de una aplicación de forma coherente.
// - Proporciona compatibilidad con navegadores antiguos mediante polyfills y transformaciones de código.
// - Es ampliamente utilizado en la comunidad de desarrollo web y cuenta con una amplia documentación y soporte.
//
// Contras:
// - Puede ser complejo de configurar y utilizar, especialmente para principiantes.
// - Requiere conocimientos avanzados de JavaScript, Node.js y la línea de comandos.
// - Puede introducir una sobrecarga de complejidad en proyectos pequeños o simples.
// - Puede afectar negativamente al rendimiento si no se configura correctamente.
// - Puede ser difícil de depurar y optimizar en proyectos grandes o complejos.
// - Puede generar bundles grandes y complejos que afecten al tiempo de carga de la aplicación.

// ¿Qué es un bundle en Webpack?
//
// En Webpack, un bundle es un archivo que contiene todos los recursos de una aplicación web empaquetados y optimizados.
// Un bundle puede contener múltiples tipos de archivos, como JavaScript, CSS, HTML, imágenes, fuentes, etc.
// Los bundles se generan a partir de los archivos de código fuente de una aplicación mediante el proceso de empaquetado de Webpack.
// Los bundles se pueden servir a través de un servidor web o una CDN para cargar una aplicación web en un navegador.
// Los bundles pueden ser estáticos o dinámicos, dependiendo de cómo se generan y se sirven.

// ¿Qué es un loader en Webpack?
//
// En Webpack, un loader es un módulo que se utiliza para transformar archivos de un tipo específico en módulos que Webpack puede entender y procesar.
// Los loaders se utilizan para cargar y transformar diferentes tipos de archivos, como JavaScript, CSS, imágenes, fuentes, etc.
// Algunos ejemplos de loaders comunes son:
// - babel-loader: para transpilar código JavaScript con Babel.
// - css-loader: para cargar y procesar archivos CSS.
// - file-loader: para cargar archivos estáticos, como imágenes y fuentes.
// - url-loader: para cargar archivos pequeños como Data URLs.
// - style-loader: para inyectar estilos CSS en el DOM de una página web.
// Los loaders son como "tubos" que procesan los archivos de código fuente y los transforman 
// en módulos que Webpack puede utilizar para generar bundles.

// ¿Qué es un plugin en Webpack?
//
// En Webpack, un plugin es un módulo que se utiliza para extender o modificar la funcionalidad del proceso de empaquetado.
// Los plugins se utilizan para realizar tareas adicionales, como la optimización, la minificación, la generación de assets, etc.
// Algunos ejemplos de plugins comunes son:
// - HtmlWebpackPlugin: para generar archivos HTML con los bundles de Webpack.
// - MiniCssExtractPlugin: para extraer y minificar archivos CSS.   
// - UglifyJsPlugin: para minificar y optimizar archivos JavaScript.
// - CopyWebpackPlugin: para copiar archivos y directorios a una carpeta de salida.
// - DefinePlugin: para definir variables de entorno y constantes en el código.

