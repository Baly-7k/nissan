# Proyecto Web Nissan - Experiencia Interactiva 3D

Este repositorio contiene el código fuente y las herramientas para el sitio web promocional de Nissan, el cual incluye un catálogo de vehículos, páginas de modelos individuales y un visor 3D interactivo para inspeccionar modelos de camionetas.

# 📋 Estructura del Proyecto

nissan-main/
├── index.html            # Página principal de inicio (Hero, destacados, navegación)
├── index.js              # Lógica y scripts de la página principal
├── catalogo.html         # Catálogo interactivo de modelos Nissan
├── catalogo.js           # Lógica de filtrado y visualización del catálogo
├── expe3D.html           # Vista e interfaz de la experiencia 3D
├── expe3D.js             # Configuración del visor 3D y controles interactivos
├── frontier.html         # Página dedicada al modelo Nissan Frontier
├── camioneta-3.glb       # Modelo 3D en formato GLTF/GLB (Camioneta Nissan)
├── sentra.webp           # Imagen promocional del modelo Nissan Sentra
├── nissan-logo-black.svg # Logotipo de Nissan (versión oscura)
└── nissan-logo-white.svg # Logotipo de Nissan (versión clara)


# Características Principales
Visor y Experiencia 3D (expe3D.html / camioneta-3.glb):
Renderizado del vehículo en 3D (.glb) que permite rotación, zoom e inspección interactiva por parte del usuario.

Catálogo de Vehículos (catalogo.html):
Vista organizada con los modelos disponibles de Nissan, sus especificaciones técnicas y características clave.

Landing Pages Dedicadas (frontier.html):
Secciones diseñadas específicamente para destacar las capacidades, diseño y características de modelos particulares como la Nissan Frontier.

Diseño Responsive y Recursos Gráficos:
Incluye logotipos vectoriales SVG y formato de imágenes de última generación (.webp) para carga rápida.

# Tecnologías Utilizadas
HTML5: Estructura semántica de todas las páginas del sitio.
JavaScript (ES6+): Manipulación del DOM, eventos e integración de la experiencia 3D.
Three.js / Model-Viewer: Para la carga y renderizado del modelo 3D GLTF (camioneta-3.glb).
CSS3 / SVG / WebP: Estilos visuales, logotipos escalables e imágenes optimizadas para la web.
