import React, { useState } from "react";
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
  const [activeGenre, setActiveGenre] = useState(null);

  return (
    <div className="App">
      <div className="container-fluid">
        <Navbar logo={logo} links={navItems} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
        <Hero genre={activeGenre ? activeGenre : null} />
      </div>
    </div>
  );
}

export default App;
