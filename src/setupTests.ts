import "@testing-library/jest-dom";

const mockLocalStorage = (() => {
  let store = {} as Storage;

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },

    removeItem(key: string) {
      delete store[key];
    },

    clear() {
      store = {} as Storage;
    },
  };
})();

export const localStorageMock = Object.create(mockLocalStorage);

Object.defineProperty(window, "localStorage", {
  value: localStorageMock ,
});
