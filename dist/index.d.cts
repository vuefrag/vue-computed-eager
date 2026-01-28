import { WatchOptionsBase, ShallowRef } from 'vue';

type ComputedEagerOptions = WatchOptionsBase;
type ComputedEagerReturn<T = any> = Readonly<ShallowRef<T>>;
/**
 *
 * @deprecated This function will be removed in future version.
 *
 * Note: If you are using Vue 3.4+, you can straight use computed instead.
 * Because in Vue 3.4+, if computed new value does not change,
 * computed, effect, watch, watchEffect, render dependencies will not be triggered.
 * refer: https://github.com/vuejs/core/pull/5912
 *
 * @param fn effect function
 * @param options WatchOptionsBase
 * @returns readonly shallowRef
 */
declare function computedEager<T>(fn: () => T, options?: ComputedEagerOptions): ComputedEagerReturn<T>;
/** @deprecated use `computedEager` instead */
declare const eagerComputed: typeof computedEager;

export { computedEager, eagerComputed };
export type { ComputedEagerOptions, ComputedEagerReturn };
