---
layout: post
title:  "Crear mapa con Google Maps API"
date:   2016-02-29 09:41:41 -0500
categories: mapa google-maps
tumblr_id: articulo-06
photo_url : "/assets/images/portadas/google-maps.jpg"
description: "Google Maps API (Application Programming Interface), te permite mostrar mapas, personalizar mapas y la información sobre mapas..."
---
![Crear un mapa con Google Maps API]({{ "/assets/images/portadas/google-maps.jpg" | prepend: url }})

Google Maps API te permite personalizar mapas y la información sobre mapas; una API (**A**pplication **P**rogramming **I**nterface) es un conjunto de métodos y herramientas que se pueden utilizar para crear aplicaciones de software.

En este tutorial vamos a realizar algunos ejemplos de uso de Google Maps API.

Primero nos averiguamos nuestras coordenadas en [la siguiente página](http://www.coordenadas-gps.com/), yo voy a usar las coordenadas al azar de la capital del Perú.

### Mapa básico
Este es un ejemplo básico de como mostrar un mapa, como verán el resultado no es tan exacto pero veremos mas adelante como colocar un marcador.

{% highlight html linenos %}
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Mapa básico</title>
<style>
	/*Estilos para el contenedor del mapa*/
	#map_lima{
		width:100%px;
		height:380px;
	}
