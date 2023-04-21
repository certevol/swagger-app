import './App.css';
import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";


function App() {
  //API IO
  let url_IO="https://raw.githubusercontent.com/pagopa/io-functions-services/50a116f/openapi/index.yaml"
  //API firma con IO Issuer
  let url_F_IO="https://raw.githubusercontent.com/pagopa/io-sign/6a3d7b610ed622c42246e9ad1fdb919b9735d0e3/apps/io-func-sign-issuer/openapi.yaml"
  //API PN b2b
  let url_PN_BB="https://raw.githubusercontent.com/pagopa/pn-delivery-push/a886f3210b9fbe0253ac6963013ba1aa446f8ca9/docs/openapi/api-external-b2b-webhook-v1.yaml"
  //API PN b2b PA
  let url_PN_BB_PA="https://raw.githubusercontent.com/pagopa/pn-delivery/d499410fde48b5fe7271baa7eda79eefe6d5ecab/docs/openapi/api-external-b2b-pa-v1.yaml"

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          API VIEWER       
      </header>
     <div>
        <SwaggerUI className="Swagger" url= {`${url_PN_BB_PA}`} />
      </div>
    </div>
  );
}

export default App;

