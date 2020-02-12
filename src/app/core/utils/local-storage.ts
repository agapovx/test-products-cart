/**
 * Получает данные из внутреннего хранилища
 * @template T
 * @param {string} key - ключ, по которому нужно взять данные из хранилища
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
 * Сохраняет данные во внутреннее хранилище
 * @template T
 * @param {string} key ключ, по которому нужно сохранить данные
 * @param {T} value значение, которое нужно сохранить
 */
export const saveDataToLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};
