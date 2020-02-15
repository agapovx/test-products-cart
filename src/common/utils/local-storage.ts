/**
 * Get data from the local storage by key
 * @template T
 * @param {string} key
 * @param {T} fallbackData
 */
export const getDataFromLocalStorage = <T>(key: string, fallbackData: T): T => {
  const storageState = localStorage.getItem(key);

  try {
    if (storageState) {
      return JSON.parse(storageState);
    }
    return fallbackData;
  } catch (error) {
    return fallbackData;
  }
};

/**
 * Save data to the local storage
 * @template T
 * @param {string} key
 * @param {T} value
 */
export const saveDataToLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};
