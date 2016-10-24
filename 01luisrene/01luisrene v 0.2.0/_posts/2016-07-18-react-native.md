---
layout: post
title:  "Instalación y Creación de un Proyecto React Native para Android"
date:   2016-07-18 09:07:00 -0500
categories: JavaScript
photo_url : "/assets/images/portadas/react_native.jpg"
description: "React Native es un framework que te permite desarrollar aplicaciones móviles nativas utilizando únicamente JavaScript"
---
**React Native** es un framework que te permite desarrollar aplicaciones móviles utilizando únicamente JavaScript, utiliza el mismo diseño que <a class="link" href="https://facebook.github.io/react/" target="_blank">React</a>, lo que le permite componer una rica interfaz de usuario móvil a partir de componentes declarativos.

> **React Native** te permite crear aplicaciones móviles nativas tanto para **Android** y **iOS**

## Página Oficial

<a class="btn btn-link" href="https://facebook.github.io/react-native/" target="_blank"><strong>React Native</strong></a>

Desarrollar aplicaciones móviles para Android ó iOS antes que existiera los frameworks como <a href="http://phonegap.com/" target="_blank"><strong>Phonegap</strong></a>, <a href="http://ionicframework.com/" target="_blank"><strong>Ionic</strong></a>, forsozamente teníamos que aprender a programar en **Java** si queríamos desarrollar aplicaciones móviles para **Android** ó **Swift** para aplicaciones móviles **iOS**.

Por otro lado para desarrollar aplicaciones móviles en <a href="http://phonegap.com/" target="_blank"><strong>Phonegap</strong></a>, <a href="http://ionicframework.com/" target="_blank"><strong>Ionic</strong></a> y otros más, solamente teníamos que saber HTML, CSS y JAVASCRIPT; pero el gran detalle es que estas aplicaciones móviles funcionaban a través del navegador lo cual no permite tener una mejor experiencia de usuario.

Pero si pensabas que eso era el final de la evolución para el desarrollo móvil utilizando CSS, HTML y JAVASCRIPT; te comento que estabas equivocado ya que **Facebook** a desarrollado **React Native** el cual nos permite crear aplicaciones móviles utilizando JSX (JavaScript + html) a desarrolladores web y compilarlo en su forma nativa el cual mejora notablemente la experiencia de usuario.

## Instalación React Native (Android)

> Acá pueden visitar la documentación oficial para la <a href="https://facebook.github.io/react-native/docs/getting-started.html" target="_blank">instalación de <strong>React Native</strong></a>.

Para poder empezar a desarrollar aplicaciones en **React native** vamos a instalar las siguientes aplicaciones, de preferencia en el siguiente orden:

<ul class="lista-desordenada" target="_blank">
	<li><a href="https://chocolatey.org" target="_blank">Chocolatey</a> (opcional)</li>
	<li><a href="https://www.python.org/downloads/" target="_blank">Python v. 2.x</a></li>
	<li><a href="https://nodejs.org/en/" target="_blank">Node.js</a></li>
	<li><a href="https://facebook.github.io/react-native/" target="_blank">React Native</a></li>
	<li><a href="http://01luisrene.com/blog/2016/07/21/android-studio/" target="_blank">Android Studio</a></li>
</ul>

> Las recomendaciones de la página oficial de **React Native** es que se realice la instalación de las aplicaciones a través del gestor de paquetes <a class="link" href="https://chocolatey.org/install#alternative-installation-options" target="_blank">Chocolatey</a> el cual nos permite instalar aplicaciones desde repositorios en **Windows**.

Solo recuerda que usar **Chocolatey** es una recomendación hecha por los desarrolladores de **React Native**, si tu no lo prefieres usar es tu decisión.

Para instalar **Chocolatey** abrimos el <a href="/assets/images/posts/react_native/cmd_admin.png" target="_blank"><kbd>CMD</kbd> de **Windows**</a> con los permisos de administrador, copia (<kbd>Ctrl + c</kbd>) el siguiente código, luego pega (<kbd>Ctrl + v</kbd>) en el <kbd>CMD</kbd> y para finalizar presiona la tecla <kbd>Entrar</kbd>.

```shell
@powershell -NoProfile -ExecutionPolicy unrestricted -Command "(iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))) >$null 2>&1" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
```

![imagen powershell](/assets/images/posts/react_native/powershell.png)

Para comprobar que la instalación de **Chocolatey** a sido de forma satisfactoria escribimos el en el <kbd>CMD</kbd> `chocolatey -v` el cual mostrara la versión de **Chocolatey** instalado.

![versión de chocolatey](/assets/images/posts/react_native/chocolatey_v.png)

> Instalación de **Python 2** a través del gestor de paquetes <a href="https://chocolatey.org/packages/python2">**Chocolatey**</a>.

```shell
choco install python2
```

> Instalación de **Node.js** a través del gestor de paquetes <a href="https://chocolatey.org/packages/nodejs.install">**Chocolatey**</a>.

```shell
choco install nodejs.install
```

> Instalacion del paquete **React Native**: **Node** viene con npm (**Node** Package Manager), que permite instalar **React Native** desde la interfaz de línea de comandos con el siguiente código.

```shell
npm install -g react-native-cli
```

> Por ultimo descarga e instala <a href="http://01luisrene.com/blog/2016/07/21/android-studio/">Android Studio</a> que servirá para usar el <a href="#">emulador</a> y así podremos testear nuestros proyectos hechos en **React Native**.

## Crear un Proyecto con React Native

Vamos a crear un proyecto **React Native** para desarrollar aplicaciones **Android**.

> Primero abrimos el <kbd>CMD</kbd> luego nos desplazamos a la carpeta ó disco local donde se almacenaran nuestros proyectos, escribimos y ejecutamos el siguiente código.

```shell
react-native init AwesomeProject
```

Cambia el nombre del proyecto **AwesomeProject** por el nombre oficial de tu aplicación.

![Crear un proyecto React Native](/assets/images/posts/react_native/react_native_new_project.png)

Al presionar la tecla <kbd>Entrar</kbd> nos mostrara un mensaje donde dice "**Installing react-native package from npm...**", pero ten en cuenta que este mensaje puede variar si **React Native** realiza modificaciones en su código.

![Crear un proyecto React Native](/assets/images/posts/react_native/init_project.png)

La creación del proyecto puede demorar varios minutos, pero una vez terminado nos mostrara un mensaje como esto, indicando la ruta donde se creo el proyecto.

![Crear un proyecto React Native](/assets/images/posts/react_native/react_native_finish.png)

> Una vez creado el proyecto accedemos al interior de la carpeta.

```shell
cd AwesomeProject
```

#### Ponemos en marcha nuestro servidor React native

> Para poner en marcha nuestro servidor y comprobar que todo esta funcionando de manera correcta escribimos el siguiente código.

```shell
react-native run-android
```

Bueno mis amigos ya tienen todo listo para empezar a desarrollar aplicaciones móviles utilizando el framework <a href="https://facebook.github.io/react-native/" target="_blank">React Native</a>.