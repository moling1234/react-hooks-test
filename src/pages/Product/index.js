import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { MyContextProvider } from './context';

import Home from './Home';
// import Header from './components/Header';
// import Footer from './components/Footer';

const Position = () => {
  return (
    <div className="app">

      <MyContextProvider>
        <Switch>
          <Route
            path="/product"
            exact={ true }
            component={ Home }
          />
        </Switch>
      </MyContextProvider>
    </div>
  );
};

export default Position;