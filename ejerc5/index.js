// Importa Axios
import axios from "axios";

// URL de la API
const apiUrl = "https://mindicador.cl/api";

// Función para obtener el valor del dólar en Chile
const obtenerValorDolar = async () => {
  try {
    // Realiza la consulta a la API
    const response = await axios.get(`${apiUrl}/dolar`);

    // Extrae el valor del dólar desde la respuesta
    const valorDolar = response.data.serie[0].valor;

    // Imprime el valor del dólar por consola
    console.log(`El valor del dólar en Chile es: $${valorDolar}`);
  } catch (error) {
    // Manejo de errores
    console.error("Error al obtener el valor del dólar:", error.message);
  }
};

// Llama a la función para obtener el valor del dólar
obtenerValorDolar();
