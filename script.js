// Variables globales
let fondos = {}; // Ahora será un objeto con ligas y competiciones como claves y arrays de fondos como valores
let escudos = {
    "Premier": [
        "escudos/Premier/newcastle.png",
        "escudos/Premier/westham.png",
        "escudos/Premier/Arsenal.webp",
        "escudos/Premier/AstonVilla.webp"
    ],
    "LaLiga": [
        "escudos/LaLiga/RealMadrid.webp",
        "escudos/LaLiga/AtleticoMadrid.webp"
    ],
    "SerieA": [],
    "Bundesliga": [
        "escudos/Bundeliga/BorussiaDortmund.webp"
    ],
    "LeagueOne": [
        "escudos/LeagueOne/Lille.webp"
    ],
    "LigaMX": [],
    "LigaNacional": [],
    "ChampionsLeague": [
        "escudos/ChampionsLeague/BorussiaDortmund.webp",
        "escudos/ChampionsLeague/Lille.webp",
        "escudos/ChampionsLeague/PSV.webp",
        "escudos/ChampionsLeague/ClubBrujas.webp"
    ],
    "EuropaLeague": [],
    "Concacaf": [],
    "Libertadores": []
}; // Organizamos los escudos por liga/competición
let logosLiga = [];
let fondoActual = null;
let formatoActual = 1; // Por defecto, 1 enfrentamiento
let ligaActual = ""; // Para guardar la liga o competición seleccionada actualmente
let imagenGenerada = null; // Para guardar la imagen generada
let soportaWebP = true; // Valor por defecto antes de comprobación

// Función para inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    // Verificar soporte de WebP
    verificarSoporteWebP();
    
    // Inicializar estructura de fondos por liga y competición
    fondos = {
        // Ligas
        "Premier": [],
        "LaLiga": [],
        "SerieA": ["backgrounds/SerieA/Bg_SerieA.png"],
        "Bundesliga": [],
        "LeagueOne": [],
        "LigaMX": ["backgrounds/LigaMX/Bg_LigaMX.png"],
        "LigaNacional": [],
        
        // Competiciones
        "ChampionsLeague": [
            "backgrounds/ChampionsLeague/Bg_Champions.png",
            "backgrounds/ChampionsLeague/Bg_Champions02.webp",
            "backgrounds/ChampionsLeague/Bg_Champions03.webp",
            "backgrounds/ChampionsLeague/Bg_Champions04.webp"
        ],
        "EuropaLeague": [],
        "Concacaf": [],
        "Libertadores": []
    };
    
    // Cargar los logos de liga directamente
    logosLiga = [
        'logosliga/Laliga.webp',
        'logosliga/Premier.webp',
        'logosliga/ChampionsLeague.webp'
    ];
    
    // Inicializar los selectores con los valores cargados
    inicializarSelectores();
    
    // Inicializar la fecha actual
    actualizarFecha();
    
    // Inicializar la hora del partido
    const horaPartidoInput = document.getElementById('hora-partido-input');
    actualizarHoraPartido(horaPartidoInput.value);
    
    // Inicializar la hora del partido (Evento 2)
    const horaPartidoInput2 = document.getElementById('hora-partido-input-2');
    actualizarHoraPartidoEvento2(horaPartidoInput2.value);
    
    // Inicializar nombres en el banner del partido
    inicializarNombresBanner();
    
    // Configurar listeners de eventos
    configurarEventos();
    
    // Precargar todos los escudos para mejor rendimiento
    precargarEscudos();
    
    // Seleccionar un fondo aleatorio inicial (sin liga seleccionada)
    seleccionarFondoAleatorio();
});

// Función para verificar soporte de formato WebP
function verificarSoporteWebP(mostrarNotif = false) {
    // Si ya se ha comprobado, no volver a hacerlo
    if (window.webpComprobado) return soportaWebP;
    
    const img = new Image();
    img.onload = function() {
        soportaWebP = (img.width > 0) && (img.height > 0);
        window.webpComprobado = true;
        
        if (!soportaWebP && mostrarNotif) {
            mostrarNotificacion("Tu navegador puede tener problemas con imágenes WebP. Algunas imágenes podrían no mostrarse correctamente.", "warning");
        }
    };
    img.onerror = function() {
        soportaWebP = false;
        window.webpComprobado = true;
        
        if (mostrarNotif) {
            mostrarNotificacion("Tu navegador no soporta imágenes WebP. Algunas imágenes podrían no mostrarse correctamente.", "warning");
        }
    };
    img.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
    
    return soportaWebP;
}

// Función para precargar todos los escudos
function precargarEscudos() {
    const escudosAPrecargar = [];
    
    // Recopilar todas las rutas de escudos
    for (const liga in escudos) {
        if (escudos[liga] && escudos[liga].length > 0) {
            escudosAPrecargar.push(...escudos[liga]);
        }
    }
    
    // Precargar cada imagen
    escudosAPrecargar.forEach(ruta => {
        const img = new Image();
        img.src = ruta;
    });
    
    console.log(`Precargando ${escudosAPrecargar.length} escudos...`);
}

// Función para inicializar los selectores
function inicializarSelectores() {
    // Selector de formato
    const formatoSelector = document.getElementById('formato-selector');
    formatoSelector.value = formatoActual.toString();
    
    // Selector de ligas y competiciones
    const ligaSelect = document.getElementById('liga-selector');
    ligaSelect.innerHTML = '<option value="">Seleccionar...</option>';
    
    // Sección de ligas
    const optgroupLigas = document.createElement('optgroup');
    optgroupLigas.label = "Ligas";
    
    // Sección de competiciones
    const optgroupCompeticiones = document.createElement('optgroup');
    optgroupCompeticiones.label = "Competiciones";
    
    // Añadimos las opciones organizadas en grupos
    for (const liga in fondos) {
        const option = document.createElement('option');
        option.value = liga;
        option.textContent = formatearNombreLiga(liga);
        
        // Determinar si es una liga o competición
        if (["ChampionsLeague", "EuropaLeague", "Concacaf", "Libertadores"].includes(liga)) {
            optgroupCompeticiones.appendChild(option);
        } else {
            optgroupLigas.appendChild(option);
        }
    }
    
    // Añadir los grupos al selector
    ligaSelect.appendChild(optgroupLigas);
    ligaSelect.appendChild(optgroupCompeticiones);
    
    // Selectores de escudos (actualmente sin opciones)
    const escudo1Select = document.getElementById('escudo1-selector');
    const escudo2Select = document.getElementById('escudo2-selector');
    
    escudo1Select.innerHTML = '<option value="">Seleccionar...</option>';
    escudo2Select.innerHTML = '<option value="">Seleccionar...</option>';
    
    // Cuando se agreguen escudos, se añadirán aquí
}

