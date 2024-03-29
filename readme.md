![version](https://img.shields.io/npm/v/vue-mdijs) ![license](https://img.shields.io/npm/l/vue-mdijs) ![downloads](https://img.shields.io/npm/dw/vue-mdijs)

# Vue-Mdijs
Vue component wrapper for [@mdi/js](https://www.npmjs.com/package/@mdi/js)

## Installation
If you're using **Vue 3** [click here](https://github.com/kholid060/vue-mdijs/tree/next)
```
// NPM
npm i @mdi/js vue-mdijs

// Yarn
yarn add @mdi/js vue-mdijs
```

## Usage
main.js
```js
import Vue from 'vue'
import VueMdijs from 'vue-mdijs'
import { mdiMagnify } from '@mdi/js'

VueMdijs.add({ mdiMagnify })
Vue.use(VueMdijs)
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
### With `path` prop
```html
<template>
    <v-mdi :path="mdiMagnify"></v-mdi>
</template>
<script>
import { mdiMagnify } from '@mdi/js';

export default {
    setup() {
        return {
            mdiMagnify,
        };
    },
};
</script>
```

## Props

|  Name | Description | Type | Default | Accepted values |
|---|---|--- | --- | --- |
|`name`  | String  | `String` | `null`  | - |
|  `size` | Icon size  | `String`, `Number` | `24` | - |
| `path` | Icon path | `String` | `null` | - |
| `title` | A11y SVG Title | `String` | `null` | - |
| `fill` | Color of icon | `String` | `currentColor` | `rgb()`/`rgba()`/`#000` |
| `rotate` | Icon rotation | `Number` | `null` | `0` to `360` |