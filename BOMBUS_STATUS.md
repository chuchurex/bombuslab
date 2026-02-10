# BOMBUS LAB - Estado del Proyecto

> **Última actualización:** 9 Febrero 2025
> **Repositorio:** https://github.com/chuchurex/bombuslab
> **Deploy:** Cloudflare Pages (auto-deploy desde main)

---

## ¿Qué es Bombus Lab?

Negocio chileno de **veladores (mesas de noche) personalizables** fabricados a medida. El cliente:
1. Elige modelo, dimensiones, material y gadgets (USB, carga inalámbrica, LED)
2. Usa un configurador web 3D
3. Cotiza por WhatsApp
4. Se le fabrica a medida

**Ticket promedio:** $165.000 CLP | **Margen bruto:** ~27% | **Break-even:** ~22 uds/mes

---

## Estructura del Proyecto

```
bombuslab/
├── index.html                 ← Landing principal (4 categorías)
├── bombus_galeria.html        ← Galería con 40 modelos + filtros + SVGs técnicos
├── bombus_configurador.html   ← Configurador 3D (Three.js) + WhatsApp CTA
├── bombus_catalogo.json       ← FUENTE ÚNICA de datos (40 modelos)
├── sitemap.xml                ← Sitemap para SEO
├── robots.txt                 ← Robots para SEO
├── .nojekyll                  ← Para compatibilidad GitHub Pages/Cloudflare
├── assets/
│   ├── css/
│   │   └── style.css          ← Estilos del landing
│   ├── js/
│   │   └── analytics.js       ← GA4 + Meta Pixel (configurar IDs)
│   └── images/
│       ├── bombus_favicon.png
│       ├── bombus_final_inverted_honey.png
│       └── bombus_og_image.png  ← PENDIENTE: crear imagen OG
└── inbox/                     ← Archivos de trabajo (no trackeados)
```

---

## Fases Completadas

### ✅ Fase 1: Arreglar los cimientos
| Tarea | Estado | Notas |
|-------|--------|-------|
| Unificar datos (JSON único) | ✅ | Galería ahora lee de `bombus_catalogo.json` |
| Navegación funcional | ✅ | Ya funcionaba correctamente |
| 40 modelos en configurador | ✅ | Ya estaban cargados |
| WhatsApp real | ✅ | Número: `56966172583` |
| Analytics básico | ✅ | `assets/js/analytics.js` creado |
| Deploy en Cloudflare | ✅ | Auto-deploy desde main |

**Commit:** `bc03464` - Phase 1: Unify data source + add analytics infrastructure

### ✅ Fase 2: Mejorar la experiencia
| Tarea | Estado | Notas |
|-------|--------|-------|
| SEO: meta tags | ✅ | Description, keywords, robots en todas las páginas |
| SEO: Open Graph | ✅ | og:title, og:description, og:image |
| SEO: Twitter Cards | ✅ | twitter:card, twitter:title, twitter:image |
| SEO: Structured Data | ✅ | JSON-LD LocalBusiness schema |
| SEO: sitemap.xml | ✅ | 3 URLs principales |
| SEO: robots.txt | ✅ | Allow all + sitemap link |
| Responsive mobile-first | ✅ | Galería 2-col/1-col, configurador adaptado |

**Commit:** `5c75c4a` - Phase 2: SEO optimization + responsive mobile-first

### ✅ Fase 2.5: Sistema de SVGs técnicos
| Tarea | Estado | Notas |
|-------|--------|-------|
| SVG material palette | ✅ | 9 materiales con colores para fill, stroke, drawer, handle, accent |
| SVG renderers por modelo | ✅ | 40 funciones SVG inline en `bombus_galeria.html` |
| Material dots selector | ✅ | Click para cambiar colores del SVG en tiempo real |
| Actualización catálogo | ✅ | De 44 a 40 modelos (removidos S08, C01, C04, C06-C08, C10, M04) |
| Nuevos modelos Cálido | ✅ | C11 Ranurado, C12 Calado, C13 Listón, C14 Surco |

**Materiales disponibles:** MDF Blanco, MDF Negro, Melamina Roble, Melamina Nogal, Melamina Ceniza, Pino Natural, Terciado, Terciado Negro, OSB

---

## Fases Pendientes

