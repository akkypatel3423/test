// DEFINE LOCATSTORAGE IN GET DATA FUNCTION
const getItem = (key) => {
  const data = typeof window !== "undefined" ? localStorage.getItem(key) : "";
  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};

// DEFINE LOCATSTORAGE IN SET1 DATA FUNCTION
const setItem = (key, value) => {
  const stringify = typeof value !== "string" ? JSON.stringify(value) : value;
  return localStorage.setItem(key, stringify);
};

// DEFINE LOCATSTORAGE IN REMOVE DATA FUNCTION
const removeItem = (key) => {
  localStorage.removeItem(key);
};

// DEFINE EXPORT ALL FUNCTION
export { getItem, setItem, removeItem };
