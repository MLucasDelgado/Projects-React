# Follow Mouse - React + TypeScript

## Descripción

Aplicación desarrollada con React y TypeScript que implementa un efecto visual interactivo donde un elemento sigue el movimiento del cursor en tiempo real.

El proyecto utiliza eventos del navegador y hooks de React para gestionar el seguimiento del puntero y activar/desactivar dinámicamente el efecto visual.

---

## Características

- Seguimiento del cursor en tiempo real
- Activación y desactivación del efecto
- Uso de eventos `pointermove`
- Limpieza de listeners con `useEffect`
- Renderizado condicional
- Efecto visual interactivo
- Ocultamiento del cursor nativo

---

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- CSS3

---

## Conceptos practicados

- Hooks (`useState`, `useEffect`)
- Manejo de eventos del navegador
- Cleanup de efectos en React
- Renderizado condicional
- Estado global del componente
- Manipulación dinámica de estilos inline
- Componentes reutilizables
- Eventos `PointerEvent`

---

## Estructura del proyecto

```txt
src/
│
├── components/
│   └── FollowMouse.tsx
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## Instalación

```bash
npm install
```

---

## Ejecutar en desarrollo

```bash
npm run dev
```

---

## Build de producción

```bash
npm run build
```

---

## Preview del build

```bash
npm run preview
```