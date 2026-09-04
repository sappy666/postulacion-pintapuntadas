# Brief de Producción — Piezas Gráficas y Catálogo del Taller

Documento de referencia para construir, al finalizar el taller, dos tipos de piezas HTML autocontenidas que muestren el trabajo de las participantes y del taller en sí mismo:

1. **Piezas gráficas para redes sociales** (posts/historias de difusión post-taller).
2. **Catálogo del taller** (documento de registro y difusión con doble función, mencionado en la postulación).

Ambas deben construirse como **archivos HTML autocontenidos** (un `<style>` inline, sin build ni dependencias del proyecto Vite) que repliquen el design system del sitio, para mantener consistencia visual con [pintapuntadas-main](.).

---

## 1. Design System de Referencia

Extraído de [`src/index.css`](../src/index.css). Reutilizar exactamente estos valores.

### Tipografías

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

| Token | Fuente | Uso |
|---|---|---|
| `--font-serif` | `"Cormorant Garamond", Georgia, serif` | Títulos (H1/H2), citas en itálica |
| `--font-display` | `"Playfair Display", Georgia, serif` | Reservada, poco usada aún |
| `--font-sans` | `"Plus Jakarta Sans", system-ui, sans-serif` | Cuerpo de texto, labels, botones |

### Paleta de color

| Token | Hex | Uso |
|---|---|---|
| `--color-canvas` | `#FDFCFB` | Fondo base |
| `--color-panel` | `#F5F2EF` | Fondo de secciones/tarjetas |
| `--color-panel-alt` | `#F9F7F5` | Fondo alterno de tarjetas |
| `--color-border-subtle` | `#EEEAE5` | Bordes principales |
| `--color-border-muted` | `#F0EBE6` | Bordes secundarios |
| `--color-border-dark` | `#D1CEC9` | Bordes de contraste (swatches, hover) |
| `--color-charcoal` | `#1A1A1A` | Texto principal, fondos oscuros |
| `--color-body` | `#555555` | Texto de cuerpo |
| `--color-muted` | `#777777` | Texto secundario |
| `--color-accent-muted` | `#A89F91` | Acento taupe/dorado — íconos, labels, líneas |

Colores puntuales fuera del token system (usar tal cual, sin inventar variantes): `#333333` (hover de negro), `#25D366` (WhatsApp).

### Bloque `<style>` listo para pegar en cualquier HTML autocontenido

```html
<style>
  :root {
    --font-serif: "Cormorant Garamond", Georgia, serif;
    --font-sans: "Plus Jakarta Sans", system-ui, sans-serif;
    --color-canvas: #FDFCFB;
    --color-panel: #F5F2EF;
    --color-panel-alt: #F9F7F5;
    --color-border-subtle: #EEEAE5;
    --color-border-dark: #D1CEC9;
    --color-charcoal: #1A1A1A;
    --color-body: #555555;
    --color-muted: #777777;
    --color-accent-muted: #A89F91;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: var(--color-canvas); color: var(--color-charcoal); font-family: var(--font-sans); }
  .eyebrow {
    font-size: 10px; text-transform: uppercase; letter-spacing: 0.3em;
    color: var(--color-accent-muted); display: flex; align-items: center; justify-content: center; gap: 8px;
  }
  h1, h2 { font-family: var(--font-serif); font-weight: 300; color: var(--color-charcoal); }
  .subtitulo-italica { font-family: var(--font-serif); font-style: italic; color: var(--color-muted); }
  .frame-overlay { position: relative; }
  .frame-overlay::before {
    content: ''; position: absolute; inset: 12px; border: 1px solid var(--color-accent-muted);
    opacity: 0.25; pointer-events: none;
  }
  .boton {
    display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px;
    font-size: 10px; text-transform: uppercase; letter-spacing: 0.25em;
    background: var(--color-charcoal); color: var(--color-canvas); border: none; cursor: pointer;
  }
  .badge-numero {
    width: 28px; height: 28px; border-radius: 9999px; background: var(--color-charcoal); color: var(--color-canvas);
    display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700;
  }
</style>
```

