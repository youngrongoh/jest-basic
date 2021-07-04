import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

const user = {
  name: "Mike",
  age: 30
};

const user2 = {
  age: 30
};

test("snapshot : name 있음", () => {
  const el = render(<Hello user={user} />);
  expect(el).toMatchSnapshot();
});

test("snapshot : name 없음", () => {
  const el = render(<Hello user={user2} />);
  expect(el).toMatchSnapshot();
});

test("Hello 라는 글자가 포함되어 있는가?", () => {
  render(<Hello user={user} />);
  const helloEl = screen.getByText(/Hello/i);
  expect(helloEl).toBeInTheDocument();
});
