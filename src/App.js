import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Hero from "./Hero";

const navItems = [
  { "title": "Action", "href": "" },
  { "title": "Animation", "href": "" },
  { "title": "Crime", "href": "" },
  { "title": "Drama", "href": "" },
  { "title": "Fantasy", "href": "" },
  { "title": "Horror", "href": "" },
];

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Navbar logo={logo} links={navItems} />
        <Hero />
      </div>
    </div>
  );
}

export default App;
