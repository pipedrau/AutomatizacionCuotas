#!/bin/bash

# Crear directorio temporal para descargar
mkdir -p temp_logos

# Descargar logos de LaLiga
echo "Descargando logos de LaLiga..."

# Lista de equipos de LaLiga
equipos=(
    "Athletic%20Bilbao=AthleticBilbao"
    "Atl%C3%A9tico%20de%20Madrid=AtleticoMadrid"
    "CA%20Osasuna=CAOsasuna"
    "CD%20Legan%C3%A9s=CDLeganes"
    "Celta%20de%20Vigo=CeltaDeVigo"
    "Deportivo%20Alav%C3%A9s=DeportivoAlaves"
    "FC%20Barcelona=FCBarcelona"
    "Getafe%20CF=GetafeCF"
    "Girona%20FC=GironaFC"
    "RCD%20Espanyol%20Barcelona=RCDEspanyolBarcelona"
    "RCD%20Mallorca=RCDMallorca"
    "Rayo%20Vallecano=RayoVallecano"
    "Real%20Betis%20Balompi%C3%A9=RealBetisBalomp"
    "Real%20Madrid=RealMadrid"
    "Real%20Sociedad=RealSociedad"
    "Real%20Valladolid%20CF=RealValladolidCF"
    "Sevilla%20FC=SevillaFC"
    "UD%20Las%20Palmas=UDLasPalmas"
    "Valencia%20CF=ValenciaCF"
    "Villarreal%20CF=VillarrealCF"
)

# URL base del repositorio
base_url="https://raw.githubusercontent.com/luukhopman/football-logos/master/logos/Spain%20-%20LaLiga"

# Descargar cada logo
for equipo in "${equipos[@]}"; do
    # Separar el nombre URL-encoded del nombre del archivo
    IFS="=" read -r url_nombre archivo_nombre <<< "$equipo"
    
    # URL completa para descargar
    url="$base_url/$url_nombre.png"
    
    # Ruta de destino
    destino="escudos/LaLiga/$archivo_nombre.png"
    
    echo "Descargando $url_nombre..."
    curl -s -o "$destino" "$url"
    
    if [ $? -eq 0 ]; then
        echo "✅ Logo de $url_nombre descargado correctamente"
    else
        echo "❌ Error al descargar $url_nombre"
    fi
done

echo "¡Descarga completada!" 