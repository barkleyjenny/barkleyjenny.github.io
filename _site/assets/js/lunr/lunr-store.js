var store = [,{
    "title": "About",
    "excerpt":"here we go!   This is my title  ","url": "http://localhost:4000/about/"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:4000/"
  },{
    "title": null,
    "excerpt":"var idx = lunr(function () {   this.field('title')   this.field('excerpt')   this.field('categories')   this.field('tags')   this.ref('id')    this.pipeline.remove(lunr.trimmer)    for (var item in store) {     this.add({       title: store[item].title,       excerpt: store[item].excerpt,       categories: store[item].categories,       tags: store[item].tags,       id: item     })   } });  $(document).ready(function() {   $('input#search').on('keyup', function () {     var resultdiv = $('#results');     var query = $(this).val().toLowerCase();     var result =       idx.query(function (q) {         query.split(lunr.tokenizer.separator).forEach(function (term) {           q.term(term, { boost: 100 })           if(query.lastIndexOf(\" \") != query.length-1){             q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })           }           if (term != \"\"){             q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })           }         })       });     resultdiv.empty();     resultdiv.prepend(''+result.length+' Result(s) found ');     for (var item in result) {       var ref = result[item].ref;       if(store[ref].teaser){         var searchitem =           ''+             ''+               ''+                 ''+store[ref].title+''+               ' '+               ''+                 ''+               ''+               ''+store[ref].excerpt.split(\" \").splice(0,20).join(\" \")+'... '+             ''+           '';       }       else{     \t  var searchitem =           ''+             ''+               ''+                 ''+store[ref].title+''+               ' '+               ''+store[ref].excerpt.split(\" \").splice(0,20).join(\" \")+'... '+             ''+           '';       }       resultdiv.append(searchitem);     }   }); }); ","url": "http://localhost:4000/assets/js/lunr/lunr-en.js"
  },{
    "title": null,
    "excerpt":"step1list = new Array(); step1list[\"ΦΑΓΙΑ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΟΥ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΩΝ\"] = \"ΦΑ\"; step1list[\"ΣΚΑΓΙΑ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΟΥ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΩΝ\"] = \"ΣΚΑ\"; step1list[\"ΟΛΟΓΙΟΥ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΑ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΩΝ\"] = \"ΟΛΟ\"; step1list[\"ΣΟΓΙΟΥ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΑ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΩΝ\"] = \"ΣΟ\"; step1list[\"ΤΑΤΟΓΙΑ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΟΥ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΩΝ\"] = \"ΤΑΤΟ\"; step1list[\"ΚΡΕΑΣ\"] = \"ΚΡΕ\"; step1list[\"ΚΡΕΑΤΟΣ\"] = \"ΚΡΕ\"; step1list[\"ΚΡΕΑΤΑ\"] = \"ΚΡΕ\"; step1list[\"ΚΡΕΑΤΩΝ\"] = \"ΚΡΕ\"; step1list[\"ΠΕΡΑΣ\"] = \"ΠΕΡ\"; step1list[\"ΠΕΡΑΤΟΣ\"] = \"ΠΕΡ\"; step1list[\"ΠΕΡΑΤΑ\"] = \"ΠΕΡ\"; step1list[\"ΠΕΡΑΤΩΝ\"] = \"ΠΕΡ\"; step1list[\"ΤΕΡΑΣ\"] = \"ΤΕΡ\"; step1list[\"ΤΕΡΑΤΟΣ\"] = \"ΤΕΡ\"; step1list[\"ΤΕΡΑΤΑ\"] = \"ΤΕΡ\"; step1list[\"ΤΕΡΑΤΩΝ\"] = \"ΤΕΡ\"; step1list[\"ΦΩΣ\"] = \"ΦΩ\"; step1list[\"ΦΩΤΟΣ\"] = \"ΦΩ\"; step1list[\"ΦΩΤΑ\"] = \"ΦΩ\"; step1list[\"ΦΩΤΩΝ\"] = \"ΦΩ\"; step1list[\"ΚΑΘΕΣΤΩΣ\"] = \"ΚΑΘΕΣΤ\"; step1list[\"ΚΑΘΕΣΤΩΤΟΣ\"] = \"ΚΑΘΕΣΤ\"; step1list[\"ΚΑΘΕΣΤΩΤΑ\"] = \"ΚΑΘΕΣΤ\"; step1list[\"ΚΑΘΕΣΤΩΤΩΝ\"] = \"ΚΑΘΕΣΤ\"; step1list[\"ΓΕΓΟΝΟΣ\"] = \"ΓΕΓΟΝ\"; step1list[\"ΓΕΓΟΝΟΤΟΣ\"] = \"ΓΕΓΟΝ\"; step1list[\"ΓΕΓΟΝΟΤΑ\"] = \"ΓΕΓΟΝ\"; step1list[\"ΓΕΓΟΝΟΤΩΝ\"] = \"ΓΕΓΟΝ\";  v = \"[ΑΕΗΙΟΥΩ]\"; v2 = \"[ΑΕΗΙΟΩ]\"  function stemWord(w) {   var stem;   var suffix;   var firstch;   var origword = w;   test1 = new Boolean(true);    if(w.length '+result.length+' Result(s) found ');     for (var item in result) {       var ref = result[item].ref;       if(store[ref].teaser){         var searchitem =           ''+             ''+               ''+                 ''+store[ref].title+''+               ' '+               ''+                 ''+               ''+               ''+store[ref].excerpt.split(\" \").splice(0,20).join(\" \")+'... '+             ''+           '';       }       else{     \t  var searchitem =           ''+             ''+               ''+                 ''+store[ref].title+''+               ' '+               ''+store[ref].excerpt.split(\" \").splice(0,20).join(\" \")+'... '+             ''+           '';       }       resultdiv.append(searchitem);     }   }); }); ","url": "http://localhost:4000/assets/js/lunr/lunr-gr.js"
  },{
    "title": null,
    "excerpt":"var store = [   {%- for c in site.collections -%}     {%- if forloop.last -%}       {%- assign l = true -%}     {%- endif -%}     {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%}     {%- for doc in docs -%}       {%- if doc.header.teaser -%}         {%- capture teaser -%}{{ doc.header.teaser }}{%- endcapture -%}       {%- else -%}         {%- assign teaser = site.teaser -%}       {%- endif -%}       {         \"title\": {{ doc.title | jsonify }},         \"excerpt\":           {%- if site.search_full_content == true -%}             {{ doc.content | newline_to_br |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \"|             strip_html | strip_newlines | jsonify }},           {%- else -%}             {{ doc.content | newline_to_br |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \" |               replace:\" \", \" \"|             strip_html | strip_newlines | truncatewords: 50 | jsonify }},           {%- endif -%}         \"categories\": {{ doc.categories | jsonify }},         \"tags\": {{ doc.tags | jsonify }},         \"url\": {{ doc.url | relative_url | jsonify }},         \"teaser\": {{ teaser | relative_url | jsonify }}       }{%- unless forloop.last and l -%},{%- endunless -%}     {%- endfor -%}   {%- endfor -%}{%- if site.lunr.search_within_pages -%},   {%- assign pages = site.pages | where_exp:'doc','doc.search != false' -%}   {%- for doc in pages -%}     {%- if forloop.last -%}       {%- assign l = true -%}     {%- endif -%}   {     \"title\": {{ doc.title | jsonify }},     \"excerpt\":         {%- if site.search_full_content == true -%}           {{ doc.content | newline_to_br |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \"|           strip_html | strip_newlines | jsonify }},         {%- else -%}           {{ doc.content | newline_to_br |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \" |             replace:\" \", \" \"|           strip_html | strip_newlines | truncatewords: 50 | jsonify }},         {%- endif -%}       \"url\": {{ doc.url | absolute_url | jsonify }}   }{%- unless forloop.last and l -%},{%- endunless -%}   {%- endfor -%} {%- endif -%}] ","url": "http://localhost:4000/assets/js/lunr/lunr-store.js"
  },{
    "title": null,
    "excerpt":" {% if page.xsl %} {% endif %} {% assign collections = site.collections | where_exp:'collection','collection.output != false' %}{% for collection in collections %}{% assign docs = collection.docs | where_exp:'doc','doc.sitemap != false' %}{% for doc in docs %} {{ doc.url | replace:'/index.html','/' | absolute_url | xml_escape }} {% if doc.last_modified_at or doc.date %}{{ doc.last_modified_at | default: doc.date | date_to_xmlschema }} {% endif %} {% endfor %}{% endfor %}{% assign pages = site.html_pages | where_exp:'doc','doc.sitemap != false' | where_exp:'doc','doc.url != \"/404.html\"' %}{% for page in pages %} {{ page.url | replace:'/index.html','/' | absolute_url | xml_escape }} {% if page.last_modified_at %}{{ page.last_modified_at | date_to_xmlschema }} {% endif %} {% endfor %}{% assign static_files = page.static_files | where_exp:'page','page.sitemap != false' | where_exp:'page','page.name != \"404.html\"' %}{% for file in static_files %} {{ file.path | replace:'/index.html','/' | absolute_url | xml_escape }} {{ file.modified_time | date_to_xmlschema }}  {% endfor %} ","url": "http://localhost:4000/sitemap.xml"
  },{
    "title": null,
    "excerpt":"Sitemap: {{ \"sitemap.xml\" | absolute_url }} ","url": "http://localhost:4000/robots.txt"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %}{% endif %}Jekyll{{ site.time | date_to_xmlschema }}{{ page.url | absolute_url | xml_escape }}{% assign title = site.title | default: site.name %}{% if page.collection != \"posts\" %}{% assign collection = page.collection | capitalize %}{% assign title = title | append: \" | \" | append: collection %}{% endif %}{% if page.category %}{% assign category = page.category | capitalize %}{% assign title = title | append: \" | \" | append: category %}{% endif %}{% if title %}{{ title | smartify | xml_escape }}{% endif %}{% if site.description %}{{ site.description | xml_escape }}{% endif %}{% if site.author %}{{ site.author.name | default: site.author | xml_escape }}{% if site.author.email %}{{ site.author.email | xml_escape }}{% endif %}{% if site.author.uri %}{{ site.author.uri | xml_escape }}{% endif %}{% endif %}{% if page.tags %}{% assign posts = site.tags[page.tags] %}{% else %}{% assign posts = site[page.collection] %}{% endif %}{% if page.category %}{% assign posts = posts | where: \"categories\", page.category %}{% endif %}{% unless site.show_drafts %}{% assign posts = posts | where_exp: \"post\", \"post.draft != true\" %}{% endunless %}{% assign posts = posts | sort: \"date\" | reverse %}{% assign posts_limit = site.feed.posts_limit | default: 10 %}{% for post in posts limit: posts_limit %}{% assign post_title = post.title | smartify | strip_html | normalize_whitespace | xml_escape %}{{ post_title }}{{ post.date | date_to_xmlschema }}{{ post.last_modified_at | default: post.date | date_to_xmlschema }}{{ post.id | absolute_url | xml_escape }}{% assign excerpt_only = post.feed.excerpt_only | default: site.feed.excerpt_only %}{% unless excerpt_only %}{% endunless %}{% assign post_author = post.author | default: post.authors[0] | default: site.author %}{% assign post_author = site.data.authors[post_author] | default: post_author %}{% assign post_author_email = post_author.email | default: nil %}{% assign post_author_uri = post_author.uri | default: nil %}{% assign post_author_name = post_author.name | default: post_author %}{{ post_author_name | default: \"\" | xml_escape }}{% if post_author_email %}{{ post_author_email | xml_escape }}{% endif %}{% if post_author_uri %}{{ post_author_uri | xml_escape }}{% endif %}{% if post.category %}{% elsif post.categories %}{% for category in post.categories %}{% endfor %}{% endif %}{% for tag in post.tags %}{% endfor %}{% assign post_summary = post.description | default: post.excerpt %}{% if post_summary and post_summary != empty %}{% endif %}{% assign post_image = post.image.path | default: post.image %}{% if post_image %}{% unless post_image contains \"://\" %}{% assign post_image = post_image | absolute_url %}{% endunless %}{% endif %}{% endfor %}","url": "http://localhost:4000/feed.xml"
  }]
