---
layout: post
title:  "SEO - META TAGS"
date:   2016-06-29 11:00:20 -0500
categories: seo
photo_url : "/assets/images/portadas/meta_tag.jpg"
description: "Las metaetiquetas son un modo perfecto para que los webmasters faciliten a los motores de búsqueda información sobre sus sitios"
---
Las metaetiquetas son un modo perfecto para que los webmasters faciliten a los motores de búsqueda información sobre sus sitios.

Las metaetiquetas pueden utilizarse para proporcionar información a todo tipo de clientes y cada uno de los sistemas procesa solo las metaetiquetas que entiende e ignora el resto.

Las metaetiquetas se añaden a la sección `<head>` de la página **HTML**.

Las metaetiquetas sirven para dar una mejor presencia a nuestro sitio web en los resultados de búsqueda como: GOOGLE, YAHOO, BING, ...

Pero quiero recalcar que les hablare de las metaetiquetas que he utilizado para posicionarme en los resultados de búsqueda de GOOGLE, aunque las variaciones con los demás motores de búsqueda no varían demasiado.

## META TAGS

Les voy a describir de la mejor manera posible todas las metaetiquetas que a continuación detallare.

***

### Meta charset

> La metaetiqueta charset nos permite asegurar que el navegador reconozca la codificación de caracteres utilizada antes de que comience a procesar la carga del sitio web.

● `<meta>` charset para HTML5.

```html
<meta charset="UTF-8">
```

### Meta description

> La metaetiqueta description sirve para describir de forma concisa, sobre el contenido de nuestra página web.

● tamaño máximo recomendado es de 155 caracteres, aunque puede contener más caracteres.

```html
<meta name="description" content=" ... ">
```

### Titulo

> Esta metaetiqueta proporciona información del titulo de nuestra página.
	
● Elige un titulo único y descriptivo para tu página.

● Tamaño máximo recomendado es de 67 caracteres para que Google no le acorte a la hora de mostrar los resultados de búsqueda.

```html
<title>SEO - Meta Etiquetas html</title>
```

### Meta autor

> La metaetiqueta author sirve para dar a conocer al autor del sitio web.

```html
<meta name="author" content=" ... ">
```

### Meta robots

> La metaetiqueta robots informa a los motores de búsqueda si quieres que indexe tu página.

<ul class="lista-desordenada">
<li><b>index/noindex</b> – Atributo para indicar si debe o no indexar la página en la base de datos del buscador.</li>

<li><b>follow/nofollow</b> – Atributo para decirle al buscador si debe o no seguir los enlaces contenidos en la página.</li>

<li><b>noarchive</b> – Previene que el buscador guarde en cache la página.</li>

<li><b>nosnippet</b> – No se mostrará ninguna descripción en los resultados de búsqueda.</li>

<li><b>noodp</b> – En ocasiones el buscador toma la descripción de nuestra página que tenemos en el ODP (Open DirectoryProject). Esto solo funciona si nuestra página está incluida en dicho directorio. </li>

<li><b>noydir</b> – Similar al ODP, se refiere al directorio de Yahoo.</li>

<li><b>noimageindex</b> – Previene que la página aparezca como enlace de una imagen indexada en Google.</li>

<li><b>nocache</b> – Sinónimo de "noarchive".</li>
</ul>

```html
<meta name="robots" content="INDEX, FOLLOW">
```

### Canonical

> Las URL canónicas sirve para mejorar los indicativos de enlace y de ranking del contenido disponible a través de varias estructuras de URL o de distribución.

