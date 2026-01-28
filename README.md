<p align="center">
  <img src="https://raw.githubusercontent.com/vuefrag/vue-computed-eager/main/banner.svg" alt="vue-computed-eager" width="100%" />
</p>

<h1 align="center">vue-computed-eager</h1>

<p align="center">A Vue 3 composition API utility that creates computed properties which evaluate immediately when dependencies change, rather than lazily on access. Ideal for simple boolean checks with rarely-changing values. Note: Vue 3.4+ has built-in optimization making this less necessary.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-computed-eager"><img src="https://img.shields.io/npm/v/vue-computed-eager.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-computed-eager"><img src="https://img.shields.io/npm/dm/vue-computed-eager.svg" alt="npm downloads" /></a>
</p>

## Installation

```bash
npm install vue-computed-eager
```

## Usage

```ts
import { computedEager } from 'vue-computed-eager'
import { ref } from 'vue'

const todos = ref([])
const hasOpenTodos = computedEager(() => !!todos.value.length)

console.log(hasOpenTodos.value) // false
todos.value.push({ title: 'Learn Vue' })
console.log(hasOpenTodos.value) // true
```

## License

MIT

Extracted from [VueUse](https://vueuse.org/) for standalone use.
