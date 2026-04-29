// App.jsx

import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

// Root component that combines everything
function App() {
  return (
    <div className="app-container">
      {/* Props example */}
      <Greeting name="Eugene" />

      {/* State example */}
      <Counter />
    </div>
  );
}

export default App;

//creating profile component
import React from "react";