// Función para formatear el nombre de la liga o competición para mostrar
function formatearNombreLiga(liga) {
    // Mapear los IDs a nombres más amigables para mostrar
    const nombresFormateados = {
        "ChampionsLeague": "Champions League",
        "EuropaLeague": "Europa League",
        "Concacaf": "CONCACAF",
        "Libertadores": "Conmebol Libertadores",
        "LigaMX": "Liga MX",
        "LigaNacional": "Liga Nacional",
        "LeagueOne": "League One"
    };
    
    return nombresFormateados[liga] || liga;
}

// Función para seleccionar un fondo aleatorio basado en la liga seleccionada
function seleccionarFondoAleatorio() {
    // Si tenemos una liga seleccionada, usamos fondos de esa liga
    if (ligaActual && fondos[ligaActual] && fondos[ligaActual].length > 0) {
        const fondosLiga = fondos[ligaActual];
        const indiceAleatorio = Math.floor(Math.random() * fondosLiga.length);
        fondoActual = fondosLiga[indiceAleatorio];
    } else {
        // Si no hay liga seleccionada o no hay fondos para esa liga,
        // seleccionamos un fondo aleatorio de cualquier liga que tenga fondos
        let todasLasRutas = [];
        for (const liga in fondos) {
            if (fondos[liga].length > 0) {
                todasLasRutas = todasLasRutas.concat(fondos[liga]);
            }
        }
        
        if (todasLasRutas.length > 0) {
            const indiceAleatorio = Math.floor(Math.random() * todasLasRutas.length);
            fondoActual = todasLasRutas[indiceAleatorio];
        } else {
            // Si no hay fondos disponibles, mostramos un mensaje
            mostrarNotificacion("No hay fondos disponibles para mostrar", "warning");
            return;
        }
    }
    
    // Actualizamos el fondo en el DOM
    const backgroundContainer = document.querySelector('.background-container');
    backgroundContainer.innerHTML = '';
    
    const imgFondo = document.createElement('img');
    imgFondo.src = fondoActual;
    imgFondo.alt = 'Fondo';
    backgroundContainer.appendChild(imgFondo);
    
    // Muestra una notificación sobre el fondo seleccionado
    const nombreFondo = fondoActual.split('/').pop().replace(/\.[^/.]+$/, "");
    
    if (ligaActual) {
        mostrarNotificacion(`Fondo "${nombreFondo}" de ${formatearNombreLiga(ligaActual)} cargado correctamente`, 'success');
    } else {
        mostrarNotificacion(`Fondo "${nombreFondo}" cargado correctamente`, 'success');
    }
}

// Función para cambiar el formato de la maquetación
function cambiarFormato(formato) {
    formatoActual = parseInt(formato);
    
    // Mostrar/ocultar las pestañas de eventos según el formato
    const eventoTabs = document.querySelector('.evento-tabs');
    if (formatoActual > 1) {
        eventoTabs.style.display = 'block';
    } else {
        eventoTabs.style.display = 'none';
        // Al volver al formato 1, mostrar siempre el evento 1
        cambiarEventoActivo(1);
    }
    
    // Mostrar notificación informativa
    let mensaje = "";
    
    switch(formatoActual) {
        case 1:
            mensaje = "Formato para 1 enfrentamiento seleccionado";
            break;
        case 2:
            mensaje = "Formato para 2 enfrentamientos seleccionado";
            break;
        case 3:
            mensaje = "Formato para 3 enfrentamientos seleccionado";
            break;
        default:
            mensaje = "Formato no reconocido";
    }
    
    mostrarNotificacion(mensaje, 'info');
    
    // Ajustar el layout según el formato seleccionado
    ajustarLayoutSegunFormato();
}

// Función para ajustar el layout según el formato seleccionado
function ajustarLayoutSegunFormato() {
    const canvas = document.getElementById('canvas');
    
    // Eliminar clases anteriores de formato
    canvas.classList.remove('formato-1', 'formato-2', 'formato-3');
    
    // Añadir clase según el formato actual
    canvas.classList.add(`formato-${formatoActual}`);
    
    // Mostrar u ocultar eventos según el formato
    const evento1 = document.querySelector('.evento-container.evento-1');
    const evento2 = document.querySelector('.evento-container.evento-2');
    
    if (formatoActual >= 2) {
        evento1.style.display = 'flex';
        evento2.style.display = 'flex';
    } else {
        evento1.style.display = 'flex';
        evento2.style.display = 'none';
    }
}

// Función para cambiar entre eventos (mostrar/ocultar controles)
function cambiarEventoActivo(numeroEvento) {
    // Obtener todos los controles de ambos eventos
    const controlesEvento1 = document.querySelectorAll('.evento-1-control');
    const controlesEvento2 = document.querySelectorAll('.evento-2-control');
    
    // Cambiar la clase activa en los botones de pestañas
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.tab-btn[data-evento="${numeroEvento}"]`).classList.add('active');
    
    // Mostrar/ocultar controles según el evento seleccionado
    if (numeroEvento === 1) {
        controlesEvento1.forEach(control => control.style.display = 'block');
        controlesEvento2.forEach(control => control.style.display = 'none');
    } else {
        controlesEvento1.forEach(control => control.style.display = 'none');
        controlesEvento2.forEach(control => control.style.display = 'block');
    }
}

// Función para cambiar la liga seleccionada
function cambiarLiga(liga) {
    ligaActual = liga;
    
    // Si hay una liga seleccionada, cargamos un fondo específico de esa liga
    if (ligaActual) {
        seleccionarFondoAleatorio();
        
        // Cargamos los escudos correspondientes a la liga seleccionada
        cargarEscudos(ligaActual);
    }
}

// Función para mostrar notificaciones temporales
function mostrarNotificacion(mensaje, tipo = 'info') {
    // Comprueba si ya existe una notificación y la elimina
    const notificacionExistente = document.querySelector('.notificacion');
    if (notificacionExistente) {
        notificacionExistente.remove();
    }
    
    // Crea un elemento para la notificación
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion ${tipo}`;
    notificacion.textContent = mensaje;
    
    // Añade la notificación al DOM
    document.body.appendChild(notificacion);
    
    // Añade una clase para mostrar la notificación con animación
    setTimeout(() => {
        notificacion.classList.add('mostrar');
    }, 10);
    
    // Elimina la notificación después de 3 segundos
    setTimeout(() => {
        notificacion.classList.remove('mostrar');
        setTimeout(() => {
            notificacion.remove();
        }, 300); // Tiempo para que termine la animación de salida
    }, 3000);
}

