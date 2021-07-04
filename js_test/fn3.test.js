const fn = require("./fn3.js");
const fn3 = require("./fn3.js");
/* 
let num = 10;
// 각 테스트 전에 해야할 작업 지정
beforeEach(() => {
  num = 0;
});

// 각 테스트 후에 해야할 작업 지정
afterEach(() => {
  num = 0;
})

test("0 더하기 1은 1이야", () => {
  num = fn3.add(num, 1);
  expect(num).toBe(1);
});

test("0 더하기 2은 2이야", () => {
  num = fn3.add(num, 2);
  expect(num).toBe(2);
});

test("0 더하기 3은 3이야", () => {
  num = fn3.add(num, 3);
  expect(num).toBe(3);
});

test("0 더하기 4은 4이야", () => {
  num = fn3.add(num, 4);
  expect(num).toBe(4);
});
 */

// 비동기
/* 
let user;
// 전체 테스트를 진행하기 전
beforeAll(async () => {
  user = await fn3.connectUserDb();
});

// 전체 테스트를 끝낸 후
afterAll(() => {
  return fn3.disconnectDb();
});

test("이름은 Mike", () => {
  expect(user.name).toBe("Mike");
});

test("나이는 30", () => {
  expect(user.age).toBe(30);
});

test("성별은 남성", () => {
  expect(user.gender).toBe("male");
});
 */
/* 
describe("Car 관련 작업", () => {
  let car;

  beforeAll(async () => {
    car = await fn3.connectCarDb();
  });

  afterAll(() => {
    return fn3.disconnectCarDb();
  });

  test("이름은 Mike", () => {
    expect(car.brand).toBe("bmw");
  });

  test("나이는 30", () => {
    expect(car.name).toBe("z4");
  });

  test("성별은 남성", () => {
    expect(car.color).toBe("red");
  });
});
 */

/* 
beforeAll(() => console.log("밖 beforeAll")); // 1, 제일 처음
beforeEach(() => console.log("밖 beforeEach")); // 2, 6
beforeEach(() => console.log("밖 afterEach")); // 4, 10
afterAll(() => console.log("밖 afterAll")); //12, 마지막

test("0 + 1 = 1", () => {
  expect(fn.add(0, 1)).toBe(1); // 3
});

describe("Car 관련 작업", () => {
  beforeAll(() => console.log("안 beforeAll")); // 5
  beforeEach(() => console.log("안 beforeEach")); // 7
  beforeEach(() => console.log("안 afterEach")); // 9
  afterAll(() => console.log("안 afterAll")); // 11

  test("0 + 1 = 1", () => {
    expect(fn.add(0, 1)).toBe(1); // 8
  });
});
 */

let num = 0;
test("0 더하기 1은 1", () => {
  expect(fn.add(num, 1)).toBe(1);
});

test("0 더하기 2은 2", () => {
  expect(fn.add(num, 2)).toBe(2);
});

test("0 더하기 3은 3", () => {
  expect(fn.add(num, 3)).toBe(3);
});

// skip을 사용하면 케이스를 건너뜀
test.skip("0 더하기 4은 4", () => {
  expect(fn.add(num, 4)).toBe(4);
  num = 10;
});
// 실패하면 코드의 문제인지 케이스의 문제인지 확인 하기 위해
// 한 번 더 테스트 진행하는 것이 좋음
// only를 사용하면 해당 케이스만 진행
test.only("0 더하기 5은 5", () => {
  expect(fn.add(num, 5)).toBe(5);
});
