# 🎬 Buscador de Películas

Aplicación desarrollada con React + Vite que permite buscar películas utilizando la API de OMDb.

El proyecto incluye:

- búsqueda dinámica
- debounce para optimizar requests
- validaciones del input
- ordenamiento de resultados
- diseño responsive
- interfaz inspirada en plataformas de streaming como Crunchyroll y Netflix

---

# 🚀 Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS3
- OMDb API
- just-debounce-it

---

# 🔎 Funcionalidades

## ✅ Búsqueda de películas

Permite buscar películas consumiendo la API pública de OMDb.

---

## ✅ Validaciones del buscador

El input valida:

- búsquedas vacías
- espacios al inicio
- números únicamente
- mínimo de caracteres

---

## ✅ Debounce

Se implementó debounce utilizando:

```js
just-debounce-it
```

para evitar múltiples requests mientras el usuario escribe.

---

## ✅ Ordenamiento dinámico

Las películas pueden ordenarse por:

- Título
- Año

utilizando `useMemo`.

---

## ✅ Optimización de rendimiento

Se utilizaron hooks como:

- `useCallback`
- `useMemo`
- `useRef`

para evitar renders y ejecuciones innecesarias.

---

# 🎨 Diseño

La interfaz fue diseñada con una estética inspirada en plataformas de streaming:

- tema oscuro
- detalles naranja
- cards animadas
- diseño responsive
- grid adaptable

---

# 📁 Estructura del proyecto

```bash
src/
│
├── components/
│   └── Movies.jsx
│
├── hooks/
│   └── useMovies.js
│
├── services/
│   └── movies.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

# 🧠 Conceptos practicados

Este proyecto sirvió para practicar:

- React Hooks
- Custom Hooks
- Fetch API
- Manejo de estado
- Renderizado condicional
- Optimización de performance
- Componentización
- Responsive Design

---

# 🌐 API utilizada

OMDb API:

https://www.omdbapi.com/

---

# 📸 Preview

Buscador de películas responsive inspirado en plataformas de streaming.

---

