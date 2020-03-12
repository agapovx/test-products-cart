
/**
 * Immutable Omit object by key
 * @export
 * @template T Type of the Object to Omit
 * @template K Type of the Key
 * @param {T} omitObject Objecto to Omit
 * @param {K} omitKey Key to Omit
 */
export const omitValue = <T, K extends keyof T>(omitObject: T, omitKey: K): Omit<T, K> => {
  const { [omitKey]: deleted, ...without } = omitObject;
  return Object.assign({}, without);
}