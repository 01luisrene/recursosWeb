---
layout: post
title:  Chocolatey - Gestor de Paquetes para Windows 
date:   2016-08-09 07:22:00 -0500
categories: tools
keywords:
tumblr_id:
photo_url : "/assets/images/portadas/chocolatey.jpg"
description: "Chocolatey es un Gestor de Paquetes para el Sistema Operativo Windows (como apt-get o yum, pero para Windows)"
---
**Chocolatey** es un Gestor de Paquetes para el Sistema Operativo Windows (**como apt-get o yum, pero para Windows**), con esta herramienta podrás instalar múltiples aplicaciones y herramientas usando solamente **PowerShell** ó **Simbolo de sistema** de esta forma la instalación sera más rápida.

**Chocolatey** trabaja con los binarios y las tecnologías existentes, como instalador MSI, NSIS, InnoSetup, etc.

## Página oficial

<a class="link" href="https://chocolatey.org/" target="_blank">https://chocolatey.org/</a>

## Instalación de Chocolatey

Para la [instalación de **Chocolatey**](https://chocolatey.org/install) en nuestro sistema operativo tenemos múltiples formas, busca el que mejor se acomode a tus necesidades.

> En este tutorial te voy a enseñar el [método más fácil de instalarlo](https://chocolatey.org/install#cmdpowershell-wproxy-server).

<ul class="lista-ordenada">
	<li>Descarga el archivo <a href="https://gist.github.com/01luisrene/dff8667335c61f832a676051db425909/archive/489017d6e12db7755fed0730fa7e78e372bcd491.zip">installchocolatey.cmd</a></li>
	<li>Descomprime el archivo descargado.</li>
	<li>Accede al archivo <strong>installchocolatey.cmd</strong> y ejecutalo con doble <em>clic</em>.</li>
</ul>

> Ó la otra opción es copiar el siguiente código, crear un archivo con el nombre de **installchocolatey.cmd** y dentro de este archivo pega el código, para luego ejecutarlo con doble <em>clic</em>.

<script src="https://gist.github.com/01luisrene/dff8667335c61f832a676051db425909.js"></script>

> Ahora solo tienes que esperar para que se instale así de fácil :)

<strong>Nota:</strong> al ejecutar el archivo **installchocolatey.cmd**, se descargara un archivo llamado [**install.ps1**](https://chocolatey.org/install.ps1), no se incomoden es normal.

## Como Utilizar Chocolatey para Instalar Aplicaciones

Ahora vamos a ver la forma de uso para instalar aplicaciones desde el **PowerShell** gracias a **Chocolatey**.

Vamos a instalar por ejemplo Node.js, para ver el funcionamiento de esta herramienta que es **Chocolatey**, para esto nos dirigimos a la página [packages](https://chocolatey.org/packages) de **Chocolatey**.

Realizamos una búsqueda el es esta página y elegimos la versión de Node.js que deseamos instalar.

![Packages Chocolatey](/assets/images/posts/chocolatey/pagina_packages.png)

### Instalar Paquete

Para este tutorial voy a instalar **Node.js** en su **versión 6.3.1**, de la siguiente manera - (cabe recalcar que la versión puede cambiar para cuando usted este viendo este artículo).

Abrimos el **PowerShell** o **Símbolo del sistema** como administrador -> <a class="link" href="https://goo.gl/ljRIjk" target="_blank">ver aquí</a>

Luego escribimos el código `choco install nodejs.install` y presionamos la tecla <kbd>Enter</kbd>.

![Instalar Node desde Chocolatey](/assets/images/posts/chocolatey/instalar_nodejs_631.png)

En la siguiente ventana escriban **Y** para aceptar la licencia del paquete a instalar, de lo contrario la instalación fallara.

![Aceptar licensia del paquete](/assets/images/posts/chocolatey/aceptar_yes.png)

Una vez terminada la instalación nos mostrara el siguiente mensaje en la **consola** de color <em>amarillo</em>.

![Mensaje de instalación Chocolatey](/assets/images/posts/chocolatey/mesaje_de_instalacion.png)

### Actualizar Paquete

Para actualizar un paquete instalado anteriormente, ejecutamos el **PowerShell** o **Símbolo del sistema** como [administrador](https://goo.gl/ljRIjk), escribimos el siguiente comando `choco upgrade nodejs.install` - (recuerden que estamos trabajando con Node.js).

![Actualizar paquete con Chocolatey](/assets/images/posts/chocolatey/upgrade_nodejs.png)

### Eliminar Paquete

Si deseamos eliminar un paquete que hayamos instalado con **Chocolatey**, ejecutamos el siguiente código `choco uninstall nodejs.install`, en el **Símbolo del sistema** como [administrador](https://goo.gl/ljRIjk).

![Desinstalar paquete con Chocolatey](/assets/images/posts/chocolatey/desinstalar_nodejs.png)

### Ver Paquetes Instalados

Para ver los paquetes instalados con **Chocolatey** abre el **Símbolo del sistema**, escribe `choco list --local-only` y luego presiona <kbd>Enter</kbd>.

Ahora podras ver la lista de paquetes instalados :)

![Listar paquetes instalados con Chocolatey](/assets/images/posts/chocolatey/lista_paquetes_instalados.png)

> Bueno amigos espero les sirva este artículo para que cambien su manera de trabajar en Windows, en cuanto a la instalación de aplicaciones.