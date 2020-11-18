# V-TW-Directives

![Tests](https://github.com/kimuraz/v-tw/workflows/Tests/badge.svg?branch=main) ![Lint](https://github.com/kimuraz/v-tw/workflows/Lint/badge.svg?branch=main)

This project enables you to create UI components using tailwindcss, VueJS and bare html elements on templates.

## Installing

To install the package:

```
$ npm install v-tw-directives

# or

$ yarn add v-tw-diretives
```

and add it as a plugin for your Vue project:

```
import VTW from 'v-tw-directive';

Vue.use(VTW, {
  tw: {
    button: {
      classes: 'bg-teal-300 hover:bg-teal-400 text-white py-2 px-3',
    }
  },
  card: {
      classes: 'bg-gray-100 rounded-sm p-2',
      modifiers: {
          green: 'bg-green-200',
          bordered: 'border border-gray-200',
      },
  },
});
```

:warning: Make sure to already have install TailwindCSS on your vue project.
(First time, I've used this [tutorial](https://flaviocopes.com/vue-tailwind/))

### Options

The options passed on the installation are entries for the element tags (`button`, `a`, `h1`, etc), it must contain the entry `classes` inside it so the directive will get it and apply properly to the element. For other options, please check the code and tests for now, since it doesn't have documentation yet (sorry).

### Example after installation

```
<template>
  <!-- It will apply: 'bg-teal-300 hover:bg-teal-400 text-white py-2 px-3' to the button -->
  <button v-tw>Default button</button>
</template>

<script>
export default {
  name: 'App',
};
</script>
```

For elements no bound to a tag, here known as "custom", use `v-twc`

```
<template>
  <div v-twc="card">A custom card</div>
</template>

<script>
export default {
  name: 'App',
};
</script>
```

### Demo

Check this repo: https://github.com/kimuraz/v-tw-demo
