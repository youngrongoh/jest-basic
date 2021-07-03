const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age, gender) => ({ name, age, gender: undefined }),
  throwErr: () => {
    throw new Error("Im an Error");
  }
};

module.exports = fn;
