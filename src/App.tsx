import "./App.css";
import { Contacts } from "./components/Contacts";
import { Navbar } from "./components/Navbar";
import { Resources } from "./components/Resources";
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
        <div className="revealing-text delay-4">
          <section id="about" className="section">
            <h3>About Me:</h3>
            <p>
              Hi, I'm Anthony Silva, a freelance web developer driven by a
              passion for knowledge. With over 16 years of experience in the
              world of hospitality, primarily in restaurant management, I
              transitioned into the realm of web development 2.5 years ago. My
              journey has cemented my dedication to personal growth and my
              commitment to fostering tech innovation.{" "}
            </p>
            <p>[***INCLUDE MORE ABOUT ME PERSONALLY HERE***]</p>
            <p>
              Currently, I lead the front-end development team at CD Techies, a
              non-profit organization that unites both budding tech enthusiasts
              and seasoned mentors. CD Techies is on a mission to fulfill the
              technological needs of other non-profit organizations while
              serving as an invaluable educational resource for newcomers in the
              tech industry.
            </p>
          </section>
          <section id="portfolio" className="section">
            <h3>Portfolio Section (work in progress)</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus
              proin nibh nisl condimentum id venenatis a condimentum. Lorem
              donec massa sapien faucibus et molestie ac. Pellentesque habitant
              morbi tristique senectus. Id venenatis a condimentum vitae. Sed
              risus pretium quam vulputate dignissim. Mattis ullamcorper velit
              sed ullamcorper morbi tincidunt ornare massa. Aliquet nec
              ullamcorper sit amet risus nullam eget felis eget. Orci nulla
              pellentesque dignissim enim sit amet venenatis. Viverra aliquet
              eget sit amet tellus. Enim blandit volutpat maecenas volutpat
              blandit aliquam etiam. Congue eu consequat ac felis donec et odio
              pellentesque.{" "}
            </p>
          </section>
          <Resources />
          <Contacts />
        </div>
      </main>
      <footer className="footer">&copy; 2023 Anthony Silva</footer>
    </>
  );
}

export default App;
