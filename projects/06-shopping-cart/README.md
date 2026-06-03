# 🛒 Shopping Cart App

Aplicación de carrito de compras desarrollada con **React**, utilizando **Context API**, **useReducer** y persistencia de datos mediante **LocalStorage**.

El proyecto permite visualizar productos, filtrarlos por categoría y precio, agregarlos al carrito, modificar cantidades y mantener la información almacenada incluso después de recargar la página.

---

## 🚀 Características

- Visualización de productos desde un archivo JSON local.
- Filtrado por categoría.
- Filtrado por precio mínimo.
- Agregado de productos al carrito.
- Eliminación de productos del carrito.
- Incremento y decremento de cantidades.
- Vaciado completo del carrito.
- Persistencia de datos con LocalStorage.
- Estado global mediante Context API.
- Gestión de acciones mediante useReducer.
- Diseño responsive para escritorio y dispositivos móviles.
- Interfaz moderna inspirada en e-commerce.

---

## 🛠️ Tecnologías utilizadas

- React
- JavaScript (ES6+)
- Context API
- useReducer
- CSS3
- LocalStorage
- React Icons
- Vite

---

## 📂 Estructura del proyecto

```text
src/
│
├── components/
│   ├── cart/
│   ├── filters/
│   ├── footer/
│   ├── header/
│   ├── icons/
│   └── products/
│
├── context/
│   ├── cart.js
│   ├── CartProvider.jsx
│   ├── filters.js
│   └── FiltersProvider.jsx
│
├── hooks/
│   ├── useCart.js
│   └── useFilters.js
│
├── mocks/
│   └── products.json
│
├── reducer/
│   └── cart.js
│
├── App.jsx
├── index.css
└── main.jsx
```

---

## 🧠 Gestión del estado

### Carrito

El carrito se administra mediante:

- Context API
- useReducer

Acciones disponibles:

```js
ADD_TO_CART
REMOVE_FROM_CART
DECREASE_QUANTITY
CLEAR_CART
```

### Filtros

Los filtros se administran mediante Context API para compartir el estado entre componentes.

Filtros disponibles:

- Categoría
- Precio mínimo

---

## 💾 Persistencia de datos

El estado del carrito se guarda automáticamente en LocalStorage.

```js
localStorage.setItem('cart', JSON.stringify(state))
```

Al iniciar la aplicación se recupera el contenido almacenado:

```js
JSON.parse(localStorage.getItem('cart'))
```

---

## 📱 Responsive Design

La aplicación adapta automáticamente su interfaz:

### Desktop

- Grid principal de dos columnas.
- Productos a la izquierda.
- Carrito fijo a la derecha.

### Mobile

- Layout de una sola columna.
- Carrito desplegable mediante overlay.
- Componentes optimizados para pantallas pequeñas.

---

## ⚙️ Instalación

### 📂 Repositorio

Este proyecto forma parte del repositorio **Projects-React**:

```bash
git clone https://github.com/MLucasDelgado/Projects-React.git
```

### 📁 Acceder al proyecto

```bash
cd Projects-React/projects/06-shopping-cart
```

### 📦 Instalar dependencias

```bash
npm install
```

### 🚀 Ejecutar en desarrollo

```bash
npm run dev
```

### 🏗️ Generar build de producción

```bash
npm run build
```

---

## 📸 Funcionalidades principales

### Catálogo de productos

- Visualización de productos.
- Información básica de cada producto.
- Diseño responsive.

### Carrito de compras

- Agregar productos.
- Eliminar productos.
- Modificar cantidades.
- Mostrar total acumulado.
- Vaciar carrito.

### Filtros

- Filtrar por categoría.
- Filtrar por precio mínimo.

---

## 🎯 Objetivo del proyecto

Este proyecto fue desarrollado como práctica avanzada de React para reforzar conceptos como:

- Componentización.
- Estado global.
- Context API.
- useReducer.
- Persistencia de datos.
- Custom Hooks.
- Arquitectura escalable para aplicaciones React.

---

## 📚 Lo que aprendí

Durante el desarrollo de este proyecto practiqué:

- Creación y consumo de Context API.
- Manejo de estado complejo con useReducer.
- Persistencia de información con LocalStorage.
- Creación de Custom Hooks reutilizables.
- Comunicación entre componentes.
- Renderizado condicional.
- Diseño responsive con CSS.
- Organización de proyectos React mediante carpetas y responsabilidades separadas.

---

## 👨‍💻 Autor

Desarrollado por **Lucas Delgado** como proyecto de práctica y aprendizaje en React.