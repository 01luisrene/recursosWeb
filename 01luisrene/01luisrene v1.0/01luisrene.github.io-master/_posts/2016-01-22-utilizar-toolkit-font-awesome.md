---
layout: post
title:  "Utilizar el Toolkit Font Awesome"
date:   2016-01-22 09:41:41 -0500
categories: font-awesome toolkit
tumblr_id: articulo-01
photo_url : "/assets/images/portadas/font_awesome.jpg"
description: "Utilizar el Toolkit Font Awesome es extremadamente fácil, pero la verdad yo al igual que ustedes aprendo de la web y la primera ves que lo vi me fue confuso, espero que su experiencia sea mejor..."
---
![Font Awesome]({{"/assets/images/portadas/font_awesome.jpg" | prepend: url }} )

Utilizar el **Toolkit Font Awesome** es extremadamente fácil, pero la verdad yo al igual que ustedes aprendo de la web y la primera ves que lo vi me fue confuso, espero que su experiencia sea mejor.

**Toolkit Font Awesome** son fuentes en forma de iconos como  el logo de **Facebook**, **Twitter**, **Google Plus**, **HTML5**, **CSS3**, **GitHub**, **WordPress**, etc.

### Agregar Font Awesome desde su CDN

Vamos a utilizarlo desde su CDN es más practico y ayuda en la carga de tu web te lo aseguro.

Copiamos el link dentro de la etiqueta `head` en nuestro archivo ya sea **HTML**, **PHP**, etc.

{% highlight bash %}
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
{% endhighlight %}

### Iconos Font Awesome

Te recomiendo visitar este link **<a class="btn btn-link" href="https://fortawesome.github.io/Font-Awesome/icons/" target="_blank">Iconos Font Awesome</a>** para ver los nombre de los iconos.

Elige el icono que vas a emplear y dale clic, en la siguiente página te mostrara el código que debes de usar, como por ejemplo: <code>&#60;i class="fa fa-black-tie"&#62;&#60;/i&#62;</code>.

Así de simple mi amigo(a) espero que te sea de utilidad para tus proyectos.

### uso en una página

Aquí un pequeño código para comprenderlo mejor.

{% highlight html %}
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Uso de Font Awesome</title>
<!-- link de font awesome-->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<style>
 /*Estilos básicos para el menú*/
 .menu{ list-style-type: none;}
 .menu li{ margin-bottom: 10px;}
 .menu li a{ text-decoration: none;}
 .menu li a:hover{ text-decoration: underline; }
 
 /*Estilos para colorear los iconos*/
 .fa-firefox{color: #d96a26;}
 .fa-internet-explorer{color: #3170b3;}
 .fa-chrome{color: #46a554;}
 .fa-safari{color: #3881ac;}
 .fa-opera{color: #f26261;}
</style>
</head>
<body>
<h1>Uso de iconos Font Awesome</h1>
<h2>Descarga tu navegador web favorito</h2>
<ul class="menu">
  <li><i class="fa fa-firefox fa-2x"></i> <a href="https://www.mozilla.org/es-ES/firefox/new/" target="_blank">Firefox</a></li>
  <li><i class="fa fa-internet-explorer fa-2x"></i> <a href="https://www.microsoft.com/es-es/download/internet-explorer-11-for-windows-7-details.aspx" target="_blank">Internet Explorer</a></li>
  <li><i class="fa fa-chrome fa-2x"></i> <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">Google Crhome</a></li>
  <li><i class="fa fa-safari fa-2x"></i> <a href="http://www.apple.com/es/safari/" target="_blank">Safari</a></li>
  <li><i class="fa fa-opera fa-2x"></i> <a href="http://www.opera.com/es" target="_blank">Opera</a></li>
</ul>
</body>
</html>
{% endhighlight %}

### Ver resultado

<p data-height="365" data-theme-id="0" data-slug-hash="oxXEGZ" data-default-tab="result" data-user="01luisrene" class="codepen">See the Pen <a href="http://codepen.io/01luisrene/pen/oxXEGZ/">Utilizar el Toolkit Font Awesome</a> by Luis Rene Mas Mas (<a href="http://codepen.io/01luisrene">@01luisrene</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### Ejemplos del toolkit Font Awesome

Te recomiendo visitar esta página: <a class="btn btn-link" href="http://fortawesome.github.io/Font-Awesome/examples/" target="_blank">**Ejemplos Font Awesome**</a>.