### Patrones estructurales del sitio (replicarlos, no reinventar)

- **Encabezado de sección**: `eyebrow` (ícono + texto en mayúsculas trackeado) → `h2` serif liviano → subtítulo itálico en `--color-muted`.
- **Tarjeta de pieza**: imagen con `frame-overlay` (marco interior sutil) + panel de texto con borde `--color-border-subtle`.
- **Ficha técnica**: label uppercase pequeño en `--color-accent-muted` + valor en `--color-charcoal`.
- **Botón CTA**: fondo `--color-charcoal`, texto `--color-canvas`, mayúsculas, tracking amplio, sin bordes redondeados.
- **Cita destacada**: `font-serif italic`, borde izquierdo de 2px en `--color-accent-muted`, padding-left generoso (ver `ObraBordadoSection.tsx` para el patrón ya implementado).

---

## 2. Piezas Gráficas para Redes Sociales

Formato base: cuadrado 1080×1080 px (post) o vertical 1080×1920 px (historia). Un archivo HTML por pieza, renderizado a ese tamaño exacto (`width`/`height` fijos en el contenedor raíz) para luego capturarse como imagen (screenshot) o exportarse.

Ya existe un punto de partida real en el código: [`DifusionCatalogoSection.tsx`](../src/components/DifusionCatalogoSection.tsx) (sección "Plantillas de Redes Sociales") — dos plantillas ya construidas con este mismo design system, pensadas *antes* del taller (convocatoria). Las de este brief son las de **después** del taller, con contenido real de las participantes.

### Piezas a producir

| # | Pieza | Formato | Contenido |
|---|---|---|---|
| 1 | Presentación de participante | 1080×1080 | Foto de su obra terminada (frame-overlay) + nombre + comuna + paisaje elegido, 1 por participante |
| 2 | Detrás de cámara / proceso | 1080×1080 o 1080×1920 | Foto de proceso (manos bordando, sesión grupal) + frase corta sobre la mediación patrimonial |
| 3 | Mosaico de cierre | 1080×1080 | Grid de 4-6 fotos de piezas terminadas de distintas participantes, logo y texto de cierre |
| 4 | Agradecimiento / cierre de ciclo | 1080×1080 | Texto de agradecimiento a participantes y comuna anfitriona, próximos pasos (exposición itinerante) |
| 5 | Anuncio de Exposición Itinerante | 1080×1080 | Fecha, comuna, lugar; miniatura de 2-3 piezas |

### Estructura HTML sugerida por pieza (ejemplo: Presentación de participante)

```
<body> 1080x1080, bg-canvas
  <div eyebrow>Pintapuntadas · Needle Painting</div>
  <img frame-overlay> foto de la obra terminada, aspect-square, ocupa ~60% de la pieza
  <h2> Nombre de la participante
  <p subtitulo-italica> "Comuna, Región de Valparaíso"
  <p> Paisaje patrimonial bordado: [nombre del paisaje/patrimonio elegido]
</body>
```

### Checklist de contenido a recopilar (por participante)

- [ ] Foto de la obra terminada, alta resolución, fondo neutro
- [ ] Foto de proceso (opcional pero recomendable)
- [ ] Nombre completo (o como prefiera aparecer) y comuna
- [ ] Paisaje o patrimonio natural/arquitectónico elegido (de la Sesión 1, "Mapeo Patrimonial")
- [ ] Frase corta de la participante sobre por qué eligió ese paisaje (opcional)
- [ ] **Consentimiento explícito de difusión** de su imagen, nombre y obra en redes/catálogo

---

## 3. Catálogo del Taller (post-cierre)

Documento con doble función (según la postulación): material de difusión pública **y** respaldo de registro del proceso. A diferencia del mockup pre-taller ya construido en `DifusionCatalogoSection.tsx` (que usa piezas del archivo personal de la artista), este catálogo debe mostrar el **trabajo real de las participantes** y el **taller en sí mismo** (sesiones, mediación, cierre).

