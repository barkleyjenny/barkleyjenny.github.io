---
layout: archive
title: "The Blog"
permalink: /the-blog/
excerpt: ""
last_modified_at: 2024-01-22
author_profile: true
---

{% include archive-single.html %}

{% for post in site.posts %}
  {% unless post.hidden %}
    {% include archive-single.html %}
  {% endunless %}
{% endfor %}