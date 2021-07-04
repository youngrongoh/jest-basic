const fn = {
  add: (num1, num2) => num1 + num2,
  connectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({ name: "Mike", age: 30, gender: "male" });
      });
    }, 500);
  },
  disconnectDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
  connectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({ name: "z4", brand: "bmw", color: "red" });
      });
    }, 500);
  },
  disconnectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  }
};

module.exports = fn;
