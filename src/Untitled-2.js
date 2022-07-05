const req = (array) => {
  let newArray = [];
  for (let index = 0; index < array.length - 1; index++) {
    const char1 = array[index];
    const char2 = array[index + 1];
    newArray.push(char1 + char2);
  }
  console.log(newArray);
  if (newArray.length > 1) {
    newArray = req(newArray);
  }
  return newArray;
};
const res = req([1, 2, 3, 4, 5, 6]);
console.log(res);
