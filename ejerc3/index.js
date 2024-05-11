// Importar la biblioteca uuid
import { v4 as uuidv4 } from "uuid";

// Generar un nuevo UUID
const uuid = uuidv4();

// Obtener los últimos 6 caracteres del UUID
const ultimos6Caracteres = uuid.slice(-6);

// Imprimir los últimos 6 caracteres por consola
console.log("Los últimos 6 caracteres del UUID son:", ultimos6Caracteres);
