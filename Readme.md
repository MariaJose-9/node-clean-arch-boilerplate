
FALTA INFRASTRUCTURE TERMINAR

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


## Relación entre capas

Routes llaman a → Controllers

Controllers llaman a → Use Cases

Use Cases usan → Repositories

Repositories interactúan con → DB (Prisma, etc.)



### 📌 Descripción de las capas


Cada capa tiene un propósito específico y depende únicamente de la capa inmediatamente más interna, permitiendo independencia de frameworks, bases de datos y adaptadores externos.

---

### 📦 Capas del sistema

#### 🔧 Infrastructure
Contiene todo lo relacionado con la infraestructura del sistema:
- Servidor HTTP (Express)
- Configuración de base de datos (Prisma, etc.)
- Implementaciones de repositorios
- Rutas y adaptadores de entrada/salida (por ejemplo, envío de correos, almacenamiento externo)

> Es la capa más externa. Solo puede depender de `Interfaces`, `Application` y `Domain`, pero nunca al revés.

---

#### 🎛 Interfaces
Contiene los **controladores** que actúan como puentes entre la capa de infraestructura (HTTP, CLI, etc.) y la lógica de aplicación.
- Reciben las peticiones desde las rutas
- Validan y adaptan los datos de entrada
- Llaman a los casos de uso

---

#### 🧠 Application
Contiene la **lógica de negocio específica de la aplicación**:
- Casos de uso (use cases)
- DTOs (Data Transfer Objects)

> Esta capa es independiente de cualquier framework o tecnología externa.

---

#### 🧬 Domain
La capa más central y estable. Contiene:
- Entidades del dominio
- Interfaces (contratos) de los repositorios

> Esta capa **no depende de ninguna otra**. Representa el corazón del sistema.

---

### 🔄 Flujo general
