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

# Automatización de Cuotas para Hondubet

Esta aplicación permite crear rápidamente imágenes para promocionar apuestas deportivas, generando gráficos profesionales con cuotas, escudos de equipos y fondos personalizados.

## Problema de CORS y solución

Si estás viendo mensajes de error como:

```
SecurityError: Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported.
```

o 

```
Access to image has been blocked by CORS policy
```

Esto se debe a restricciones de seguridad del navegador al abrir archivos locales directamente con `file://`. La solución es **usar el servidor local incluido** en este proyecto.

## Instrucciones para usar el servidor local

1. Asegúrate de tener **Node.js** instalado ([Descargar Node.js](https://nodejs.org/))
2. Abre una terminal en la carpeta de este proyecto
3. Instala las dependencias (solo la primera vez):
   ```
   npm install
   ```
4. Inicia el servidor:
   ```
   npm start
   ```
5. Abre en tu navegador:
   ```
   http://localhost:3000
   ```

## Características principales

- Selección de ligas y competiciones
- Múltiples escudos de equipos organizados por liga
- Formatos para 1 o más enfrentamientos
- Generación y descarga de imágenes de alta calidad
- Compatibilidad con formatos PNG y WebP

## Solución de problemas

Si tienes problemas generando imágenes:

1. **Usa siempre el servidor local** como se indica arriba
2. Asegúrate de que tu navegador esté actualizado (recomendado Chrome o Firefox)
3. Verifica que tienes conexión a internet para cargar las bibliotecas necesarias
4. Si cambias de navegador, puede ser necesario recargar la página

## Navegadores compatibles

- Google Chrome (recomendado)
- Firefox
- Safari
- Edge

## Estructura del proyecto

- `index.html`: Interfaz principal
- `script.js`: Funcionalidad JavaScript
- `styles.css`: Estilos CSS
- `servidor.js`: Servidor web simple para evitar problemas de CORS
- `/escudos/`: Carpeta con todos los logos de equipos
- `/backgrounds/`: Fondos para las imágenes
- `/logosliga/`: Logos de las ligas y competiciones

## Desarrollado por

Intercall Tech - 2024 