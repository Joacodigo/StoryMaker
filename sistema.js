const bienvenidaOverlay = document.getElementById("bienvenida");
const formulario = document.getElementById("formulario");
const despedidaOverlay = document.getElementById("despedida");

bienvenidaOverlay.style.display = "flex";

const okBtn = document.getElementById("okBtn");
okBtn.addEventListener("click", function() {
    bienvenidaOverlay.style.display = "none"; 
    comenzarHistoria(); 
});

okBtn.addEventListener("mouseover", function() {
    okBtn.style.backgroundColor = "green";
});

okBtn.addEventListener("mouseout", function() {
    okBtn.style.backgroundColor = "blue";
});

const comenzarBtn = document.getElementById("comenzarBtn");
comenzarBtn.addEventListener("click", comenzarHistoria);

function comenzarHistoria() {
    comenzarBtn.style.display = "none";
    formulario.style.display = "block";
}

const nombreInput = document.getElementById("nombre");
nombreInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        comenzarHistoria();
    }
});

const sexoSelect = document.getElementById("sexo");
sexoSelect.addEventListener("change", function() {
    console.log(`Has seleccionado: ${sexoSelect.value}`);
});

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    formulario.style.display = "none";
    Swal.fire({
        title: 'Generando historia',
        html: 'Por favor, espera un momento...',
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        }
    });

    const historia = obtenerDatosFormulario();

    setTimeout(function() {
        Swal.close();
        Swal.fire({
            icon: 'success',
            title: '¡Historia Generada!',
            text: 'Tu historia se ha generada correctamente',
        });
        agregarHistoria(historia);
        mostrarHistoria(historia);
        mostrarEstadisticas(historia.nombre);
        mostrarOpcionGenerarOtraHistoria();
        agregarFraseFinal(); 
    }, 3000); 
});

function obtenerDatosFormulario() {
    return {
        nombre: document.getElementById("nombre").value,
        sexo: document.getElementById("sexo").value,
        gente: document.getElementById("gente").value,
        numeroTres: parseInt(document.getElementById("numeroTres").value),
        grito: document.getElementById("grito").value,
        bicho: document.getElementById("bicho").value,
        objeto: document.getElementById("objeto").value,
        numeroUno: parseInt(document.getElementById("numeroUno").value),
        casa: document.getElementById("casa").value,
        plan: document.getElementById("plan").value,
        feo: document.getElementById("feo").value,
        lugar: document.getElementById("lugar").value,
        numeroDos: parseInt(document.getElementById("numeroDos").value)
    };
}

function agregarHistoria(historia) {
    let historiasGuardadas = JSON.parse(localStorage.getItem("historias")) || [];
    historiasGuardadas.push(historia);
    localStorage.setItem("historias", JSON.stringify(historiasGuardadas));
}

function mostrarHistoria(historia) {
    const historiaDiv = document.createElement("div");
    historiaDiv.classList.add("historia");

    const contenido = `
        <p>${historia.nombre} era ${historia.sexo === "femenino" ? "una chica" : "un chico"} re lind${historia.sexo === "femenino" ? "a" : "o"}, tan lind${historia.sexo === "femenino" ? "a" : "o"} que todos los ${historia.gente} se volvían locos por ${historia.sexo === "femenino" ? "ella" : "él"}, al punto que no ${historia.sexo === "femenino" ? "la" : "lo"} dejaban en paz ni cuando iba a ${historia.casa}. </p>
        <p>Lo que ${historia.nombre} no sabía es que esa belleza que tanto ${historia.sexo === "femenino" ? "la" : "lo"} caracterizaba, ${historia.sexo === "femenino" ? "la" : "lo"} podía poner en peligro.</p>
        <p>Una mañana, ${historia.sexo === "femenino" ? "la" : "el"} joven dejó su casa a las ${historia.numeroUno} hrs para ir a ${historia.plan} a ${historia.lugar}.</p>
        <p>Mientras ${historia.sexo === "femenino" ? "ella" : "él"} caminaba, un ${historia.bicho} ${historia.feo} ${historia.sexo === "femenino" ? "la" : "lo"} miraba desde lejos con una sonrisa inquietante.</p>
        <p>${historia.nombre}, que además de lind${historia.sexo === "femenino" ? "a" : "o"} era tremendamente violent${historia.sexo === "femenino" ? "a" : "o"}, notó la presencia del ${historia.bicho} en segundos.</p>
        <p>Así que sacó ${historia.objeto} de su mochila, y corrió hacia el acosador, dándole ${historia.numeroTres} golpes en segundos.</p>
        <p>"${historia.grito}" - gritó el ${historia.bicho} ${historia.feo} mientras ${historia.nombre} le golpeaba.</p>
        <p>Así, ${historia.sexo === "femenino" ? "la chica" : "el chico"} con notorios problemas de ira estuvo ${historia.numeroDos} horas golpeando al ${historia.bicho}.</p>
        <p>${historia.numeroUno + historia.numeroDos} hrs marcaba su reloj cuando ${historia.sexo === "femenino" ? "la chica" : "el chico"} llegó a su casa tranquilamente.</p>
       
    `;

    historiaDiv.innerHTML = contenido;

    document.getElementById("historiasGeneradas").appendChild(historiaDiv);
}

function mostrarEstadisticas(nombre) {
    let historiasGuardadas = JSON.parse(localStorage.getItem("historias")) || [];
    let historiasConNombre = historiasGuardadas.filter(historia => historia.nombre.toLowerCase() === nombre.toLowerCase());

    const estadisticasDiv = document.createElement("div");
    estadisticasDiv.innerHTML = `
        <p><strong>Estadísticas:</strong></p>
        <p>Total de historias generadas: ${historiasGuardadas.length}</p>
        <p>Historias con el nombre "${nombre}": ${historiasConNombre.length}</p>
    `;

    document.getElementById("estadisticas").innerHTML = "";
    document.getElementById("estadisticas").appendChild(estadisticasDiv);
}

function mostrarOpcionGenerarOtraHistoria() {
    const opcionDiv = document.createElement("div");
    opcionDiv.innerHTML = `
        <p>¿Quieres generar otra historia?</p>
        <button id="siBtn" class="btn">Sí</button>
        <button id="noBtn" class="btn">No</button>
    `;

    document.getElementById("opcionGenerarOtra").appendChild(opcionDiv);

    document.getElementById("siBtn").addEventListener("click", function() {
        document.getElementById("historiasGeneradas").innerHTML = ""; 
        document.getElementById("estadisticas").innerHTML = ""; 
        document.getElementById("opcionGenerarOtra").innerHTML = ""; 
        comenzarHistoria();
    });

    document.getElementById("noBtn").addEventListener("click", despedirse);
}

function despedirse() {
    despedidaOverlay.style.display = "flex"; 
    const fechaActual = new Date();
    setTimeout(function() {
        window.close(); 
    }, 3000); 
}

function agregarFraseFinal() {
    fetch("historia.json")
        .then(response => response.json())
        .then(data => {
            const finales = data.finales;
            const fraseFinal = finales[Math.floor(Math.random() * finales.length)];
            const p = document.createElement("p");
            p.textContent = fraseFinal;
            document.querySelector(".historia:last-of-type").appendChild(p);
        })
        .catch(error => console.error("Error al cargar las frases finales:", error));
}
