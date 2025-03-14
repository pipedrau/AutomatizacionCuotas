#!/bin/bash

# Crear directorio para los escudos de Bundesliga
mkdir -p escudos/Bundesliga

# Descargar logos de Bundesliga
echo "Descargando logos de Bundesliga..."

# Lista de equipos de Bundesliga
equipos=(
    "1.FC%20Heidenheim%201846=FCHeidenheim"
    "1.FC%20Union%20Berlin=UnionBerlin"
    "1.FSV%20Mainz%2005=Mainz05"
    "Bayer%2004%20Leverkusen=BayerLeverkusen"
    "Bayern%20Munich=BayernMunich"
    "Borussia%20Dortmund=BorussiaDortmund"
    "Borussia%20M%C3%B6nchengladbach=BorussiaMG"
    "Eintracht%20Frankfurt=EintrachtFrankfurt"
    "FC%20Augsburg=Augsburg"
    "FC%20St.%20Pauli=StPauli"
    "Holstein%20Kiel=HolsteinKiel"
    "RB%20Leipzig=RBLeipzig"
    "SC%20Freiburg=Freiburg"
    "SV%20Werder%20Bremen=Bremen"
    "TSG%201899%20Hoffenheim=Hoffenheim"
    "VfB%20Stuttgart=Stuttgart"
    "VfL%20Bochum=Bochum"
    "VfL%20Wolfsburg=Wolfsburg"
)

# URL base del repositorio
base_url="https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Germany%20-%20Bundesliga"

# Descargar cada logo
for equipo in "${equipos[@]}"; do
    # Separar el nombre URL-encoded del nombre del archivo
    IFS="=" read -r url_nombre archivo_nombre <<< "$equipo"
    
    # URL completa para descargar
    url="$base_url/$url_nombre.png"
    
    # Ruta de destino
    destino="escudos/Bundesliga/$archivo_nombre.png"
    
    echo "Descargando $url_nombre..."
    curl -s -o "$destino" "$url"
    
    if [ $? -eq 0 ]; then
        echo "✅ Logo de $url_nombre descargado correctamente"
    else
        echo "❌ Error al descargar $url_nombre"
    fi
done

echo "¡Descarga completada!" 