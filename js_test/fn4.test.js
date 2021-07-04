// mock function
// : 테스트를 위해 흉내만 내는 함수

const fn = require("./fn4.js");
const fn4 = require("./fn4.js");

/* 
// mock 함수 생성
const mockFn = jest.fn();

mockFn();
mockFn(1);
// mock 프로퍼티
// 호출 되었던 값들이 저장 되어 있음
// 함수의 호출 횟수, 각 호출마다 전달된 인수를 알 수 있음
console.log(mockFn.mock.calls); // 이차원 배열 형태

test("함수는 2번 호출됩니다.", () => {
  expect(mockFn.mock.calls.length).toBe(2);
});

test("2번째로 호출된 함수에 전달된 첫번째 인수는 1 입니다.", () => {
  expect(mockFn.mock.calls[1][0]).toBe(1);
});
 */
/* 
const mockFn = jest.fn();

function forEachAdd1(arr) {
  arr.forEach((num) => {
    mockFn(num + 1);
  });
}

forEachAdd1([10, 20, 30]);

test("함수 호출은 3번 됩니다.", () => {
  expect(mockFn.mock.calls.length).toBe(3);
});

test("전달된 값은 11, 21, 31입니다.", () => {
  expect(mockFn.mock.calls[0][0]).toBe(11);
  expect(mockFn.mock.calls[1][0]).toBe(21);
  expect(mockFn.mock.calls[2][0]).toBe(31);
});
 */
/* 
const mockFn = jest.fn((num) => num + 1);

mockFn(10);
mockFn(20);
mockFn(30);

test("10에서 1 증가한 값이 반환된다.", () => {
  console.log(mockFn.mock.results);
  expect(mockFn.mock.results[0].value).toBe(11);
});

test("20에서 1 증가한 값이 반환된다.", () => {
  expect(mockFn.mock.results[1].value).toBe(21);
});

test("30에서 1 증가한 값이 반환된다.", () => {
  expect(mockFn.mock.results[2].value).toBe(31);
});
 */
/* 
const mockFn = jest.fn();

mockFn
  .mockReturnValueOnce(10)
  .mockReturnValueOnce(20)
  .mockReturnValueOnce(30)
  .mockReturnValue(40); //마지막에는 once 쓰지 않음

mockFn();
mockFn();
mockFn();
mockFn();

test("dd", () => {
  console.log(mockFn.mock.results);
  expect("dd").toBe("dd");
});
 */
/* 
const mockFn = jest.fn();

mockFn
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)
  .mockReturnValue(true);

const result = [1, 2, 3, 4, 5].filter((num) => mockFn(num));

test("홀수는 1, 3, 5", () => {
  expect(result).toStrictEqual([1, 3, 5]);
});
 */
/* 
const mockFn = jest.fn();

mockFn.mockResolvedValue({ name: "Mike" });

test("받아온 이름은 Mike", () => {
  mockFn().then((res) => {
    expect(res.name).toBe("Mike");
  });
});
 */
/* 
// 모킹 모듈
jest.mock("./fn4");
fn4.createUser.mockReturnValue({ name: "Mike" });

test("유저를 만든다", () => {
  const user = fn4.createUser("Mike");
  expect(user.name).toBe("Mike");
});
 */

const mockFn = jest.fn();

mockFn(10, 20);
mockFn();
mockFn(30, 40);

test("한 번 이상 호출?", () => {
  // 한 번이라도 호출 되면 passed
  expect(mockFn).toBeCalled();
});

test("정확히 세 번 호출?", () => {
  // 통과된 횟수와 전달한 수가 같으면 passed
  expect(mockFn).toBeCalledTimes(3);
});

test("10이랑 20 전달받은 함수가 있는가?", () => {
  // 인수로 받은 값 체크
  expect(mockFn).toBeCalledWith(10, 20);
});

test("마지막 함수는 30이랑 40을 받았나?", () => {
  // 마지막 호출에서 전달받은 인수 값 체크
  expect(mockFn).lastCalledWith(30, 40);
});
