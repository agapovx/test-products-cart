export const omitValue = <T, K extends keyof T>(omitObject: T, omitKey: K): Omit<T, K> => {
  const { [omitKey]: deleted, ...without } = omitObject;
  return Object.assign({}, without);
}