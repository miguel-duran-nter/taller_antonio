# Eleventy - 11ty - starter-kit

[11ty](https://www.11ty.dev/) is a minimalist, SEO friendly, agnostic and very fast way to create static sites ([SSG]((https://dev.to/martygo/exploring-the-differences-between-ssr-ssg-csr-and-isr-which-is-the-best-approach-43a3))) using markdowns and engine templates within JS ecosystem. As they said in their own website, Eleventy is known for both its lightweight core in the form of speedy installs/builds and lightweight site output in the form of speedy sites!. You can check other options at [Jamstack](https://jamstack.org/).

The **purpose** of this project is to be used as a starter point to enable **web develpment at light speed**.

Although there are almost nothing to set up when starting with 11ty, the starter-kit ease you those small tasks. Turning them into a piece of cake.

## Demo link of the starter-kit

[11ty starter kit tutorial]

## How this project is configured

The starter kit has been thougth as a basic structure for a micro-blog or wiki-page to be deployed using github pages mainly. Although, it will work perfectly fine in case you want to deploy it on any other shared hosting service or so. There are some commands cutomized for github pages service that would require updates from your side and maybe extra manual steps not covered here.

With that said. The starter kit uses [Nunjucks](#while-developing---execution-commands-scripts) for HTML main pages generation (templates), and in-built markdown capabailities for each post. [PicoCSS](#regarding-css-styles) for styling and any markdown editor as a tool for creating the content. My personal recommendation is [Obs(idian](https://obsidian.md/), a free tool that has been out in the market for a long time.

There are many other ways to adapt the project to your needs, however this is the one I found suits for me the best. Hopefully it suits for you too.

*Happy coding!*

## Dependencies

- 11ty
- PicoCSS (as linked style-sheet)

## Regarding css styles

As the goal of this setup is to keep everything as simple as possible, together with carrying on a professional output. PicoCSS has been chosen as css library provider due to its minimal and lightweight css customization by default. Together with PicoCSS, the project implemented a minimal css classes based approach file to enhance PicoCSS.

[See docs reference for more details.](#official-sites-for-docs-reference)

The color-schema or flavour provided for PicoCSS and chosen for this project is azure, "pico.min.css".

## Basic installation

If you want to see how to set a 11ty project from scratch, go [here](#brief-step-to-step-guide-to-perform-an-installation-from-scratch)

- Download and install nodejs > 14v
- Clone the starter kit repository
- Get in the folder
- Type the following commands:

```sh
npm i
```

```sh
npm start
```

- Finally, click on the link for opening your browser

## Official sites for docs reference

- [Eleventy 11ty](https://www.11ty.dev/)
- [Eleventy 11ty Docs](https://www.11ty.dev/docs/)
- [Eleventy 11ty Images](https://www.11ty.dev/mascot/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [Jinja2](https://jinja.palletsprojects.com/en/3.1.x/)
- [PicoCSS](https://picocss.com/)
- [PicoCSS - Flavours](https://picocss.com/docs/version-picker)
- [Mozilla web dev - docs](https://developer.mozilla.org/en-US/)

## While developing - Execution commands scripts

- Run development mode and start coding

```sh
npm run dev && code .
```

- Build the project

```sh
npm run build
```

- Erase *dist folder

```sh
npm run clean
```

- Deploy to Github Pages

```sh
npm run deploy
```

### Plugins

- If using a template engine, it's highly likely that its format isn't recognised by vscode default settings, so install the proper extension.
- For this project, the template engine chosen is Nunjucks (a jinja2 template based, developed by mozilla)
- As part of the content is going to be written in markdown. Having a plugin is another good choice.

  - Recommended vscode plugins:

    Name: Nunjucks Template
    Id: eseom.nunjucks-template
    Description: Formatting, Syntax Highlighting, Hover, and Snippets for Nunjucks
    Version: 0.5.1
    Publisher: eseom
    VS Marketplace Link: <https://marketplace.visualstudio.com/items?itemName=eseom.nunjucks-template>

    Name: markdownlint
    Id: DavidAnson.vscode-markdownlint
    Description: Markdown linting and style checking for Visual Studio Code
    Version: 0.55.0
    Publisher: David Anson
    VS Marketplace Link: <https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint>

### Brief step-to-step guide to perform an installation from scratch

- Once nodejs is installed, create a folder to host the project and get in it
- Type the following commands:

```sh
git init && npm init -y
```

```sh
echo "node_modules\ndist\n.vscode" > .gitignore
```

- Install the required and desired dependencies

```sh
npm i @11ty/eleventy -DE
```

- Creating a folder structure and placing basic files

```sh
mkdir src/_data src/_includes src/js src/css src/assets
```

```sh
touch .eleventy.js src/index.njk src/js/index.js 
```

- Choosing between PicoCSS or any other css library, as well as creating yours. Or even choose both.
  *If PicoCSS choice, after copying the file where you want to place it, it's highly recommended to format it:*
  
```sh
wget -P src/css/ https://raw.githubusercontent.com/picocss/pico/main/css/pico.min.css
```

  -> *Or:*

```sh
curl -o src/css/pico.min.css https://raw.githubusercontent.com/picocss/pico/main/css/pico.min.css
```

  *If custom css choice:*

```sh
touch src/css/styles.css
```

- Changing default 11ty settings -> File: .eleventy.js

```js
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets')
  eleventyConfig.addPassthroughCopy('src/css')
  eleventyConfig.addPassthroughCopy('src/js')
  
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
```

- Customazing package.json

```json
{
  "main": ".eleventy.js",
  "scripts": {
    "start": "eleventy --serve",
    "dev": "eleventy --serve",
    "clean": "rm -rf dist",
    "build": "npm run clean && eleventy",
    "deploy": "npm run build && npx gh-pages -d dist"
  },
}
```

- Installing template engine and recommended [plugin](#while-developing---execution-commands-scripts)
- Update your global settings.json vscode file, or create a specific one for the project, following the plugin instructions

```sh
mkdir .vscode && touch settings.json
```

```json
"vsicons.associations.files": [
  { "icon": "nunjucks", "extensions": ["njk"], "format": "svg" }
],
"emmet.includeLanguages": {
  "njk": "html"
},
```

- Create your custom structure and HTML pages for your views

```sh
mkdir src/posts
```

```sh
touch src/about.njk src/contact.njk
```

- Place your posts views (if following this example) within its folder

```sh
touch src/posts/whatever-the-name-of-your-post.md
```

- Creating layout files and components to be used within our templates

```sh
mkdir src/_include/layout src/_include/components
```

```sh
touch src/_include/layout/layout-page.njk src/_include/layout/layout-post.njk
touch src/_include/components/header.njk src/_include/components/footer.njk
```

- Seeing hello world! for the first time.
- Filling layout-page.njk template file with basic HTML and including the css link to your styles. (Type ! and then paste the link as the example below)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{{ description }}">
    <link rel="icon" href="/assets/eleventy.png" type="image/png" />
    <link rel="stylesheet" href="/css/pico.min.css"/>
    <link rel="stylesheet" href="/css/styles.css"/>
    <title>{{ title }} - 11ty starter-kit</title>
  </head>
  <body>
    {% include "components/header.njk" %}
    <main class="container-fluid">
      {{ content | safe }}
    </main>
    <script src="/js/index.js" type="module"></script>
  </body>
</html>
```

- Filling the index.njk with the HTML content we want to see and YAML variables.

```html
---
layout: layout/layout-page.njk
title: Home
description: This is the home page
---

<h1>Hello world!</h1>
<p>{{ description }}</p>
```

```sh
npm run dev
```

- Within the _data folder you can create custom json files to use dynamically later on your project. Example:

```sh
touch src/_data/linksData.json
```

```json
[
    {
        "text": "Eleventy 11ty",
        "URL": "https://www.11ty.dev/"
    },
    {
        "text": "Eleventy 11ty Docs",
        "URL": "https://www.11ty.dev/docs/"
    },
    {
        "text": "Eleventy 11ty Images",
        "URL": "https://www.11ty.dev/mascot/"
    },
    {
        "text": "Nunjucks",
        "URL": "https://mozilla.github.io/nunjucks/"
    },
    {
        "text": "Jinja2",
        "URL": "https://jinja.palletsprojects.com/en/3.1.x/"
    },
    {
        "text": "PicoCSS",
        "URL": "https://picocss.com/"
    },
    {
        "text": "PicoCSS - Flavours",
        "URL": "https://picocss.com/docs/version-picker"
    },
    {
        "text": "Mozilla web dev - docs",
        "URL": "https://developer.mozilla.org/en-US/"
    }
]
```

- For enhancing 11ty capabilities, we can set our own Nunjucks pipes to apply some js logic to our page placing it within our .eleventy.js. For example, to format dates.

```js
  eleventyConfig.addFilter('simpleDate', (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  })
```

- Finally, we need to deploy our project. In this example, using Github pages. For doing so, we need to add some extra settings to our project. Our .eleventy.js file will look as following:

```js
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets')
  eleventyConfig.addPassthroughCopy('src/css')
  eleventyConfig.addPassthroughCopy('src/js')
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)
  eleventyConfig.addFilter('simpleDate', (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  })

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
```

```sh
npm run deploy
```

- Up to this point, it is time to fly alone. Hopefully, the hints given above were useful to you. Anyhow, is highly recommended to check 11ty and Nunjucks docs from now on.

*Happy coding!*
