This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Acerca del sitio web:

Esta sección detalla las especificaciones técnicas, la lógica de componentes, la paleta de colores y las características especiales de la plataforma de Alumni de Junior Achievement El Salvador. Está pensada como guía de inicio rápido para desarrolladores que se incorporen al proyecto.

### Arquitectura de Componentes y Ubicaciones

El proyecto sigue la estructura estándar de Next.js App Router, con componentes agrupados por contexto.

- **`src/components/layout/Navbar.jsx`**
  - **Uso:** Incluido en el layout raíz (`src/app/layout.jsx`) y renderizado en todas las páginas.
  - **Función:** Sirve como navegación principal superior, con efecto glassmorphism (`navbar-glass`) y enrutamiento responsivo para las distintas secciones de la plataforma.
- **`src/components/layout/Footer.jsx`**
  - **Uso:** Incluido en el layout raíz (`src/app/layout.jsx`) y mostrado al pie de todas las páginas.
  - **Función:** Proporciona enlaces globales del sitio, conexiones a redes sociales e información de contacto.
- **`src/components/landing/StoryModal.jsx`**
  - **Uso:** Renderizado dentro de la página de inicio (`src/app/page.jsx`), en la sección "#SoyJA".
  - **Función:** Actúa como una superposición interactiva (modal) que muestra las historias completas y expandidas de alumni destacados. Utiliza colores temáticos dinámicos pasados mediante props.

### Hoja de Ruta de Páginas

- **`/` (Inicio)**: Página de aterrizaje principal que presenta la propuesta de valor, historias de éxito de alumni (SoyJA), segmentación por intención del usuario y oportunidades en la red global.
- **`/auth/register`**: Gestiona el onboarding de usuarios según intenciones específicas (reconectarse, hacer negocios, crecer profesionalmente, contribuir).
- **`/quienes-somos/*`**: Contiene secciones que detallan la historia de la fundación, miembros pioneros, consejo regional, equipo directivo y aliados.
- **`/campus/*`**: Destaca la presencia física de JA (campus de Santa Tecla) y centros tecnológicos como JA Labs y JA Educación.
- **`/comunidad/*`**: Detalla la Red de Alumni, opciones de voluntariado, programas de mentoría, eventos Gather y más historias de éxito.
- **`/donaciones/*`**: Gestiona el seguimiento de patrocinios, métricas de impacto, instrucciones para donar e informes de transparencia.
- **`/contactanos/*`**: Proporciona el directorio, horarios de atención y formularios de contacto general.

### Paleta de Colores

El sitio utiliza un tema personalizado configurado directamente en `src/app/globals.css` con variables de Tailwind CSS v4 en línea:

- **Azul Primario (`--color-ja-blue`)**: `#004B8D`
- **Azul Oscuro (`--color-ja-blue-dark`)**: `#003568`
- **Dorado (`--color-ja-gold`)**: `#FFB300`
- **Dorado Claro (`--color-ja-gold-light`)**: `#FFD54F`
- **Fondo Oscuro (`--color-dark`)**: `#0A0A0F`
- **Tarjeta Oscura (`--color-dark-card`)**: `#111118`
- **Texto Atenuado (`--color-muted`)**: `#6B7280`
- **Superficie Clara (`--color-surface`)**: `#F8F9FC`

*Nota: El sitio incluye clases de texto con degradado dedicadas (`.text-gradient`) que combinan el Dorado `#FFB300` con un Naranja de acento `#FF6B00`.*

### Características Especiales

1. **Animaciones Personalizadas y Micro-interacciones**: El sitio define keyframes en `globals.css` (como `fadeInUp`, `pulse-glow` y `marquee`) combinados con utilidades `card-hover`, para crear una interfaz moderna y dinámica que responde fluidamente a las interacciones del usuario.
2. **Seguimiento Analítico**: Las interacciones del usuario, en particular los clics en llamadas a la acción (CTA) de la página de inicio, se registran mediante una función personalizada `trackCTA` integrada desde `src/lib/analytics`.
3. **Base de Conocimiento del Chatbot**: El proyecto incluye una base de conocimiento dedicada para consultas automatizadas (`src/data/chatbotKnowledge.js`). Categoriza palabras clave relacionadas con historia, ubicaciones del campus, programas por edad, red de alumni y donaciones, para generar respuestas contextuales a los usuarios.
4. **Configuración de Tailwind CSS v4**: Utiliza las nuevas directivas `@theme` en línea directamente dentro de `globals.css`, manteniendo un enfoque CSS-in-JS limpio sin archivos de configuración externos.