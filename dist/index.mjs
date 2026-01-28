import { shallowRef, watchEffect, readonly } from 'vue';

function computedEager(fn, options) {
  const result = shallowRef();
  watchEffect(() => {
    result.value = fn();
  }, {
    ...options,
    flush: options?.flush ?? "sync"
  });
  return readonly(result);
}
const eagerComputed = computedEager;

export { computedEager, eagerComputed };