// Función para actualizar la fecha actual
function actualizarFecha() {
    const fechaActual = new Date();
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    const diaSemana = diasSemana[fechaActual.getDay()];
    const diaMes = fechaActual.getDate();
    const mes = meses[fechaActual.getMonth()];
    
    const diaElemento = document.querySelector('.dia');
    const mesElemento = document.querySelector('.mes');
    
    diaElemento.textContent = `${diaSemana} ${diaMes}`;
    mesElemento.textContent = `DE ${mes}`;
}

// Función para configurar los eventos
function configurarEventos() {
    // Selector de formato
    const formatoSelector = document.getElementById('formato-selector');
    formatoSelector.addEventListener('change', (e) => {
        cambiarFormato(e.target.value);
    });
    
    // Botones de pestañas para cambiar entre eventos
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const numeroEvento = parseInt(this.dataset.evento);
            cambiarEventoActivo(numeroEvento);
        });
    });
    
    // Botón para cambiar el fondo aleatorio
    const cambiarFondoBtn = document.getElementById('cambiar-fondo');
    cambiarFondoBtn.addEventListener('click', seleccionarFondoAleatorio);
    
    // Cambiar liga
    const ligaSelector = document.getElementById('liga-selector');
    ligaSelector.addEventListener('change', (e) => {
        const liga = e.target.value;
        cambiarLiga(liga);
        
        // Cargar logo de liga correspondiente
        cargarLogoLiga(liga);
    });
    
    // Cambiar escudo local (Evento 1)
    const escudo1Selector = document.getElementById('escudo1-selector');
    escudo1Selector.addEventListener('change', (e) => {
        const escudoPath = e.target.value;
        const escudoLocalContainer = document.querySelector('.escudo-local');
        escudoLocalContainer.innerHTML = '';
        
        if (escudoPath) {
            const imgEscudo = document.createElement('img');
            imgEscudo.src = escudoPath;
            imgEscudo.alt = 'Escudo Local';
            escudoLocalContainer.appendChild(imgEscudo);
            
            // Actualizar el nombre del equipo local
            const nombreEquipo = escudoPath.split('/').pop().replace(/\.[^/.]+$/, "");
            const nombreFormateado = formatearNombreEquipo(nombreEquipo);
            
            // Solo actualizamos el nombre en el banner del partido
            const nombreLocalBanner = document.querySelector('.local-banner');
            if (nombreLocalBanner) {
                nombreLocalBanner.textContent = nombreFormateado;
            }
        } else {
            // Si no hay escudo seleccionado, ponemos un texto por defecto
            const nombreLocalBanner = document.querySelector('.local-banner');
            if (nombreLocalBanner) {
                nombreLocalBanner.textContent = 'Local';
            }
        }
    });
    
    // Cambiar escudo visitante (Evento 1)
    const escudo2Selector = document.getElementById('escudo2-selector');
    escudo2Selector.addEventListener('change', (e) => {
        const escudoPath = e.target.value;
        const escudoVisitanteContainer = document.querySelector('.escudo-visitante');
        escudoVisitanteContainer.innerHTML = '';
        
        if (escudoPath) {
            const imgEscudo = document.createElement('img');
            imgEscudo.src = escudoPath;
            imgEscudo.alt = 'Escudo Visitante';
            escudoVisitanteContainer.appendChild(imgEscudo);
            
            // Actualizar el nombre del equipo visitante
            const nombreEquipo = escudoPath.split('/').pop().replace(/\.[^/.]+$/, "");
            const nombreFormateado = formatearNombreEquipo(nombreEquipo);
            
            // Solo actualizamos el nombre en el banner del partido
            const nombreVisitanteBanner = document.querySelector('.visitante-banner');
            if (nombreVisitanteBanner) {
                nombreVisitanteBanner.textContent = nombreFormateado;
            }
        } else {
            // Si no hay escudo seleccionado, ponemos un texto por defecto
            const nombreVisitanteBanner = document.querySelector('.visitante-banner');
            if (nombreVisitanteBanner) {
                nombreVisitanteBanner.textContent = 'Visitante';
            }
        }
    });
    
    // Cambiar escudo local (Evento 2)
    const escudo1Selector2 = document.getElementById('escudo1-selector-2');
    escudo1Selector2.addEventListener('change', (e) => {
        const escudoPath = e.target.value;
        
        if (escudoPath) {
            // Actualizar el nombre del equipo local
            const nombreEquipo = escudoPath.split('/').pop().replace(/\.[^/.]+$/, "");
            const nombreFormateado = formatearNombreEquipo(nombreEquipo);
            
            // Solo actualizamos el nombre en el banner del partido
            const nombreLocalBanner = document.querySelector('.local-banner-2');
            if (nombreLocalBanner) {
                nombreLocalBanner.textContent = nombreFormateado;
            }
        } else {
            // Si no hay escudo seleccionado, ponemos un texto por defecto
            const nombreLocalBanner = document.querySelector('.local-banner-2');
            if (nombreLocalBanner) {
                nombreLocalBanner.textContent = 'Local';
            }
        }
    });
    
    // Cambiar escudo visitante (Evento 2)
    const escudo2Selector2 = document.getElementById('escudo2-selector-2');
    escudo2Selector2.addEventListener('change', (e) => {
        const escudoPath = e.target.value;
        
        if (escudoPath) {
            // Actualizar el nombre del equipo visitante
            const nombreEquipo = escudoPath.split('/').pop().replace(/\.[^/.]+$/, "");
            const nombreFormateado = formatearNombreEquipo(nombreEquipo);
            
            // Solo actualizamos el nombre en el banner del partido
            const nombreVisitanteBanner = document.querySelector('.visitante-banner-2');
            if (nombreVisitanteBanner) {
                nombreVisitanteBanner.textContent = nombreFormateado;
            }
        } else {
            // Si no hay escudo seleccionado, ponemos un texto por defecto
            const nombreVisitanteBanner = document.querySelector('.visitante-banner-2');
            if (nombreVisitanteBanner) {
                nombreVisitanteBanner.textContent = 'Visitante';
            }
        }
    });
    
    // Eventos para actualizar las cuotas en tiempo real (Evento 1)
    const cuotaLocalInput = document.getElementById('cuota-local');
    const cuotaEmpateInput = document.getElementById('cuota-empate');
    const cuotaVisitanteInput = document.getElementById('cuota-visitante');
    
    cuotaLocalInput.addEventListener('input', () => {
        actualizarCuota('local', cuotaLocalInput.value);
    });
    
    cuotaEmpateInput.addEventListener('input', () => {
        actualizarCuota('empate', cuotaEmpateInput.value);
    });
    
    cuotaVisitanteInput.addEventListener('input', () => {
        actualizarCuota('visitante', cuotaVisitanteInput.value);
    });
    
    // Eventos para actualizar las cuotas en tiempo real (Evento 2)
    const cuotaLocalInput2 = document.getElementById('cuota-local-2');
    const cuotaEmpateInput2 = document.getElementById('cuota-empate-2');
    const cuotaVisitanteInput2 = document.getElementById('cuota-visitante-2');
    
    cuotaLocalInput2.addEventListener('input', () => {
        actualizarCuotaEvento2('local', cuotaLocalInput2.value);
    });
    
    cuotaEmpateInput2.addEventListener('input', () => {
        actualizarCuotaEvento2('empate', cuotaEmpateInput2.value);
    });
    
    cuotaVisitanteInput2.addEventListener('input', () => {
        actualizarCuotaEvento2('visitante', cuotaVisitanteInput2.value);
    });
    
    // Evento para actualizar la hora del partido (Evento 1)
    const horaPartidoInput = document.getElementById('hora-partido-input');
    horaPartidoInput.addEventListener('change', () => {
        actualizarHoraPartido(horaPartidoInput.value);
    });
    
    // Evento para actualizar la hora del partido (Evento 2)
    const horaPartidoInput2 = document.getElementById('hora-partido-input-2');
    horaPartidoInput2.addEventListener('change', () => {
        actualizarHoraPartidoEvento2(horaPartidoInput2.value);
    });
    
    // Generar imagen utilizando html2canvas
    const generarBtn = document.getElementById('generar-btn');
    generarBtn.addEventListener('click', generarImagen);
    
    // Descargar imagen
    const descargarBtn = document.getElementById('descargar-btn');
    descargarBtn.addEventListener('click', descargarImagen);
}

