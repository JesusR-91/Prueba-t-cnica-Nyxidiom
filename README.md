# Prueba Técnica Nyxidiom

## Todo App - Gestión de Tareas

Esta aplicación es una Todo App de gestión de tareas, desarrollada utilizando **Remix**, **React**, **TypeScript** y **Tailwind CSS** en el frontend. En el backend, emplea **Prisma** como ORM y **Sqlite3** como base de datos.

### Tecnologías Utilizadas

**Frontend**:
- Remix
- React
- TypeScript
- Tailwind CSS

**Backend**:
- Prisma
- Sqlite3

---

## Instalación

Sigue los siguientes pasos para instalar y ejecutar la aplicación localmente:

1. Clona el repositorio:

```bash
   git clone https://github.com/tu-repositorio.git
```

2. Instalar dependencias:

```bash
   npm install
```

3. Lanzar la aplicación en modo desarrollador:

```bash
   npm run dev
```

## Problemas Encontrados
Esta es la primera vez que trabajo con Remix, Prisma y Sqlite3, y me he encontrado con algunos problemas de conexión a la base de datos. A continuación, se muestra el error que aparece en la consola:

```bash
17:22:07 [vite] Internal server error: Server-only module referenced by client

    '../../server/services/taskService.server' imported by 'app/services/taskService.ts'

See https://remix.run/docs/en/main/guides/vite#splitting-up-client-and-server-code
```


He intentado varias soluciones, pero lamentablemente no he podido resolver este problema debido a mi falta de experiencia con estas herramientas en particular. Como resultado, decidí continuar el desarrollo a nivel de componentes y funcionalidades sin la integración de la base de datos.

No he querido dedicarle más tiempo no por falta de ganas, sino más bien porque creo haber llegado a un punto muerto en el problema. Con una mínima indicación entiendo que podría haber continuado, pero como digo me ha sido imposible encontrar solución.

## Reflexiones
En otros proyectos, suelo desarrollar el backend primero y luego el frontend, pero Remix parece tener un enfoque diferente. Escogí Sqlite3 con la intención de facilitar la ejecución local de la aplicación sin necesidad de realizar despliegues complejos, y Prisma como ORM para manejar la conexión. Sin embargo, algo en la configuración no parece estar funcionando correctamente.

## Proyectos Relacionados
En mi repositorio encontrarás otros proyectos, incluyendo una Todo App similar, pero desarrollada con Django y React, donde no encontré problemas similares. Te invito a revisar esos proyectos si quieres ver un enfoque diferente en el desarrollo full-stack.






