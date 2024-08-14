import React from "react";
import SearchMovies from "./searchMovies";
import "./App.css"


function App() {
  return (
    <html>
      <head>
      </head>
      <body>
        <div className="container">
          <h1 className="title">React Movie Search</h1>
          <SearchMovies />
        </div>
      </body>
    </html>

  );
}

export default App;