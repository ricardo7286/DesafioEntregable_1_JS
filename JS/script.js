alert("Hola muy buen dia.\n\nMi nombre es Ricardo Hernandez Gomez\n\nBienvenido a la herramienta de evaluación de la Escala de Coma de Glasgow (en Inglés Glasgow Coma Scale (GCS))");// Una alerta como bienvenida

let nombre = prompt("Ingrese su nombre");// variable de nombre
  while (nombre == null || nombre == "") {// Aqui se hace una validacion de que el usuario ingrese un nombre
    nombre = prompt("Ingrese su nombre");
  }

let apellido = prompt("Ingrese su apellido");// variable de apellido
  while (apellido == null || apellido == "") {  // Aqui se hace una validacion de que el usuario ingrese un apellido
    apellido = prompt("Ingrese su apellido");
  }
alert("Saludos " + nombre + " " + apellido);// una alerta concatenando el nombre y apellido

let aNacimineto = parseInt(prompt("Ingrese su año de nacimiento"));// variable de año de nacimiento
  while (aNacimineto == null || isNaN(aNacimineto) || aNacimineto < 1900 || aNacimineto >= new Date().getFullYear()) {// Aqui se hace una validacion de que el usuario ingrese un numero entre 1900 y el anio actual
    aNacimineto = parseInt(prompt("Ingrese su año de nacimiento"));// variable de año de nacimiento
  }

edad();

function edad() {
    let aActual = new Date().getFullYear();// Esto lo copie y pegue de internet 🤣 y lo que hace es obtener el anio actual para poder hacer la validacion de que el usuario sea mayor de edad
    let edad = aActual - aNacimineto;// el resultado es el anio actual menos el anio de nacimiento
    if (edad < 18) {
        alert("Opss usted es menor de edad. No puede ingresar a esta herramienta");// alerta de menor de edad y redireccionamiento a la pagina de Disney
        alert("Gracias por su visita");
        window.location.href = "https://disneylatino.com/"; // esto lo copie y pegue de internet 🤣 y lo que hace es redireccionar al usuario a la pagina de Disney.  Tambien pudieramos usar el metodo window.open() para que el usuario pueda ver la pagina externa en una nueva ventana
    }
    else {
        alert("Usted es mayor de edad puede continuar");// Alerta de mayoria de edad en Mexico 18 anios
        alert("La Escala de Coma de Glasgow (en Inglés Glasgow Coma Scale (GCS)) es una escala de aplicación neurológica que permite medir el nivel de conciencia de una persona. Una exploración neurológica de un paciente con traumatismo craneoencefálico debe ser simple, objetiva y rápida. La evaluación del nivel de conciencia es el parámetro más importante que debe tenerse en cuenta.");
        paciente();// Aqui es donde se llama a la funcion paciente en caso que de acuerdo a la edad sea mayor de edad
    }
  }


function paciente(){// Funcion paciente donde se elige si es un paciente adulto o un lactante
  let opcion;
    do{
    opcion = parseInt(prompt("Ingrese un tipo de paciente:\n1. Adulto y/o Pediatrico\n2. Lactante"));
    } while (opcion != 1 && opcion != 2);// Aqui se hace una validacion de que el usuario ingrese un numero entre 1 y 2
    if (opcion == 1) {
    adulto();// Aqui se llama a la funcion adulto
    }
   if (opcion == 2) {
    lactante();// Aqui se llama a la funcion lactante
    }
  }