### 🔲 Fase 3: Expandir catálogo de veladores
- [ ] Veladores impares (1 solo, no par)
- [ ] Veladores asimétricos (geometrías L, escalonadas)
- [ ] Veladores extra-anchos (para camas king)
- [ ] Veladores flotantes dobles (cabecera completa)
- [ ] Set parejas: 2 veladores iguales o complementarios con descuento
- [ ] Opción "hazlo tú": planos + kit de materiales cortados

### 🔲 Fase 4: Primer producto nuevo - Arrimos
- [ ] Misma lógica: configurador + materiales + gadgets + WhatsApp
- [ ] Reutilizar 80% del código del configurador
- [ ] Arrimos de living, entrada, pasillo
- [ ] Categorías: Simple, Cálido, Moderno, Clásico (misma taxonomía)

### 🔲 Fase 5: Plataforma multi-producto
- [ ] Escritorios
- [ ] Repisas y estanterías
- [ ] Muebles de TV / consolas multimedia
- [ ] Sistema de diseño unificado

---

## Tareas Pendientes Inmediatas

### Imágenes
- [ ] **Crear `bombus_og_image.png`** (1200x630px) para compartir en redes
- [ ] Fotos reales de productos o renders AI para la galería
- [x] ~~Reemplazar SVG placeholders por imágenes reales~~ → SVGs técnicos inline implementados

### Analytics (IMPORTANTE)
Editar `assets/js/analytics.js` y configurar:
```javascript
const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX';  // Obtener de Google Analytics
const META_PIXEL_ID = 'XXXXXXXXXXXXXXX';     // Obtener de Meta Business Suite
```

### Testimonios/Social Proof
- [ ] Agregar sección de testimonios (cuando haya primeros clientes)
- [ ] Agregar logos de métodos de pago
- [ ] Agregar garantías/beneficios

---

## Arquitectura Técnica

### Stack
- **Frontend:** HTML estático + Vanilla JS + Three.js
- **3D:** Three.js r128 (wireframe models)
- **Deploy:** Cloudflare Pages (auto-deploy desde GitHub)
- **Analytics:** GA4 + Meta Pixel (pendiente configurar)
- **CTA:** WhatsApp Business

### Flujo del Usuario
```
Landing → Galería → Configurador 3D → WhatsApp → Cotización → Venta
```

### Catálogo de Modelos (40 total)
| Categoría | Cantidad | Características |
|-----------|----------|-----------------|
| Simple | 11 | Minimalistas, líneas rectas |
| Cálido | 8 | Madera natural, calado y ranurado |
| Moderno | 13 | Tech integrada, materiales contemporáneos |
| Clásico | 8 | Molduras, patas torneadas, elegancia |

### Gadgets Disponibles
| Gadget | Precio | Descripción |
|--------|--------|-------------|
| USB-A + USB-C | +$12.000 | 2 puertos de carga rápida |
| Carga inalámbrica | +$25.000 | Qi/MagSafe invisible |
| Luz LED ambiente | +$18.000 | Sensor táctil, luz cálida |

---

## Archivos Clave

### `bombus_catalogo.json`
Fuente única de verdad para todos los modelos. Estructura:
```json
{
  "modelos": {
    "S01": {
      "nombre": "Cubo",
      "categoria": "simple",
      "descripcion": "...",
      "precio_base": 75000,
      "montaje": "piso",
      "compatible_gadgets": ["usb", "led"]
    }
  }
}
```

### `assets/js/analytics.js`
Sistema centralizado de tracking con funciones:
- `trackViewProduct()` - Vista de producto
- `trackConfigureProduct()` - Configuración de velador
- `trackInitiateCheckout()` - Inicio de cotización
- `trackWhatsAppClick()` - Click en CTA WhatsApp
- `trackCategoryView()` - Vista de categoría

---

## Comandos Útiles

```bash
# Ver estado de git
git status

# Hacer commit
git add . && git commit -m "mensaje"

# Push (triggerea deploy en Cloudflare)
git push origin main

# Ver logs recientes
git log --oneline -5
```

---

## Contacto

- **WhatsApp:** +56 9 6617 2583
- **Repo:** github.com/chuchurex/bombuslab

---

*Documento generado para continuidad de desarrollo con Claude*
