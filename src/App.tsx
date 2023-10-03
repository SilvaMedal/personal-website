import "./App.css";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resources from "./components/Resources";
import "./styles/Contacts.css";
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
            <p>
              Outside of tech, I'm a HUGE game enthusiast! I like games of all
              sorts, from boardgames, to video games, to outdoor activities.
              Ever since college, I have made it a habit to regularly attend
              game nights with my close friends (as frequently as each week!).
              Interested in what games I play? Check out my LinkedIn (I
              sometimes post our "game of the week"), or just ask! I also enjoy
              reading, movies (big Marvel Universe fan), and socializing in
              general.{" "}
            </p>
            <p>
              Currently, I lead the front-end development team at CD Techies, a
              non-profit organization that unites both budding tech enthusiasts
              and seasoned mentors. CD Techies is on a mission to fulfill the
              technological needs of other non-profit organizations while
              serving as an invaluable educational resource for newcomers in the
              tech industry.
            </p>
          </section>
          <Portfolio />
          <Resources />
          <Contacts />
        </div>
      </main>
      <footer className="footer">&copy; 2023 Anthony Silva</footer>
    </>
  );
}

export default App;
