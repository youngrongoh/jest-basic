// Jest는 페이스북에서 만든 테스팅 도구
// zero-configuration => 빠르게 테스트 작성 가능

const fn = require("./fn.js");
/* 
test("2 더하기 3은 5야.", () => {
  expect(fn.add(2, 3)).toBe(5);
});

// 실패 케이스
test("2 더하기 3은 5야.", () => {
  expect(fn.add(2, 3)).toEqual(5);
});
 */
/* 
// 객체나 배열은 재귀적으로 순회하며 체크해야하기 때문에 toEqual 사용해야 함
test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn.makeUser("Make", 30)).toEqual({
    name: "Make",
    age: 30
  });
});

// 엄격한 체크
test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn.makeUser("Make", 30)).toStrictEqual({
    name: "Make",
    age: 30
  });
});
 */
/* 
// toBeNull: null 체크
// toBeUndefined: undefined 체크
// toBeDefined: 정의된 값인지 체크
test("null은 null입니다.", () => {
  expect(null).toBeNull();
});
 */
/* 
// toBeTruthy
// toBeFalsy
test("0은 falsy 입니다.", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});

test("비어있지 않은 문자열은 truthy입니다.", () => {
  expect(fn.add("hello", "world")).toBeTruthy();
});
 */
/* 
// toBeGreaterThan 크다
// toBeGreaterThanOrEqual 크거나 같다
// toBeLessThan 작다
// toBeLessThanOrEqual 작거나 같다
test("ID는 10자 이하여야 합니다.", () => {
  const id = "my_id";
  expect(id.length).toBeLessThanOrEqual(10);
});

test("비밀번호는 4자리", () => {
  const pw = "1234";
  expect(pw.length).toBe(4); // 같다 => toEqual도 가능
});

// 주의! 10진법과 2진법 전환 문제 때문
// toBeCloseTo 사용하면 됨
test("0.1 더하기 0.2는 0.3입니다.", () => {
  // expect(fn.add(0.1, 0.2)).toBe(0.3); // failed
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});
 */
/* 
// 문자열과 정규표현식으로 테스트
// toMatch
test("Hello World에 a라는 글자가 있나", () => {
  // expect("Hello World").toMatch(/a/); // failed
  // expect("Hello World").toMatch(/H/); // passed
  // expect("Hello World").toMatch(/h/); // failed
  expect("Hello World").toMatch(/h/i);
});
 */
/* 
// 배열에 요소가 있는지 테스트
// toContain
test("유저리스트에 Mike가 있나", () => {
  const user = 'Mike';
  const users = ['Tom', 'Jane', 'Kai'];
  expect(users).toContain(user);
});
 */

// 에러가 발생하는지 테스트
// 인수로 전달된 문자열과 동일한 에러메시지인지 체크할 수 있음
test("이거 에러 나나요?", () => {
  expect(() => fn.throwErr()).toThrow("Im an Error"); //passed
});

// 이외에도 다양한 Matcher 메서드 있음
