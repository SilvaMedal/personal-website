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
        <h3 className="revealing-text delay-4">About Me:</h3>
        <p className="revealing-text delay-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus
          proin nibh nisl condimentum id venenatis a condimentum. Lorem donec
          massa sapien faucibus et molestie ac. Pellentesque habitant morbi
          tristique senectus. Id venenatis a condimentum vitae. Sed risus
          pretium quam vulputate dignissim. Mattis ullamcorper velit sed
          ullamcorper morbi tincidunt ornare massa. Aliquet nec ullamcorper sit
          amet risus nullam eget felis eget. Orci nulla pellentesque dignissim
          enim sit amet venenatis. Viverra aliquet eget sit amet tellus. Enim
          blandit volutpat maecenas volutpat blandit aliquam etiam. Congue eu
          consequat ac felis donec et odio pellentesque.{" "}
        </p>
      </main>
    </>
  );
}

export default App;