// Función para cargar el logo de liga correspondiente
function cargarLogoLiga(liga) {
    const ligaContainer = document.querySelector('.liga-container');
    ligaContainer.innerHTML = '';
    
    // Buscar el logo correspondiente a la liga o competición seleccionada
    
    // Mapeo simplificado de ligas y competiciones a nombres de archivo (primero intentamos webp)
    const mapeoLogos = {
        "LaLiga": ['logosliga/Laliga.webp', 'logosliga/Laliga.png'],
        "Premier": ['logosliga/Premier.webp', 'logosliga/Premier.png'],
        "ChampionsLeague": ['logosliga/ChampionsLeague.webp', 'logosliga/ChampionsLeague.png', 'logosliga/Champions.png'],
        "EuropaLeague": ['logosliga/EuropaLeague.webp', 'logosliga/EuropaLeague.png', 'logosliga/Europa.png'],
        "Concacaf": ['logosliga/Concacaf.webp', 'logosliga/Concacaf.png'],
        "Libertadores": ['logosliga/Libertadores.webp', 'logosliga/Libertadores.png']
    };
    
    // Obtener los posibles paths para esta liga
    const posiblesLogos = mapeoLogos[liga] || [];
    
    if (posiblesLogos.length === 0) {
        // Mostrar notificación si no hay rutas disponibles
        mostrarNotificacion(`${formatearNombreLiga(liga)} seleccionada, pero no hay logo disponible`, 'warning');
        mostrarTextoAlternativo();
        return;
    }
    
    // Intentar cargar cada logo en orden hasta que uno funcione
    intentarCargarLogo(posiblesLogos, 0);
    
    // Función interna para intentar cargar logos recursivamente
    function intentarCargarLogo(rutas, indice) {
        if (indice >= rutas.length) {
            // Si llegamos al final de las rutas sin éxito, mostrar texto alternativo
            mostrarNotificacion(`No se encontró ningún logo para ${formatearNombreLiga(liga)}. Seleccione otro torneo o agregue el logo correspondiente.`, 'warning');
            mostrarTextoAlternativo();
            return;
        }
        
        const rutaActual = rutas[indice];
        
        // Crear una nueva imagen para probar
        const img = new Image();
        
        img.onload = function() {
            // Si la imagen carga correctamente, mostrarla
            const imgLiga = document.createElement('img');
            imgLiga.src = rutaActual;
            imgLiga.alt = 'Logo Liga';
            ligaContainer.appendChild(imgLiga);
            
            // Mostrar notificación de éxito
            mostrarNotificacion(`${formatearNombreLiga(liga)} seleccionada`, 'info');
            console.log(`Logo cargado: ${rutaActual}`);
        };
        
        img.onerror = function() {
            console.error(`Error al cargar el logo: ${rutaActual}`);
            // Intentar con la siguiente ruta
            intentarCargarLogo(rutas, indice + 1);
        };
        
        // Iniciar carga de la imagen actual
        img.src = rutaActual;
    }
    
    // Función para mostrar texto alternativo cuando no hay logo
    function mostrarTextoAlternativo() {
        const noLogoText = document.createElement('div');
        noLogoText.className = 'no-logo-text';
        noLogoText.textContent = formatearNombreLiga(liga);
        ligaContainer.appendChild(noLogoText);
    }
}

// Función para añadir nuevos escudos (para uso futuro)
function agregarEscudo(rutaEscudo) {
    if (!escudos.includes(rutaEscudo)) {
        escudos.push(rutaEscudo);
        
        // Actualizar los selectores
        const nombreEscudo = rutaEscudo.split('/').pop().replace(/\.[^/.]+$/, "");
        
        const escudo1Select = document.getElementById('escudo1-selector');
        const option1 = document.createElement('option');
        option1.value = rutaEscudo;
        option1.textContent = nombreEscudo;
        escudo1Select.appendChild(option1);
        
        const escudo2Select = document.getElementById('escudo2-selector');
        const option2 = document.createElement('option');
        option2.value = rutaEscudo;
        option2.textContent = nombreEscudo;
        escudo2Select.appendChild(option2);
    }
}

// Función para actualizar los valores de las cuotas (Evento 1)
function actualizarCuota(tipo, valor) {
    // Asegurarse de que el valor sea un número válido
    const valorNumerico = parseFloat(valor);
    if (isNaN(valorNumerico) || valorNumerico < 1) {
        return;
    }
    
    // Formatear el valor a dos decimales
    const valorFormateado = valorNumerico.toFixed(2);
    
    // Actualizar el valor en la interfaz del evento 1
    const valorCuotaElement = document.querySelector(`.evento-1 .cuota-${tipo} .valor-cuota`);
    if (valorCuotaElement) {
        valorCuotaElement.textContent = valorFormateado;
    }
}

