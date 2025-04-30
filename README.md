# 🌟 Página de Personajes de Naruto Shippuden

Este proyecto es una página web interactiva que muestra una lista completa de los personajes de **Naruto Shippuden**, junto con toda su información relevante. Incluye funcionalidades de **paginación** y **filtrado de búsqueda** para facilitar la navegación y encontrar personajes específicos de manera rápida y sencilla. Diseñado para los fans del anime, con un enfoque en la usabilidad y un diseño moderno.

## 🚀 Características

- 📜 **Lista completa de personajes**: Explora todos los personajes de Naruto Shippuden.
- 🔍 **Filtrado de búsqueda**: Encuentra personajes fácilmente utilizando el buscador.
- 📄 **Paginación dinámica**: Navega cómodamente entre las páginas de personajes.
- 🎨 **Diseño moderno**: Interfaz atractiva y fácil de usar.
- ⚡ **Desarrollado con Astro**: Aprovecha la velocidad y simplicidad de Astro para un rendimiento óptimo.

## 🌐 Tecnologías Utilizadas

* Astro: Framework para construir sitios web rápidos y modernos.
* JavaScript/TypeScript: Para la lógica interactiva.
* HTML/CSS: Para la estructura y el diseño.
* Bun: Administrador de paquetes y servidor de desarrollo.

## 📷 Capturas de Pantalla

![Captura de la página principal](public/assets/project-capture.png)


## 📂 Estructura del Proyecto

Dentro del proyecto, encontrarás la siguiente estructura de carpetas y archivos:

```text
/
├── public/
│   ├── assets/                # Imágenes y recursos estáticos
│   └── favicon.svg
├── src/
│   ├── components/            # Componentes reutilizables (e.g., Paginación, Filtros)
    |-- fonts/                 # Archivos de fuentes
│   ├── layouts/               # Diseños base para las páginas
│   ├── pages/                 # Páginas principales del sitio
│   |   ├── index.astro        # Página principal
│   |   |── [id].astro         # Página de personajes
|   |   └-- 404.astro          # Página de error 404
│   |── styles/                # Archivos de estilos
|   └-- types/                 # Archivos de tipos
|── .eslintrc.cjs             # Configuración de ESLint
|── .gitignore                 # Archivo de ignorados
|── astro.config.mjs           # Configuración de Astro
|── bun.lockb                  # Archivo de bloqueo de paquetes
|── package.json               # Configuración del proyecto
|-- README.md                  # Archivo de información
└── tsconfig.json              # Configuración de TypeScript

## 🚀 Iniciar el proyecto 💻 En local
#Sigue estos pasos para ejecutar el proyecto en tu entorno local:


1. Clona el repositorio:

```bash
git clone [https://github.com/MWandev/naruto-shippuden-gallery.git](https://github.com/MWandev/naruto-shippuden-gallery.git)
cd naruto-shippuden-gallery
```

2. Instala las dependencias:

```bash
bun install
// o
pnpm install
```

3. Inicia el entorno de desarrollo:

```bash
bun dev
// o
pnpm dev
```