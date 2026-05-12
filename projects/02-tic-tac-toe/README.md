# Tic Tac Toe - React + TypeScript

## Descripción

Aplicación desarrollada con React y TypeScript que recrea el clásico juego Tic Tac Toe (Ta-Te-Ti).

El proyecto incluye:
- Sistema de turnos dinámico
- Detección automática de ganador y empate
- Reinicio de partida
- Persistencia de juego con `localStorage`
- Animaciones y efectos visuales
- Componentes reutilizables
- Arquitectura modular y tipada con TypeScript

---

## Características

- Juego interactivo en tiempo real
- Indicador visual de turno actual
- Modal para mostrar ganador o empate
- Persistencia automática de la partida
- Animaciones de victoria y transiciones
- Diseño responsive y minimalista

---

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- CSS3
- LocalStorage API
- canvas-confetti

---

## Conceptos practicados

- Hooks (`useState`)
- Componentes reutilizables
- Props y tipado
- Renderizado dinámico con `.map()`
- Manejo de estado
- Persistencia de datos
- Separación de lógica y UI
- Arquitectura modular
- Animaciones con CSS
- Custom utilities y validaciones

---

## Estructura del proyecto

```txt
src/
│
├── components/
│   ├── Square.tsx
│   └── WinnerModal.tsx
│
├── logic/
│   └── board.ts
│
├── constants.ts
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
