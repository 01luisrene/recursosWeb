---
layout: post
title: "Editor de texto y código Sublime Text"
date: 2016-01-24 10:49:00 -0500
categories: sublime-text editor
tumblr_id: articulo-03
photo_url : "/assets/images/portadas/sublime_text.jpg"
description: "Sublime Text es un potente editor de texto y código, en mi opinión es agradable,  fácil de configurar y lo mejor de todo es que cuenta con múltiples plugins..."
---
![Sublime Text]({{"/assets/images/portadas/sublime_text.jpg" | prepend: url }} )

**Sublime Text** es un potente editor de texto y código, en mi opinión es agradable,  fácil de configurar y lo mejor de todo es que cuenta con múltiples **plugins**.

Personalmente lo uso para escribir código como ( **CSS3**, **JavaScript**, **HTML5** ).

### Descargar sublime text

**Sublime Text** es multiplataforma, esta disponible en su versión (2 y 3).

<a class="btn btn-link" href="http://www.sublimetext.com/" target="_blank">**Sublime Text**</a>

### Instalando el Package Control

La instalación de **Sublime Text** es como toda aplicación, pero para poder instalar los **plugins**, primero tenemos que instalar el **Package Control**.

Nos dirigimos al menú de **Sublime Text** el la opción <kbd>View</kbd> > <kbd>Show Console</kbd>, el cual abrirá una caja de texto en la parte inferior, es ahí donde pegaremos el siguiente código y presionamos la tecla <kbd>Enter</kbd>.

#### Código para Sublime Text 2
{% highlight bash %}
import urllib2,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')
{% endhighlight %}

#### Código para Sublime Text 3

{% highlight bash %}
import urllib.request,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)

{% endhighlight %}

Esperamos a que se instale y si todo salio bien al realizar la combinación de teclas <kbd>ctrl + shift + p</kbd> se abrirá el **Package Control**.

![Sublime Text Package Control]({{ "/assets/images/posts/sublime-text-package-control.jpg" | prepend: site.url }} "Sublime Text Package Control")

Ahora elegimos la opción <kbd>Install Package</kbd>.

Para instalar un plugin escribimos el nombre en la caja de texto y elegimos el que deseamos instalar.

![Install Package]({{ "/assets/images/posts/install-package.jpg" | prepend: site.url }} "Install Package")

### Configuración de Sublime Text

 La configuración que realizaremos sera suficiente para poder trabajar de manera eficiente.

Para poder realizar la configuración de usuario nos dirigimos al menú de **Sublime Text**, la opción <kbd>Preferences</kbd> + <kbd>Settings&nbsp;-&nbsp;User</kbd>.

Una vez realizado los pasos de manera correcta se abrirá la siguiente ventana.

![Install Package]({{ "/assets/images/posts/settings-user.png" | prepend: site.url }} "Install Package")

Pegar este código en la ventana anterior.

{% highlight json %}
{
	//font_size: tamaño de fuente
	"font_size": 13,
	//highlight_line: este código hace que se remarque la linea donde te encuentras
	"highlight_line": true,
	//highlight_modified_tabs: este código da un color naranja al 
	//nombre del archivo que se muestra en el tab superior, cuando las modificaciones no han sido guardadas
	"highlight_modified_tabs": true,
	//save_on_focus_lost: este código guarda los cambios una vez que el foco del mouse se posiciona en otra parte
	"save_on_focus_lost": true,
	//tab_size: este código sirve para dar el número de espacios blancos que equivale un tabulador
	"tab_size": 2
}
{% endhighlight %}

Si existe lineas de código solo lo agregan en la parte inferior dentro de las llaves ( `{ }` ); quiero decir que lo copiarían sin las llaves, para que funcione.

No olviden agregar una coma antes de pegar el código.

### Algunos plugins

#### **Emment**
Este es un excelente plugin, sirve para poder escribir código de forma rápida; usa snippets pre construidos.

Ejemplo: escribir cinco links.

`a*5` + <kbd>Tab</kbd>

Aquí un manual [pdf](https://drive.google.com/file/d/0B3HDGXa3Vd-EbGo0YndHNW5OMkE/view?usp=sharing), es de Zen Coding 0.6 (el nombre que tenia anteriormente); pero funciona correctamente.

Repositorio [Emmet](https://github.com/emmetio/emmet) en GitHub.

#### **YUI Compressor**

Esta herramienta es excelente para comprimir nuestros archivos **CSS** y archivos **JavaScript**.

Para su funcionamiento requiere que tenga instalado [Java](https://www.java.com/es/download/).

Para comprimir tus archivos solo debes abrirlo y realizar la combinación de teclas <kbd>Ctrl</kbd> + <kbd>B</kbd>.

Repositorio [YUI-Compressor](https://github.com/leon/YUI-Compressor) en GitHub.


#### **SideBarEnhancements**

Proporciona mejoras en las operaciones en la barra lateral de archivos y carpetas para Sublime Text.

No funciona en **Sublime Text 2**.

Repositorio  [SideBarEnhancements](https://github.com/titoBouzout/SideBarEnhancements) en GitHub.

<br>

***

<br>

<i class="fa fa-quote-left fa-3x fa-pull-left fa-border"></i>Existen múltiples plugin para diferentes usos, solo es cuestión de buscar el que se ajusta a nuestras necesidades.

<br>

Bueno amigos si les interesa este editor solo tienen que leer la documentación de [Sublime text 3](https://www.sublimetext.com/docs/3/) o [ublime text 2](https://www.sublimetext.com/docs/2/).
