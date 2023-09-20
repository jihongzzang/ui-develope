import type { MutableRefObject } from 'react';

export {};

declare global {
  type MaybeRef<T> = T | MutableRefObject<T>;

  type Fn = () => void;
}
