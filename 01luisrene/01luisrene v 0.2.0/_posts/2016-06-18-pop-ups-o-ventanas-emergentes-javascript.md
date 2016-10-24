---
layout: post
title:  "Crear pop-ups con JavaScript"
date:   2016-06-28 17:47:00 -0500
categories: 
keywords: pop-ups, Ventanas Emergentes, Window Open, pop-ups Windows, pop-up windows
photo_url : "/assets/images/portadas/window_open.jpg"
description: "Los pop-ups Windows o ventanas emergentes se utilizan para múltiples casos, el lo particular lo uso para mostrar una ventana de suscripción a mi lista de correos"
---
Los **pop-ups Windows** o **ventanas emergentes** se utilizan para múltiples casos, el lo particular lo uso para mostrar una ventana de suscripción a mi lista de correos; también lo usan para mostrar publicidad y lo mas importante hay que tener cuidado cuando estas ventanas carguen porque podrían adjuntarse virus, spyware el cual dañaría a su equipo.

Pero dejando de lado todo lo negativo y el malintencionado de los usuarios en este tutorial les voy a enseñar como crear **pop-ups Windows** o **ventanas emergentes** con JavaScript.

## Sintaxis

```html
window.open(URL,name,specs,replace);
```

El método `window.open()` crea el **pop-up**, el cual recibe varios parámetros como:

<ul class="lista-desordenada">
	<li>
	<strong>URL</strong>: aquí escribirás la ruta <strong>URL</strong> como por ejemplo <code>http://01luisrene.com</code>
	</li>
	<li>
		<strong>name</strong>: es  el nombre que se le asignara al <strong>pop-up</strong>
	</li>
	<li>
		<strong>specs</strong>: son las propiedades como ancho, altura, margen left, margen top...
	</li>
	<li>
		<strong>replace</strong>: es opcional, especifica si la dirección <strong>URL</strong> crea una nueva entrada o sustituye a la entrada actual de la lista del historial.
	</li>
</ul>

> Reemplazando todos los parámetros quedaría así.

```html
window.open("http://01luisrene.com", "miVentana", "width=380, height=500, top=85, left=50", true);
```

### Ejemplo de uso

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>pop-ups o ventanas emergentes</title>
</head>
<body>
  <button id="botonWindowOpen">Abrir pop-up</button>
  <button id="botonWindowClose">Cerrar pop-up</button>
  <script>
    //Variable que almacena el método window.open()
    var miVentana;

    //La función window_open crea el pop-up o ventana emergente
    function window_open(){
      miVentana = window.open( "http://01luisrene.com", "nombrePop-Up", "width=380,height=500, top=85,left=50");
    }
    
    //La función window_close cerrara el pop-up o ventana emergente
    function window_close(){
      miVentana.close();
    }
    
    // Llamo a la función window_open en el evento click del botón con id = "botonWindowOpen"
    document.getElementById("botonWindowOpen").onclick = function() {window_open()};

    // Llamo a la función window_close en el evento click del botón con id = "botonWindowClose"
    document.getElementById("botonWindowClose").onclick = function() {window_close()};
  </script>
</body>
</html>
```

## Ver resultado

<p data-height="265" data-theme-id="0" data-slug-hash="Vjpxpy" data-default-tab="result" data-user="01luisrene" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/01luisrene/pen/Vjpxpy/">Font Awesome -  Usar fuentes en forma de iconos</a> by Luis Rene Mas Mas (<a href="http://codepen.io/01luisrene">@01luisrene</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### Info

Más información acerca de [window open](http://www.w3schools.com/jsref/met_win_open.asp)
