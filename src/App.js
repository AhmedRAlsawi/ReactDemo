// import logo from "./logo.svg";
// import AppClassComponent from "./AppClassComponent";
// import bootstrap from 'bootstrap'
import "./App.css";
import AboutMeComponent from "./AboutMeComponent";
import DetailsSectionComponent from "./DetailsSectionComponent";
import SkillsComponent from "./SkillsComponent";
import PortfolioComponent from "./PortfolioComponent";
import FooterComponent from "./FooterComponent";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <h2>Hello React</h2> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <AppClassComponent></AppClassComponent> */}

        <DetailsSectionComponent></DetailsSectionComponent>
        <AboutMeComponent></AboutMeComponent>
        <SkillsComponent></SkillsComponent>
        <PortfolioComponent></PortfolioComponent>
        <FooterComponent></FooterComponent>
      </header>
    </div>
  );
}

export default App;
