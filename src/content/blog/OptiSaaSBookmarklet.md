---
author: Dan Isaacs
pubDatetime: 2024-12-22T16:35:39.741Z
title: Copy Optimizely SaaS CMS Settings to ENV Format Via Bookmarklet
slug: opti-saas-bookmarklet
featured: false
draft: false
tags:
  - optimizely
  - cms
  - saas
  - dev
description: Do you work with multiple Optimizely SaaS CMS instances? Use a bookmarklet to automatically copy them to your clipboard, ready to paste into your env file.
---

## Table of contents

## Intro

This one's probably for a pretty limited audience, but that's okay (it's also for me to find it later). Do you work with multiple [Optimizely SaaS CMS](https://world.optimizely.com/products/cms/saas/) instances? Tired of manually pulling the API keys from the SaaS CMS dashboard? Use the bookmarklet below to automatically copy them to your clipboard, ready to paste into your env file.

Big thanks to Kunal -- this is *heavily* inspired by [his gist to output the env vars to the clipboard](https://gist.github.com/kunalshetye/69866ff2929f42e79712f4088c8f2d40). 

## Bookmarklet code

```
javascript:(function(){let items=document.querySelectorAll(".dashboard__column div:nth-child(3) > table > tbody > tr");let output=Array();output.push(`OPTIMIZELY_GRAPH_GATEWAY=${items[0].lastChild.innerText}`);output.push(`OPTIMIZELY_GRAPH_APP_KEY=${items[1].lastChild.innerText}`);output.push(`OPTIMIZELY_GRAPH_SECRET=${items[2].lastChild.firstChild.value}`);output.push(`OPTIMIZELY_GRAPH_SINGLE_KEY=${items[3].lastChild.innerText}`);navigator.clipboard.writeText(output.join("\n"));null;})();
```

(You can see the [un-minified code](#unminified-code-for-bookmarklet) at the bottom of this post.)

## Usage
1. In Chrome, create a new bookmark:
    1. _Name_: call it whatever you want; this is just the name of the bookmark (ex: opti-saas-env-vars)
    2. _URL_: paste in the bookmarklet code
2. Go to your SaaS CMS dashboard page: https://your-saas-cms-site-url.cms.optimizely.com/ui/CMS/dashboard
3. Click on the bookmark you just created.

Your env vars should now be in your clipboard -- verify the results by pasting into your env file (or any text file, really). It should look like this (but with your values):

```
OPTIMIZELY_GRAPH_GATEWAY=https://cg.optimizely.com/
OPTIMIZELY_GRAPH_APP_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
OPTIMIZELY_GRAPH_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
OPTIMIZELY_GRAPH_SINGLE_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Unminified code for bookmarklet

```js
javascript:(function(){
	let items = document.querySelectorAll(".dashboard__column div:nth-child(3) > table > tbody > tr");
	let output = Array();
	output.push(`OPTIMIZELY_GRAPH_GATEWAY=${items[0].lastChild.innerText}`);
	output.push(`OPTIMIZELY_GRAPH_APP_KEY=${items[1].lastChild.innerText}`);
	output.push(`OPTIMIZELY_GRAPH_SECRET=${items[2].lastChild.firstChild.value}`);
	output.push(`OPTIMIZELY_GRAPH_SINGLE_KEY=${items[3].lastChild.innerText}`);
	navigator.clipboard.writeText(output.join("\n"));
	null;
})();
```