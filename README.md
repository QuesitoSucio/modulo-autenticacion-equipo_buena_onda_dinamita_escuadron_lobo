![Image](https://github.com/user-attachments/assets/3536ee83-86b0-4960-85da-99181555476d)

Módulo de Autenticación – Equipo 3

Una página web desarrollada en Vue 3, de tipo estática, que implementa un sistema de registro e inicio de sesión de usuarios.
El proyecto incluye validación de correo electrónico, generación de tokens, almacenamiento de sesión en el Local Storage y un dashboard accesible únicamente para usuarios autenticados.
Este trabajo se realizó como actividad práctica para aplicar buenas prácticas de desarrollo, trabajo colaborativo en GitHub y principios básicos de clean code.

• Objetivo del módulo.

El objetivo principal de este módulo es implementar un sistema sencillo de autenticación de usuarios que sirva como base para comprender los procesos de validación y manejo de sesiones en aplicaciones web.
Se buscó no solo lograr el funcionamiento técnico, sino también aplicar buenas prácticas en el uso de GitHub, organizando el desarrollo a través de un tablero en GitHub Projects, documentando las historias de usuario y asignando responsabilidades claras a cada integrante del equipo.

• Lista de historias de usuario.

  - Como usuario nuevo quiero registrarme con mi correo y contraseña para crear una cuenta en la aplicación.

  - Como usuario registrado quiero iniciar sesión con mi correo y contraseña para acceder al dashboard de la aplicación.

  - Como usuario autenticado quiero mantener mi sesión activa mediante un token almacenado en el Local Storage para no tener que iniciar sesión cada vez.

Cada historia de usuario fue pensada para cubrir una parte fundamental del flujo de autenticación: primero el registro, luego el inicio de sesión y finalmente la persistencia de la sesión para mejorar la experiencia del usuario.

• Enlace al tablero de GitHub Projects.

https://github.com/users/QuesitoSucio/projects/5

En este tablero se organizaron las tareas del equipo, distribuyendo los issues según el tipo de trabajo requerido (análisis, desarrollo y pruebas). Se crearon columnas personalizadas para seguir el progreso y se asignaron responsables de acuerdo con las actividades de cada integrante.

• Integrantes del equipo y roles.

El módulo fue desarrollado por el Equipo 3, conformado por:

Lizbeth – gestión completa del GitHub Projects y seguimiento del flujo de trabajo.

Daniela – desarrollo de la funcionalidad de inicio de sesión.

Sayuri – apoyo en el desarrollo de la funcionalidad de inicio de sesión.

Camilo – desarrollo de la página principal mostrada al iniciar sesión (dashboard).

Duván – desarrollo de la funcionalidad de registro de usuarios.

• Descripción de la implementación.

El módulo se desarrolló utilizando Vue 3 y se centró en los siguientes aspectos:

Validación de correo electrónico:
Se implementó una validación basada en expresiones regulares para verificar que el formato del correo ingresado fuera correcto, asegurando que solo se acepten entradas válidas como usuario@dominio.com
.

Registro de usuarios:
El sistema permite que nuevos usuarios se registren ingresando su correo y contraseña. Estos datos se almacenan de forma local para simular un registro en una base de datos real.

Inicio de sesión y generación de token:
Cuando un usuario registrado inicia sesión, se genera un token único que se guarda en el Local Storage del navegador. Este token identifica que el usuario está autenticado y le permite acceder al dashboard.

Persistencia de la sesión:
El uso del Local Storage garantiza que el usuario pueda mantener su sesión iniciada incluso si se recarga la página, mejorando la continuidad en la navegación.

Cierre de sesión:
El cierre de sesión elimina el token del Local Storage. De esta manera, el acceso al dashboard queda bloqueado hasta que el usuario vuelva a iniciar sesión.

En conjunto, estas funciones cubren el ciclo básico de autenticación en una aplicación web, demostrando la importancia de la validación de datos, el manejo de tokens y la persistencia de sesión.
