# 🌟 tp2-lit

## 📄 Descripción
Este proyecto consiste en la creación de componentes web personalizados utilizando la micro librería Lit de Google. Los componentes incluyen un mensaje de alerta y un formulario de inicio de sesión, integrados en una página de inicio de sesión, así como la utilización de Router de Vaadin.

## 🗂️ Arquitectura de Carpetas
- **components/**: Contiene los archivos JavaScript de los componentes personalizados.
  - `alert-message.js`: Componente de mensaje de alerta.
  - `user-login.js`: Componente de formulario de inicio de sesión.
  - `login-page.js`: Componente contenedor que integra los otros componentes.
- **mixins/**: Contiene los mixins utilizados para compartir lógica común entre componentes.
  - `form-mixin.js`: Mixin que condensa la lógica común del formulario.
  - `dispatch-custom-event-mixin.js`: Mixin para manejar la lógica de `dispatchEvent`.
  - `auth-mixin.js`: Mixin para la lógica de autenticación.
- **pages/**: Contiene las páginas de la aplicación.
  - `home-page.js`: Página de inicio.
  - `login-page.js`: Página de inicio de sesión.
- **styles/**: Contiene los archivos CSS para estilos globales y variables de colores.
  - `global.css`: Estilos globales aplicados a toda la aplicación.
  - `variables.css`: Variables de colores utilizadas en los estilos.
- **layouts/**: Contiene los layouts utilizados en la aplicación.
  - `public-layout.js`: Layout para páginas públicas.
  - `auth-layout.js`: Layout para páginas autenticadas.
- **index.js**: Archivo principal de JavaScript que inicializa y configura los componentes y el enrutador.
- **index.html**: Página principal del proyecto.

## 🛠️ Diseño y Funcionamiento de los Componentes

### `alert-message`
Este componente muestra mensajes de alerta con diferentes estilos según el tipo de alerta (`success`, `warning`, `error`, `info`). Se oculta automáticamente si el atributo `message` está vacío o no se proporciona.

- **Atributos**:
  - `type`: Especifica el tipo de alerta (`success`, `warning`, `error`, `info`).
  - `message`: Especifica el mensaje que se mostrará en la alerta.

### `user-login`
Este componente muestra un formulario de inicio de sesión con campos para ingresar el nombre de usuario y la contraseña. Cuando se envía el formulario, emite un evento personalizado `login-result` con el resultado del inicio de sesión (`success` o `error`).

- **Mixins Utilizados**:
  - `form-mixin.js`: Para la lógica común del formulario.
  - `dispatch-event-mixin.js`: Para manejar la lógica de `dispatchEvent`.
  - `auth-mixin.js`: Para la lógica de autenticación.

### `login-page`
Este componente contenedor intercepta el evento `login-result` emitido por `user-login` y actualiza las propiedades de `alert-message` en función del resultado del inicio de sesión.

- **Funcionamiento**:
  - Escucha el evento `login-result` y actualiza el mensaje de alerta con el resultado del inicio de sesión.

### `home-page`
Página de inicio que se muestra después de un inicio de sesión exitoso.

### `public-layout` y `auth-layout`
Layouts utilizados para estructurar las páginas públicas y autenticadas de la aplicación.

## 🚦 Enrutamiento
Se utiliza Vaadin Router para gestionar las rutas de la aplicación. Las rutas se definen en `index.js` y se configuran para mostrar las páginas correspondientes.

## 🎨 Estilos y Mixins
Los estilos se gestionan utilizando archivos CSS globales y variables para colores. Los mixins se utilizan para compartir lógica común entre componentes, siguiendo buenas prácticas de modularización y separación de preocupaciones.

## 🛠️ Herramientas Utilizadas
- **⚡Vite**: Utilizado para el desarrollo rápido y eficiente del proyecto.
- **✨Lit**: Utilizado para crear componentes web personalizados con JavaScript.
- **🌐Vaadin Router**: Utilizado para gestionar las rutas de la aplicación.