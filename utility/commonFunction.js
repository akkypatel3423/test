// CHECK EMPTY ARRAY OR NOT CHECK DEFINE COMMON FUNCTION
export const emptyArray = (array) => {
  const newArray = array.filter((element) => {
    if (Object.keys(element).length !== 0) {
      return true;
    }
    return false;
  });
  return newArray;
};

// STRING IN FIRST LATTER UPPERCASE REPLACE DEFINE COMMON FUNCTION
export const firstLetterUppercase = (string = "") => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
