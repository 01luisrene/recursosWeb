---
layout: post
title:  "Instalación y configuración de Android Studio 2.1"
date:   2016-07-21 11:28:00 -0500
categories: IDE
photo_url : "/assets/images/portadas/android_studio.jpg"
description: "Android Studio es un IDE que nos permite desarrollar aplicaciones móviles, para el sistema operativo de dispositivos móviles llamado Android"
---
**Android Studio** es un **IDE** que nos permite desarrollar aplicaciones móviles, para el sistema operativo de dispositivos móviles llamado **Android**  propiedad de Goolgle.

En este tutorial vamos a instalar y configurar **Android Studio** para poder desarrollar nuestras aplicaciones móviles para **Android**.

## Descargar Java SE Development Kit

> Un prerrequisito para instalar **Android Studio**, es que primero debemos descargar e instalar **Java SE Development Kit**.

<a class="btn btn-link" href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank"><strong>Descargar Java SE Development Kit</strong></a>

En la página oficial de **JAVA** donde dice <em>Java SE Development Kit (versión)</em>, marcamos el <kbd>radio button</kbd> para aceptar los términos de licencia y descargamos el **Java SE Development Kit** que se adecue a nuestros requerimientos.

En mi caso como utilizo el S. O. Windows descargare el **Java SE Development Kit** para <em>Windows x64</em>.

![Java SE Development Kit](/assets/images/posts/android_studio/java_se_development_kit.png)

Una vez descargado lo instalan como cualquier otra aplicación en el S. O. Windows.

## Instalación de Android Studio

Para instalar **Android Studio** nos dirigimos a su página oficial.

<a class="btn btn-link" href="https://developer.android.com/studio/index.html" target="_blank"><strong>Descargar Android Studio</strong></a>

En la página inicial de **Android Studio** nos muestra el botón de descarga y para proceder solamente hacemos algo tan sencillo como un clic.

![Descargar Android Studio](/assets/images/posts/android_studio/descargar_android_studio.png)

Acapta los terminos de licencia y haz <em>clic</em> en el botón <kbd>DOWNLOAD</kbd> ara descargar **Android Studio**.

![Ternimos de Licencia Android Studio](/assets/images/posts/android_studio/terminos_licencia_android_studio.png)

> También puedes realizar una [descarga personalizada de **Android Studio**](https://developer.android.com/studio/index.html#downloads).

En esta parte de la página inicial me ofrece la opción de escoger la aplicación **Android Studio** que se ajuste a mi necesidad, en mi caso descargare una versión para S. O. Windows y que a su vez venga incluido el **Android SDK**.

![Descargar Android Studio](/assets/images/posts/android_studio/elegir_descarga_android_studio.png)

> Una vez descargado la aplicación para proceder con la instalación, hacemos <em>clic derecho</em> y escogemos la opción **Ejecutar como administrador** de preferencia.

![Ejecutar Android Studio](/assets/images/posts/android_studio/ejecutar_android_studio.png)

> Ahora nos muestra una ventana de bienvenida para continuar <em>clic</em> en el botón <kbd>Next</kbd>.

![Bienvenida Android Studio](/assets/images/posts/android_studio/bienvenida_android_studio.png)

> En la siguiente ventana nos permite seleccionar componentes con los cuales trabaja **Android Studio** como Android SDK y Andriod Virtual Device, dejamos como esta y hacemos <em>clic</em>  en el botón <kbd>Next</kbd>.

![Seleccionar componentes Android Studio](/assets/images/posts/android_studio/seleccionar_componentes_android_studio.png)

> Para aceptar el acuerdo de licencia hacemos <em>clic</em> en el botón <kbd>I Agree</kbd>.

![Acuerdo de licencia Android Studio](/assets/images/posts/android_studio/licencia_android_studio.png)

> Seleccionamos las rutas para la instalación de **Android Studio** Y el **Android SDK** (Software Development Kit), luego hacemos <em>clic</em> en el botón <kbd>Next</kbd>.

![Rutas para  Android Studio y Android SDK](/assets/images/posts/android_studio/rutas_android_studio.png)

> Aquí puedes elegir la carpeta de inicio para **Android Studio** y para finalizar la instalación <em>clic</em> en el botón <kbd>Install</kbd>.

![Elegir carpeta de inicio Android Studio](/assets/images/posts/android_studio/elegir_carpeta_inicio_android_studio.png)

> Esperamos a que **Android Studio** se instale esto puede tardar un poco :)

![Instalación en proceso Android Studio](/assets/images/posts/android_studio/instalacion_en_proceso_android_studio.png)

Listo ahora tienes instalado **Android Studio**.

## Configuración de las Variables de Entorno

Para finalizar con el tutorial vamos a configurar nuestras **enviorment variables** (variables de entorno).

### Java SE Development Kit

Primero agregamos la variable de entorno `JAVA_HOME`.

<em>Clic</em> derecho en <kbd>Este equipo</kbd> y la opción <kbd>Propiedades</kbd>.

![Propiedades PC](/assets/images/posts/android_studio/propiedades_pc.png)

En esta ventana hacemos <em>clic</em> en la opción <kbd>Configuración avanzada del sistema</kbd>.

![configuración avanzada Windows](/assets/images/posts/android_studio/configuracion_avanzada_sistema.png)

En esta nueva ventana hacemos <em>clic</em> en el botón <kbd>Variables de entorno</kbd>.

![Variables de entorno Windows](/assets/images/posts/android_studio/boton_variables_entorno.png)

Nos ubicamos en la opción "<strong>Variables del sistema</strong>" y damos <em>clic</em> en el botón <kbd>Nueva...</kbd>.

> Cuando cargue la siguiente ventana colocan los siguientes valores, en <kbd>Nombre de la variable</kbd> : `JAVA_HOME` y <kbd>Valor de la variable</kbd>: `C:\Program Files\Java\jdk1.8.0_101` (esto es la <a href="/assets/images/posts/android_studio/ruta_instalacion_jdk.png" target="_blank">ruta</a> de donde se instalo **Java SE Development Kit**, en tu caso puede variar).

![Variable de entorno JAVA_HOME](/assets/images/posts/android_studio/variable_entorno_java_home.png)

Segundo agregamos la variable de entorno `%JAVA_HOME%\bin` al `PATH`.

> En <kbd>Variables para usuario <em>tu usuario</em></kbd> busca la opcion `PATH`, seleccionalo y haz <em>clic</em> en el botón <kbd>Editar</kbd>. Colocate al final escribe un punto y coma (;) luego copia `%JAVA_HOME%\bin` y pegalo al final.

![PATH JAVA_HOME](/assets/images/posts/android_studio/path_java_home.png)

Para culminar acepta todas las ventanas abiertas.

Listo ahora tienes configurado **Android Studio** listo para crear nuevos proyectos **ANDROID**.