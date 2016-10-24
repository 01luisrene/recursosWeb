---
layout: post
title:  "Como Crear un Archivo Robots.txt"
date:   2016-02-24 07:40:00
categories: seo
tumblr_id: articulo-05
photo_url : "/assets/images/portadas/robots.txt.jpg"
description: "Crear un archivo robots.txt sirve para poder controlar, a que partes de tu sitio web, no quieres que accedan los rastreadores como (Googlebot, Googlebot-Image)"
---

Crear un archivo **robot** sirve para poder controlar, a que partes de tu sitio web, no quieres que accedan los rastreadores como (Googlebot, Googlebot-Image).

Cabe recalcar que este tutorial esta enfocado en gran mayoría o quizá al 100% en los rastreadores de Google.

En este tutorial vamos a crear un archivo de tipo **txt** con el nombre **robots.txt**, ahí detallaremos para que sirve cada linea de código.

Podemos utilizar cualquier editor de código o texto yo los recomiendo <a class="link" href="https://www.sublimetext.com/" target="_blank" rel="nofollow">Sublime Text</a>, ya que es mi favorito.

El archivo **robots.txt** se incluirá en la raíz del proyecto para que funcione correctamente.

A continuación algunos de los comandos para el archivo de tipo **robots.txt**.

```TeX
#LISTA DE SPIDERS http://www.robotstxt.org/db.html
#Robots de Google: https://support.google.com/webmasters/answer/1061943

#Usar comodín (*): esta regla se cumplirá para todos los rastreadores
User-agent: *
...

#Formato para declarar las reglas a cumplirse, para los diferentes rastreadores de Google
#Primero
User-agent: #nombre del rastreador (Robot) o (*)
#Segundo: por ejemplo bloquearemos una carpeta
Disallow: /recursos/
...
#fin

#Permitir el rastreo de todo el contenido del sitio
User-agent: *
Disallow:

o

User-agent: *
Allow: /

#Impedir el rastreo de todos los robots rastreadores
User-agent: *
Disallow: /

#Impedir el rastreo de una carpeta específica, para todos los robots rastreadores
User-agent: *
Disallow: /privado/

#Impedir el rastreo de algunas partes del sitio
User-agent: *
Disallow: /calendar/
Disallow: /junk/

#Impedir el rastreo de una página para Googlebot
User-agent: Googlebot
Disallow: /página_privada.html

#Los rastreadores de robot de Google no deben rastrear el directorio http://ejemplo.com/nogooglebot/
User-agent: Googlebot
Disallow: /nogooglebot/

#Ningún rastreador debe rastrear el directorio http://ejemplo.com/onlygooglebot/ y todas las URL incluidas.
User-agent: *
Disallow: /onlygooglebot/

#Impedir el rastreo de una imagen específica para Google Imágenes
User-agent: Googlebot-Image
Disallow: /images/foto_personal.jpg

#Impedir el rastreo de todas las imágenes que haya en el sitio, para Google Imágenes
User-agent: Googlebot-Image
Disallow: /

#Impedir el rastreo de formatos específicos para Google Imágenes
User-agent: Googlebot-Image
Disallow: /*.png$

o

User-agent: Googlebot-Image
Disallow: /*.gif$

o

...

#Bloquear las páginas del sitio, pero mostrar los anuncios de AdSense que haya en ellas, 
#mediante el bloqueo de todos los rastreadores web que no sean Mediapartners-Google. 
User-agent: *

Disallow: /

User-agent: Mediapartners-Google

Allow: /

#Impedir el rastreo de todas las sub carpetas que comienzan con la palabra personal para Googlebot
User-agent: Googlebot
Disallow: /personal*/

#Para bloquear el acceso a todas las URL que incluyan signos de interrogación (?).
#Por ejemplo, las variables que se pasan por url.
User-agent: Googlebot
Disallow: /*?

#Para bloquear URLs que terminen de una forma concreta, utiliza $. Por ejemplo, el código de muestra bloquea cualquier URL que acabe en .pdf.
User-agent: Googlebot
Disallow: /*.pdf$

#Permitir el acceso a un único rastreador
User-agent: Googlebot-Video
Disallow:

User-agent: *
Disallow: /

#Permitir el acceso a todos los rastreadores excepto a uno

User-agent: Mediapartners-Google
Disallow: /

User-agent: *
Disallow:

#Indicar a los rastreadores donde se encuentra el archivo Sitemap
Sitemap: http://www.ejemplo.com/sitemap.xml

#Nota: recuerda que, en algunas situaciones, las URL del sitio web se pueden indexar aunque no se hayan rastreado previamente.

```

### Ejemplo de uso en un proyecto
Te recomiendo que no incluyas ninguna linea de comentarios

```tex
User-agent: *
Allow: /
Disallow: /recursos/
Disallow: /*.scss$
Disallow: /*.md$

User-agent: Googlebot-Image
Disallow: /assets/images/bg/
Disallow: /assets/images/overlays/

Sitemap: http://www.ejemplo.com/sitemap.xml
```

### Descargar archivo robots.txt

Descargar los archivos del artículo **Como crear un archivo robots.txt**.

<a class="btn btn-link" href="https://gist.github.com/01luisrene/29a2ce9ee6da0fce98e3/archive/3756e0a8a3b358fb5fd4096987f094cbedf2127e.zip" target="_blank" rel="nofollow">Descargar</a>

### Info

Para mayor información consulte la ayuda en Google, <a class="link" href="https://support.google.com/webmasters/answer/6062596" rel="nofollow">cómo bloquear URLs con robots.txt</a>
