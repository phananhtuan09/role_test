import React from "react";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <p>App</p>
      <ul>
        <li>
          <Link to="/userGroup">userGroup</Link>
        </li>
        <li>
          <Link to="/userManagement">userManagement</Link>
        </li>
        <li>
          <Link to="/question-bank">question-bank</Link>
        </li>
        <li>
          <Link to="/survey">survey</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
