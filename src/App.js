import './App.css';
import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          API VIEWER       
      </header>
     <div>
        <SwaggerUI className="Swagger" url="https://raw.githubusercontent.com/pagopa/io-functions-services/50a116f/openapi/index.yaml" />
      </div>
    </div>
  );
}

export default App;
