function addBinary(a) {
  const splited = a.split(" ");
  let result = [];

  splited.forEach((element) => {
    let capitalized = [];

    element.split("").forEach((elem, index) => {
      if (index == 0) {
        capitalized.push(elem.toUpperCase());
      } else {
        capitalized.push(elem);
      }
    });

    result.push(capitalized.join(""));
  });

  return result.join(" ");
}

module.exports = addBinary;
