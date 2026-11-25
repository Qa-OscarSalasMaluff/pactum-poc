
# PactumJS - API Testing POC

## Descripción

Este proyecto es una prueba de concepto (POC) de automatización de pruebas de APIs REST utilizando JavaScript, Node.js, PactumJS y Jest.

El objetivo es implementar una suite de pruebas automatizadas que permita validar el comportamiento de diferentes métodos HTTP, verificar códigos de estado y comprobar las respuestas de una API.

Para esta primera etapa se utiliza [HTTPBin](https://httpbin.org/), un servicio que permite inspeccionar solicitudes HTTP y simular diferentes respuestas.

## Tecnologías utilizadas

- **JavaScript:** lenguaje de programación.
- **Node.js:** entorno de ejecución.
- **PactumJS:** framework para automatización de pruebas de APIs.
- **Jest:** test runner para ejecutar y organizar los casos de prueba.
- **Jest HTML Reporters:** generación de reportes HTML.
- **HTTPBin:** API utilizada como entorno de pruebas.

## Estructura del proyecto

```text
pactumjs-poc/
│
├── config/
│   └── urls.js
│
├── tests/
│   ├── GET/
│   │   └── get.test.js
│   ├── POST/
│   │   └── post.test.js
│   └── PUT/
│       └── put.test.js
│
├── test-cases/
│   ├── GET-test-cases.md
│   ├── POST-test-cases.md
│   └── PUT-test-cases.md
│
├── reports/
│
├── jest.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/Qa-OscarSalasMaluff/pactum-poc.git
```

### 2. Acceder al proyecto

```bash
cd pactumjs-poc
```

### 3. Instalar las dependencias

```bash
npm install
```

## Ejecución de pruebas

Para ejecutar toda la suite:

```bash
npm test
```

También es posible ejecutar las pruebas individualmente:

**GET**
```bash
npx jest tests/GET/get.test.js
```

**POST**
```bash
npx jest tests/POST/post.test.js
```

**PUT**
```bash
npx jest tests/PUT/put.test.js
```

## Reportes

Al finalizar la ejecución, Jest HTML Reporters genera un reporte HTML en el directorio `reports/`.

Archivo generado:

```text
reports/report.html
```

El reporte permite visualizar los resultados de ejecución de los casos de prueba.

## Alcance de la POC

La suite contempla inicialmente pruebas sobre los siguientes métodos HTTP:

- **GET:** consultas y validación de respuestas HTTP.
- **POST:** envío de solicitudes con payload JSON.
- **PUT:** envío de solicitudes de actualización con payload JSON.

Se realizan verificaciones de códigos de estado HTTP y contenido de las respuestas.

**Importante:** HTTPBin es un servicio de inspección y simulación de solicitudes HTTP. No implementa persistencia de datos ni lógica de negocio. Por lo tanto, estas pruebas validan el intercambio HTTP, pero no operaciones CRUD reales ni mecanismos de autenticación de una aplicación.

---

**Proyecto:** PactumJS - API Testing POC  
**Estado:** En desarrollo
