const zip = (str) => {
  let newStr = "";
  let counter = 1;
  for (let index = 0; index < str.length; index++) {
    const str1 = str[index];
    if (index < str.length && str1 === str[index + 1]) {
      counter++;
    } else {
      if (counter > 1) { // האם אות קודמת שווה לנוכחית
        newStr += counter;
      }
      newStr += str1;
      counter = 1;
    }
  }

  return newStr;
};

const unzipp = (str) => {
    let newStr = ''
    for (let index = 0; index < str.length; index++) {
        const char1 = str[index];
        const charInt = char1.charCodeAt()
        console.log(charInt)
        if (charInt >= 48 && charInt <= 57) {
            for (let index2 = 0; index2 < charInt - 49; index2++) {
                newStr += str[index + 1]
            }
        } else {
            newStr += char1
        }
        
    }
    return newStr
} 

const a = zip("sdddd fhhhbvdxx");
console.log(a)
const b = unzipp(a);
console.log(b)