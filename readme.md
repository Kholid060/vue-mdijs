![version](https://img.shields.io/npm/v/vue-mdijs) ![license](https://img.shields.io/npm/l/vue-mdijs) ![downloads](https://img.shields.io/npm/dw/vue-mdijs)

# Vue-Mdijs
Vue component wrapper for [@mdi/js](https://www.npmjs.com/package/@mdi/js)

## Installation
```
// NPM
npm i @mdi/js vue-mdijs

// Yarn
yarn add @mdi/js vue-mdijs
```

## Usage
main.js
```js
import { createApp } from 'vue';
import App from './app.vue';
import VueMdijs from 'vue-mdijs';
import { mdiMagnify } from '@mdi/js';

const app = createApp(App);

VueMdijs.add({ mdiMagnify });

app.use(VueMdijs);
```
app.vue
```html
<template>
    <div id="app">
        <v-mdi name="mdi-magnify"></v-mdi>
        <v-mdi name="mdi-magnify" fill="green"></v-mdi>
    </div>
</template>
```

## Props

|  Name | Description | Type | Default | Accepted values |
|---|---|--- | --- | --- |
|`name`  | String  | `String` | `null`  | - |
|  `size` | Icon size  | `String`, `Number` | `24` | - |
| `title` | A11y SVG Title | `String` | `null` | - |
| `fill` | Color of icon | `String` | `currentColor` | `rgb()`/`rgba()`/`#000` |
| `rotate` | Icon rotation | `Number` | `null` | `0` to `360` |
