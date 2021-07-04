import Hello from "./Component/Hello";
import "./styles.css";

const user = {
  name: "Mike",
  age: 30
};

export default function App() {
  return (
    <div className="App">
      <Hello user={user} />
    </div>
  );
}
