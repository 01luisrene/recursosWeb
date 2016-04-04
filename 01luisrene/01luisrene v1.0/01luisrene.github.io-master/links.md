---
layout: other
title: Links
description: "Aquí se encontrará la lista de los links de 01luisrene.com"
permalink: /links/
---
<ul class="lista-links">
	<li>
		<a href="{{ site.url }}/">{{ site.url }}/</a>
	</li>
	<li>
		<a href="{{ site.url }}/blog/">{{ site.url }}/blog/</a>
	</li>
	<li>
		<a href="{{ site.url }}/contacto/">{{ site.url }}/contacto/</a>
	</li>
	<li>
		<a href="{{ site.url }}/acerca/">{{ site.url }}/acerca/</a>
	</li>
	{% for page in site.posts %}
	<li>
		<a href="{{ site.url }}{{ page.url }}">{{ site.url }}{{ page.url }}</a>
	</li>
	{% endfor %}
</ul>