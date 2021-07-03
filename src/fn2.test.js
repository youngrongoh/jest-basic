const fn2 = require("./fn2.js");

// 비동기 함수 테스트

test("3초 후에 받아온 이름은 Mike", (done) => {
  // done이 없으면 cb을 기다리지 않고 종료
  function cb(name) {
    // expect(name).toBe("Tom"); // failed
    expect(name).toBe("Mike");
    done(); // done을 전달했는데 호출하지 않으면 failed
  }
  fn2.getName(cb);
});
/* 
// error 처리
test("3초 후에 받아온 이름은 Mike", (done) => {
  function cb(name) {
    try {
      expect(name).toBe("Mike");
      done();
    } catch (error) {
      done();
    }
  }
  fn2.throwErr(cb);
});
 */
// promise 테스트
// promise가 resolve 될 때까지 기다려줌
// done 없어도 됨
test("3초 후에 받아온 나이는 30", () => {
  // promise를 return 해줘야 함
  /* 
  return fn2.getAge().then((age) => {
    expect(age).toBe(30);
  }); 
  */

  // matcher를 쓰면 간단하게 작성할 수 있음
  // resolves, rejects
  return expect(fn2.getAge()).resolves.toBe(30);
});

// async..await 테스트
// promise와 비슷함
test("3초 후에 에러가 납니다", async () => {
  /* 
  const age = await fn2.getAge();
  expect(age).toBe(30);
   */
  // matcher 사용
  await expect(fn2.getAge()).resolves.toBe(30);
});
