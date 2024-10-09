---
author: Dan Isaacs
pubDatetime: 2024-10-09T04:05:39.741Z
title: Running Astro Locally With HTTPS
slug: astro-local-dev-https
featured: false
draft: false
tags:
  - astro
  - dev
description: Running Astro in local dev mode with HTTPS
---

## Table of contents

## Intro

[Astro](https://astro.build/) has been my framework of choice for a little bit now. This post isn't to talk about all the virtues of working with Astro, just a simple post about running Astro locally under HTTPS. At the very least, so I remember next time I want to do it.

## Setup

You can follow the [instructions from storyblok](https://www.storyblok.com/faq/setting-up-https-on-localhost-in-astro), or do the following to take it a step further and avoid an SSL cert error in your browser ([learn more here](https://github.com/liuweiGL/vite-plugin-mkcert)):

Install _mkcert_ to your Astro project:

```
$ npm install -D vite-plugin-mkcert
```

Update your _astro.config.mjs_:

```
import mkcert from 'vite-plugin-mkcert'

...
...

export default defineConfig({
    ...,
    vite: {
        plugins: [ mkcert() ]
    }
})
```

And.... that's it! Next time you start your project (_npm run dev_, or whatever), it should start at: _https://localhost:4321/_ (with no security warning when you load it in the browser).
