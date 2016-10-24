---
layout: post
title:  "Botón subir (top) - para tu Website"
date:   2016-07-24 05:25:41 -0500
categories: JavaScript
keywords: boton up, boton subir, boton ir arriba, boton top, boton index
tumblr_id: 
photo_url : "/assets/images/portadas/boton_subir_top.jpg"
description: "Incorporar un  botón de subir (top) ó botón ir arriba en una página que tenga contenido extenso es algo imprescindible"
---
Incorporar un  botón de subir (**top**) ó botón ir arriba en una página que tenga contenido extenso es algo imprescindible.

En este tutorial vamos a implementar un botón ir arriba o botón subir (**top**) de una manera sencilla, utilizando la librería JavaScript [**jQuery**](https://jquery.com/).

## Materiales

<ul class="lista-ordenada">
	<li>
		<a href="https://developers.google.com/speed/libraries/#jquery" target="_blank">jQuery</a>
	</li>
	<li>
		<a href="http://fontawesome.io/" target="_blank">Font Awesome</a>
	</li>
</ul>

## Código

Estructura HTML5 básica.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Botón subir (top)</title>
  <!-- stylesheet CSS -->
</head>
<body>

  <!-- 
   código y contenido
   ...
  -->

  <!-- librerías JavaScript -->
  <!-- código JavaScript -->
</body>
</html>
```

### HTML

```html
<!-- código HTMl botón subir (top)-->
<a href="#" id="js_up" class="boton-subir">
  <!-- link del icono http://fontawesome.io/icon/rocket/ -->
  <i class="fa fa-rocket" aria-hidden="true"></i>
</a>
```

### CSS

```css
/*botón up*/
.boton-subir{
  display: none;
  background: #00974B;
  border: thin solid #fff;
  border-radius: 3px;
  position: fixed;
  right: 15px;
  bottom:2px;
  z-index: 999999999;
}
/*evento hover*/
.boton-subir:hover{
  box-shadow:   0px 2px 10px 0px rgba(255, 255, 255, 0.75);
}
/*estilos para el tag i*/
.boton-subir i{
  color: #fff;
  font-size: 1.5em;
  padding: 10px 10px 10px 7px;
  -ms-transform: rotate(-45deg); /* IE 9 */
  -webkit-transform: rotate(-45deg); /* Chrome, Safari, Opera */
  transform: rotate(-45deg);
}
```

### JavaScript

Incluye estas librerías antes del cierre del tag `body`.

```html
<!-- librerías js -->

<!-- jQuery-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

<!-- 
Font Awesome js 

para generar su propio Font Awesome js les recomiendo ver este video -> https://youtu.be/g53yHVQGXh8

Este script lo genere para este tutorial les recomiendo que lo cambien gracias :)
-->
<script src="https://use.fontawesome.com/a18b0c2e94.js"></script>
```

Agrega este script js a tu archivo externo ó pegalo dentro de tu plantilla html.

```javascript
<!-- script para que funcione al 100% el botón ir arriba -->
<script>
//invocamos al objeto (window) y a su método (scroll), solo se ejecutara si el usuario hace scroll en la página
$(window).scroll(function(){
  if($(this).scrollTop() > 300){ //condición a cumplirse cuando el usuario aya bajado 301px a más.
    $("#js_up").slideDown(300); //se muestra el botón en 300 mili segundos
  }else{ // si no
    $("#js_up").slideUp(300); //se oculta el botón en 300 mili segundos
  }
});

//creamos una función accediendo a la etiqueta i en su evento click
$("#js_up i").on('click', function (e) { 
  e.preventDefault(); //evita que se ejecute el tag ancla (<a href="#">valor</a>).
  $("body,html").animate({ // aplicamos la función animate a los tags body y html
    scrollTop: 0 //al colocar el valor 0 a scrollTop me volverá a la parte inicial de la página
  },700); //el valor 700 indica que lo ara en 700 mili segundos
  return false; //rompe el bucle
});
</script>
```

> Recuerden amigos para que puedan ver este ejemplo funcionando al 100%, los recomiendo agregar bastante contenido en su página.