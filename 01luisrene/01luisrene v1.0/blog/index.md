---
layout: blog
title: BLog
description: "Blog 01luisrene: diseñado para publicar contenidos relacionado con HTML5, CSS3, Javascript, etc. Y así poder compartirlo con los múltiples usuarios que están listos para aprender algo nuevo todos los días."
photo_url: "/assets/images/portadas/bg_post.png"
---

<section class="post-list">
    {% for post in site.posts limit:15 %}
      <article class="post">
        {% if post.photo_url %}
        <header>
          <div class="image_post" style="background-image:url('{{ post.photo_url }}')"></div>
        </header>
        {% endif %}
        <section>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.url }}">{{ post.title }}</a>
        </h2>
        <span class="post-meta"><i class="fa fa-calendar-o"></i> {{ post.date | date: "%b %-d, %Y" }}</span>
        {% if post.description %}
        <span class="body">{{ post.description | markdownify }}</span>
        {% else %}
        <span class="body">{{ post.excerpt | strip_html }}</span>
        {% endif %}
        </section>
        <footer>
        <a class="btn btn-primary" href="{{ post.url | prepend: site.url }}">Leer m&aacute;s <i class="fa fa-angle-double-right"></i></a>
        </footer>
      </article>
    {% endfor %}
  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.url }}">via RSS</a></p>

</section>