function adulto() {// aqui los prompts de adulto de acuerdo a los parametros para un tipo de paciente adulto o pediatrico
  let ojos = parseInt(prompt("Valore la Respuesta Ocular:\n 4. Espontanea\n 3. A estimulos verbales\n 2. Al dolor\n 1. Ausencia de respuesta"));
  let verbal = parseInt(prompt("Valore la Respuesta Verbal:\n 5. Orientado\n 4. Desorientado/Confuso\n 3. Incoherente\n 2. Sonidos incomprensibles\n 1. Ausencia de respuesta"));
  let motor = parseInt(prompt("Valore la Respuesta Motora:\n 6. Obedece ordenes\n 5. Localiza el dolor\n 4. Retira al dolor\n 3. Flexion anormal\n 2. Extension anormal\n 1. Ausencia de respuesta"));
  
  total = 0;// Aqui se inicializa la variable total
  total1 = 0;// Aqui se inicializa la variable total1
  total2 = 0;// Aqui se inicializa la variable total2
  total3 = 0;// Aqui se inicializa la variable total3

  if (motor == 6) {// Aqui se hace una validacion de que el usuario ingrese un numero entre 1 y 6
    total += 6; // Aqui se suma el numero 6 a la variable total
    total1 += 1;  // Aqui se suma el numero 1 a la variable total1
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
  if (verbal == 5) { // Aqui se hace una validacion de que el usuario ingrese un numero entre 1 y 5
    total += 5;   // Aqui se suma el numero 5 a la variable total
    total2 += 1; // Aqui se suma el numero 1 a la variable total2
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
  if (ojos == 4) {  // Aqui se hace una validacion de que el usuario ingrese un numero entre 1 y 4
    total += 4;   // Aqui se suma el numero 4 a la variable total
    total3 += 1;  // Aqui se suma el numero 1 a la variable total3
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
  if (total1 == 0 || total2 == 0 || total3 == 0) { // Aqui se hace una validacion de que el usuario ingrese un numero erroneo
    alert("Opss los parametros que ingresaste no son los correctos");
    }
  else {
    alert("El puntaje en la escala de Coma de Glasgow es: " + total); // Aqui se muestra el puntaje final
    if (total < 5) { // Aqui se hace una validacion de que el puntaje final sea menor a 5
      alert("Tu puntaje al ser " + total + "\n\nEl paciente adulto y/o pediatrico se encuentra en un estado de:\n\nComa profundo (85% de probabilidad de muerte o estado vegetativo)");
      salida();
    }
    else {
      if (total < 11) { // Aqui se hace una validacion en caso de un puntaje menor que 11
        alert("Tu puntaje al ser " + total + "\n\nEl paciente adulto y/o pediatrico se encuentra en un estado de:\n\nComa intermedio (más profundo cuanto menor el resultado)");
        salida();
      }
      else {
		if (total < 15) {   // Aqui se hace una validacion en caso de un puntaje menor que 15
			alert("Tu puntaje al ser " + total + "\n\nEl paciente adulto y/o pediatrico se encuentra en un estado de:\n\nComa superficial, estupor, obnubilación, desorientación ... normalidad");
      salida();
		}
		else {  // Aqui se hace una validacion en caso de un puntaje = que 15
			alert("Tu puntaje al ser " + total + "\n\nEl paciente adulto y/o pediatrico se encuentra en un estado de:\n\nNormalidad");
      salida();
		}
      }
    }
  }
  }

  function lactante() {// Aqui los prompts de lactante de acuerdo a los parametros para un tipo de paciente lactante ya que son diferentes a los de adulto
    let ojos = parseInt(prompt("Valore la Respuesta Ocular:\n 4. Espontanea\n 3. A estimulos verbales\n 2. Al dolor\n 1. Ausencia de respuesta"));
    let verbal = parseInt(prompt("Valore la Respuesta Verbal:\n 5. Balbuceo\n 4. Llanto irritable controlable\n 3. Llanto al dolor\n 2. Quejidos al dolor\n 1. Ausencia de respuesta"));
    let motor = parseInt(prompt("Valore la Respuesta Motora:\n 6. Movimientos espontaneos\n 5. retirada al tocar\n 4. Retira al dolor\n 3. Flexion anormal\n 2. Extension anormal\n 1. Ausencia de respuesta"));

  total = 0;// Aqui se hace una variable total para que se pueda sumar los puntos de cada parametro
  total1 = 0;// Aqui se hace una variable total1 para que se pueda sumar los puntos de cada parametro
  total2 = 0;// Aqui se hace una variable total2 para que se pueda sumar los puntos de cada parametro
  total3 = 0;// Aqui se hace una variable total3 para que se pueda sumar los puntos de cada parametro

  if (motor == 6) { // Aqui se hace una validacion de que el usuario ingrese un numero entre 1 y 6
    total += 6; // Aqui se suma el numero 6 a la variable total
    total1 += 1;  // Aqui se suma el numero 1 a la variable total1
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
  if (verbal == 5) {  // Aqui se hace una validacion de que el usuario ingrese un numero entre 1 y 5
    total += 5;  // Aqui se suma el numero 5 a la variable total
    total2 += 1;  // Aqui se suma el numero 1 a la variable total2
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
  if (ojos == 4) {  // Aqui se hace una validacion de que el usuario ingrese un numero entre 1 y 4
    total += 4;    // Aqui se suma el numero 4 a la variable total
    total3 += 1; // Aqui se suma el numero 1 a la variable total3
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
  if (total1 == 0 || total2 == 0 || total3 == 0) { // Aqui se hace una validacion de que el usuario ingrese un numero erroneo
    alert("Opss los parametros que ingresaste no son los correctos");
    }
  else { // Aqui se muestra el puntaje final  
    alert("El puntaje en la escala de Coma de Glasgow es: " + total);
    if (total < 5) { // Aqui se hace una validacion de que el puntaje final sea menor a 5
      alert("Tu puntaje al ser " + total + "\n\nEl lactante se encuentra en un estado de:\n\nComa profundo (85% de probabilidad de muerte o estado vegetativo)");
      salida();
    }
    else {
      if (total < 11) { // Aqui se hace una validacion en caso de un puntaje menor que 11
        alert("Tu puntaje al ser " + total + "\n\nEl lactante se encuentra en un estado de:\n\nComa intermedio (más profundo cuanto menor el resultado)");
        salida();
      }
      else {
		if (total < 15) {   // Aqui se hace una validacion en caso de un puntaje menor que 15
			alert("Tu puntaje al ser " + total + "\n\nEl lactante se encuentra en un estado de:\n\nComa superficial, estupor, obnubilación, desorientación ... normalidad");
      salida();
		}
		else { // Aqui se hace una validacion en caso de un puntaje = que 15
			alert("Tu puntaje al ser " + total + "\n\nEl lactante se encuentra en un estado de:\n\nNormalidad");
      salida();
		}
      }
    }
  }
  }
  

  function salida() { // Aqui se hace una funcion para que el usuario pueda salir del programa
    if (confirm("Excelente " + nombre + " " + apellido + "\n\nAcabas de valorar correctamente a tu paciente\n\nSi deseas valorar un nuevo paciente haz clic en Aceptar\n\nSi deseas obtener mas informacion haz clic Cancelar y seras redireccionado a una pagina externa")) { // Aqui se hace una validacion de que el usuario desee obtener mas informacion
      paciente(); // Aqui se llama a la funcion paciente
    } else {  // Aqui se hace una validacion de que el usuario no desee obtener mas informacion
        window.location.href = "https://www.glasgowcomascale.org/"; // Aqui se hace una redireccion al usuario a la pagina web. Tambien pudieramos usar el metodo window.open() para que el usuario pueda ver la pagina externa en una nueva ventana
    }
  }