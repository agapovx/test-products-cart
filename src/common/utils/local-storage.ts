/**
 * Get data from the local storage by key
 * @export
 * @template T Type of the data in local storage
 * @param {string} key Key of local storage
 * @param {T} fallbackData Fallback data if local storage is empty
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
 * @export
 * @template T Type of the data in local storage
 * @param {string} key Key of local storage
 * @param {T} value
 */
export const saveDataToLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};
