# Base de datos Calendario
---

Este proyecto es el backend de una aplicación Calendario. Gracias al backend, podremos registrarnos/logearnos con usuario y
contraseña. Además, tendremos a nuestra disposición un CRUD para Eventos y solo los usuarios que hayan creado el evento pueden
editar o borrar el evento. 

---

## Deploy en Railway 
---

[Link del proyecto en Railway](http://calendar-backend-production-fac4.up.railway.app/) 🌎


---

## Instrucciones

---

- Abrimos postman donde copiaremos el link del proyecto y ya podremos empezar a lanzar peticiones.

---

## Endpoints

---

<h4><strong>Usuarios</strong></h4>


* POST "/api/auth/register" para registrarnos como usurarios.

Ejemplo de campos a enviar/rellenar:
```
{
    "name": "Susana Horia",
    "email": "shusha@gmail.com",
    "password": "123456789"
}
```
<br>

* POST "/api/" para loggearnos como usuarios

Ejemplo de campos a enviar/rellenar:
```
{
    "email": "shusha@gmail.com",
    "password": "123456789"
}
```
---

<h4><strong>Eventos</strong></h4>

---


* <strong>GET "/api/event" este Endpoint podremos crear un Evento</strong>

Antes de hacer la request, asegurarse de haber puesto en el token generado con el login en "Authorization/Type: Bearer Token"

<br>

* <strong>POST "/api/event" para buscar todos los Eventos</strong>

Se necesita Token

Ejemplo de campos a enviar/rellenar:
```
{
    "title": "Buscar la piedra del Poder",
    "start": "2",
    "end": "10000000",
    "notes": "Planeta: La Tierra"
}
```
<br>

* <strong>PUT "/api/event/:id" para editar un Evento (solo los usuarios )</strong>

Se necesita Token

<br>

* <strong>DELETE "/api/event/:id" para eliminar un Evento</strong> 

Se necesita Token

<br>

---

<h4><strong>Herramientas</strong> 🛠️</h4>

---

- JavaScript

- MongoDB

- Railway

---

<h4><strong>Diseño y Producido</strong> ✒️</h4>

---

Lionel M. Garcia Bustos