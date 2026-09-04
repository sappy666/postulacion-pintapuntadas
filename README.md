# Pintapuntadas

Sitio web institucional del taller **Pintapuntadas**, dedicado a bordados patrimoniales (paisajes, flora y fauna en hilos) y a la mediación cultural en torno al arte del bordado.

Landing page de una sola página (SPA) con secciones de presentación, taller de mediación, obra/prototipo de bordado, galería fotográfica, difusión y catálogo, información del proyecto, y formulario de contacto/postulación. Incluye botón flotante de contacto por WhatsApp.

> Proyecto generado inicialmente en Google AI Studio.

## Stack tecnológico

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vite.dev/) como bundler y servidor de desarrollo
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Express](https://expressjs.com/) (servidor de despliegue)
- [`@google/genai`](https://www.npmjs.com/package/@google/genai) (API de Gemini)
- [motion](https://motion.dev/) para animaciones
- [lucide-react](https://lucide.dev/) para íconos

## Estructura del proyecto

```
├── index.html                 # Punto de entrada HTML
├── src/
│   ├── main.tsx                # Bootstrap de React
│   ├── App.tsx                 # Componente raíz
│   ├── index.css               # Design system / tokens de estilo
│   ├── types.ts
│   ├── data/
│   │   └── designsData.ts
│   └── components/              # Header, Hero, TallerMediacionSection,
│                                 # ObraBordadoSection, GallerySection,
│                                 # DifusionCatalogoSection, AboutSection,
│                                 # ContactForm, Footer, etc.
├── docs/
│   └── brief-piezas-graficas-y-catalogo.md   # Brief de design system para piezas gráficas
├── public/                    # Archivos estáticos servidos directamente
├── assets/                    # Recursos gráficos
├── imagenes/                  # Imágenes del proyecto
└── dist/                      # Build de producción (generado)
```

## Instalación y ejecución

**Requisitos:** Node.js instalado.

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Configurar variables de entorno: copiar `.env.example` a `.env` y completar `GEMINI_API_KEY` (y `APP_URL` si aplica).
3. Levantar el servidor de desarrollo (puerto 3000):
   ```bash
   npm run dev
   ```

### Otros scripts disponibles

| Script | Descripción |
|---|---|
| `npm run build` | Genera el build de producción en `dist/` |
| `npm run preview` | Sirve localmente el build de producción |
| `npm run lint` | Chequeo de tipos con `tsc --noEmit` |

## Documentación adicional

- [`docs/brief-piezas-graficas-y-catalogo.md`](docs/brief-piezas-graficas-y-catalogo.md): brief de producción con el design system del sitio (tipografías, paleta de colores) para crear piezas gráficas HTML consistentes con la identidad visual del proyecto.
