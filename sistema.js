


alert("bienvenido al sistema de creacion de historias")

let permiso = prompt("quiere crear su propia historia corta?")

const suma = function (a,b)
{return a + b}

while(permiso != "ESC"){
    switch (permiso) {


        
        case "si":
            alert(`Empecemos`);

            alert(`responda la siguiente serie de preguntas, en minúscula por favor`);

            

            let nombre = prompt("Ingrese un nombre")
            let sexo = prompt("ese nombre es femenino o masculino?")
            let gente = prompt("ingrese un gentilicio en plural (ejemplo,franceses)")
            let numeroTres = Number( prompt("ingrese un año donde ocurrio un acontecimienot importante para la humanidad")  )
            let grito = prompt("escribe lo que dirias si un payaso te asusta derrepente")
            let bicho = prompt("escribe un animal con nombre masculino (ejemplo, monO)")
            let objeto = prompt("ingrese un objeto con artículo incluido, (ejemplo,UN reloj) ")
            let numeroUno = Number( prompt("cantidad aproximada de empanadas que compras cuando tenes mucha hambre")  )
            let casa = prompt("ingrese una parte de tu casa con articulo, (ejemplo, LA cocina)")
            let plan = prompt("ingrese un plan que sueles hacer con tus amigos")
            let feo = prompt("escribe un adjetivo")
            let lugar = prompt("ingrese un lugar donde no irias nunca de vacaciones")
            let numeroDos = Number( prompt("ingrese las horas que te llevaria cocinar una pizza desde cero")  )
           

            alert (`cargando datos al servidor...`)
            alert (`su historia se ha generado correctamente`)
            

            while(sexo != "ESC"){
                switch (sexo) {
                    
                
                    case "femenino":
                        alert(`${nombre} era una chica re linda, tan linda que todos los ${gente} se volvian locos por ella, al punto que no la dejaban en paz ni cuando iba a ${casa}`);


                        alert(`lo que ${nombre} no sabía es que esa belleza que tanto la caracterizaba, la podia poner en peligro `);

                        alert(`una mañana, la joven dejo su casa a las ${numeroUno} hrs para ir a ${plan} a ${lugar}`);

                        alert(`mientras ella caminaba, un ${bicho} ${feo} la miraba desde lejos con una sonrisa inquietante `);

                        alert(`${nombre}, que ademas de linda era tremendamente violenta notó la presencia del ${bicho} en segundos `);

                        alert(`así que sacó  ${objeto} de su mochila, y corrió hacia el acosador,dandole ${numeroTres} golpes en segundos `);

                        alert(` "${grito}"- gritó el ${bicho} ${feo} mientras ${nombre} le golpeaba `);

                        alert(`así, la chica con notorios problemas de ira estuvo ${numeroDos} horas golpeando al ${bicho}  `);


                       
                        alert (suma (suma (numeroUno, numeroDos)," hrs marcaba su reloj cuando la chica llego a su casa tranquilamente" ))


                        alert(`Fin `);

                        break;
                    case "masculino":
                        alert(`${nombre} era un chico re lindo, tan lindo que todos los ${gente} se volvian locos por el, al punto que no lo dejaban en paz ni cuando iba a ${casa}`);


                        alert(`lo que ${nombre} no sabía es que esa belleza que tanto lo caracterizaba, lo podia poner en peligro `);

                        alert(`una mañana, el joven dejo su casa a las ${numeroUno} hrs para ir a ${plan} a ${lugar}`);

                        alert(`mientras el caminaba, un ${bicho} ${feo} lo miraba desde lejos con una sonrisa inquietante `);

                        alert(`${nombre}, que ademas de lindo era tremendamente violento notó la presencia del ${bicho} en segundos `);

                        alert(`así que sacó  ${objeto} de su mochila, y corrió hacia el acosador,dandole ${numeroTres} golpes en segundos `);

                        alert(` "${grito}"- gritó el ${bicho} ${feo} mientras ${nombre} le golpeaba `);

                        alert(`así, el chico con notorios problemas de ira estuvo ${numeroDos} horas golpeando al ${bicho}  `);


                       
                        alert (suma (suma (numeroUno, numeroDos)," hrs marcaba su reloj cuando el chico llego a su casa tranquilamente" ))



                        alert(`Fin `);

                        break;
                        default:
                            alert("se ha ingresado una respuesta invalida, intente nuevamente, revise ortografia y mayusculas e intente nuevamente")
                        break;
                }
                break;
            }
            





            break;
        case "no":
            alert(`entonces no se para que entras a un sistema de creacion de historias cortas si no queres crear una historia corta la verdad`);
            alert(`vayase por favor`)
            break;
        case "no se":
            alert(`decidase por favor y regrese si la respuesta es positiva`);
            break;
            default:
                alert(`no lo entiendo, intente nuevamente`);
            break;
    }
    break;
}





alert("Hasta Pronto")

