---
layout: post
title:  "Instalar Node.js en Windows"
date:   2016-05-15 18:41:00 -0500
categories:  
photo_url : "/assets/images/portadas/node.jpg"
description: "Node.js es un entorno en tiempo de ejecución multiplataforma, open source, basado en el lenguaje de programación ECMAScript y en el motor V8 de Chrome"
---
**Node.js** es un entorno en tiempo de ejecución multiplataforma, open source, basado en el lenguaje de programación <b>[ECMAScript](https://es.wikipedia.org/wiki/ECMAScript)</b> y en el motor V8 de Chrome. **Node.js** cuenta con un ecosistema de paquetes [`NPM`](https://www.npmjs.com/) que es el mayor ecosistema de librerías de código abierto en el mundo.


Fue creado por  **Ryan Dahl** en 2009.

[Node.js (sitio web)](https://nodejs.org/en/)

[Node.js (Repositorio GitHub)](https://github.com/nodejs/node)

**Node.js** es un lenguaje de programación que utiliza código JavaScript en el lado del Backend, por lo que es extremadamente rápido para gestionar proyectos de gran tamaño sin consumir mucho recurso.


## Instalación en Windows

Para instalarlo en Windows nos dirigimos a la página oficial de [Node.js](https://nodejs.org/en/) y descargamos la versión más reciente.

![imagen descargar Node.js](/assets/images/posts/nodejs/01.png)

Una vez descargado el archivo has clic derecho y escoge la opción <kbd>Instalar</kbd>

![imagen instalar Node.js](/assets/images/posts/nodejs/02.png)

Es esta ventana has clic en el botón <kbd>Ejecutar</kbd>

![imagen ejecutar Node.js](/assets/images/posts/nodejs/03.png)

Aquí presiona en el botón <kbd>Next</kbd>

![imagen siguiente Node.js](/assets/images/posts/nodejs/04.png)

Ahora selecciona la casilla donde dice (**I accept the terms in the License Agreement**) como en la imagen y luego clic en el botón <kbd>Next</kbd>

![imagen aceptar licencia Node.js](/assets/images/posts/nodejs/05.png)

Aquí puedes cambiar la ruta de instalación si lo deseas y si no lo dejas igual. Para continuar has clic en el botón <kbd>Next</kbd>

![imagen carpeta de destino Node.js](/assets/images/posts/nodejs/06.png)

Aquí tienes la opción de personalizar la instalación, una vez culminado has clic en el botón <kbd>Next</kbd>

![imagen de descarga node](/assets/images/posts/nodejs/07.png)

Ahora hacemos clic en el botón <kbd>Install</kbd>

![imagen personalizar setup Node.js](/assets/images/posts/nodejs/08.png)

**Node.js** esta en proceso de instalación por lo general no lleva mucho tiempo.

![imagen instalar Node.js](/assets/images/posts/nodejs/09.png)

Esta ventana muestra un mensaje **Node.js ha sido instalado exitosamente**

![imagen fin de instalación Node.js](/assets/images/posts/nodejs/fin.png)

Para culminar vamos a verificar si **Node.js** esta instado correctamente.

Abrimos el terminal **CMD** de windows y escribimos `node -v`  el cual mostrara la versión del **Node.js** instalado `v4.4.5`

![imagen CMD Node.js](/assets/images/posts/nodejs/node_cmd.png)

#### Nota


> Si el comando `node -v` no se ejecuta lo mas probable es que no tengan instalado **Nade.js** y la otra opción puede ser que no lo tengan agregado en el `PATH` de Windows para que se ejecute desde cualquier ruta.

**Solución PATH:** pasos en windows 10.

Las instrucciones no varían mucho en las distintas versiones de S.O. Microsoft Windows.


Clic derecho en el icono del escritorio que dice <kbd>Este equipo</kbd> y selecciona en propiedades.

![imagen propiedades de Windows](/assets/images/posts/nodejs/win10_propiedades.png)

En esta ventana elige la opción (**Configuración avanzada del sistema**)

![imagen configuración avanzada del sistema](/assets/images/posts/nodejs/win10_configuracion.png)

En esta ventana has clic en el botón <kbd>Variables de entorno</kbd>

![imagen variables de entorno](/assets/images/posts/nodejs/win10_variables_entorno.png)

Aquí has doble clic en la  opción <kbd>PATH</kbd>

![imagen variables de entorno](/assets/images/posts/nodejs/win10_path.png)

Colocate en la parte final y agrega un punto y coma **(`;`)**. Continuando pega la ruta donde se instalo **Node.js** `C:\Program Files\nodejs`

![imagen variables de entorno](/assets/images/posts/nodejs/win10_add_path.png)

Para finalizar la configuración acepta todas las ventanas abiertas, ahora puedes ejecutar **Node.js** desde cualquier ruta. Listo!
