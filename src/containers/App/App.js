import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Layout from 'hoc/Layout/Layout';
import Home from 'containers/Home/Home';
import About from 'containers/About/About';
import Portfolio from 'containers/Portfolio/Portfolio';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <h1>Layout</h1>
          <Switch>
            <Route path={'/home'} exact component={Home} />
            <Route path={'/about'} component={About} />
            <Route path={'/portfolio'} component={Portfolio} />
            <Redirect to={'/home'} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