</style>
<!-- Agregar la librería de Google Maps API -->
<script src="http://maps.googleapis.com/maps/api/js"></script>
<script>
// Función para inicializar el mapa
function inicializar() {
  var mapa_lima = {
  	// Mostramos las coordenadas (Latitud, Longitud) en el centro del mapa
    center:new google.maps.LatLng(-12.046374,-77.0427934),
    // Tamaño del zoom
    zoom:15,
    // Tipo de mapa: ROADMAP, SATELLITE, HYBRID, TERRAIN 
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  // Creamos un mapa en el contenedor con id map_lima,  usando los parámetros de la variable mapa_lima
  var map=new google.maps.Map(document.getElementById("map_lima"), mapa_lima);
}
//Mostramos el mapa una vez que cargue la página, con el evento addDomListener de Google Maps API
google.maps.event.addDomListener(window, 'load', inicializar);
</script>
</head>
<body>
<!-- Contenedor del mapa -->
<div id="map_lima"></div>
</body>
</html>
{% endhighlight %}

### Ver resultado

<p data-height="430" data-theme-id="0" data-slug-hash="MywdZW" data-default-tab="result" data-user="01luisrene" class="codepen">See the Pen <a href="http://codepen.io/01luisrene/pen/MywdZW/">MAPA BÁSICO</a> by Luis Rene Mas Mas (<a href="http://codepen.io/01luisrene">@01luisrene</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### Colocar un marcador en el mapa

En este ejemplo se mostrara un marcador en las coordenadas que hemos indicado.

{% highlight html linenos %}
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Mapa con marcador</title>
<style>
	/*Estilos para el contenedor del mapa*/
	#map_lima{
		width:100%;
		height:380px;
	}
</style>
<!-- Agregar la librería de Google Maps API -->
<script src="http://maps.googleapis.com/maps/api/js"></script>

<script>
//Variable que almacena las coordenadas
var myCenter=new google.maps.LatLng(-12.046374,-77.0427934);

// Función para inicializar el mapa
function initialize()
{
var mapa_lima = {
  //Muestra las coordenadas al centro del mapa
  center:myCenter,
  //Zoom del mapa 
  zoom:10,
  // Tipo de mapa: ROADMAP, SATELLITE, HYBRID, TERRAIN 
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

// Creamos un mapa en el contenedor con id map_lima,  usando los parámetros de la variable mapa_lima
var map=new google.maps.Map(document.getElementById("map_lima"),mapa_lima);

//Mostramos el marcador en las coordenadas almacenada en la variable myCenter
var marker=new google.maps.Marker({
  position:myCenter,
  });

//Añadimos el marcador para el mapa utilizando el método setMap()
marker.setMap(map);
}

//Mostramos el mapa una vez que cargue el navegador, con el evento addDomListener de Google Maps API
google.maps.event.addDomListener(window, 'load', initialize);
</script>
</head>

<body>
<div id="map_lima"></div>
</body>
</html>
{% endhighlight %}

### Ver resultado

<p data-height="430" data-theme-id="0" data-slug-hash="pyJmmz" data-default-tab="result" data-user="01luisrene" class="codepen">See the Pen <a href="http://codepen.io/01luisrene/pen/pyJmmz/"> COLOCAR UN MARCADOR EN EL MAPA</a> by Luis Rene Mas Mas (<a href="http://codepen.io/01luisrene">@01luisrene</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### Mapa personalizado
 
 Este mapa es personalizado, y así como este mapa se puede crear muchos más a nuestra medida.

 {% highlight html linenos%}
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Mapa personalizado</title>
<style>
	/*Estilos para el contenedor del mapa*/
	#map_lima{
		width:100%;
		height:380px;
	}
</style>
<!-- Agregar la librería de Google Maps API -->
<script src="http://maps.googleapis.com/maps/api/js"></script>

<script>
//Variable que almacena las coordenadas
var direccion_lima=new google.maps.LatLng(-12.046374,-77.0427934);

// Función para inicializar el mapa
function initialize()
{
var mapProp = {
  //Muestra las coordenadas al centro del mapa
  center:direccion_lima,
  //Zoom del mapa 
  zoom:10,
 // Tipo de mapa: ROADMAP, SATELLITE, HYBRID, TERRAIN 
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

// Creamos un mapa en el contenedor con id map_lima,  usando los parámetros de la variable mapProp
var map = new google.maps.Map(document.getElementById("map_lima"),mapProp);

var myCity = new google.maps.Circle({
  //Muestra las coordenadas al centro del mapa
  center:direccion_lima,
  //Especifica el radio del círculo, en metros
  radius:2000,
  //Especifica un color hexadecimal para la línea alrededor del círculo (formato: "#FFFFFF")
  strokeColor:"#0080FF",
  //Especifica la opacidad del color del trazo (un valor entre 0,0 y 1,0)
  strokeOpacity:0.8,
  //Especifica el grosor del trazo de la línea en píxeles
  strokeWeight:2,
  //Especifica un color hexadecimal para el área dentro del círculo (formato: "#FFFFFF")
  fillColor:"#0080FF",
  //Especifica la opacidad del color de relleno (un valor entre 0,0 y 1,0)
  fillOpacity:0.4,
  //Define si el círculo es editable por los usuarios (verdadero / falso)
  editable: false
  });

//Mostramos el circulo en el mapa utilizando el método setMap()
myCity.setMap(map);

//Mostramos el marcador en las coordenadas almacenada en la variable direccion_lima
var marker=new google.maps.Marker({
  position:direccion_lima,
});

//Añadimos el marcador para el mapa utilizando el método setMap()
marker.setMap(map);

// Mostramos nuestro texto
var infowindow = new google.maps.InfoWindow({
  content:"Lima - Perú!"
  });

//infowindow muestra el contenido (generalmente texto o imágenes) en una ventana emergente por encima del mapa
infowindow.open(map,marker);
}

//Mostramos el mapa una vez que cargue el navegador, con el evento addDomListener de Google Maps API
google.maps.event.addDomListener(window, 'load', initialize);
</script>
</head>

<body>
<div id="map_lima"></div>
</body>
</html>
 {% endhighlight %}

### Ver resultado

<p data-height="430" data-theme-id="0" data-slug-hash="GZJabB" data-default-tab="result" data-user="01luisrene" class="codepen">See the Pen <a href="http://codepen.io/01luisrene/pen/GZJabB/">MAPA PERSONALIZADO</a> by Luis Rene Mas Mas (<a href="http://codepen.io/01luisrene">@01luisrene</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### Descargar archivos

Puedes descargar los [archivos](https://gist.github.com/01luisrene/eee62d63fbe07c42ac3c) que están alojados en GitHub Gist.

### Info

Aquí puedes encontrar todo lo relacionado con [Google Maps API](http://www.w3schools.com/googleapi/default.asp).
