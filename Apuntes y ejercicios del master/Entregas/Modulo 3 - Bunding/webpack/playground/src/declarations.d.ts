// Esto es para que TypeScript entienda las importaciones de imágenes
declare module "*.png" {
  const value: string;
  export default value;
}
