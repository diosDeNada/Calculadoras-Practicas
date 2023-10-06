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
  console.log(typeof resultado);
  console.log(typeof montoTotalPromedio);
  console.log(typeof montoTotalPromedio.value);
})

// Descuento
mostrarDescuento.addEventListener("click", () => {
  let resultado = (descuentoFinal.value / 100) * montoT.value;
  let montoConDescuento = montoT.value - resultado;
  resultadoDescuento.innerText = `El monto a descontar es: ${resultado}.\n El nuevo total a pagar es: ${montoConDescuento}`;
})

// Fahrenheit a Celsius
mostrarCelsius.addEventListener("click", () => {
  let resultado = (gradosFarenheit.value - 32) * (5 / 9);
  resultadoCelsius.innerText = `${gradosFarenheit.value}°F es equivalente a ${resultado}°C.`

})

// Onzas a gramos
mostrarOnzas.addEventListener("click", () => {
  let resultado = onzas.value * 28.3495;
  resultadoGramos.innerText = `${onzas.value} Oz es equivalente a ${resultado}g.`
})