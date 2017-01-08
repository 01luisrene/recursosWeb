---
layout: post
title:  "Codear en LESS"
date:   2016-01-23 09:41:41 -0500
categories: LESS Preprocesador
tumblr_id: articulo-02
photo_url : "/assets/images/portadas/less.jpg"
description: "La mayoría de programadores a utilizado por décadas las hojas de estilo CSS, que sirven para dar estilos, apariencia de como se vera su web..."
---
![LESS]({{"/assets/images/portadas/less.jpg" | prepend: url }} )

La mayoría de programadores a utilizado por décadas las hojas de estilo __CSS__, que sirven para dar estilos, apariencia de como se vera su web.

El problema se da cuando hay la necesidad de crear variables para poder usarlos en múltiples **clases e id** por ejemplo.

### Ejemplo con CSS
Tenemos las siguientes variables ( `.contenedor`, `.text`, `.link`, `#main` ).

{% highlight css %}
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
{% endhighlight %}

Este es un pequeño ejemplo, pero que pasaría si tenemos un mega proyecto ahí es donde **LESS** seria de gran ayuda.

### Ejemplo con LESS

{% highlight css %}

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
{% endhighlight %}

Este código al ser renderizado por **LESS** a **CSS** nos daría el mismo estilo que del ejemplo anterior, solo que nos deja con mas expectativas.

### Página Oficial de LESS

Para aquellos que despertó su curiosidad como la mía en algún momento aquí les dejo el link de la web oficial para que puedan experimentar y profundizar sus conocimientos.

<a class="btn btn-link" href="http://lesscss.org/" title="LESS">**Página de LESS**</a>