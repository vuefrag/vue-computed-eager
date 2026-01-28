'use strict';

const vue = require('vue');

function computedEager(fn, options) {
  const result = vue.shallowRef();
  vue.watchEffect(() => {
    result.value = fn();
  }, {
    ...options,
    flush: options?.flush ?? "sync"
  });
  return vue.readonly(result);
}
const eagerComputed = computedEager;

exports.computedEager = computedEager;
exports.eagerComputed = eagerComputed;
