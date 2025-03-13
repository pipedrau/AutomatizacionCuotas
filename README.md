# Automatización de Piezas Gráficas Hondubet

Este proyecto permite automatizar la creación de piezas gráficas para la casa de apuestas Hondubet, generando imágenes con fondos, logos de ligas, competiciones y escudos de equipos personalizables.

## Características

- **Múltiples formatos de maquetación**: 1, 2 o 3 enfrentamientos
- **Fondos específicos por liga/competición**: Los fondos se cargan según la liga o competición seleccionada
- **Fecha actualizada automáticamente**: Se muestra el día actual
- **Interfaz de usuario intuitiva**: Panel de control para seleccionar todos los elementos
- **Diseño responsivo**: Se adapta a diferentes tamaños de pantalla

## Estructura de carpetas

```
.
├── index.html             # Archivo principal HTML
├── styles.css             # Estilos CSS
├── script.js              # Lógica JavaScript
├── LogoHondubet.png       # Logo de Hondubet
├── backgrounds/           # Fondos organizados por ligas y competiciones
│   ├── Premier/
│   ├── LaLiga/
│   ├── SerieA/
│   ├── Bundesliga/
│   ├── LeagueOne/
│   ├── LigaMX/
│   ├── LigaNacional/
│   ├── ChampionsLeague/
│   ├── EuropaLeague/
│   └── Concacaf/
├── escudos/               # Escudos de equipos
└── logosliga/             # Logos de ligas y competiciones
```

## Uso

1. Selecciona el formato según el número de enfrentamientos
2. Selecciona la liga o competición deseada
3. Elige un fondo (o usa el aleatorio)
4. Selecciona los escudos de los equipos
5. Genera la imagen
6. Descarga la imagen resultante

## Futuras mejoras

- Implementación completa de los formatos para 2 y 3 enfrentamientos
- Generación y descarga de imágenes
- Añadir más fondos, logos y escudos
- Mejorar la personalización de textos y estilos

## Desarrollado por

Intercall Tech 

# Automatización de Cuotas

Aplicación web para la generación automatizada de imágenes con información de cuotas de apuestas deportivas para diferentes ligas y competiciones.

## Características

- Generación de imágenes con diseños personalizados para partidos de fútbol
- Soporte para múltiples ligas y competiciones (Premier League, LaLiga, Champions League, etc.)
- Selección de escudos de equipos desde una biblioteca integrada
- Personalización de cuotas para local, empate y visitante
- Configuración de hora del partido
- Visualización de nombres de equipos en formato adaptativo
- Descarga de imágenes en alta calidad

## Uso

1. Selecciona el formato deseado (1, 2 o 3 enfrentamientos)
2. Elige la liga o competición
3. Selecciona los escudos de los equipos local y visitante
4. Ajusta la hora del partido
5. Personaliza las cuotas según sea necesario
6. Haz clic en "Generar imagen" para crear la imagen
7. Descarga la imagen generada

## Estructura del proyecto

### Organización modular

El proyecto está organizado en módulos para facilitar el mantenimiento y la expansión de la aplicación:

- **Módulo de evento**: Contiene los elementos relacionados con la información del partido
  - `hora-partido-container`: Muestra la hora del partido
  - `match-banner-container`: Banner con los nombres de los equipos y el "VS"
  - `cuotas-container`: Muestra las cuotas de apuesta (local, empate, visitante)

Esta estructura modular es fundamental para futuras implementaciones, como la adición de más partidos o formatos alternativos.

### Archivos principales

- `index.html`: Interfaz principal de la aplicación
- `styles.css`: Estilos y diseño de la interfaz
- `script.js`: Lógica de la aplicación
- `escudos/`: Carpeta con los escudos de equipos organizados por liga
- `backgrounds/`: Fondos para cada liga/competición
- `logosliga/`: Logos de las diferentes ligas y competiciones

### Especificaciones técnicas

- **Dimensiones del canvas**: La relación de aspecto del canvas es siempre de 1080x1920 píxeles (ancho x alto)
- Esta relación de aspecto debe mantenerse en todas las implementaciones y actualizaciones futuras

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- html2canvas / dom-to-image (para la generación de imágenes)

## Desarrollado por

Intercall Tech - 2024 