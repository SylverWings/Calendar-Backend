# Base de datos Calendario
---

Este proyecto es el backend de una aplicación Calendario. Gracias al backend, podremos registrarnos/logearnos con usuario y
contraseña. Además, tendremos a nuestra disposición un CRUD para Eventos y solo los usuarios que hayan creado el evento pueden
editar o borrar el evento. 

---

## Deploy en Railway 
---

[Link del proyecto en Railway]( /) 🌎


DELETE ---

## Instrucciones

---

- Abrimos postman donde copiaremos el link del proyecto y ya podremos empezar a lanzar peticiones.

---

## Endpoints

---

<h4>Usuarios</h4>


* POST "/api/auth/register" para registrarnos como usurarios.

Ejemplo de campos a enviar/rellenar:

{
    "name": "Susana Horia",
    "email": "shusha@gmail.com",
    "password": "123456789"
}

<br>

* POST "/api/" para loggearnos como usuarios

Ejemplo de campos a enviar/rellenar:

{
    "email": "shusha@gmail.com",
    "password": "123456789"
}

---

<h4>Eventos</h4>

---


* GET "/api/event" este Endpoint podremos crear un Evento

Antes de hacer la request, asegurarse de haber puesto en el token generado con el login en "Authorization/Type: Bearer Token"

<br>

* POST "/api/event" para buscar todos los Eventos

- Se necesita Token

Ejemplo de campos a enviar/rellenar:

{
    "title": "Buscar la piedra del Poder",
    "start": "2",
    "end": "10000000",
    "notes": "Planeta: La Tierra"
}

<br>

* PUT "/api/event/:id" para editar un Evento (solo los usuarios )

- Se necesita Token

<br>

* DELETE "/api/event/:id" para eliminar un Evento

- Se necesita Token

<br>

---

<h4>Herramientas 🛠️</h4>

---

- JavaScript

- MongoDB

- Railway

---

<h4>Diseño y Producido ✒️</h4>

---


Lionel M. Garcia Bustos