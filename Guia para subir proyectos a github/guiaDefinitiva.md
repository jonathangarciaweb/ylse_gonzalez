## Guía Definitiva para Subir y Desplegar un Proyecto
Sigue estos pasos para cada uno de tus proyectos restantes. Usaremos un proyecto imaginario llamado proyecto-nuevo como ejemplo.

## Fase 1: Subir el Proyecto a GitHub
Paso 1: Crear el Repositorio Remoto en GitHub.com

Ve a tu cuenta de GitHub.

Haz clic en el ícono + (arriba a la derecha) y selecciona "New repository".

Nombre del Repositorio: Dale un nombre idéntico al de tu carpeta local (ej: proyecto-nuevo).

Descripción: Escribe una breve descripción del proyecto.

Público/Privado: Asegúrate de que sea Público.

Importante: NO marques ninguna de las casillas para añadir README, .gitignore o licencia.

Haz clic en "Create repository".

En la siguiente página, copia la URL del repositorio. La necesitarás pronto.

Paso 2: Conectar y Subir tu Proyecto desde la Terminal

Abre tu terminal (Git Bash).

Navega dentro de la carpeta de tu proyecto en tu computadora.

Bash

cd ruta/a/la/carpeta/de/tu/proyecto-nuevo
Ejecuta la siguiente secuencia de 5 comandos en orden:

Bash

# 1. Inicializa Git en la carpeta (solo si nunca lo has hecho aquí)
git init

# 2. Prepara todos los archivos para guardarlos
git add .

# 3. Guarda una "foto" de tus archivos con un mensaje descriptivo
git commit -m "Commit inicial del proyecto nuevo"

# 4. Conecta tu carpeta local con el repositorio de GitHub
# (Pega aquí la URL que copiaste de GitHub)
git remote add origin [URL-del-repositorio-en-GitHub]

# 5. Sube tu código a GitHub (recuerda usar 'master' o 'main' según tu rama)
git push -u origin master
¡Fase 1 completada! Tu código ya está seguro en GitHub.

## Fase 2: Desplegar el Proyecto en Netlify
Paso 3: Importar tu Proyecto a Netlify

Ve a tu cuenta de Netlify.

Haz clic en "Add new site" y selecciona "Import an existing project".

Elige GitHub como proveedor.

Paso 4: Configurar y Desplegar

Busca y selecciona el repositorio que acabas de subir (ej: proyecto-nuevo).

Netlify te mostrará las opciones de despliegue. Para tus proyectos estáticos:

Base directory: Déjalo vacío.

Build command: Déjalo vacío.

Publish directory: Déjalo vacío.

Haz clic en el botón "Deploy site".

¡Fase 2 completada! En menos de un minuto, tu sitio estará en línea con una nueva URL.

## Consejo Final
La primera vez es la más difícil. Verás que con el segundo proyecto te sentirás más seguro, y para el tercero, lo harás casi de memoria. Este es el flujo de trabajo profesional que te servirá para toda tu carrera. ¡Mucho éxito!


URL del repositorio:

Proyecto Clinica Odontologica
https://github.com/jonathangarciaweb/dra-perez-final.git

Proyecto Marca Personal

https://github.com/jonathangarciaweb/ylse_gonzalez.git