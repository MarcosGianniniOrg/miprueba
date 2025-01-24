// Boiler Plate
// Qué es un boiler plate?
// En el caso de Webpack, un boiler plate es un conjunto de archivos y configuraciones que se pueden reutilizar 
// para crear una nueva aplicación sin tener que empezar desde cero.
//

// ¿Cómo compilamos de ES6 a ES5?
// Webpack no puede compilar de ES6 a ES5 por sí solo. Para ello necesitamos un loader.
// Un loader es un módulo que se encarga de transformar un tipo de archivo en otro.
// En este caso, necesitamos un loader que transforme archivos de ES6 a ES5.
// El loader que vamos a utilizar es Babel.
// Babel es un transpilador que nos permite transformar código de ES6 a ES5.
// Para instalar Babel, necesitamos instalar los siguientes paquetes:
// npm install --save-dev @babel/core @babel/preset-env babel-loader
// @babel/core: Es el núcleo de Babel.
// @babel/preset-env: Es un preset que nos permite compilar código de ES6 a ES5.
// babel-loader: Es un loader que nos permite utilizar Babel con Webpack.
// Una vez instalados los paquetes, necesitamos configurar Babel en Webpack.
// Para ello, necesitamos añadir un nuevo objeto en la propiedad module.rules de la configuración de Webpack.
// module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env"]
//           }
//         }
//       }
//     ]
//   }
// En este caso, estamos configurando Babel para que compile archivos de JavaScript con extensión .js.
// pero, ¿y si también tenemos un archivo html o css?
// Para ello, necesitamos añadir un nuevo objeto en la propiedad module.rules de la configuración de Webpack.
// module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env"]
//           }
//         }
//       },
//       {
//         test: /\.html$/,
//         use: [
//           {
//             loader: "html-loader",
//             options: { minimize: true }
//           }
//         ]
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"]
//       }
//     ]
//   }
// En este caso, estamos configurando Webpack para que compile archivos de HTML y CSS.
// Para ello, estamos utilizando los siguientes loaders:
// html-loader: Es un loader que nos permite importar archivos HTML en JavaScript.
// style-loader: Es un loader que nos permite importar archivos CSS en JavaScript.
// css-loader: Es un loader que nos permite importar archivos CSS en JavaScript.
// En resumen, un boiler plate de Webpack es un conjunto de archivos y configuraciones que se pueden reutilizar
// para crear una nueva aplicación sin tener que empezar desde cero.
// Para compilar de ES6 a ES5 necesitamos instalar Babel y configurarlo en Webpack.