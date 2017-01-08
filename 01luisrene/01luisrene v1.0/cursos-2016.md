---
layout: other
title: Cursos a llevar el 2016
description: "Aquí una pequeña lista de los cursos a llevar el 2016."
permalink: /cursos/
---
<div class="panel panel-default">
  <!-- Default panel contents -->
  <div class="panel-heading">Meta 2016</div>
  <div class="panel-body">
    <p>Estos lenguajes de programación los aprenderé el 2016.</p>
  </div>

  <!-- Table -->
  <table class="table">
  <thead> 
	  <tr> 
	  	 <th>#</th>
	  	 <th>Lenguaje de Programación</th>
	  	 <th>Descripción</th>
	  	 <th>Estado</th>
	  </tr> 
  </thead>
   <tbody id="listCursos"></tbody>
  </table>
</div>

<h2>Cursos futuros</h2>

<div class="panel panel-default">
  <!-- Default panel contents -->
  <div class="panel-heading">Metas futuras</div>
  <div class="panel-body">
    <p>Algunos lenguajes de programación que aprenderé en el futuro.</p>
  </div>

  <!-- Table -->
  <table class="table">
  <thead> 
	  <tr> 
	  	 <th>#</th>
	  	 <th>Lenguaje de Programación</th>
	  	 <th>Descripción</th>
	  	 <th>Estado</th>
	  </tr> 
  </thead>
   <tbody id="listaCursosFuturos"></tbody>
  </table>
</div>

<div id="proyecto">
	<h2>Fecha inicio de proyecto</h2>
	<i class="fa fa-calendar-times-o fa-3x"></i>: <span class="fecha">2016-11-01</span>
</div>


<script>
// estado: Pendiente o Culminado
var cursos = [
	{	"numero": "1",
		"name" : "Docker",
		"url" : "https://www.docker.com/",
		"description": "Automatiza el despliegue de aplicaciones dentro de contenedores de software.",
		"estado" : "Pendiente"
	},
	{	"numero": "2",
		"name" : "Ruby",
		"url" : "https://www.ruby-lang.org/es/",
		"description": "<strong>Ruby</strong> es un lenguaje de programación interpretado, reflexivo y orientado a objetos, creado por el programador japonés Yukihiro 'Matz' Matsumoto.",
		"estado" : "Pendiente"
	},
	{	"numero": "3",
		"name" : "NODE.js",
		"url" : "https://nodejs.org/en/",
		"description": "Node.js es un entorno de programación en la capa del servidor basado en el lenguaje de programación Javascript.",
		"estado" : "Pendiente"
	},
	{	"numero": "4",
		"name" : "Socket.io",  
		"url" : "http://socket.io/",
		"description" : "Es una librería que nos permite manejar eventos en tiempo real mediante una conexión TCP y todo ello en JavaScript.",
		"estado" : "Pendiente"
	},
	{	"numero": "5",
		"name" : "Ruby on Rails",
		"url" : "http://rubyonrails.org/",
		"description": "<strong>Ruby on Rails</strong> es una plataforma de trabajo para realizar desarrollos web.",
		"estado" : "Pendiente"
	},
	{	"numero": "6",
		"name" : "SASS",
		"url" : "http://sass-lang.com/"	,
		"description": "Sass es un meta-lenguaje en la parte superior de la CSS que se utiliza para describir el estilo de un documento de manera limpia y estructural..",
		"estado" : "Pendiente"
	},
	{	"numero": "7",
		"name" : "JavaScript",
		"url" : "http://www.w3schools.com/js/",
		"description": "Lenguaje de programación del lado cliente.",
		"estado" : "Pendiente"
	},
	{	"numero": "8",
		"name" : "CoffeeScript",
		"url" : "http://coffeescript.org/",
		"description": "CoffeeScript es un lenguaje que se compila a JavaScript y que se ha vuelto muy popular dentro de la comunidad Node.js y Rails.",
		"estado" : "Pendiente"
	},
	{	"numero": "9",
		"name" : "React",
		"url" : "https://facebook.github.io/react/",
		"description": "React es una biblioteca escrita en JavaScript, desarrollada en Facebook para facilitar la creación de componentes interactivos, reutilizables, para interfaces de usuario.",
		"estado" : "Pendiente"
	},
	{	"numero": "10",
		"name" : "jQuery",
		"url" : "https://jquery.com/",
		"description": "jQuery es una biblioteca de JavaScript, creada inicialmente por John Resig, que permite simplificar la manera de interactuar con los documentos HTML, manipular el árbol DOM, manejar eventos, desarrollar animaciones y agregar interacción con la técnica AJAX a páginas web.",
		"estado" : "Pendiente"
	}
];

var cursosFuturos = [
	{	"numero": "1",
		"name" : "Go",
		"url" : "https://golang.org/",
		"description": "Lenguaje de programación desarrollado por Google.",
		"estado" : "Pendiente"}
];

listaCursos(cursos);
listaCursosFuturos(cursosFuturos);
function listaCursos(arr) {
    var out = "";
    var i;
    var estado="";
    for(i = 0; i < arr.length; i++) {
  		if(arr[i].estado == 'Pendiente'){
  			estado = "pendiente";
  		}else{
  			estado = "culminado"
  		}
      out +="<tr class='"+estado+"'>"+
      				"<td>"+arr[i].numero+"</td>"+
      				"<td><span class='name'><a href='"+arr[i].url+"' target='_blank'>"+arr[i].name+"</a></span></td>"+
      				"<td><span class='description'>"+arr[i].description+"</span></td>"+
      				"<td>"+arr[i].estado+"</td>"+
      			"</tr>";
    }
    document.getElementById("listCursos").innerHTML = out;
}
function listaCursosFuturos(arr) {
    var out = "";
    var i;
    var estado="";
    for(i = 0; i < arr.length; i++) {
  		if(arr[i].estado == 'Pendiente'){
  			estado = "pendiente";
  		}else{
  			estado = "culminado"
  		}
      out +="<tr class='"+estado+"'>"+
      				"<td>"+arr[i].numero+"</td>"+
      				"<td><span class='name'><a href='"+arr[i].url+"' target='_blank'>"+arr[i].name+"</a></span></td>"+
      				"<td><span class='description'>"+arr[i].description+"</span></td>"+
      				"<td>"+arr[i].estado+"</td>"+
      			"</tr>";
    }		
    document.getElementById("listaCursosFuturos").innerHTML = out;
}
</script>