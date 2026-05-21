import { createContext } from "react";

// 1. Creamos el contexto para los filtros
// Est es el que tenemos que consumir en los componentes que necesiten acceder a los filtros
export const FiltersContext = createContext()