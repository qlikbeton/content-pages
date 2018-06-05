import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppHeader, AppContent, AppFooter } from './components/layout'
import { Pages } from './components/pages'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />

        <AppContent>
          <Switch>
            <Route path="/" exact component={Pages.Home} />
            <Route path="/about"  component={Pages.About} />
          </Switch>
        </AppContent>

        <AppFooter />
      </div>
    );
  }
}

export default App;
