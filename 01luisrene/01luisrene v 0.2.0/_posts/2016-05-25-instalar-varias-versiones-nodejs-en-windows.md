---
layout: post
title:  "Instalar Varias Versiones de Node.js (Windows)"
date:   2016-05-25 11:37:00 -0500
categories:  
photo_url : "/assets/images/portadas/nvm_node.jpg"
description: "Les ha pasado que llega el momento que quisieran tener instalado varias versiones de Node.js en una sola PC ya sea por múltiples razones, pero no saben como"
---
Les ha pasado que llega el momento que quisieran tener instalado varias versiones de **Node.js** en una sola PC ya sea por múltiples razones, pero no saben como. Bueno aquí les traigo una pequeña guía para poder tener instalado varias versiones de **Node.js** en S.O. Microsoft Windows.

La aplicación que usaremos para poder tener instalado varias versiones de **Node.js** un una sola (PC o Notebook), tiene por nombre **Node Manager Versión (NVM)**.

Esta aplicación es muy fácil de instalar y usar.

## Repositorio NVM

Aquí les dejo el link al repositorio de **NVM** alojado en GitHub.

[NVM Windows](https://github.com/coreybutler/nvm-windows)


## Instalación de NVM

Primero instalamos **[Node.js](http://01luisrene.com/blog/2016/05/15/instalar-nodejs-en-windows/)**, luego tenemos que descargar la aplicación desde los repositorios de GitHub, te recomiendo descargar el ejecutable a menos que seas experto.

[Descargar NVM](https://github.com/coreybutler/nvm-windows/releases)

![Descargar NVM desde GitHub](/assets/images/posts/nvm_node/descargar_nvm.png)

Busca el archivo descargado, luego descomprímelo.

![Descomprimir archivo NVM](/assets/images/posts/nvm_node/descomprimir_nvm.png)

Ingresa a la carpeta `nvm-setup` que se ha creado cuando descomprimiste el archivo. Has clic derecho sobre la aplicación `nvm-setup.exe` y elige la opción <kbd>Ejecutar como administrador</kbd>.

**Nota:** la extensión `.exe` por lo general esta oculto en el S. O. Microsoft Windows.

![Ejecutar la aplicación como Administrador](/assets/images/posts/nvm_node/ejecutar_nvm.png)

Esta ventana nos da la bienvenida a la instalación de **NVM**. Para para continuar presionamos el botón donde dice <kbd>Next ></kbd>.

![Bienvenida a la instalación de NVM](/assets/images/posts/nvm_node/install_nvm_01.png)

Ahora aceptamos la licencia de uso de **NVM** y luego presionamos el botón donde dice <kbd>Next ></kbd>.

![Aceptamos la licencia de uso NVM](/assets/images/posts/nvm_node/install_nvm_02.png)

Aquí nos da la opción de modificar la ruta de instalación de **NVM**. Para continuar presiona botón donde dice <kbd>Next ></kbd>.

![Ruta de instalación NVM](/assets/images/posts/nvm_node/install_nvm_03.png)

En esta ventana selecciona la carpeta donde se instalo **Node.js** para crear el enlace simbólico, a continuación has clic en el botón donde dice <kbd>Next ></kbd>.

![Selecciona la carpeta de Node.js](/assets/images/posts/nvm_node/install_nvm_04.png)

Para continuar con la instalación presiona el botón donde dice <kbd>Install</kbd>

![Instalar NVM](/assets/images/posts/nvm_node/install_nvm_05.png)

En la siguiente ventana has clic en el botón donde dice <kbd>Si</kbd>

![Aceptamos](/assets/images/posts/nvm_node/install_nvm_06.png)

Para culminar la instalación has clic en el botón donde dice <kbd>Finish</kbd>, esta acción abrirá el terminal de Windows `CMD`, mostrando información sobre **NVM**.

![Finalizar instalación NVM](/assets/images/posts/nvm_node/install_nvm_07.png)

![Finalizar instalación NVM](/assets/images/posts/nvm_node/install_nvm_08.png)

## Uso NVM

Comandos de uso para [NVM](https://github.com/coreybutler/nvm-windows#usage).

Ver la versión instalada de **NVM**.

Comando: `nvm version`

![Ver la versión de NVM](/assets/images/posts/nvm_node/version_nvm.png)

Instalar más versiones de **Node.js**. Lista de versiones **Node.js** [nodeversions](https://github.com/coreybutler/nodedistro/blob/master/nodeversions.json)

Comando: `nvm install <Node version>`

![Agregar versiones de Node.js en NVM](/assets/images/posts/nvm_node/add_node_nvm.png)

Ver la lista de las versiones de **Node.js** instaladas en **NVM**.

Comando: `nvm list`

![Lista de versiones Node.js instalados en NVM](/assets/images/posts/nvm_node/lista_nvm.png)

Cambiar de versión de **Node.js** a utilizar.

Comando: `nvm use <Node version>`

![Cambiar de versión Node.js instalado en NVM](/assets/images/posts/nvm_node/cambiar_node_version_nvm.png)

Desinstalar una versión de **Node.js** instalada en  **NVM**.

Comando: `nvm uninstall <Node version>`

![Desinstalar Node.js instalado en NVM](/assets/images/posts/nvm_node/uninstall_node_nvm.png)

Bueno amigos me despido espero que les sea de utilidad. **:)**