// Importa moment
import moment from 'moment';

// Obtiene la fecha actual
const fechaActual = moment();

// Suma 10 días a la fecha actual
const fechaSumada = fechaActual.add(10, 'days');

// Formatea la fecha sumada en el formato "dddd"
const fechaFormateada = fechaSumada.format('dddd');

// Imprime la fecha formateada por consola
console.log('La fecha actual sumando 10 días en formato "dddd" es:', fechaFormateada);
