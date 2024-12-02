import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    ignores: ["node_modules/", "build/", "dist/"], // Ignora estos directorios
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // No requiere importar React explícitamente
      "no-unused-vars": "warn", // Las variables no usadas serán advertencias
      "no-undef": "off", // Ignora variables no definidas
      "eqeqeq": ["warn", "allow-null"], // Comparaciones seguras excepto con null
      "max-params": ["warn", 3], // Advierte si hay más de 3 parámetros por función
      "max-statements": ["warn", 10], // Advierte si hay más de 10 declaraciones
    },
    settings: {
      react: {
        version: "detect", // Detecta automáticamente la versión de React
      },
    },
  },
  pluginJs.configs.recommended, // Configuración recomendada para JS
  pluginReact.configs.flat.recommended, // Configuración recomendada para React
];
