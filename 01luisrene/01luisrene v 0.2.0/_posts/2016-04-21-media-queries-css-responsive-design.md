---
layout: post
title:  "Media Queries CSS (Responsive Design)"
date:   2016-04-21 17:15:41 -0500
categories: CSS 
photo_url : "/assets/images/portadas/media_queries.jpg"
description: "Los módulos Media Queries aparecieron en la versión de CSS3, esta propiedad nos facilita el trabajo de realizar múltiples plantillas"
---
Los módulos **Media Queries** aparecieron en la versión de CSS3, esta propiedad nos facilita el trabajo de realizar múltiples plantillas para diferentes dispositivos electrónicos.

Antes que apareciera los módulos **Media Queries** de CSS, para poder tener diferentes versiones de nuestro proyecto (móvil, tablet, PC), una de las formas era crear subdominios y cuando el usuario accedía a tu sitio web desde un smartphone por ejemplo, condicionabas para que se redirija al subdominio de la versión móvil.

Pero eso quedo en el pasado gracias a las ventajas que ofrecen los módulos **Media Queries** de CSS.

Los módulos **Media Queries** nos facilitan realizar páginas Responsive Design (**Diseño Sensible**), que se ajusten a diferentes tipos de pantallas y resoluciones con una sola versión de nuestro proyecto.

## viewport

Antes de comenzar, para que todos nuestros **Media Queries** funciones de maravilla, tenemos que agregar el meta `viewport` dentro del tag `head` de HTML.

#### Opción N° 1

Activa las capacidades de zoom en dispositivos móviles.

```html
<! DOCTYPE html> 
<html lang="es">
<head>
 <title>viewport - opeción n° 1</title>
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <style>
  /* Queries */
 </style>
</head>
<body>
 <!-- contenido -->
</body>
</html>
```

#### Opción N° 2

Desactiva las capacidades de zoom en dispositivos móviles.

```html
<! DOCTYPE html> 
<html lang="es">
<head>
 <title>viewport - opeción n° 2</title>
 <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
 <style>
	/* Queries */
 </style>
</head>
<body>
 <!-- contenido -->
</body>
</html>
```

## Reglas Media Queries

Vamos a explicar un poco sobre la estructura de los módulos **Media Queries** con la siguiente regla.

```css
@media screen and (min-width: 700px) and (orientation: landscape) { /* Estilos CSS */ }
```

### Nota 

> Te recomiendo que lees este contenido te puede ayudar a comprenderlo mejor.

<ul class="lista-desordenada">
	<li>
	<code>@media</code>: esta propiedad indica el comienzo de una regla Media Queries.
	</li>
	<li>
	<p>
	<code>screen and (min-width: 700px) and (orientation: landscape)</code>: esta es la condicón a cumplirse, <code>screen</code> indica que se aplicaran a las multiples pantallas o monitores, <code>and</code> es la condición (en español seria 'y'), <code>min-width: </code> es el valor en pixeles, em, rm, ..., <code>orientation: landscape</code> pantalla en formato horizontal (landscape).
	</p>	
	<p>
	La regla seria: para todas las pantallas y que sean de 700px a más y que la pantalla este en formato horizontal; de lo contrario no se aplicaran los estilos que contenga dicha <b>Media Queries</b>.
	</p>
	</li>
	<li>
	<code>{ }</code> : Las llaves son el contenedor de los estilos CSS.
	</li>
	<li>Así como estas reglas se pueden personalizar a nuestra medida.</li>
</ul>

## Ejemplos de reglas Media Queries

Los valores de las variables `max-width`, `min-width` se pueden ajustar de acuerdo a nuestras necesidades y también usaremos operadores lógicos como `and`, `only`.

Regla para dispositivos con resolución de 699px o menos.

```css
@media (max-width: 699px){...}
```
Regla para dispositivos con resolución entre 700px a 939px.

```css
@media (min-width: 700px) and (max-width: 939px){...}
```

Regla para dispositivos con resolución de 940px a más.

```css
@media (min-width: 940px){...}
```

Regla a cumplirse cuando sea handheld (dispositivos de mano: móviles, PDA, etc.), tenga resolución de 480px a menos y que a su vez la pantalla esta en formato horizontal.

```css
@media handheld and (max-width: 480px) and (orientation: landscape) { ... }
```

Regla a cumplirse solo para impresión.

```css
@media print {...}
```

> También se puede aplicar las reglas a un link que apunte a un archivo css

```css
<link rel="stylesheet" media="all and (max-width: 699px)" href="http://01luisrene.com/estilos-max-699px.css" />
```
> Usamos el operador  &nbsp;<kbd>only</kbd> para que navegadores antiguos que no soporten las funciones **Queries**, no apliquen los estilos CSS.

```css
<link rel="stylesheet" media="only screen and (color)" href="style.css" />
```

### Resultado 

Para este ejemplo solo se cambiara el color del texto, dependiendo de las reglas **Media Queries**.

<p data-height="266" data-theme-id="0" data-slug-hash="pyZEdp" data-default-tab="result" data-user="01luisrene" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/01luisrene/pen/pyZEdp/">Media Queries Básico </a> by Luis Rene Mas Mas (<a href="http://codepen.io/01luisrene">@01luisrene</a>) on <a href="http://codepen.io">CodePen</a>.</p>
