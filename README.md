# vue-computed-eager

Eager computed

> Extracted from [VueUse](https://vueuse.org/) for standalone use.

## Installation

```bash
npm install vue-computed-eager
```

## Usage

```ts
import { computedEager } from 'vue-computed-eager';
```

Eager computed without lazy evaluation.

> **Info:** This function will be removed in future version.


> **Tip:** Note💡: If you are using Vue 3.4+, you can use `computed` right away, you no longer need this function.
In Vue 3.4+, if the computed new value does not change, `computed`, `effect`, `watch`, `watchEffect`, `render` dependencies will not be triggered.
See: https://github.com/vuejs/core/pull/5912


Learn more at [Vue: When a computed property can be the wrong tool](https://dev.to/linusborg/vue-when-a-computed-property-can-be-the-wrong-tool-195j).

- Use `computed()` when you have a complex calculation going on, which can actually profit from caching and lazy evaluation and should only be (re-)calculated if really necessary.
- Use `computedEager()` when you have a simple operation, with a rarely changing return value – often a boolean.

```ts
import { ref } from 'vue';
import { computedEager } from 'vue-computed-eager';

const todos = ref([]);
const hasOpenTodos = computedEager(() => !!todos.value.length);

console.log(hasOpenTodos.value); // false
todos.value.push({ title: 'Learn Vue' });
console.log(hasOpenTodos.value); // true
```

## License

MIT