Ver el tema completo de [URL canónicas](https://support.google.com/webmasters/answer/139066?hl=es).

```html
<link rel="canonical" href="http://www.midominio.com/" />
```

### Meta viewport

> Un &#60;meta&#62; viewport da las instrucciones a su navegador sobre cómo controlar las dimensiones y la escala de la página.

```html
<meta name="viewport" content="width=device-width,initial-scale=1"/>
```

Puede desactivar las capacidades de zoom en dispositivos móviles mediante la adición `user-scalable=no`

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```

### Meta geo

> Los geo meta tags son las ubicaciones geográficas escritas en lenguaje HTML que indican a los buscadores donde reside la web. La ubicación geográfica de donde es operado el sitio web; no del hosting o servidor web que puede ser muy diferente.

Generador de [geo meta tags](http://www.geo-tag.de/generator/en.html).

```html
<meta name="geo.region" content="PE" />
<meta name="geo.position" content="-9.189967;-75.015152" />
<meta name="ICBM" content="-9.189967, -75.015152" />
```

### Open Graph

> El protocolo Open Graph permite a cualquier página web convertirse en un objeto rico en gráfico social. Por ejemplo, esto se utiliza en Facebook para permitir a cualquier página web tener la misma funcionalidad que cualquier otro objeto en Facebook.

Los `<meta>` Open Graph son muy descriptivos.

Algunos ejemplos de etiquetas `<meta>` Open Graph.

```html
<meta property="og:type" content="..." />
<meta property="og:site_name" content="..." />
<meta property="og:title" content="..." />
<meta name="og:description" content="..." />
<meta property="og:image" content="..." />
<meta property="og:url" content="..." />
```

Ver la información completa del protocolo [Open Graph](http://ogp.me/).

> Twitter Card Tags

Comportamiento de reserva Open Graph para cada etiqueta de Twitter.

```html
<meta property="twitter:card" content="..." />
<meta property="twitter:site" content="..." />
<meta property="twitter:title" content="..." />
<meta property="twitter:description" content="..." />
<meta property="twitter:image" content="..." />
<meta property="twitter:url" content="..." />
```

Ver la información completa sobre [Twitter Card Tags](https://dev.twitter.com/cards/markup).


## Uso en Nuestro Sitio Web

Para este ejemplo usaremos la estructura HTML5.

```html
<!DOCTYPE html>
<!--EL atributo lang indica el idioma o lenguaje que utiliza la página web-->
<html lang="es">
<head>

	<meta charset="UTF-8">

	<meta name="description" content="Meta Etiquetas usadas para facilitar la información a los motores de busqueda">

	<title>SEO - Meta Etiquetas html</title>

	<meta name="author" content="Luis Rene Mas Mas">

	<meta name="robots" content="INDEX, FOLLOW">

	<link rel="canonical" href="http://www.tudominio.com/">

	<meta name="viewport" content="width=device-width,initial-scale=1">
	
	<!--Geo Tgas-->

	<meta name="geo.region" content="PE" />
	<meta name="geo.position" content="-9.189967;-75.015152" />
	<meta name="ICBM" content="-9.189967, -75.015152" />

	<!--OpenGraph-->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="01luisrene" />
	<meta property="og:title" content="SEO - Meta Etiquetas html" />
	<meta name="og:description" content="Meta Etiquetas usadas para facilitar la información a los motores de busqueda" />
	<meta property="og:image" content="path/images/seo-meta-tags.jpg" />
	<meta property="og:url" content="http://tudominio.com" />

	<!--Twitter OpenGraph-->
	<meta property="twitter:card" content="summary" />
	<meta property="twitter:site" content="@twitter-user" />
	<meta property="twitter:title" content="SEO - Meta Etiquetas html" />
	<meta property="twitter:description" content="Meta Etiquetas usadas para facilitar la información a los motores de busqueda" />
	<meta property="twitter:image" content="path/images/seo-meta-tags.jpg" />
	<meta property="twitter:url" content="http://tudominio.com" />
	
	<!-- Favicon -->
	<link rel="shortcut icon" href="http://tudominio.com/favicon.ico" />

	<!--Fuentes y Estilos-->

</head>
<body>
	<!-- Contenido HTML-->

	<!-- Archivos JavaScript -->
</body>
</html>
```

### Info

Todo el material asido recopilado de búsquedas en GOOGLE.