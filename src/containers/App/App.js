import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Layout from 'hoc/Layout/Layout';
import Home from 'containers/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path={'/'} exact component={Home} />
            <Redirect to={'/'} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
