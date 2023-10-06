/*Constantes*/
const montoTotalPromedio = document.getElementById("montoTotalPromedio");
const cantidadArticulos = document.getElementById("cantidadArticulos");
const resultadoPromedio = document.getElementById("resultadoPromedio");
const mostrarPromedio = document.getElementById("mostrarPromedio");

const montoT = document.getElementById("montoT");
const descuentoFinal = document.getElementById("descuentoFinal");
const resultadoDescuento = document.getElementById("resultadoDescuento");
const mostrarDescuento = document.getElementById("mostrarDescuento");

const gradosFarenheit = document.getElementById("gradosFarenheit");
const resultadoCelsius = document.getElementById("resultadoCelsius");
const mostrarCelsius = document.getElementById("mostrarCelsius");

const onzas = document.getElementById("onzas");
const resultadoGramos = document.getElementById("resultadoGramos");
const mostrarOnzas = document.getElementById("mostrarOnzas");


/*Event listeners*/
// Monto por artículo
mostrarPromedio.addEventListener("click", () => {
  let resultado = montoTotalPromedio.value / cantidadArticulos.value;
  resultadoPromedio.innerText = `Cada artículo te sale en ${resultado}`;
})

// Descuento
mostrarDescuento.addEventListener("click", () => { //corregir esto. tira NaN
  let resultado = (descuentoFinal / 100) * montoT;
  resultadoDescuento.innerText = `El monto a descontar es: ${resultado}`;
  console.log(resultado);
})

// Fahrenheit a Celsius
mostrarCelsius.addEventListener("click", () => {

})

// Onzas a gramos
mostrarOnzas.addEventListener("click", () => {

})