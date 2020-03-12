import { lazy as ReactLazy, ComponentClass, FunctionComponent } from 'react';

type ComponentType<T = any> = ComponentClass<T> | FunctionComponent<T>;

/**
 * Able to lazy load React functional/class components with non defaults imports
 * and expand it to default import to make lazy loading work.
 * @export
 * @param factory - Function that return async import of component
 * @param key - Component name
 */
export function lazy<T extends { [V in K]: ComponentType }, K extends keyof T>(
  factory: () => Promise<T>,
  key: K
) {
  return ReactLazy(() => factory().then(cImport => ({ default: cImport[key] })));
}
