const addBinary = require("./index");
const io = [
  {
    input: "How can mirrors be real if our eyes aren't real",
    output: "How Can Mirrors Be Real If Our Eyes Aren't Real",
  },
];

io.forEach((element) => {
  test(`with ${element.input} output should be ${element.output}`, () => {
    expect(addBinary(element.input)).toBe(element.output);
  });
});
