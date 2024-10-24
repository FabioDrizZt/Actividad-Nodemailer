# Proyecto de Registro de Usuarios con Validación de Código (Diplomatura Backend)

## Introducción

Este proyecto tiene como objetivo registrar usuarios en una plataforma y verificar su autenticidad mediante el envío de un código de validación a su correo electrónico. Utilizaremos **Nodemailer** para enviar dicho código al usuario recién registrado. El sistema cuenta con endpoints que permiten:
1. Registrar un usuario y generar un código de validación.
2. Validar el código de seguridad enviado por email.

## ¿Qué debes hacer?

Debes integrar el servicio de **Nodemailer** en el endpoint `/register` para enviar el código de validación por correo electrónico a los usuarios que se registren. La lógica de validación ya está implementada, pero falta enviar el código de forma automática al email del usuario.

## Estructura del Proyecto

```bash
├── frontend/
│   ├── css/
│   ├── js/
│   ├── index.html
│   ├── validationcode.html
├── node_modules/
├── src/
│   ├── database/
│   │   ├── database.json           # Base de datos en formato JSON con los usuarios registrados.
│   ├── filemanager.js          # Funciones para leer y guardar en la base de datos.
│   ├── generadores.js          # Generador de IDs y códigos de validación.
│   ├── server.js                   # Servidor Express.
├── .env                            # Archivo con variables de entorno (no lo subas a GitHub).
├── .gitignore                      # Archivos ignorados por Git.
├── api.http                        # Archivo para probar los endpoints con RESTClient.
├── package.json                    # Dependencias del proyecto.
└── README.md                       # Este archivo.
```

## Instalación y Configuración

### Paso 1: Clona el repositorio

```bash
git clone https://github.com/fabiodrizzt/nodemailer-backend-diplomatura.git
cd nodemailer-backend-diplomatura
```

### Paso 2: Instala las dependencias

```bash
npm install
```

### Paso 3: Configura el archivo `.env`

Debes crear un archivo `.env` en la raíz del proyecto. Este archivo contendrá las variables de entorno necesarias para configurar **Nodemailer** y el servidor. Aquí tienes un ejemplo:

```env
PORT=3008
EMAIL_USER=tu_email@example.com
EMAIL_PASSWORD=tu_contraseña_secreta
SMTP_SERVER=smtp.example.com
SMTP_PORT=465
```

- **EMAIL_USER**: El email que usará Nodemailer para enviar los correos.
- **EMAIL_PASSWORD**: La contraseña del email.
- **SMTP_SERVER**: El servidor SMTP del proveedor de correo (e.g., `smtp.gmail.com`).
- **SMTP_PORT**: Puerto SMTP (generalmente 465 para SSL).

### Paso 4: Ejecuta el servidor

Una vez configurado el archivo `.env`, podés iniciar el servidor con:

```bash
npm start
```

El servidor debería estar corriendo en `http://localhost:3008`.

## Tareas

### 1. Integración de Nodemailer

Dirígete al archivo `src/server.js` y encuentra el endpoint `/register`. Aquí es donde se debe integrar el servicio de **Nodemailer** para enviar el código de validación generado.

### 2. Modificación del Endpoint `/register`

Dentro del endpoint `/register`, llama a la función para enviar el código de validación por correo electrónico después de generar el código de validación del usuario.

### 3. Probar el Endpoint `/register`

Puedes probar el registro y envío del código con el archivo `api.http` que ya está configurado para hacer peticiones al backend.

#### Ejemplo de petición:

```http
POST http://localhost:3008/register
Content-Type: application/json

{
    "email": "usuario@example.com",
    "password": "password123"
}
```

Deberías recibir un código de validación en el email ingresado.

### 4. Probar el Endpoint `/validate`

Después de recibir el código por correo, puedes validarlo usando el siguiente cuerpo en la petición:

```http
POST http://localhost:3008/validate
Content-Type: application/json

{
    "validationCode": "123456",
    "usrId": "abc123"
}
```

## Notas

- El código de validación es un número de 6 dígitos generado al registrar un usuario.
- Si querés probar el envío de correos, asegurate de configurar correctamente las credenciales de email en el archivo `.env`.

## Recursos

- [Documentación de Nodemailer](https://nodemailer.com/about/)
- [Express.js](https://expressjs.com/)
- [RESTClient (extensión de VSCode)](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)