// Función para actualizar los valores de las cuotas (Evento 2)
function actualizarCuotaEvento2(tipo, valor) {
    // Asegurarse de que el valor sea un número válido
    const valorNumerico = parseFloat(valor);
    if (isNaN(valorNumerico) || valorNumerico < 1) {
        return;
    }
    
    // Formatear el valor a dos decimales
    const valorFormateado = valorNumerico.toFixed(2);
    
    // Actualizar el valor en la interfaz del evento 2
    const valorCuotaElement = document.querySelector(`.evento-2 .cuota-${tipo} .valor-cuota`);
    if (valorCuotaElement) {
        valorCuotaElement.textContent = valorFormateado;
    }
}

// Función para actualizar la hora del partido (Evento 1)
function actualizarHoraPartido(hora) {
    // Si no hay hora, no hacemos nada
    if (!hora) return;
    
    // Extraer las horas y minutos
    const [horas, minutos] = hora.split(':');
    
    // Formatear la hora para mostrarla
    const horaFormateada = `${horas}:${minutos}`;
    
    // Actualizar la hora en la interfaz (contenedor original)
    const horaPartidoElement = document.querySelector('.evento-1 .hora-partido');
    if (horaPartidoElement) {
        horaPartidoElement.textContent = horaFormateada;
    }
    
    // Actualizar la hora en el nuevo elemento hora-empate
    const horaEmpateElement = document.querySelector('.evento-1 .hora-empate');
    if (horaEmpateElement) {
        horaEmpateElement.textContent = horaFormateada;
    }
    
    // Mostrar una notificación
    mostrarNotificacion(`Hora del partido 1 actualizada a ${horaFormateada}`, 'success');
}

// Función para actualizar la hora del partido (Evento 2)
function actualizarHoraPartidoEvento2(hora) {
    // Si no hay hora, no hacemos nada
    if (!hora) return;
    
    // Extraer las horas y minutos
    const [horas, minutos] = hora.split(':');
    
    // Formatear la hora para mostrarla
    const horaFormateada = `${horas}:${minutos}`;
    
    // Actualizar la hora en la interfaz (contenedor original)
    const horaPartidoElement = document.querySelector('.evento-2 .hora-partido');
    if (horaPartidoElement) {
        horaPartidoElement.textContent = horaFormateada;
    }
    
    // Actualizar la hora en el nuevo elemento hora-empate
    const horaEmpateElement = document.querySelector('.evento-2 .hora-empate');
    if (horaEmpateElement) {
        horaEmpateElement.textContent = horaFormateada;
    }
    
    // Mostrar una notificación
    mostrarNotificacion(`Hora del partido 2 actualizada a ${horaFormateada}`, 'success');
}

// Función para generar la imagen utilizando html2canvas
function generarImagen() {
    // Mostramos notificación de que se está generando la imagen
    mostrarNotificacion('Generando imagen, por favor espera...', 'info');
    
    // Referencia al canvas
    const canvasElement = document.getElementById('canvas');
    
    // Eliminamos temporalmente la transformación de escala para capturar en tamaño completo
    const scaleOriginal = canvasElement.style.transform;
    canvasElement.style.transform = 'none';
    
    // Guardamos la posición original para restaurarla después
    const originalPosition = {
        position: canvasElement.style.position,
        top: canvasElement.style.top,
        left: canvasElement.style.left,
        zIndex: canvasElement.style.zIndex
    };
    
    // Configuramos para la captura
    canvasElement.style.position = 'fixed';
    canvasElement.style.top = '-9999px';
    canvasElement.style.left = '-9999px';
    canvasElement.style.zIndex = '-9999';
    document.body.appendChild(canvasElement);
    
    // Aplicar estilos optimizados para la captura, especialmente para los hexágonos
    aplicarEstilosParaCaptura();
    
    // Utilizamos html2canvas para capturar el canvas con configuraciones adicionales
    html2canvas(canvasElement, {
        allowTaint: true,
        useCORS: true,
        scale: 3, // Mayor escala para mejor calidad
        logging: false,
        backgroundColor: null,
        imageTimeout: 0, // Sin tiempo de espera para imágenes
        onclone: function(documentClone) {
            // Aplicar manualmente la forma hexagonal a todas las cuotas en el clon
            const clonedCuotas = documentClone.querySelectorAll('.cuota');
            const clipPathValue = 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)';
            
            clonedCuotas.forEach(cuota => {
                // Aplicar los estilos directamente en el clon
                cuota.style.clipPath = clipPathValue;
                cuota.style.webkitClipPath = clipPathValue;
                cuota.style.backgroundColor = 'rgb(0, 200, 255)';
                cuota.style.borderRadius = '0';
                
                // Crear un SVG de respaldo para navegadores que no soporten clip-path
                const backgroundColor = 'rgb(0, 200, 255)';
                const width = cuota.offsetWidth;
                const height = cuota.offsetHeight;
                
                // Crear un hexágono SVG de respaldo y añadirlo como pseudo-elemento
                const svgHexagon = `<svg width="${width}" height="${height}" style="position:absolute;top:0;left:0;z-index:-1;">
                    <polygon points="${width*0.2},0 ${width*0.8},0 ${width},${height*0.5} ${width*0.8},${height} ${width*0.2},${height} 0,${height*0.5}" 
                    fill="${backgroundColor}" />
                </svg>`;
                
                // Añadir el SVG antes del contenido de la cuota
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = svgHexagon;
                const svgElement = tempDiv.firstChild;
                
                // Colocar el SVG como primer hijo
                if (cuota.firstChild) {
                    cuota.insertBefore(svgElement, cuota.firstChild);
                } else {
                    cuota.appendChild(svgElement);
                }
            });
        },
        renderOnlyClipped: false // Capturar todo, no solo áreas recortadas
    }).then(canvas => {
        // Restauramos las propiedades originales
        canvasElement.style.transform = scaleOriginal;
        canvasElement.style.position = originalPosition.position || '';
        canvasElement.style.top = originalPosition.top || '';
        canvasElement.style.left = originalPosition.left || '';
        canvasElement.style.zIndex = originalPosition.zIndex || '';
        
        // Reubicamos el canvas en su posición original
        const canvasContainer = document.querySelector('.canvas-container');
        canvasContainer.appendChild(canvasElement);
        
        // Restaurar los estilos originales
        restaurarEstilosOriginales();
        
        // Guardamos la imagen generada como dataURL
        imagenGenerada = canvas.toDataURL('image/png');
        
        // Mostramos una notificación de éxito
        mostrarNotificacion('¡Imagen generada con éxito! Ahora puedes descargarla.', 'success');
        
        // Habilitamos el botón de descarga
        const descargarBtn = document.getElementById('descargar-btn');
        descargarBtn.disabled = false;
        descargarBtn.classList.add('active');
    }).catch(error => {
        console.error('Error al generar la imagen:', error);
        mostrarNotificacion('Error al generar la imagen. Intenta nuevamente.', 'error');
        
        // Restaurar propiedades originales en caso de error
        canvasElement.style.transform = scaleOriginal;
        canvasElement.style.position = originalPosition.position || '';
        canvasElement.style.top = originalPosition.top || '';
        canvasElement.style.left = originalPosition.left || '';
        canvasElement.style.zIndex = originalPosition.zIndex || '';
        
        // Reubicamos el canvas en su posición original
        const canvasContainer = document.querySelector('.canvas-container');
        canvasContainer.appendChild(canvasElement);
        
        // Restaurar los estilos originales
        restaurarEstilosOriginales();
    });
}

// Función para descargar la imagen generada
function descargarImagen() {
    if (!imagenGenerada) {
        mostrarNotificacion('Primero debes generar una imagen antes de descargarla.', 'warning');
        return;
    }
    
    // Creamos un enlace temporal para la descarga
    const link = document.createElement('a');
    
    // Generamos un nombre de archivo descriptivo
    let nombreArchivo = 'hondubet_';
    
    // Si hay una liga seleccionada, la incluimos en el nombre
    if (ligaActual) {
        nombreArchivo += ligaActual + '_';
    }
    
    // Incluimos el formato y la fecha en el nombre del archivo
    nombreArchivo += 'formato' + formatoActual + '_';
    
    // Añadimos la fecha actual al nombre del archivo
    const ahora = new Date();
    nombreArchivo += ahora.getFullYear() + 
                 ('0' + (ahora.getMonth() + 1)).slice(-2) + 
                 ('0' + ahora.getDate()).slice(-2) + 
                 ('0' + ahora.getHours()).slice(-2) + 
                 ('0' + ahora.getMinutes()).slice(-2);
    
    nombreArchivo += '.png';
    
    // Configuramos el enlace para la descarga
    link.href = imagenGenerada;
    link.download = nombreArchivo;
    
    // Añadimos el enlace al DOM, lo activamos y luego lo eliminamos
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Mostramos una notificación
    mostrarNotificacion('¡La imagen se está descargando!', 'success');
}

// Función para aplicar el estilo hexagonal a las cuotas (para html2canvas)
function aplicarEstilosParaCaptura() {
    // Obtener todos los elementos de cuota
    const cuotas = document.querySelectorAll('.cuota');
    
    // Aplicar estilos para asegurar compatibilidad
    cuotas.forEach(cuota => {
        // Guardar el estilo original para restaurarlo después
        cuota.dataset.originalClipPath = cuota.style.clipPath;
        cuota.dataset.originalBackground = cuota.style.backgroundColor;
        cuota.dataset.originalPosition = cuota.style.position;
        cuota.dataset.originalZIndex = cuota.style.zIndex;
        
        // Aplicar estilos inline directamente para forzar su captura
        cuota.style.position = 'relative';
        cuota.style.overflow = 'visible';
        cuota.style.backgroundColor = 'rgb(0, 200, 255)';
        cuota.style.zIndex = '3';
        
        // Forma hexagonal exacta aplicada con múltiples métodos para máxima compatibilidad
        const clipPathValue = 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)';
        cuota.style.clipPath = clipPathValue;
        cuota.style.webkitClipPath = clipPathValue;
        
        // Asegurar que otros estilos no interfieran
        cuota.style.borderRadius = '0'; // Deshabilitar border-radius para evitar conflictos
        
        // Agregar un SVG de fondo como respaldo para navegadores sin soporte de clip-path
        const width = cuota.offsetWidth;
        const height = cuota.offsetHeight;
        const backgroundColor = 'rgb(0, 200, 255)';
        
        const svgHexagon = `<svg width="${width}" height="${height}" style="position:absolute;top:0;left:0;z-index:-1;">
            <polygon points="${width*0.2},0 ${width*0.8},0 ${width},${height*0.5} ${width*0.8},${height} ${width*0.2},${height} 0,${height*0.5}" 
            fill="${backgroundColor}" />
        </svg>`;
        
        // Crear un contenedor temporal para el SVG
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = svgHexagon;
        const svgElement = tempDiv.firstChild;
        
        // Añadir el SVG como primer hijo
        if (cuota.firstChild) {
            cuota.insertBefore(svgElement, cuota.firstChild);
        } else {
            cuota.appendChild(svgElement);
        }
        
        // Asegurar que el valor de la cuota está por encima
        const valorCuota = cuota.querySelector('.valor-cuota');
        if (valorCuota) {
            valorCuota.style.position = 'relative';
            valorCuota.style.zIndex = '5';
        }
    });
}

// Función para restaurar los estilos originales después de la captura
function restaurarEstilosOriginales() {
    const cuotas = document.querySelectorAll('.cuota');
    
    cuotas.forEach(cuota => {
        // Restaurar estilos originales
        cuota.style.clipPath = cuota.dataset.originalClipPath || '';
        cuota.style.webkitClipPath = '';
        cuota.style.backgroundColor = cuota.dataset.originalBackground || '';
        cuota.style.borderRadius = ''; // Restaurar border-radius
        cuota.style.position = cuota.dataset.originalPosition || '';
        cuota.style.zIndex = cuota.dataset.originalZIndex || '';
        
        // Eliminar los SVGs agregados
        const svgs = cuota.querySelectorAll('svg');
        svgs.forEach(svg => svg.remove());
        
        // Eliminar los atributos de datos
        delete cuota.dataset.originalClipPath;
        delete cuota.dataset.originalBackground;
        delete cuota.dataset.originalPosition;
        delete cuota.dataset.originalZIndex;
    });
}

// Función para formatear el nombre de un equipo para mostrarlo en el banner
function formatearNombreEquipo(nombre) {
    // Mapeo de nombres sin espacios a su forma correcta con espacios
    const nombresEspeciales = {
        "BorussiaDortmund": "Borussia Dortmund",
        "ManchesterUnited": "Manchester United",
        "ManchesterCity": "Manchester City",
        "RealMadrid": "Real Madrid",
        "BayernMunich": "Bayern Munich",
        "AtleticoMadrid": "Atletico Madrid",
        "PSG": "Paris Saint Germain",
        "InterMilan": "Inter Milan",
        "AstonVilla": "Aston Villa",
        "PSV": "PSV Eindhoven",
        "ClubBrujas": "Club Brujas",
        "westham": "West Ham",
        "newcastle": "Newcastle"
        // Puedes agregar más equipos según sea necesario
    };
    
    // Verificar si es un nombre especial conocido
    let nombreFormateado = nombre;
    if (nombresEspeciales[nombre]) {
        nombreFormateado = nombresEspeciales[nombre];
    } else {
        // Intentar detectar nombres compuestos buscando palabras con mayúsculas en medio
        // Ej: "BorussiaDortmund" -> buscar "Dortmund" que empieza con mayúscula
        const regex = /([A-Z][a-z]+)([A-Z])/g;
        nombreFormateado = nombre.replace(regex, '$1 $2');
    }
    
    // Primero capitalizamos la primera letra (por si acaso no estaba capitalizada)
    const nombreCapitalizado = nombreFormateado.charAt(0).toUpperCase() + nombreFormateado.slice(1);
    
    // Si el nombre tiene más de una palabra y es más largo de 10 caracteres
    // insertamos un salto de línea para mostrarlo en dos líneas
    if (nombreCapitalizado.includes(' ') && nombreCapitalizado.length > 10) {
        // Encontrar el espacio más cercano al centro para dividir el texto
        const mitad = Math.floor(nombreCapitalizado.length / 2);
        let indiceDivision = nombreCapitalizado.indexOf(' ', mitad - 5);
        
        if (indiceDivision === -1) {
            // Si no se encuentra un espacio después de la mitad, buscar antes
            indiceDivision = nombreCapitalizado.lastIndexOf(' ', mitad + 5);
        }
        
        if (indiceDivision !== -1) {
            // Insertar salto de línea en lugar del espacio
            return nombreCapitalizado.substring(0, indiceDivision) + '\n' + 
                nombreCapitalizado.substring(indiceDivision + 1);
        }
    }
    
    // Si no cumple condiciones o no se puede dividir, devolver el nombre capitalizado
    return nombreCapitalizado;
}

// Función para cargar los escudos de una liga específica
function cargarEscudos(liga) {
    const escudo1Select = document.getElementById('escudo1-selector');
    const escudo2Select = document.getElementById('escudo2-selector');
    const escudo1Select2 = document.getElementById('escudo1-selector-2');
    const escudo2Select2 = document.getElementById('escudo2-selector-2');
    
    // Mantenemos la opción por defecto
    escudo1Select.innerHTML = '<option value="">Seleccionar...</option>';
    escudo2Select.innerHTML = '<option value="">Seleccionar...</option>';
    escudo1Select2.innerHTML = '<option value="">Seleccionar...</option>';
    escudo2Select2.innerHTML = '<option value="">Seleccionar...</option>';
    
    // Verificar si lo seleccionado es una competición internacional
    const esCompeticion = ["ChampionsLeague", "EuropaLeague", "Concacaf", "Libertadores"].includes(liga);
    
    if (esCompeticion) {
        // Si es competición, cargar escudos de todas las ligas
        let todosLosEscudos = [];
        
        // Recorrer todas las ligas y agregar sus escudos
        for (const ligaKey in escudos) {
            if (["ChampionsLeague", "EuropaLeague", "Concacaf", "Libertadores"].includes(ligaKey)) {
                // Saltamos las competiciones en esta lista, solo queremos ligas
                continue;
            }
            
            if (escudos[ligaKey] && escudos[ligaKey].length > 0) {
                // Añadir escudos de esta liga al array general, marcando a qué liga pertenecen
                const escudosDeLiga = escudos[ligaKey].map(ruta => ({
                    ruta: ruta,
                    liga: ligaKey
                }));
                todosLosEscudos = todosLosEscudos.concat(escudosDeLiga);
            }
        }
        
        // Añadir los escudos específicos de la competición también, si existen
        if (escudos[liga] && escudos[liga].length > 0) {
            const escudosDeCompeticion = escudos[liga].map(ruta => ({
                ruta: ruta,
                liga: 'Solo ' + formatearNombreLiga(liga)
            }));
            todosLosEscudos = todosLosEscudos.concat(escudosDeCompeticion);
        }
        
        // Verificar si hay escudos para mostrar
        if (todosLosEscudos.length > 0) {
            // Ordenar alfabéticamente por nombre de equipo
            todosLosEscudos.sort((a, b) => {
                const nombreA = a.ruta.split('/').pop().replace(/\.[^/.]+$/, "").toLowerCase();
                const nombreB = b.ruta.split('/').pop().replace(/\.[^/.]+$/, "").toLowerCase();
                return nombreA.localeCompare(nombreB);
            });
            
            // Agrupar escudos por liga para el desplegable
            const escudosPorLiga = {};
            
            // Agrupar por liga
            todosLosEscudos.forEach(escudo => {
                const ligaDelEscudo = escudo.liga;
                
                if (!escudosPorLiga[ligaDelEscudo]) {
                    escudosPorLiga[ligaDelEscudo] = [];
                }
                
                escudosPorLiga[ligaDelEscudo].push(escudo.ruta);
            });
            
            // Crear los optgroups para cada liga
            for (const nombreLiga in escudosPorLiga) {
                // Crear grupo para esta liga
                const optgroup1 = document.createElement('optgroup');
                const optgroup2 = document.createElement('optgroup');
                const optgroup3 = document.createElement('optgroup');
                const optgroup4 = document.createElement('optgroup');
                optgroup1.label = formatearNombreLiga(nombreLiga);
                optgroup2.label = formatearNombreLiga(nombreLiga);
                optgroup3.label = formatearNombreLiga(nombreLiga);
                optgroup4.label = formatearNombreLiga(nombreLiga);
                
                // Añadir los escudos de esta liga al grupo
                escudosPorLiga[nombreLiga].forEach(rutaEscudo => {
                    const nombreEquipo = rutaEscudo.split('/').pop().replace(/\.[^/.]+$/, "");
                    const nombreFormateado = formatearNombreEquipo(nombreEquipo);
                    
                    // Opción para selector local (Evento 1)
                    const option1 = document.createElement('option');
                    option1.value = rutaEscudo;
                    option1.textContent = nombreFormateado.replace('\n', ' '); // Reemplazamos el salto de línea por espacio en el selector
                    optgroup1.appendChild(option1);
                    
                    // Opción para selector visitante (Evento 1)
                    const option2 = document.createElement('option');
                    option2.value = rutaEscudo;
                    option2.textContent = nombreFormateado.replace('\n', ' '); // Reemplazamos el salto de línea por espacio en el selector
                    optgroup2.appendChild(option2);
                    
                    // Opción para selector local (Evento 2)
                    const option3 = document.createElement('option');
                    option3.value = rutaEscudo;
                    option3.textContent = nombreFormateado.replace('\n', ' '); // Reemplazamos el salto de línea por espacio en el selector
                    optgroup3.appendChild(option3);
                    
                    // Opción para selector visitante (Evento 2)
                    const option4 = document.createElement('option');
                    option4.value = rutaEscudo;
                    option4.textContent = nombreFormateado.replace('\n', ' '); // Reemplazamos el salto de línea por espacio en el selector
                    optgroup4.appendChild(option4);
                });
                
                // Añadir los grupos a los selectores
                escudo1Select.appendChild(optgroup1);
                escudo2Select.appendChild(optgroup2);
                escudo1Select2.appendChild(optgroup3);
                escudo2Select2.appendChild(optgroup4);
            }
            
            mostrarNotificacion(`Se han cargado ${todosLosEscudos.length} escudos para ${formatearNombreLiga(liga)}`, 'success');
        } else {
            mostrarNotificacion(`No hay escudos disponibles para ninguna liga`, 'warning');
        }
    } else {
        // Si es una liga, cargar solo los escudos de esa liga (comportamiento original)
        if (escudos[liga] && escudos[liga].length > 0) {
            // Ordenar alfabéticamente antes de mostrar
            const escudosOrdenados = [...escudos[liga]].sort((a, b) => {
                const nombreA = a.split('/').pop().replace(/\.[^/.]+$/, "").toLowerCase();
                const nombreB = b.split('/').pop().replace(/\.[^/.]+$/, "").toLowerCase();
                return nombreA.localeCompare(nombreB);
            });
            
            escudosOrdenados.forEach(rutaEscudo => {
                // Extraer el nombre del equipo de la ruta del archivo
                const nombreEquipo = rutaEscudo.split('/').pop().replace(/\.[^/.]+$/, "");
                const nombreFormateado = formatearNombreEquipo(nombreEquipo);
                
                // Añadir opción al selector de escudo local (Evento 1)
                const option1 = document.createElement('option');
                option1.value = rutaEscudo;
                option1.textContent = nombreFormateado.replace('\n', ' '); // Reemplazamos el salto de línea por espacio en el selector
                escudo1Select.appendChild(option1);
                
                // Añadir opción al selector de escudo visitante (Evento 1)
                const option2 = document.createElement('option');
                option2.value = rutaEscudo;
                option2.textContent = nombreFormateado.replace('\n', ' '); // Reemplazamos el salto de línea por espacio en el selector
                escudo2Select.appendChild(option2);
                
                // Añadir opción al selector de escudo local (Evento 2)
                const option3 = document.createElement('option');
                option3.value = rutaEscudo;
                option3.textContent = nombreFormateado.replace('\n', ' '); // Reemplazamos el salto de línea por espacio en el selector
                escudo1Select2.appendChild(option3);
                
                // Añadir opción al selector de escudo visitante (Evento 2)
                const option4 = document.createElement('option');
                option4.value = rutaEscudo;
                option4.textContent = nombreFormateado.replace('\n', ' '); // Reemplazamos el salto de línea por espacio en el selector
                escudo2Select2.appendChild(option4);
            });
            
            mostrarNotificacion(`Se han cargado ${escudos[liga].length} escudos de ${formatearNombreLiga(liga)}`, 'success');
        } else {
            mostrarNotificacion(`No hay escudos disponibles para ${formatearNombreLiga(liga)}`, 'warning');
        }
    }
    
    // Al final, verificar compatibilidad con imágenes webp solo si no se ha comprobado antes
    if (!window.webpComprobado) {
        verificarSoporteWebP(true);
    }
}

// Función para inicializar los nombres en el banner del partido
function inicializarNombresBanner() {
    // Obtener referencias a los elementos del banner
    const nombreLocalBanner = document.querySelector('.local-banner');
    const nombreVisitanteBanner = document.querySelector('.visitante-banner');
    const nombreLocalBanner2 = document.querySelector('.local-banner-2');
    const nombreVisitanteBanner2 = document.querySelector('.visitante-banner-2');
    
    // Verificar si hay escudos seleccionados
    const escudoLocalSelector = document.getElementById('escudo1-selector');
    const escudoVisitanteSelector = document.getElementById('escudo2-selector');
    const escudoLocalSelector2 = document.getElementById('escudo1-selector-2');
    const escudoVisitanteSelector2 = document.getElementById('escudo2-selector-2');
    
    // Inicializar el nombre del equipo local (Evento 1)
    if (nombreLocalBanner) {
        if (escudoLocalSelector && escudoLocalSelector.value) {
            // Si hay un escudo seleccionado, usar su nombre
            const rutaEscudo = escudoLocalSelector.value;
            const nombreEquipo = rutaEscudo.split('/').pop().replace(/\.[^/.]+$/, "");
            nombreLocalBanner.textContent = formatearNombreEquipo(nombreEquipo);
        } else {
            // Si no hay escudo seleccionado, usar valor por defecto
            nombreLocalBanner.textContent = 'Local';
        }
    }
    
    // Inicializar el nombre del equipo visitante (Evento 1)
    if (nombreVisitanteBanner) {
        if (escudoVisitanteSelector && escudoVisitanteSelector.value) {
            // Si hay un escudo seleccionado, usar su nombre
            const rutaEscudo = escudoVisitanteSelector.value;
            const nombreEquipo = rutaEscudo.split('/').pop().replace(/\.[^/.]+$/, "");
            nombreVisitanteBanner.textContent = formatearNombreEquipo(nombreEquipo);
        } else {
            // Si no hay escudo seleccionado, usar valor por defecto
            nombreVisitanteBanner.textContent = 'Visitante';
        }
    }
    
    // Inicializar el nombre del equipo local (Evento 2)
    if (nombreLocalBanner2) {
        if (escudoLocalSelector2 && escudoLocalSelector2.value) {
            // Si hay un escudo seleccionado, usar su nombre
            const rutaEscudo = escudoLocalSelector2.value;
            const nombreEquipo = rutaEscudo.split('/').pop().replace(/\.[^/.]+$/, "");
            nombreLocalBanner2.textContent = formatearNombreEquipo(nombreEquipo);
        } else {
            // Si no hay escudo seleccionado, usar valor por defecto
            nombreLocalBanner2.textContent = 'Local';
        }
    }
    
    // Inicializar el nombre del equipo visitante (Evento 2)
    if (nombreVisitanteBanner2) {
        if (escudoVisitanteSelector2 && escudoVisitanteSelector2.value) {
            // Si hay un escudo seleccionado, usar su nombre
            const rutaEscudo = escudoVisitanteSelector2.value;
            const nombreEquipo = rutaEscudo.split('/').pop().replace(/\.[^/.]+$/, "");
            nombreVisitanteBanner2.textContent = formatearNombreEquipo(nombreEquipo);
        } else {
            // Si no hay escudo seleccionado, usar valor por defecto
            nombreVisitanteBanner2.textContent = 'Visitante';
        }
    }
} 