// Variables globales
let fondos = {}; // Ahora será un objeto con ligas y competiciones como claves y arrays de fondos como valores
let escudos = {
    "Premier": [
        "escudos/Premier/ManchesterUnited.png",
        "escudos/Premier/ManchesterCity.png",
        "escudos/Premier/Liverpool.png",
        "escudos/Premier/Arsenal.png",
        "escudos/Premier/Chelsea.png",
        "escudos/Premier/Tottenham.png",
        "escudos/Premier/AstonVilla.png",
        "escudos/Premier/Newcastle.png",
        "escudos/Premier/westham.png",
        "escudos/Premier/Brighton.png",
        "escudos/Premier/Wolves.png",
        "escudos/Premier/Everton.png",
        "escudos/Premier/Fulham.png",
        "escudos/Premier/Brentford.png",
        "escudos/Premier/CrystalPalace.png",
        "escudos/Premier/NottinghamForest.png",
        "escudos/Premier/Bournemouth.png",
        "escudos/Premier/Southampton.png",
        "escudos/Premier/Leicester.png",
        "escudos/Premier/Ipswich.png"
    ],
    "LaLiga": [
        "escudos/LaLiga/RealMadrid.webp",
        "escudos/LaLiga/AtleticoMadrid.webp",
        "escudos/LaLiga/AthleticBilbao.png",
        "escudos/LaLiga/AtleticoMadrid.png",
        "escudos/LaLiga/CAOsasuna.png",
        "escudos/LaLiga/CDLeganes.png",
        "escudos/LaLiga/CeltaDeVigo.png",
        "escudos/LaLiga/DeportivoAlaves.png",
        "escudos/LaLiga/FCBarcelona.png",
        "escudos/LaLiga/GetafeCF.png",
        "escudos/LaLiga/GironaFC.png",
        "escudos/LaLiga/RCDEspanyolBarcelona.png",
        "escudos/LaLiga/RCDMallorca.png",
        "escudos/LaLiga/RayoVallecano.png",
        "escudos/LaLiga/RealBetisBalomp.png",
        "escudos/LaLiga/RealMadrid.png",
        "escudos/LaLiga/RealSociedad.png",
        "escudos/LaLiga/RealValladolidCF.png",
        "escudos/LaLiga/SevillaFC.png",
        "escudos/LaLiga/UDLasPalmas.png",
        "escudos/LaLiga/ValenciaCF.png",
        "escudos/LaLiga/VillarrealCF.png"
    ],
    "SerieA": [
        "escudos/SerieA/ACMilan.png",
        "escudos/SerieA/ACMonza.png",
        "escudos/SerieA/ACFFiorentina.png",
        "escudos/SerieA/ASRoma.png",
        "escudos/SerieA/AtalantaBC.png",
        "escudos/SerieA/BolognaFC1909.png",
        "escudos/SerieA/CagliariCalcio.png",
        "escudos/SerieA/Como1907.png",
        "escudos/SerieA/FCEmpoli.png",
        "escudos/SerieA/GenoaCFC.png",
        "escudos/SerieA/HellasVerona.png",
        "escudos/SerieA/InterMilan.png",
        "escudos/SerieA/JuventusFC.png",
        "escudos/SerieA/ParmaCalcio1913.png",
        "escudos/SerieA/SSLazio.png",
        "escudos/SerieA/SSCNapoli.png",
        "escudos/SerieA/TorinoFC.png",
        "escudos/SerieA/USLecce.png",
        "escudos/SerieA/UdineseCalcio.png",
        "escudos/SerieA/VeneziaFC.png"
    ],
    "Bundesliga": [
        "escudos/Bundesliga/BorussiaDortmund.png",
        "escudos/Bundesliga/BayernMunich.png",
        "escudos/Bundesliga/BayerLeverkusen.png",
        "escudos/Bundesliga/RBLeipzig.png",
        "escudos/Bundesliga/Wolfsburg.png",
        "escudos/Bundesliga/EintrachtFrankfurt.png",
        "escudos/Bundesliga/BorussiaMG.png",
        "escudos/Bundesliga/Hoffenheim.png",
        "escudos/Bundesliga/Stuttgart.png",
        "escudos/Bundesliga/Mainz05.png",
        "escudos/Bundesliga/Freiburg.png",
        "escudos/Bundesliga/Augsburg.png",
        "escudos/Bundesliga/UnionBerlin.png",
        "escudos/Bundesliga/Bremen.png",
        "escudos/Bundesliga/Bochum.png",
        "escudos/Bundesliga/FCHeidenheim.png",
        "escudos/Bundesliga/StPauli.png",
        "escudos/Bundesliga/HolsteinKiel.png"
    ],
    "LeagueOne": [
        "escudos/LeagueOne/AJAuxerre.png",
        "escudos/LeagueOne/ASMonaco.png",
        "escudos/LeagueOne/ASSaintEtienne.png",
        "escudos/LeagueOne/AngersSCO.png",
        "escudos/LeagueOne/FCNantes.png",
        "escudos/LeagueOne/FCToulouse.png",
        "escudos/LeagueOne/LOSCLille.png",
        "escudos/LeagueOne/LeHavreAC.png",
        "escudos/LeagueOne/MontpellierHSC.png",
        "escudos/LeagueOne/OGCNice.png",
        "escudos/LeagueOne/OlympiqueLyon.png",
        "escudos/LeagueOne/OlympiqueMarseille.png",
        "escudos/LeagueOne/ParisSaintGermain.png",
        "escudos/LeagueOne/RCLens.png",
        "escudos/LeagueOne/RCStrasbourgAlsace.png",
        "escudos/LeagueOne/StadeBrestois29.png",
        "escudos/LeagueOne/StadeReims.png",
        "escudos/LeagueOne/StadeRennaisFC.png"
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
        "Bundesliga": ["backgrounds/Bundesliga/Bg_Bundesliga.png"],
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
    
    // Precargar cada imagen con atributo crossOrigin
    escudosAPrecargar.forEach(ruta => {
        const img = new Image();
        img.crossOrigin = "anonymous"; // Importante para evitar problemas CORS
        img.onerror = function() {
            console.warn(`No se pudo cargar: ${ruta}. Intentando como data URL...`);
            
            // Si falla, intentar convertir la imagen a base64 (requiere servidor)
            fetch(ruta)
                .then(response => response.blob())
                .then(blob => {
                    const reader = new FileReader();
                    reader.onload = function() {
                        const dataUrl = reader.result;
                        // Almacenar en cache para uso futuro
                        window.imageCache = window.imageCache || {};
                        window.imageCache[ruta] = dataUrl;
                        console.log(`Imagen convertida a base64: ${ruta}`);
                    };
                    reader.readAsDataURL(blob);
                })
                .catch(err => {
                    console.error(`Error al convertir imagen: ${ruta}`, err);
                });
        };
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
        "LeagueOne": "Ligue 1"
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
        }, 3000); // Tiempo para que termine la animación de salida
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
    
    // Checkbox para logo en blanco
    const logoEnBlancoCheckbox = document.getElementById('logo-blanco-checkbox');
    logoEnBlancoCheckbox.addEventListener('change', () => {
        // Si hay una liga seleccionada, recargar su logo con la nueva configuración
        const ligaSelector = document.getElementById('liga-selector');
        if (ligaSelector.value) {
            cargarLogoLiga(ligaSelector.value);
        }
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
            // Aplicar altura fija de 300px y agregar trazo blanco
            imgEscudo.style.height = '300px';
            imgEscudo.style.width = 'auto';
            // Aplicar múltiples sombras para crear un contorno blanco más grueso
            imgEscudo.style.filter = 
                'drop-shadow(0 0 2px white) ' +
                'drop-shadow(0 0 2px white) ' +
                'drop-shadow(0 0 3px white) ' +
                'drop-shadow(0 0 4px white)';
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
            // Aplicar altura fija de 300px y agregar trazo blanco
            imgEscudo.style.height = '300px';
            imgEscudo.style.width = 'auto';
            // Aplicar múltiples sombras para crear un contorno blanco más grueso
            imgEscudo.style.filter = 
                'drop-shadow(0 0 2px white) ' +
                'drop-shadow(0 0 2px white) ' +
                'drop-shadow(0 0 3px white) ' +
                'drop-shadow(0 0 4px white)';
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
    
    // Generar imagen capturando EXACTAMENTE lo que se ve en pantalla
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
    
    // Establecer un color de fondo para el contenedor que ayude con el contraste de los logos
    ligaContainer.style.backgroundColor = 'transparent';
    
    // Verificar el estado del checkbox para logo en blanco
    const logoEnBlanco = document.getElementById('logo-blanco-checkbox').checked;
    
    // Buscar el logo correspondiente a la liga o competición seleccionada
    
    // Mapeo simplificado de ligas y competiciones a nombres de archivo (primero intentamos webp)
    const mapeoLogos = {
        "LaLiga": ['logosliga/Laliga.webp', 'logosliga/Laliga.png', 'logosliga/Laliga.svg'],
        "Premier": ['logosliga/Premier.webp', 'logosliga/Premier.png', 'logosliga/Premier.svg'],
        "SerieA": ['logosliga/SerieA.png', 'logosliga/SerieA.webp', 'logosliga/SerieA.svg'],
        "Bundesliga": ['logosliga/Bundesliga.png', 'logosliga/Bundesliga.webp', 'logosliga/Bundesliga.svg'],
        "LeagueOne": ['logosliga/LeagueOne.png', 'logosliga/LeagueOne.webp', 'logosliga/LeagueOne.svg'],
        "LigaMX": ['logosliga/LigaMX.png', 'logosliga/LigaMX.webp', 'logosliga/LigaMX.svg'],
        "LigaNacional": ['logosliga/LigaNacionalHonduras.png', 'logosliga/LigaNacional.webp', 'logosliga/LigaNacional.svg'],
        "ChampionsLeague": ['logosliga/ChampionsLeague.png', 'logosliga/ChampionsLeague.webp', 'logosliga/ChampionsLeague.svg', 'logosliga/Champions.png'],
        "EuropaLeague": ['logosliga/EuropaLeague.png', 'logosliga/EuropaLeague.webp', 'logosliga/EuropaLeague.svg', 'logosliga/Europa.png'],
        "Concacaf": ['logosliga/Concacaf.png', 'logosliga/Concacaf.webp', 'logosliga/Concacaf.svg'],
        "Libertadores": ['logosliga/Libertadores.webp', 'logosliga/Libertadores.png', 'logosliga/Libertadores.svg']
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
            console.error(`No se pudo cargar ningún logo para ${formatearNombreLiga(liga)}. Rutas intentadas:`, rutas);
            mostrarNotificacion(`No se encontró ningún logo para ${formatearNombreLiga(liga)}. Seleccione otro torneo o agregue el logo correspondiente.`, 'warning');
            mostrarTextoAlternativo();
            return;
        }
        
        const rutaActual = rutas[indice];
        console.log(`Intentando cargar logo: ${rutaActual} para ${liga}`);
        
        // Crear una nueva imagen para probar
        const img = new Image();
        
        img.onload = function() {
            // Si la imagen carga correctamente, mostrarla
            console.log(`Logo cargado exitosamente: ${rutaActual} para ${liga}`);
            const imgLiga = document.createElement('img');
            imgLiga.src = rutaActual;
            imgLiga.alt = 'Logo Liga';
            
            // Aplicar estilos para altura fija y color blanco
            imgLiga.style.height = '300px'; // Ajustado a 300px según requerimiento
            imgLiga.style.width = 'auto';
            imgLiga.style.maxWidth = '100%';
            imgLiga.style.objectFit = 'contain';
            
            // Aplicar filtro para mostrar el logo en blanco con trazo alrededor SOLO si el checkbox está marcado
            if (logoEnBlanco) {
                const esFormatoPNG = rutaActual.toLowerCase().endsWith('.png');
                
                if (esFormatoPNG) {
                    // Para PNG con posible transparencia, usar una estrategia más suave
                    imgLiga.style.filter = 'brightness(0) invert(1) drop-shadow(0 0 2px white)';
                    imgLiga.style.mixBlendMode = 'lighten';
                } else {
                    // Para otros formatos, usar un filtro más fuerte
                    imgLiga.style.filter = 'brightness(0) invert(1) drop-shadow(0 0 2px white)';
                }
            } else {
                // Si el checkbox no está marcado, solo aplicar un ligero contorno blanco
                imgLiga.style.filter = 'drop-shadow(0 0 2px rgba(255,255,255,0.7))';
            }
            
            ligaContainer.appendChild(imgLiga);
            
            // Mostrar notificación de éxito
            mostrarNotificacion(`${formatearNombreLiga(liga)} seleccionada`, 'info');
        };
        
        img.onerror = function() {
            console.error(`Error al cargar el logo: ${rutaActual} para ${liga}`);
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

// Función para generar la imagen capturando EXACTAMENTE lo que se ve en pantalla
function generarImagen() {
    mostrarNotificacion('Generando imagen, por favor espera...', 'info');
    
    // Referencia al elemento canvas
    const canvasElement = document.getElementById('canvas');
    
    // Guardar la posición de scroll actual
    const scrollPosInicial = {
        x: window.scrollX,
        y: window.scrollY
    };
    
    // Hacer scroll hasta que el canvas sea visible (si no lo está)
    canvasElement.scrollIntoView({ behavior: 'auto', block: 'start' });
    
    // Esperar a que se complete el scroll y el DOM se actualice
    setTimeout(() => {
        // SOLUCIÓN DEFINITIVA: Usar dom-to-image-more para preservar clip-path y todos los estilos
        console.log("Iniciando captura con dom-to-image-more...");
        
        // Generar primero usando dom-to-image-more (mejor soporte para clip-path)
        domtoimage.toPng(canvasElement, {
            quality: 1.0,
            bgcolor: '#000000',
            style: {
                'transform': 'none',
                'transform-origin': 'center'
            },
            filter: (node) => {
                // Asegurarse de que todos los nodos sean incluidos
                return true;
            }
        })
        .then(function(dataUrl) {
            console.log("✅ Imagen capturada exitosamente con dom-to-image-more");
            postProcesarImagen(dataUrl);
        })
        .catch(function(error) {
            console.error("Error con dom-to-image-more:", error);
            console.log("Intentando con domtoimage.more.toPng...");
            
            // Intentar con el namespace alternativo domtoimage.more (disponible en algunas versiones)
            if (typeof domtoimage.more !== 'undefined') {
                domtoimage.more.toPng(canvasElement, {
                    quality: 1.0,
                    bgcolor: '#000000'
                })
                .then(function(dataUrl) {
                    console.log("✅ Imagen capturada con domtoimage.more");
                    postProcesarImagen(dataUrl);
                })
                .catch(function(error) {
                    console.error("Error con domtoimage.more:", error);
                    intentarMetodoHTML2Canvas();
                });
            } else {
                intentarMetodoHTML2Canvas();
            }
        });
        
        // Método fallback usando html2canvas
        function intentarMetodoHTML2Canvas() {
            console.log("Intentando método con html2canvas como fallback...");
            mostrarNotificacion('Intentando método alternativo...', 'info');
            
            html2canvas(canvasElement, {
                useCORS: true,
                allowTaint: true,
                backgroundColor: '#000000',
                scale: 2,
                logging: true,
                foreignObjectRendering: true,
                onclone: function(documentClone) {
                    const canvasClone = documentClone.getElementById('canvas');
                    
                    if (canvasClone) {
                        // Procesar todos los elementos con clip-path
                        const elementosConClipPath = canvasClone.querySelectorAll('*[style*="clip-path"]');
                        console.log(`Procesando ${elementosConClipPath.length} elementos con clip-path...`);
                        
                        elementosConClipPath.forEach(elemento => {
                            const estiloComputado = window.getComputedStyle(elemento);
                            const clipPath = estiloComputado.clipPath;
                            
                            if (clipPath && clipPath !== 'none') {
                                // Forzar el clip-path en el elemento
                                elemento.style.clipPath = clipPath;
                                console.log(`Aplicando clip-path: ${clipPath}`);
                            }
                        });
                    }
                }
            }).then(canvas => {
                postProcesarImagen(canvas.toDataURL('image/png', 1.0));
            }).catch(error => {
                console.error("Error con html2canvas:", error);
                mostrarNotificacion('No se pudo generar la imagen. Por favor, intenta de nuevo.', 'error');
                window.scrollTo(scrollPosInicial.x, scrollPosInicial.y);
            });
        }
        
        // Función para post-procesar la imagen capturada (redimensionar a 1080x1920)
        function postProcesarImagen(dataUrl) {
            // Crear una imagen para procesar
            const img = new Image();
            img.onload = function() {
                // Crear canvas con las dimensiones finales
                const canvasFinal = document.createElement('canvas');
                canvasFinal.width = 1080;
                canvasFinal.height = 1920;
                const ctx = canvasFinal.getContext('2d');
                
                // Dibujar fondo negro
                ctx.fillStyle = '#000000';
                ctx.fillRect(0, 0, 1080, 1920);
                
                // Calcular proporciones
                const aspectRatio = img.width / img.height;
                let targetWidth, targetHeight, offsetX = 0, offsetY = 0;
                
                if (aspectRatio > (1080 / 1920)) {
                    targetWidth = 1080;
                    targetHeight = targetWidth / aspectRatio;
                    offsetY = (1920 - targetHeight) / 2;
                } else {
                    targetHeight = 1920;
                    targetWidth = targetHeight * aspectRatio;
                    offsetX = (1080 - targetWidth) / 2;
                }
                
                // Dibujar la imagen con suavizado de alta calidad
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';
                ctx.drawImage(
                    img,
                    0, 0, img.width, img.height,
                    offsetX, offsetY, targetWidth, targetHeight
                );
                
                // Guardar la imagen final
                imagenGenerada = canvasFinal.toDataURL('image/png', 1.0);
                
                console.log("✅ Imagen post-procesada correctamente");
                mostrarNotificacion('¡Imagen generada con éxito! Ahora puedes descargarla.', 'success');
                
                const descargarBtn = document.getElementById('descargar-btn');
                descargarBtn.disabled = false;
                descargarBtn.classList.add('active');
                
                // Restaurar la posición de scroll
                window.scrollTo(scrollPosInicial.x, scrollPosInicial.y);
                
                // Mostrar vista previa
                mostrarVistaPrevia(imagenGenerada);
            };
            
            img.onerror = function() {
                console.error("Error al cargar la imagen capturada");
                mostrarNotificacion('Error al procesar la imagen. Por favor, intenta de nuevo.', 'error');
                window.scrollTo(scrollPosInicial.x, scrollPosInicial.y);
            };
            
            img.src = dataUrl;
        }
        
        // Función para mostrar vista previa de la imagen
        function mostrarVistaPrevia(imagenSrc) {
            // Crear contenedor para vista previa
            const previewContainer = document.createElement('div');
            previewContainer.style.position = 'fixed';
            previewContainer.style.top = '50%';
            previewContainer.style.left = '50%';
            previewContainer.style.transform = 'translate(-50%, -50%)';
            previewContainer.style.backgroundColor = 'rgba(0,0,0,0.9)';
            previewContainer.style.padding = '20px';
            previewContainer.style.borderRadius = '10px';
            previewContainer.style.zIndex = '10000';
            previewContainer.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
            previewContainer.style.maxWidth = '90%';
            previewContainer.style.maxHeight = '90vh';
            previewContainer.style.display = 'flex';
            previewContainer.style.flexDirection = 'column';
            previewContainer.style.alignItems = 'center';
            
            // Crear imagen de vista previa
            const previewImg = document.createElement('img');
            previewImg.src = imagenSrc;
            previewImg.style.maxWidth = '100%';
            previewImg.style.maxHeight = '80vh';
            previewImg.style.borderRadius = '5px';
            previewImg.style.marginBottom = '15px';
            previewImg.style.boxShadow = '0 0 10px rgba(255,255,255,0.1)';
            
            // Añadir mensaje informativo
            const infoText = document.createElement('p');
            infoText.textContent = 'Imagen generada (1080×1920 px)';
            infoText.style.color = 'white';
            infoText.style.marginBottom = '15px';
            infoText.style.fontWeight = 'bold';
            
            // Crear botón para cerrar
            const closeButton = document.createElement('button');
            closeButton.textContent = 'Cerrar vista previa';
            closeButton.style.padding = '8px 16px';
            closeButton.style.backgroundColor = '#28a745';
            closeButton.style.color = 'white';
            closeButton.style.border = 'none';
            closeButton.style.borderRadius = '4px';
            closeButton.style.cursor = 'pointer';
            closeButton.style.fontWeight = 'bold';
            closeButton.onclick = function() {
                document.body.removeChild(previewContainer);
            };
            
            // Añadir elementos al contenedor
            previewContainer.appendChild(infoText);
            previewContainer.appendChild(previewImg);
            previewContainer.appendChild(closeButton);
            document.body.appendChild(previewContainer);
        }
    }, 300);
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
        "WestHam": "West Ham United",
        "newcastle": "Newcastle",
        "Newcastle": "Newcastle United",
        "Arsenal": "Arsenal FC",
        "Chelsea": "Chelsea FC",
        "Tottenham": "Tottenham Hotspur",
        "Liverpool": "Liverpool FC",
        "Brighton": "Brighton & Hove Albion",
        "Wolves": "Wolverhampton Wanderers",
        "Everton": "Everton FC",
        "Fulham": "Fulham FC",
        "Brentford": "Brentford FC",
        "CrystalPalace": "Crystal Palace",
        "NottinghamForest": "Nottingham Forest",
        "Bournemouth": "AFC Bournemouth",
        "Southampton": "Southampton FC",
        "Leicester": "Leicester City",
        "Ipswich": "Ipswich Town",
        // Equipos de LaLiga
        "AthleticBilbao": "Athletic Bilbao",
        "AtleticoMadrid": "Atlético de Madrid",
        "CAOsasuna": "CA Osasuna",
        "CDLeganes": "CD Leganés",
        "CeltaDeVigo": "Celta de Vigo",
        "DeportivoAlaves": "Deportivo Alavés",
        "FCBarcelona": "FC Barcelona",
        "GetafeCF": "Getafe CF",
        "GironaFC": "Girona FC",
        "RCDEspanyolBarcelona": "RCD Espanyol Barcelona",
        "RCDMallorca": "RCD Mallorca",
        "RayoVallecano": "Rayo Vallecano",
        "RealBetisBalomp": "Real Betis Balompié",
        "RealSociedad": "Real Sociedad",
        "RealValladolidCF": "Real Valladolid CF",
        "SevillaFC": "Sevilla FC",
        "UDLasPalmas": "UD Las Palmas",
        "ValenciaCF": "Valencia CF",
        "VillarrealCF": "Villarreal CF",
        // Equipos de Serie A
        "ACMilan": "AC Milan",
        "ACMonza": "AC Monza",
        "ACFFiorentina": "ACF Fiorentina",
        "ASRoma": "AS Roma",
        "AtalantaBC": "Atalanta BC",
        "BolognaFC1909": "Bologna FC",
        "CagliariCalcio": "Cagliari Calcio",
        "Como1907": "Como 1907",
        "FCEmpoli": "FC Empoli",
        "GenoaCFC": "Genoa CFC",
        "HellasVerona": "Hellas Verona",
        "InterMilan": "Inter Milan",
        "JuventusFC": "Juventus FC",
        "ParmaCalcio1913": "Parma Calcio",
        "SSLazio": "SS Lazio",
        "SSCNapoli": "SSC Napoli",
        "TorinoFC": "Torino FC",
        "USLecce": "US Lecce",
        "UdineseCalcio": "Udinese Calcio",
        "VeneziaFC": "Venezia FC",
        // Equipos de Bundesliga
        "BayerLeverkusen": "Bayer Leverkusen",
        "RBLeipzig": "RB Leipzig",
        "Wolfsburg": "VfL Wolfsburg",
        "EintrachtFrankfurt": "Eintracht Frankfurt",
        "BorussiaMG": "Borussia M'gladbach",
        "Hoffenheim": "TSG Hoffenheim",
        "Stuttgart": "VfB Stuttgart",
        "Mainz05": "Mainz 05",
        "Freiburg": "SC Freiburg",
        "Augsburg": "FC Augsburg",
        "UnionBerlin": "Union Berlin",
        "Bremen": "Werder Bremen",
        "Bochum": "VfL Bochum",
        "FCHeidenheim": "1. FC Heidenheim",
        "StPauli": "FC St. Pauli",
        "HolsteinKiel": "Holstein Kiel",
        // Equipos de Ligue 1
        "AJAuxerre": "AJ Auxerre",
        "ASMonaco": "AS Monaco",
        "ASSaintEtienne": "AS Saint-Étienne",
        "AngersSCO": "Angers SCO",
        "FCNantes": "FC Nantes",
        "FCToulouse": "FC Toulouse",
        "LOSCLille": "LOSC Lille",
        "LeHavreAC": "Le Havre AC",
        "MontpellierHSC": "Montpellier HSC",
        "OGCNice": "OGC Nice",
        "OlympiqueLyon": "Olympique Lyon",
        "OlympiqueMarseille": "Olympique Marseille",
        "ParisSaintGermain": "Paris Saint-Germain",
        "RCLens": "RC Lens",
        "RCStrasbourgAlsace": "RC Strasbourg Alsace",
        "StadeBrestois29": "Stade Brestois 29",
        "StadeReims": "Stade Reims",
        "StadeRennaisFC": "Stade Rennais FC",
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