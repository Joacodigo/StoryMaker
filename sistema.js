

alert("Bienvenido al sistema de creación de historias");

let permiso = prompt("¿Quieres crear tu propia historia corta?");

const suma = function (a, b) {
  return a + b;
};


const historiasGeneradas = [];

while (permiso !== "ESC") {
  switch (permiso) {
    case "si":
      alert(`Empecemos`);

      alert(`Responde la siguiente serie de preguntas, en minúscula por favor`);

      let historia = {}; 

      historia.nombre = prompt("Ingrese un nombre");
      historia.sexo = prompt("¿Este nombre es femenino o masculino?");
      historia.gente = prompt("Ingrese un gentilicio en plural (ejemplo, franceses)");
      historia.numeroTres = Number(prompt("Ingrese un año donde ocurrió un acontecimiento importante para la humanidad"));
      historia.grito = prompt("Escribe lo que dirías si un payaso te asusta de repente");
      historia.bicho = prompt("Escribe un animal con nombre masculino (ejemplo, mono)");
      historia.objeto = prompt("Ingrese un objeto con artículo incluido (ejemplo, un reloj)");
      historia.numeroUno = Number(prompt("Cantidad aproximada de empanadas que compras cuando tienes mucha hambre"));
      historia.casa = prompt("Ingrese una parte de tu casa con artículo (ejemplo, la cocina)");
      historia.plan = prompt("Ingrese un plan que sueles hacer con tus amigos");
      historia.feo = prompt("Escribe un adjetivo");
      historia.lugar = prompt("Ingrese un lugar donde no irías nunca de vacaciones");
      historia.numeroDos = Number(prompt("Ingrese las horas que te llevaría cocinar una pizza desde cero"));

      alert(`Cargando datos al servidor...`);
      alert(`Tu historia se ha generado correctamente`);

     
      historiasGeneradas.push(historia);

      historiasGeneradas.filter((h) => h.sexo === "femenino").forEach((historiaFemenina) => {
       
      });

      const nombreABuscar = prompt("Ingrese un nombre para buscar en las historias generadas");
      const historiasConNombre = historiasGeneradas.filter((h) => h.nombre.toLowerCase() === nombreABuscar.toLowerCase());

      alert(`Estadísticas:
        - Total de historias generadas: ${historiasGeneradas.length}
        - Historias con el nombre "${nombreABuscar}": ${historiasConNombre.length}`);


        alert(`Su historia personalizada está lista para leerse`);

      
      switch (historia.sexo) {
        case "femenino":
          alert(`${historia.nombre} era una chica re linda, tan linda que todos los ${historia.gente} se volvían locos por ella, al punto que no la dejaban en paz ni cuando iba a ${historia.casa}`);

          alert(`Lo que ${historia.nombre} no sabía es que esa belleza que tanto la caracterizaba, la podía poner en peligro.`);

          alert(`Una mañana, la joven dejó su casa a las ${historia.numeroUno} hrs para ir a ${historia.plan} a ${historia.lugar}.`);

          alert(`Mientras ella caminaba, un ${historia.bicho} ${historia.feo} la miraba desde lejos con una sonrisa inquietante.`);

          alert(`${historia.nombre}, que además de linda era tremendamente violenta, notó la presencia del ${historia.bicho} en segundos.`);

          alert(`Así que sacó ${historia.objeto} de su mochila, y corrió hacia el acosador, dándole ${historia.numeroTres} golpes en segundos.`);

          alert(`"${historia.grito}"- gritó el ${historia.bicho} ${historia.feo} mientras ${historia.nombre} le golpeaba.`);

          alert(`Así, la chica con notorios problemas de ira estuvo ${historia.numeroDos} horas golpeando al ${historia.bicho}.`);

          alert(suma(suma(historia.numeroUno, historia.numeroDos), " hrs marcaba su reloj cuando la chica llegó a su casa tranquilamente."));

          alert(`Fin `);
          break;

        case "masculino":
          alert(`${historia.nombre} era un chico re lindo, tan lindo que todos los ${historia.gente} se volvían locos por él, al punto que no lo dejaban en paz ni cuando iba a ${historia.casa}`);

          alert(`Lo que ${historia.nombre} no sabía es que esa belleza que tanto lo caracterizaba, lo podía poner en peligro.`);

          alert(`Una mañana, el joven dejó su casa a las ${historia.numeroUno} hrs para ir a ${historia.plan} a ${historia.lugar}.`);

          alert(`Mientras él caminaba, un ${historia.bicho} ${historia.feo} lo miraba desde lejos con una sonrisa inquietante.`);

          alert(`${historia.nombre}, que además de lindo era tremendamente violento, notó la presencia del ${historia.bicho} en segundos.`);

          alert(`Así que sacó ${historia.objeto} de su mochila, y corrió hacia el acosador, dándole ${historia.numeroTres} golpes en segundos.`);

          alert(`"${historia.grito}"- gritó el ${historia.bicho} ${historia.feo} mientras ${historia.nombre} le golpeaba.`);

          alert(`Así, el chico con notorios problemas de ira estuvo ${historia.numeroDos} horas golpeando al ${historia.bicho}.`);

          alert(suma(suma(historia.numeroUno, historia.numeroDos), " hrs marcaba su reloj cuando el chico llegó a su casa tranquilamente."));

          alert(`Fin `);
          break;

        default:
          alert("Se ha ingresado una respuesta inválida, inténtelo nuevamente. Revise ortografía y mayúsculas e inténtelo nuevamente");
          break;
      }
      break;

    case "no":
      alert(`Entonces, no entiendo por qué entraste al sistema de creación de historias cortas si no quieres crear una. Vete por favor.`);
      break;

    case "no se":
      alert(`Decídete por favor y regresa si la respuesta es positiva.`);
      break;

    default:
      alert(`No lo entiendo, inténtalo nuevamente.`);
      break;
  }

  permiso = prompt("¿Quieres crear otra historia corta o escribir 'ESC' para salir?");
}

const fechaActual = new Date();
alert(`Hasta pronto. Fecha actual: ${fechaActual}`);