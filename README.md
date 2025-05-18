# Galería de Personajes - Naruto Shippuden

Una aplicación web moderna que muestra una galería interactiva de personajes de Naruto Shippuden, permitiendo a los usuarios explorar, buscar y ver detalles de sus personajes favoritos.

## captura de pantalla
![Naruto Shippuden Gallery](./frontend/public/new%20interface.png)

## 🚀 Funcionalidades
- **Navegación**: Navegar por la galería de personajes
- **Búsqueda y Filtrado**: Buscar y filtrar personajes por su nombre, estado y genero
<!-- - **Detalles**: Ver detalles de un personaje, incluyendo su historia, habilidades y equipo -->
- **Paginación**: Navegar por las páginas de la galería

## 🏗️ Estructura del Proyecto

```
naruto-shippuden-gallery/
├── frontend/               # Aplicación frontend en Astro
│   ├── src/
│   │   ├── components/    # Componentes reutilizables
│   │   ├── layouts/       # Layouts de la aplicación
│   │   ├── pages/         # Páginas de la aplicación
│   │   ├── styles/        # Estilos globales
│   │   └── types/         # Definiciones de tipos TypeScript
│   └── public/            # Archivos estáticos
│
└── backend/               # API REST en Node.js/Express
    ├── src/
    │   ├── db/           # Configuración y modelos de base de datos
    │   └── types/        # Definiciones de tipos TypeScript
    └── config/           # Configuraciones del servidor
```

## 🎨 Arquitectura

La aplicación sigue una arquitectura cliente-servidor:

- **Frontend**: Desarrollado con Astro.js, proporcionando una experiencia de usuario rápida y moderna
- **Backend**: API REST construida con Node.js y Express
- **Base de Datos**: SQLite para almacenamiento de datos de personajes

## 🛠️ Tecnologías Utilizadas

### Frontend
- Astro.js
- TypeScript
- Tailwind CSS
- ESLint
- Bun (gestor de paquetes)

### Backend
- Node.js
- Express
- TypeScript
- SQLite
- Bun (gestor de paquetes)

## 🚀 Cómo Ejecutar el Proyecto

### Prerrequisitos
- Node.js (v18 o superior)
- Bun (gestor de paquetes) o pnpm (gestor de paquetes)

### Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/naruto-shippuden-gallery.git
cd naruto-shippuden-gallery
```

2. Instalar dependencias del frontend:
```bash
cd frontend
bun install
```

3. Instalar dependencias del backend:
```bash
cd ../backend
bun install
```

### Desarrollo

1. Iniciar el servidor backend:
```bash
cd backend
bun run dev
```

2. En otra terminal, iniciar el frontend:
```bash
cd frontend
bun run dev
```

3. Abrir el navegador en `http://localhost:4321`

### Construcción para Producción

1. Construir el frontend:
```bash
cd frontend
bun run build
```

2. Construir el backend:
```bash
cd backend
bun run build
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT