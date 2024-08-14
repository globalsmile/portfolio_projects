/*import logo from './logo.svg';
import './App.css';
*/
import React from "react";
import SearchMovies from "./searchMovies";


function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
    <html>
      <head>
      </head>
      <body>
        <div id="root"></div>
        <script src="index.pack.js"></script>
        <div className="container">
          <h1 className="title">React Movie Search</h1>
          <SearchMovies />
        </div>
      </body>
    </html>

  );
}

export default App;