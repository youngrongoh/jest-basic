const fn2 = {
  add: (num1, num2) => num1 + num2,
  getName: (cb) => {
    const name = "Mike";
    setTimeout(() => {
      cb(name);
    }, 3000);
  },
  throwErr: (cb) => {
    setTimeout(() => {
      throw new Error("server error!!");
    }, 3000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
      }, 3000);
    });
  }
};

module.exports = fn2;
