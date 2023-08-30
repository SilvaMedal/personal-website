import "./App.css";
import { Navbar } from "./components/Navbar";
import "./styles/Navbar.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <h1 className="header">
          <span className="revealing-text delay-1">Silva</span>
          <span className="revealing-text delay-2">Medal</span>
          <span className="revealing-text delay-3">Productions</span>
        </h1>
        <p className="">
          Click on the <code>React</code> logo to learn more
        </p>
      </main>
    </>
  );
}

export default App;