### Estructura de páginas (repetir el patrón A4/carta del mockup existente, ahora con contenido real)

1. **Portada**: título del catálogo, edición/fecha, comuna(s), foto representativa del taller o de una obra destacada (tratamiento `arch-frame`, como en `DifusionCatalogoSection.tsx`).
2. **Introducción**: resumen del proyecto (reutilizar el texto ya escrito en `TallerMediacionSection.tsx`: mediación patrimonial, needle painting, formación de la artesana) + fotos de las sesiones.
3. **Ficha por participante** (una página o media página por persona, bloque repetible):
   - Foto de la obra terminada (grande, frame-overlay)
   - Foto de proceso (pequeña, esquina)
   - Nombre, comuna
   - Paisaje/patrimonio elegido y por qué (mapeo patrimonial)
   - Cita corta de la participante (si la dio)
   - Ficha técnica: técnica, sesiones, hilos usados (si se registró)
4. **Registro del taller**: fotos grupales de las 4 sesiones, breve crónica del proceso de mediación.
5. **Cierre**: agradecimientos, información de la Exposición Itinerante (fechas/comunas si ya están definidas), datos de contacto de Pintapuntadas.

### Bloque HTML repetible para "Ficha por participante"

```html
<section class="ficha-participante" style="display:grid; grid-template-columns: 5fr 7fr; gap:32px; border:1px solid var(--color-border-subtle); background:var(--color-panel-alt); padding:32px;">
  <div class="frame-overlay" style="aspect-ratio:1; background:var(--color-panel); overflow:hidden;">
    <img src="RUTA_FOTO_OBRA" style="width:100%; height:100%; object-fit:cover;">
  </div>
  <div>
    <span class="eyebrow" style="justify-content:flex-start;">COMUNA</span>
    <h3 style="font-family:var(--font-serif); font-weight:300; font-size:28px;">NOMBRE PARTICIPANTE</h3>
    <p style="font-family:var(--font-serif); font-style:italic; font-size:20px; border-left:2px solid var(--color-accent-muted); padding-left:20px; margin-top:12px;">
      "CITA DE LA PARTICIPANTE"
    </p>
    <p style="font-size:14px; color:var(--color-body); margin-top:12px;">
      Paisaje patrimonial bordado: PAISAJE_ELEGIDO
    </p>
  </div>
</section>
```

### Checklist de contenido a recopilar para el catálogo

- [ ] Fotos de las 4 sesiones (grupales, de proceso, de mediación patrimonial)
- [ ] Foto de obra terminada + foto de proceso de cada participante
- [ ] Nombre, comuna y paisaje/patrimonio elegido de cada participante
- [ ] Cita o testimonio breve de cada participante (opcional)
- [ ] Fecha, comuna(s) y lugar(es) confirmados de la Exposición Itinerante
- [ ] Consentimiento de difusión de cada participante
- [ ] Créditos: nombre de la artesana/mediadora, comuna anfitriona, financiamiento (mención al fondo si corresponde)

---

## 4. Cómo construir el HTML autocontenido (checklist técnico)

- [ ] Un archivo `.html` por pieza (o por página del catálogo), sin dependencias externas salvo el link de Google Fonts.
- [ ] Pegar el bloque `<style>` de la sección 1 al inicio de cada archivo.
- [ ] Imágenes: usar rutas relativas a `imagenes/` si el archivo vive dentro del proyecto, o incrustarlas como `data:` URI si el archivo debe ser 100% portable (ej. para enviarlo a la comuna anfitriona).
- [ ] Redes sociales: fijar `width`/`height` exactos del contenedor raíz (1080×1080 o 1080×1920) para capturar la pieza como imagen final.
- [ ] Catálogo: usar tamaño A4/carta (`210mm × 297mm` si se imprimirá) y agregar salto de página entre secciones si se exportará a PDF.
- [ ] No reutilizar clases de Tailwind directamente (estos archivos no pasan por el build de Vite) — usar el CSS plano de la sección 1, que replica los mismos tokens.
