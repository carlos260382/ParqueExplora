Prueba Técnica Backend/Frontend 
# Solución de Prueba Técnica:
## Landing desarrollada en el frontend con React JS, en el backend con Node.JS, Express y MongoDB.
## Instrucciones para levantar el proyecto:

- 	Una vez clonado el repositorio y/o descargada la carpeta en el disco duro de su pc proceda de la siguiente manera:

Verificar primero que se tenga instalado Node en su pc; sino lo tiene puede consultar el siguiente link a la documentación oficial, donde encontrara instrucciones para hacerlo:
https://nodejs.org/es/download/

Sera necesario tener también instalado MongoDB (sistema de base de datos NoSQL), para hacerlo de forma local puede consultar la siguiente documentación https://www.mongodb.com/try/download/community

- En la carpeta Frontend ejecute “npm install”, para posteriormente inicializar el proyecto con “npm start”.

Cree un archivo .env donde puede definir las siguientes variables de entorno 

SKIP_PREFLIGHT_CHECK=true
PUBLIC_URL=http://localhost:3000/

- En la carpeta backend una vez haya instalado mongoDB (tutorial de 10 minutos donde explican todo el procedimiento https://www.youtube.com/watch?v=-GLMGXkXa7k&t=584s); puede proceder a ejecutar “npm install”, para posteriormente inicializar el proyecto con “npm run dev”.

Cree un archivo .env donde puede definir las siguientes variables de entorno 

MONGODB_URL=mongodb://localhost/parqueExplora
API_KEY_IMAGE=13116435-639def09e98ce0f9f1aa0877b
KEY_NODEMAILER=ekcocqalmsequlhp

Dependencias adicionales:

Para el servicio de envío de correo electrónico se uso la librería “Nodemailer”; que permite enviar el correo electrónico al usuario desde el lado del servidor en este caso desde Node.js; si desean conocer mas puede ingresar a la documentación https://nodemailer.com/about/

Para el cargue de las imágenes del pc para guardar en la base de datos se uso la librería “Multer” https://www.npmjs.com/package/multer.

Para la consulta de imágenes se uso la API de Pixabay https://pixabay.com/api/docs/
