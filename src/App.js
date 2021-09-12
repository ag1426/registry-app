import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./routes/Home"
import Registry from "./routes/Registry"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact >
            <Home />
          </Route>
          <Route path="/registry">
            <Registry />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
