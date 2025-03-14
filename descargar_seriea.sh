#!/bin/bash

# Crear directorio para los escudos de Serie A
mkdir -p escudos/SerieA

# Descargar logos de Serie A
echo "Descargando logos de Serie A..."

# Lista de equipos de Serie A
equipos=(
    "AC%20Milan=ACMilan"
    "AC%20Monza=ACMonza"
    "ACF%20Fiorentina=ACFFiorentina"
    "AS%20Roma=ASRoma"
    "Atalanta%20BC=AtalantaBC"
    "Bologna%20FC%201909=BolognaFC1909"
    "Cagliari%20Calcio=CagliariCalcio"
    "Como%201907=Como1907"
    "FC%20Empoli=FCEmpoli"
    "Genoa%20CFC=GenoaCFC"
    "Hellas%20Verona=HellasVerona"
    "Inter%20Milan=InterMilan"
    "Juventus%20FC=JuventusFC"
    "Parma%20Calcio%201913=ParmaCalcio1913"
    "SS%20Lazio=SSLazio"
    "SSC%20Napoli=SSCNapoli"
    "Torino%20FC=TorinoFC"
    "US%20Lecce=USLecce"
    "Udinese%20Calcio=UdineseCalcio"
    "Venezia%20FC=VeneziaFC"
)

# URL base del repositorio
base_url="https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Italy%20-%20Serie%20A"

# Descargar cada logo
for equipo in "${equipos[@]}"; do
    # Separar el nombre URL-encoded del nombre del archivo
    IFS="=" read -r url_nombre archivo_nombre <<< "$equipo"
    
    # URL completa para descargar
    url="$base_url/$url_nombre.png"
    
    # Ruta de destino
    destino="escudos/SerieA/$archivo_nombre.png"
    
    echo "Descargando $url_nombre..."
    curl -s -o "$destino" "$url"
    
    if [ $? -eq 0 ]; then
        echo "✅ Logo de $url_nombre descargado correctamente"
    else
        echo "❌ Error al descargar $url_nombre"
    fi
done

echo "¡Descarga completada!" 