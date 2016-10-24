---
layout: post
title:  "Codear en LESS"
date:   2016-01-23 09:41:41 -0500
categories: Preprocesadores
tumblr_id: articulo-02
photo_url : "/assets/images/portadas/less.jpg"
description: "La mayoría de programadores a utilizado por décadas las hojas de estilo CSS, que sirven para dar estilos, apariencia de como se vera su web"
---

La mayoría de programadores a utilizado por décadas las hojas de estilo __CSS__, que sirven para dar estilos, apariencia de como se vera su web.

El problema se da cuando hay la necesidad de crear variables para poder usarlos en múltiples **clases e id** por ejemplo.

### Ejemplo con CSS
Tenemos las siguientes variables ( `.contenedor`, `.text`, `.link`, `#main` ).

``` css
#main{
	background: #000;
	color: #fff;
	font-size: 20px;
}
.contenedor{
	background: #fff;
	color: #000;
	font-size: 16px;
}
.text{
	color: #fff;
	font-size: 18px;
}
.link{
	color: #000;
	font-size: 14px;
}
```
Este es un pequeño ejemplo, pero que pasaría si tenemos un mega proyecto ahí es donde **LESS** seria de gran ayuda.

### Ejemplo con LESS

``` css

/* 
Variables LESS 
*/
@bg: #fff;
@color-black: #000;
@font-size-base: 16px;

#main{
	background: @color-black;
	color: @bg;
	font-size: @font-size-base + 4;
}
.contenedor{
	background: @bg;
	color: @color-black;
	font-size: @font-size-base;
}
.text{
	color: @color-black;
	font-size: @font-size-base + 2;
}
.link{
	color: @color-black;
	font-size: @font-size-base - 2;
}
```

Este código al ser renderizado por **LESS** a **CSS** nos daría el mismo estilo que del ejemplo anterior, solo que nos deja con mas expectativas.

### Página Oficial de LESS

Para aquellos que despertó su curiosidad como la mía en algún momento, aquí les dejo el link de la web oficial para que puedan experimentar y profundizar sus conocimientos.

<a class="btn btn-link" href="http://lesscss.org/" title="LESS" rel="nofollow" target="_blank">LESS</a>

## Video Tutorial LESS

<iframe class="video-youtube" src="https://www.youtube.com/embed/TXLl-y44zmU?rel=0&showinfo=1&controls=1" frameborder="0" allowfullscreen></iframe>

## Descargar los Archivos

Acá pueden <a class="link" href="https://goo.gl/NhWKsE" target="_blank">descargar</a> los archivos que se a utilizado en el Vídeo Tutorial sobre LESS.