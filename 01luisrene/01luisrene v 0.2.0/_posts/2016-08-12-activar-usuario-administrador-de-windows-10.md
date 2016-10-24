---
layout: post
title:  "Activar Usuario Administrador del Sistema Operativo Windows 10"
date:   2016-08-12 00:00:00 -0500
categories: windows  
photo_url : "/assets/images/portadas/usuario_administrador_windows_10.jpg"
description: "El Usuario Administrador en el Sistema Operativo Windows 10 se encuentra desactivado por defecto,  motivo por el cual Windows nos solicita permisos de administrador para ejecutar aplicaciones y/o tareas"
---
El **Usuario Administrador** en el Sistema Operativo Windows 10, se encuentra desactivado por defecto, motivo por el cual Windows nos solicita permisos de administrador para ejecutar aplicaciones y/o tareas.

Lo que vamos a hacer en este tutorial es solventar este problema activando el **Usuario Administrador** que viene desactivado por defecto en **Windows 10**.

Te recomiendo activar el **Usuario Administrador** para tareas administrativas o para otra tarea que lo amerite.

Hay varias formas de activar el **Usuario Administrador** del Sistema Operativo Windows 10, pero en este artículo les voy a enseñar el mas efectivo, que es mediante el **Símbolo del sistema**.

## Activar Usuario Administrador a Través del Símbolo de Sistema (CMD)

Para poder activar el super **Usuario Administrador** abrimos el **Símbolo del sistema** y lo [ejecutamos como administrador](https://medium.com/@01luisrene/ejecutar-powershell-cmd-como-administrador-s-o-windows-10-3e9a0601bd8f#.dzrk5tjje).

El comando para activar esta cuenta de **Administrador** es `net user administrador /active:yes`, copialo y pegalo en el **CMD** (abreviatura de la palabra en ingles <em>"command"</em>) luego presiona <kbd>Enter</kbd>.

![Activar usuario administrador windows 10](/assets/images/posts/activate_user_admin/activar_usuario_administrador.png)

Para verificar si el usuario a sido activado correctamente vamos a dirigirnos al icono de <kbd>Inicio de Windows</kbd>, en la parte superior haz <em>clic</em> sobre el usuario activo, esta acción desplegara un menú en el cual puedes visualizar el usuario **Administrador**.

![Verificar usuario administrador windows 10](/assets/images/posts/activate_user_admin/verificar_usuario_admin.png)

En este menú selecciona la opción de la cuenta donde dice **Administrador**, el cual abrirá una nueva ventana ahí te pedirá una [contraseña el cual debes asignarle anteriormente](#asignar-una-contrasea-al-usuario-administrador).

![Abrir usuario administrador](/assets/images/posts/activate_user_admin/abrir_usuario_admin.png)

Escribe tu contraseña y presiona la tecla <kbd>Enter</kbd> para ingresar; la primera vez tarda un poco ya que se esta configurando el ambiente de usuario. (**tenga paciencia**)

## Desactivar Usuario Administrador a Través del Símbolo de Sistema (CMD)

Para desactivar la cuenta de super **Usuario Administrador** abrimos el **Símbolo del sistema** y lo [ejecutamos como administrador](https://medium.com/@01luisrene/ejecutar-powershell-cmd-como-administrador-s-o-windows-10-3e9a0601bd8f#.dzrk5tjje).

El comando para desactivar esta cuenta de **Administrador** es `net user administrador /active:no`, copialo y pegalo en el **CMD** luego presiona <kbd>Enter</kbd>.

![Desactivar usuario administrador windows 10](/assets/images/posts/activate_user_admin/desactivar_usuario_administrador.png)

## Asignar una Contraseña al Usuario Administrador

Para asignar una contraseña a la cuenta de super **Usuario Administrador** abrimos el **Símbolo del sistema** y lo [ejecutamos como administrador](https://medium.com/@01luisrene/ejecutar-powershell-cmd-como-administrador-s-o-windows-10-3e9a0601bd8f#.dzrk5tjje).

Es fundamental colocar una contraseña al super **usuario Administrador** inmediatamente activado la cuenta, así evitaremos que algún usuario o aplicación tome el control de nuestro **Sistema Operativo**.

El comando para asignar una contraseña a la cuenta de **Administrador** es `net user administrador *`, copialo y pegalo en el **CMD** luego presiona <kbd>Enter</kbd>.

Te pedirá una contraseña escribe una que sea segura, presiona <kbd>Enter</kbd>, el segundo paso es confirmar tu contraseña escrita anteriormente, digitalo y para finalizar presiona <kbd>Enter</kbd>, listo!

![Asignar contraseña al usuario administrador](/assets/images/posts/activate_user_admin/asignar_contrasena_usuario_admin.png)

**Nota**: con el comando anterior puedes asignar y cambiar la contraseña del **usuario Administrador**.

> Para finalizar quiero decirles que no es recomendable activar el **Usuario Administrador** y trabajar desde dicho usuario, ya que pueden borrar archivos esenciales para el funcionamiento del sistema operativo, entre otros muchos casos.
