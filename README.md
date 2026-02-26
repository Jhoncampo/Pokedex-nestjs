<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>


# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
npm install
```
3. Tener Nest CLI instalado
```bash
npm i -g @nestjs/cli
```
4. Levantar la base de datos
```bash
docker-compose up -d
```

5. Clonar el archivo __.env.template__ y renombrar la copia a __.env__

6. Llenar las variables de entorno definidas en el ```.env```

7. Ejecutar la aplicación en dev:
```bash
npm run start:dev
```

8. Reconstruir la base de datos con la semana
```
http://localhost:3000/api/v2/seed
```

## Stack usuado
* MongoDb
* Nest

## Production build
1. Crear el archivo ```.env.prod```
2. Llenar las variables de entorno de prod
3. Crear la imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
4. Volver a correr la imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```

## Libraries
* Joi: Validación de variables de entorno

## Recursos
Recursos para el docker
* https://gist.github.com/Klerith/e7861738c93712840ab3a38674843490

