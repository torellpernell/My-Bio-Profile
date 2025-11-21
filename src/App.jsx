import "./App.css";
import LogCard from "./components/LogCard.jsx";
import my_photo from "./assets/my_photo.jpg";

function App() {
  return (
    <>
      <div className="hero">Torell Pernell | Full-stack Developer</div>

      <nav className="navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/torellpernell" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#home">About Me</a>
          </li>
          <li>
            <a href="#home">Contact Me</a>
          </li>
        </ul>
      </nav>
      <div className="container">
        <aside className="sidebar">
          <img
            src={my_photo}
            alt="My image"
            height="300px"
            width="500px"
            className="profile-img"
          />

          <section>
            <h1>About me</h1>
            <p>
              Hi, I am an avid learner and voracious problem solver, I have a
              passion for contributing my varied set of technology skills and
              experience to provide measurable and impactful work deliverables
              that will meet and exceed the requirements and expectations of my
              colleagues, my organization, and other stakeholders. I am a highly
              thorough and detail-oriented problem solver who thrives on
              conquering business and technical challenges no matter the scope
              or complexity. I have very effective communication and writing
              skills. I also work very well within a team and I am a great
              collaborator on work projects.
            </p>
          </section>
        </aside>

        <section>
          <main>
            <h2 id="main-title">My DevLog</h2>
            <hr />
            <div id="dev-log">
              <h1>Welcome to my Development Log</h1>
              <h3>Date: 2025-9-10</h3>

              <p>Entry Number: 1</p>
            </div>
          </main>
        </section>
      </div>
      <LogCard />
      <LogCard />
    </>
  );
}

export default App;
