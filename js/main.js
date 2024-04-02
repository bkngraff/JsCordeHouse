function llenarNombre() {

  var nombre = document.getElementById('nombre-alumno').value;

  document.getElementById('nombre-alumno-resultado').innerHTML = nombre;
}

function calcularPromedio() {
  var nota1 = parseFloat(document.getElementById("nota-parcial1").value);
  var nota2 = parseFloat(document.getElementById("nota-parcial2").value);
  var notaFinal = parseFloat(document.getElementById("nota-examen-final").value);

  var promedio = ((nota1 + nota2 + notaFinal) / 3);

  return promedio;
}

function llenarPromedio(promedio) {
  document.getElementById('nota-final').innerHTML = promedio.toFixed(2);
}

function confirmar() {

  var promedio = calcularPromedio();
  llenarPromedio(promedio)

  var elementoEstado = document.getElementById('estado');

  if (promedio >= 7) {
    elementoEstado.innerHTML = 'Aprobado';
    elementoEstado.style = 'color: green';
  } else {
    elementoEstado.innerHTML = 'Desaprobado';
    elementoEstado.style = 'color: red';
  }
  llenarNombre();
};