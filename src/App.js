import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
// import Example1 from './pages/Example1';
// import Example2 from './pages/Example2';
import Product from './pages/Product';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            component={Index}
          />

          {/* <Route
            path="/example1"
            component={Example1}
          />

          <Route
            path="/example2"
            component={Example2}
          /> */}

          <Route
            path="/product"
            component={Product}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
