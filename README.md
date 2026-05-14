# SecurePass & WP-Hardening Tool 🛡️

Una herramienta técnica desarrollada en **JavaScript Vanilla** diseñada para desarrolladores y administradores de WordPress que buscan fortalecer la seguridad de sus sitios mediante la generación de credenciales robustas y reglas de servidor (.htaccess).

## 🚀 Características

- **Generador de Contraseñas:** Algoritmo que asegura la inclusión de mayúsculas, números y símbolos usando el método de mezcla Fisher-Yates para mayor aleatoriedad.
- **WP-Hardening Rules:** Generación dinámica de directivas de seguridad para archivos `.htaccess`.
- **UI Moderna:** Interfaz optimizada con "Dark Mode" y respuesta visual inmediata.
- **Copiado Rápido:** Integración con la API `navigator.clipboard` para facilitar el flujo de trabajo.

## 🛠️ Tecnologías Utilizadas

- **JavaScript (ES6+):** Lógica de generación y manipulación del DOM.
- **HTML5:** Estructura semántica.
- **CSS3:** Diseño responsivo utilizando variables (Custom Properties) y Flexbox.

## 📂 Estructura del Proyecto

```text
securepass-js/
├── index.html    # Estructura de la aplicación
├── style.css     # Estilos y variables de diseño
├── script.js    # Lógica de seguridad y manejo de eventos
└── README.md     # Documentación del proyecto
