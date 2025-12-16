import "./App.css";
import LogCard from "./components/LogCard.jsx";
import my_photo from "./assets/Torell_Pernell_photo.jpg";

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
            <a href="https://github.com/torellpernell" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/torellpernell" target="_blank">
              LinkedIn
            </a>
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
            <h1 id="main-title">Welcome to my Development Log</h1>
            <hr />
            <div id="dev-log">
              <h3>December 2025</h3>
              <p>
                <b>
                  Field Services web-based application (Javascript, Power BI,
                  React, Azule SQL, Azure Cognitive Services)
                </b>
                <br />
                Developed to aggregate feedback from multiple channels,
                including social media, contact centers, app feedback, and NPS.
                Provided a streamlined interface for analyzing and visualizing
                customer feedback. Enabled actionable insights to address and
                resolve customer-facing application issues promptly.
              </p>
              <h3>March 2025</h3>
              <p>
                <b>Sintra Banking Account (Ruby, HTML, CSS)</b>
                <br />
                Developed to provide an on-line, web-based application which
                allow users to perform basic bank account operations, such as
                openings, deposits, withdrawals, and closures.
              </p>
              <h3>January 2025</h3>
              <p>
                <b>Online Bank Account (Ruby, Command-Line Interface)</b>
                <br />
                Developed to provide users with a simple, command-line interface
                to perform basic bank account operations, such as openings,
                deposits, withdrawals, and closures.
              </p>
            </div>
          </main>
        </section>
      </div>
      {/* <LogCard />
      <LogCard /> */}
    </>
  );
}

export default App;
