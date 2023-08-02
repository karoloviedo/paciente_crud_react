En esta documentación, se describe un CRUD (Create, Read, Update, Delete) básico en REACT como front y el consumo de la api en PHP utilizando PostgreSQL como base de datos. El objetivo de este CRUD es gestionar una tabla "pacientes" que contendrá información sobre pacientes.

Requisitos previos
1-Tener un servidor web local instalado (por ejemplo, XAMPP o WAMP o LARAGON) para ejecutar el código PHP.
2-Tener PostgreSQL instalado en el servidor local o remoto.
3-Crear una base de datos llamada "db_paciente" en PostgreSQL y una tabla "pacientes" con campos "id", "nombre", "apellido", "telefono", "email", y "genero".

npm install --> instalar dependencias

npm install styled-components -- estilos

npm install bootstrap -- boostrap

npm install react-toastify --> toast notify

php 5.4 -- VERSION 

react -- 13.4.0 -- VERSION

Node v18.12.1 --VERSION 

Postgresql v10 --VERSION 

base de datos: db_paciente

usuario: postgres contraseña: 12345678

const api="http://localhost/paciente-react/paciente/"; --> direccion de la api en php

http://localhost:3000/ --> ESTA URL ES LA QUE CORRE EL PROYECTO DE REACT ESTA SE CORRE EN LARAGON QUE ES UN GESTOR DE BASE DE DATOS PERO SI DESEA PUEDE HACERLO EN LOCALHOST

para correr el proyecto se debe de entrar en la consola a la raiz del proyecto de react y dar este comando:

npm start ó npm run start

Descripción del Proyecto:

El proyecto consiste en una aplicación web que permite realizar las siguientes operaciones sobre la tabla "pacientes":

Crear: Permite agregar nuevos pacientes a la base de datos proporcionando los datos necesarios, como nombre, apellido, teléfono, correo electrónico y género.

Leer: Permite visualizar una lista de todos los pacientes registrados en la base de datos, mostrando sus datos principales.

Actualizar: Permite editar la información de un paciente existente mediante un formulario de edición que muestra los datos actuales y permite modificarlos.

Eliminar: Permite eliminar un paciente seleccionado de la base de datos.

Estructura del Proyecto:

El proyecto sigue una estructura organizada para separar las responsabilidades y mantener un código limpio y mantenible:

paciente/index.php: Esta carpeta tiene el api en php este archivo PHP se encarga de recibir peticiones HTTP y ejecutar diferentes acciones en función de los parámetros enviados a través de la URL o del cuerpo de la petición. Estas acciones pueden ser:

Consultar un paciente por su ID utilizando el parámetro "consultar".
Borrar un paciente por su ID utilizando el parámetro "borrar".
Insertar un nuevo paciente en la base de datos utilizando el parámetro "insertar" y datos enviados mediante el método POST en formato JSON.
Actualizar los datos de un paciente existente utilizando el parámetro "actualizar" y datos enviados mediante el método POST en formato JSON.
La API también responde a la solicitud sin parámetros para devolver todos los registros de la tabla "paciente".

public/: Esta carpeta contiene archivos estáticos como el archivo index.html, que es la página principal de la aplicación. Aquí también puedes colocar otros archivos como imágenes, íconos, etc.

src/: Esta carpeta es donde se encuentra la mayor parte del código de la aplicación.

assets/: Aquí se almacenan recursos como imágenes, archivos de fuentes, etc.

components/: Esta carpeta contiene componentes reutilizables que se utilizan en varias partes de la aplicación.

pages/: Aquí se encuentran los componentes que representan las diferentes páginas de la aplicación.

services/: La aplicación se conecta a una API en php.

styles/: En esta carpeta, puedes colocar archivos de estilos globales o variables para la aplicación.

App.js: Es el componente raíz de la aplicación donde se definen las rutas y se renderizan las diferentes páginas.

index.js: Es el punto de entrada de la aplicación, donde se conecta la aplicación con el archivo index.html y se monta en el elemento DOM.

reportWebVitals.js: Archivo para informar métricas de rendimiento de la aplicación (creado por Create React App).

package.json: Este archivo contiene la configuración y las dependencias del proyecto.

README.md: Es donde puedes agregar información sobre el proyecto y cómo ejecutarlo.

Funcionamiento:

Cuando el usuario ingresa a la página principal (index.php), se muestra una lista de todos los pacientes registrados en la tabla "pacientes" utilizando el método listar de la clase Paciente.

El usuario puede seleccionar "Agregar Paciente" para acceder al formulario de agregar_paciente. Al enviar el formulario, los datos se procesan mediante el método agregar de la clase Paciente.

Al hacer clic en el botón "Editar" junto a un paciente en la lista, el usuario será dirigido a editar_paciente, donde puede modificar los datos del paciente seleccionado. Los cambios se actualizan en la base de datos mediante el método actualizar de la clase Paciente.

Si el usuario hace clic en el botón "Eliminar" junto a un paciente, se le mostrará un mensaje de confirmación en borrar_paciente. Al confirmar la eliminación, el paciente se eliminará de la base de datos mediante el método borrar de la clase Paciente.

Conclusiones:

El CRUD implementado React consumiendo la Api en PHP puro con PostgreSQL permite gestionar de manera sencilla la información de pacientes. Es un ejemplo básico que puede servir como base para construir aplicaciones más complejas y extensas. Se han utilizado buenas prácticas como consultas preparadas para evitar ataques de inyección SQL y la separación de la lógica de acceso a la base de datos en el modelo para mantener un código organizado y seguro, un aplicativo de pacientes en React puede proporcionar una solución moderna y eficiente para gestionar la información de pacientes, brindando una interfaz de usuario amigable y una experiencia satisfactoria para los usuarios

1- Interfaz de usuario moderna y amigable: React permite crear interfaces de usuario interactivas y responsivas, lo que resulta en una experiencia de usuario agradable. La aplicación puede ofrecer un diseño limpio y una navegación intuitiva, lo que facilita a los usuarios acceder y gestionar la información de pacientes.

2-Facilidad para el desarrollo y mantenimiento: React es una biblioteca de JavaScript que ofrece una arquitectura bien estructurada y componentes reutilizables. Esto facilita el desarrollo y mantenimiento del código, lo que a su vez mejora la productividad y reduce el tiempo de desarrollo.

3-Gestión eficiente del estado: La gestión del estado en React, ya sea a través de los propios estados locales o mediante el uso de bibliotecas como Redux, permite tener un control claro sobre el flujo de datos en la aplicación. Esto puede conducir a un código más limpio y organizado, evitando problemas comunes de estado.

4-Comunicación con API en PHP: La integración de una API en PHP permite manejar las operaciones CRUD y almacenar los datos de los pacientes en una base de datos. La comunicación entre la aplicación React y la API en PHP puede proporcionar una experiencia fluida y en tiempo real para los usuarios.

5-Consideraciones de seguridad: Es importante tener en cuenta la seguridad en cualquier aplicación que maneje información confidencial, como datos de pacientes. La implementación de buenas prácticas de seguridad, como la validación de datos en el cliente y el servidor, puede ayudar a proteger la privacidad de los usuarios y prevenir ataques.

6-Escalabilidad y rendimiento: A medida que el aplicativo de pacientes crece y más usuarios lo utilizan, es esencial evaluar y optimizar el rendimiento de la aplicación para garantizar una experiencia de usuario fluida. Es posible que se necesiten mejoras en la infraestructura o en la arquitectura para manejar la carga de usuarios.