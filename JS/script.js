alert("Bienvenido a la herramienta de evaluación de la Escala de Coma de Glasgow (en Inglés Glasgow Coma Scale (GCS))");
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
alert("Bienvenido " + nombre + " " + apellido);

let aNacimineto = prompt("Ingrese su año de nacimiento");

edad();

function edad() {
    let aActual = new Date().getFullYear();// Esto lo copie y pegue de internet 🤣
    let edad = aActual - aNacimineto;
    if (edad < 18) {
        alert("Opss usted es menor de edad. No puede ingresar a esta herramienta");
        alert("Gracias por su visita");
        window.location.href = "https://disneylatino.com/";
    }
    else {
        alert("Usted es mayor de edad puede continuar");
        alert("La Escala de Coma de Glasgow (en Inglés Glasgow Coma Scale (GCS)) es una escala de aplicación neurológica que permite medir el nivel de conciencia de una persona. Una exploración neurológica de un paciente con traumatismo craneoencefálico debe ser simple, objetiva y rápida. La evaluación del nivel de conciencia es el parámetro más importante que debe tenerse en cuenta.");
        paciente();
    }
}


function paciente(){
  let opcion;
  do{
    opcion = parseInt(prompt("Ingrese un tipo de paciente:\n1. Adulto y/o Pediatrico\n2. Lactante"));
  } while (opcion != 1 && opcion != 2);
  if (opcion == 1) {
    adulto();
  }
  if (opcion == 2) {
    lactante();
  }
}

function adulto() {
  let ojos = parseInt(prompt("Valore la Respuesta Ocular:\n 4. Espontanea\n 3. A estimulos verbales\n 2. Al dolor\n 1. Ausencia de respuesta"));
  let verbal = parseInt(prompt("Valore la Respuesta Verbal:\n 5. Orientado\n 4. Desorientado/Confuso\n 3. Incoherente\n 2. Sonidos incomprensibles\n 1. Ausencia de respuesta"));
  let motor = parseInt(prompt("Valore la Respuesta Motora:\n 6. Obedece ordenes\n 5. Localiza el dolor\n 4. Retira al dolor\n 3. Flexion anormal\n 2. Extension anormal\n 1. Ausencia de respuesta"));
  
  total = 0;
  total1 = 0;
  total2 = 0;
  total3 = 0;

  if (motor == 6) {
    total += 6;
    total1 += 1;
  }
  if (motor == 5) {
    total += 5;
    total1 += 1;
  }
  if (motor == 4) {
    total += 4;
    total1 += 1;
  }
  if (motor == 3) {
    total += 3;
    total1 += 1;
  }
  if (motor == 2) {
    total += 2;
    total1 += 1;
  }
  if (motor == 1) {
    total += 1;
    total1 += 1;
  }
  if (verbal == 5) {
    total += 5;
    total2 += 1;
  }
  if (verbal == 4) {
    total += 4;
    total2 += 1;
  }
  if (verbal == 3) {
    total += 3;
    total2 += 1;
  }
  if (verbal == 2) {
    total += 2;
    total2 += 1;
  }
  if (verbal == 1) {
    total += 1;
    total2 += 1;
  }
  if (ojos == 4) {
    total += 4;
    total3 += 1;
  }
  if (ojos == 3) {
    total += 3;
    total3 += 1;
  }
  if (ojos == 2) {
    total += 2;
    total3 += 1;
  }
  if (ojos == 1) {
    total += 1;
    total3 += 1;
  }
  if (total1 == 0 || total2 == 0 || total3 == 0) {
    alert("Opss los parametros que ingresaste no son los correctos");
    }
  else {
    alert("El puntaje en la escala de Coma de Glasgow es: " + total);
    if (total < 5) {
      alert("Tu puntaje al ser " + total + " \nEl paciente adulto y/o pediatrico se encuentra en un estado de:\nComa profundo (85% de probabilidad de muerte o estado vegetativo)");
    }
    else {
      if (total < 11) {
        alert("Tu puntaje al ser " + total + " \nEl paciente adulto y/o pediatrico se encuentra en un estado de:\nComa intermedio (más profundo cuanto menor el resultado)");
      }
      else {
		if (total < 15) {
			alert("Tu puntaje al ser " + total + " \nEl paciente adulto y/o pediatrico se encuentra en un estado de:\nComa superficial, estupor, obnubilación, desorientación ... normalidad");
		}
		else {
			alert("Tu puntaje al ser " + total + " \nEl paciente adulto y/o pediatrico se encuentra en un estado de:\nNormalidad");
		}
      }
    }
  }
  }

  function lactante() {
    let ojos = parseInt(prompt("Valore la Respuesta Ocular:\n 4. Espontanea\n 3. A estimulos verbales\n 2. Al dolor\n 1. Ausencia de respuesta"));
    let verbal = parseInt(prompt("Valore la Respuesta Verbal:\n 5. Balbuceo\n 4. Llanto irritable controlable\n 3. Llanto al dolor\n 2. Quejidos al dolor\n 1. Ausencia de respuesta"));
    let motor = parseInt(prompt("Valore la Respuesta Motora:\n 6. Movimientos espontaneos\n 5. retirada al tocar\n 4. Retira al dolor\n 3. Flexion anormal\n 2. Extension anormal\n 1. Ausencia de respuesta"));
  total = 0;
  total1 = 0;
  total2 = 0;
  total3 = 0;

  if (motor == 6) {
    total += 6;
    total1 += 1;
  }
  if (motor == 5) {
    total += 5;
    total1 += 1;
  }
  if (motor == 4) {
    total += 4;
    total1 += 1;
  }
  if (motor == 3) {
    total += 3;
    total1 += 1;
  }
  if (motor == 2) {
    total += 2;
    total1 += 1;
  }
  if (motor == 1) {
    total += 1;
    total1 += 1;
  }
  if (verbal == 5) {
    total += 5;
    total2 += 1;
  }
  if (verbal == 4) {
    total += 4;
    total2 += 1;
  }
  if (verbal == 3) {
    total += 3;
    total2 += 1;
  }
  if (verbal == 2) {
    total += 2;
    total2 += 1;
  }
  if (verbal == 1) {
    total += 1;
    total2 += 1;
  }
  if (ojos == 4) {
    total += 4;
    total3 += 1;
  }
  if (ojos == 3) {
    total += 3;
    total3 += 1;
  }
  if (ojos == 2) {
    total += 2;
    total3 += 1;
  }
  if (ojos == 1) {
    total += 1;
    total3 += 1;
  }
  if (total1 == 0 || total2 == 0 || total3 == 0) {
    alert("Opss los parametros que ingresaste no son los correctos");
    }
  else {
    alert("El puntaje en la escala de Coma de Glasgow es: " + total);
    if (total < 5) {
      alert("Tu puntaje al ser " + total + " \nEl lactante se encuentra en un estado de:\nComa profundo (85% de probabilidad de muerte o estado vegetativo)");
    }
    else {
      if (total < 11) {
        alert("Tu puntaje al ser " + total + " \nEl lactante se encuentra en un estado de:\nComa intermedio (más profundo cuanto menor el resultado)");
      }
      else {
		if (total < 15) {
			alert("Tu puntaje al ser " + total + " \nEl lactante se encuentra en un estado de:\nComa superficial, estupor, obnubilación, desorientación ... normalidad");
		}
		else {
			alert("Tu puntaje al ser " + total + " \nEl lactante se encuentra en un estado de:\nNormalidad");
		}
      }
    }
  }
  }
