import "./App.css";
import "./components/Button.css"
import Suggest from "./components/Suggest.jsx";
import Rating from "./components/Rating.jsx";
import Button from "./components/Button.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Buttons</h2>
        <div>
          Button with onClick:{" "}
          <Button onClick={() => alert("ouch")}>Click me</Button>
        </div>
        <div>
          A link: <Button href="http://reactjs.com">Follow me</Button>
        </div>
        <div>
          Custom class name: <Button className="custom">I do nothing</Button>
        </div>
        <h2>Suggest</h2>
        <div>
          <Suggest options={["eenie", "meenie", "miney", "mo"]} />
        </div>
        <h2>Rating</h2>
        <div>
          No initial value: <Rating />
        </div>
        <div>
          Initial value 4: <Rating defaultValue={4} />
        </div>
        <div>
          This one goes to 11: <Rating max={11} />
        </div>
        <div>
          Read-only: <Rating readonly={true} defaultValue={3} />
        </div>
      </header>
    </div>
  );
}

export default App;
