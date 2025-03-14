#!/bin/bash

# Script para descargar logos de ligas y competiciones
# Uso: ./download_logo.sh [nombre_liga] [url] [formato]
# Ejemplo: ./download_logo.sh LaLiga https://example.com/logo.png png

# Verificar argumentos
if [ $# -lt 3 ]; then
    echo "Uso: $0 [nombre_liga] [url] [formato]"
    echo "Ejemplo: $0 LaLiga https://example.com/logo.png png"
    exit 1
fi

LIGA=$1
URL=$2
FORMATO=$3

# Crear carpeta logosliga si no existe
mkdir -p logosliga

# Descargar el logo
echo "Descargando logo de $LIGA desde $URL en formato $FORMATO..."
curl -o "logosliga/$LIGA.$FORMATO" "$URL"

# Verificar si la descarga fue exitosa
if [ $? -eq 0 ]; then
    echo "Logo de $LIGA descargado exitosamente como logosliga/$LIGA.$FORMATO"
    
    # Listar el archivo para confirmar
    ls -lh "logosliga/$LIGA.$FORMATO"
else
    echo "Error al descargar el logo de $LIGA"
    exit 1
fi

echo "No olvides actualizar el mapeo en script.js si este es un nuevo formato para esta liga." 