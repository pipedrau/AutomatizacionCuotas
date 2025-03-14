#!/bin/bash

# Crear directorio para los escudos de Ligue 1
mkdir -p escudos/LeagueOne

# Descargar logos de Ligue 1
echo "Descargando logos de Ligue 1..."

# Lista de equipos de Ligue 1
equipos=(
    "AJ%20Auxerre=AJAuxerre"
    "AS%20Monaco=ASMonaco"
    "AS%20Saint-Étienne=ASSaintEtienne"
    "Angers%20SCO=AngersSCO"
    "FC%20Nantes=FCNantes"
    "FC%20Toulouse=FCToulouse"
    "LOSC%20Lille=LOSCLille"
    "Le%20Havre%20AC=LeHavreAC"
    "Montpellier%20HSC=MontpellierHSC"
    "OGC%20Nice=OGCNice"
    "Olympique%20Lyon=OlympiqueLyon"
    "Olympique%20Marseille=OlympiqueMarseille"
    "Paris%20Saint-Germain=ParisSaintGermain"
    "RC%20Lens=RCLens"
    "RC%20Strasbourg%20Alsace=RCStrasbourgAlsace"
    "Stade%20Brestois%2029=StadeBrestois29"
    "Stade%20Reims=StadeReims"
    "Stade%20Rennais%20FC=StadeRennaisFC"
)

# URL base del repositorio
base_url="https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/France%20-%20Ligue%201"

# Descargar cada logo
for equipo in "${equipos[@]}"; do
    # Separar el nombre URL-encoded del nombre del archivo
    IFS="=" read -r url_nombre archivo_nombre <<< "$equipo"
    
    # URL completa para descargar
    url="$base_url/$url_nombre.png"
    
    # Ruta de destino
    destino="escudos/LeagueOne/$archivo_nombre.png"
    
    echo "Descargando $url_nombre..."
    curl -s -o "$destino" "$url"
    
    if [ $? -eq 0 ]; then
        echo "✅ Logo de $url_nombre descargado correctamente"
    else
        echo "❌ Error al descargar $url_nombre"
    fi
done

echo "¡Descarga completada!" 