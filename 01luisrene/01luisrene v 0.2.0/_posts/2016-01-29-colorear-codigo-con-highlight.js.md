---
layout: post
title: "Colorear Código con Highlight.js"
date: 2016-01-29 10:38:00 -0500
categories: JavaScript
tumblr_id: articulo-04
photo_url : "/assets/images/portadas/highlight_js.jpg"
description: "Muchas veces deseamos compartir códigos con nuestros usuarios y para poder darles una mejor presentación podemos usar highlight.js esta librería JavaScript es asombrosa"
---
Muchas veces deseamos compartir códigos con nuestros usuarios y para poder darles una mejor presentación podemos usar <a class="link" href="https://highlightjs.org/" rel="nofollow">highlight.js</a>, esta librería **JavaScript** es asombrosa.

### Descargar librería highlight.js

Para descargar esta librería JavaScript visita la siguiente página.

<a class="btn btn-link" href="https://highlightjs.org/download/" target="_blank" rel="nofollow">Highlight.js</a>

En esta página podemos seleccionar los estilos **CSS** para los lenguajes que deseamos dar una mejor presentación.

### Uso

Aquí un pequeño código de uso en un archivo **html**.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta name="description" content="Uso de highlight.js para colorear nuestros códigos.">
  <title>HIGHLIGHT.js</title>
  <!--Este estilo CSS se encuentra en el archivo zip descargado anteriormente; carpeta styles.-->
  <link rel="stylesheet" href="styles/monokai-sublime.css">
  <style>
    html{
      margin:0;
      padding:0;
      overflow:hidden;
    }
    body{
      background: #fff;
      color: #1A1A1A;
      font-size: 16px;
      font-weight: normal;
      margin:0;
      padding:0 10px;
    }
    h1{
      color: #ff6262;
      font-size: 3em;
      font-weight: 700;
      margin-top: 10px;
      line-height:normal;
    }
  </style>
</head>
<body>
<h1>Código CSS formateado con highlight.js</h1>
<!--Nuestro código debe ir dentro de la etiqueta pre + code-->
<pre><code>
html{
 margin:0;
 padding:0;
 overflow:hidden;
}
 body{
 background: #fff;
 color: #1A1A1A;
 font-size: 16px;
 font-weight: normal;
 margin:0;
 padding:0;
}
h1{
  font-size: 3em;
  font-weight: 700;
  margin-top: 1.5em;
  line-height:normal;
}
</code></pre>

<!--Librería jQuery-->
<script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
<!--Link de la librería desde su CDN, si usted lo desea puede usar el archivo js descargado-->
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.1.0/highlight.min.js"></script>
<!--Código importante para que funcione nuestra librería-->
<script>
	$(document).ready(function() {
	  $('pre code').each(function(i, block) {
	    hljs.highlightBlock(block);
	  });
	});
</script>
</body>
</html>
```

### Ver resultado

<p data-height="550" data-theme-id="0" data-slug-hash="GZJYmO" data-default-tab="result" data-user="01luisrene" class="codepen">See the Pen <a href="http://codepen.io/01luisrene/pen/GZJYmO/">highlight.js</a> by Luis Rene Mas Mas (<a href="http://codepen.io/01luisrene">@01luisrene</a>) on <a href="http://codepen.io">CodePen</a>.</p>

Ahora todo el código que se encuentre dentro de las etiquetas <kbd>pre</kbd> > <kbd>code</kbd>, tendrán una mejor presentación.
