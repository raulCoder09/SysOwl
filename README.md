# SysOwl
 SysOwl es una herramienta de monitoreo de sistemas, diseñada como una réplica de htop, y desarrollada en TypeScript. Compatible con Linux, Windows y macOS, SysOwl ofrece a los usuarios supervisar en tiempo real el rendimiento de sus sistemas asi como la gestion de procesos.




comandos para windows

Comandos de Información del Sistema

systeminfo: Muestra información detallada del sistema, como la versión de Windows, memoria, procesador, etc.

hostname: Muestra el nombre del equipo.

ver: Muestra la versión actual de Windows.

ipconfig: Muestra la configuración de red, incluyendo direcciones IP, máscara de subred y puerta de enlace predeterminada.

whoami: Muestra el usuario actual con el que estás conectado.

tasklist: Lista todos los procesos en ejecución en el sistema.

taskkill /IM <nombre_proceso> /F: Termina un proceso específico (reemplaza <nombre_proceso> con el nombre del proceso que quieres terminar).

Comandos de Navegación y Archivos

cd: Muestra el directorio actual de trabajo.

dir: Lista los archivos y carpetas en el directorio actual.

mkdir <nombre_directorio>: Crea un nuevo directorio.

rmdir <nombre_directorio> /S /Q: Elimina un directorio y su contenido de forma recursiva (/S) y sin confirmación (/Q).

del <nombre_archivo>: Elimina un archivo específico.

copy <archivo_origen> <destino>: Copia un archivo a una ubicación específica.

move <archivo_origen> <destino>: Mueve un archivo a otra ubicación.

Comandos de Administración de Red

ping <dirección>: Envía paquetes de datos a una dirección IP o dominio para verificar la conectividad.

netstat -an: Muestra todas las conexiones de red y puertos en uso.

tracert <dirección>: Rastrea la ruta que toman los paquetes para llegar a una dirección IP o dominio.

net user: Muestra todos los usuarios en la computadora.

net use: Muestra los recursos compartidos de red conectados.

Comandos de Configuración del Sistema

chkdsk: Comprueba el disco duro en busca de errores.

sfc /scannow: Escanea y repara archivos del sistema.

shutdown /s /f /t <segundos>: Apaga el sistema después de un número de segundos. Por ejemplo, shutdown /s /f /t 0 apaga inmediatamente.

shutdown /r /f /t <segundos>: Reinicia el sistema después de un número de segundos.