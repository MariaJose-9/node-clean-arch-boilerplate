Clean Architecture Backend

Es un proyecto con arquitectura limpia usando Node.js y Express.

## Para iniciar el proyecto con TypeScript

1. **Crea un archivo .env en la raíz del proyecto y agrega tus variables de entorno necesarias como en el arhico .env.template.**

2. **Inicia proyecto NodeJS:**
 ```bash
   npm init -y
```
3. **Instala dependencias de desarrollo:**
```bash
   npm i -D typescript @types/node ts-node-dev rimraf
```
4. **Inicializar el archivo de configuración de TypeScript:**
```bash
   npx tsc --init --outDir dist/ --rootDir src
```
4. **Agregar estos scripts en el package.json:**
```bash
    "dev": "tsnd --respawn --clear src/app.ts",
    "build": "rimraf ./dist && tsc",
    "start": "npm run build && node dist/app.js"
```
5. **Instalar Express:**
```bash
    npm install express --save
    npm install -D @types/express
```