import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PageHeader, PageContent, PageFooter } from './components/layout'
import { Pages } from './components/pages'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader />

        <PageContent>
          <Switch>
            <Route path="/" exact   component={Pages.Home} />
            <Route path="/about"    component={Pages.About} />
            <Route path="/project"  component={Pages.Project} />
          </Switch>
        </PageContent>

        <PageFooter />
      </div>
    );
  }
}

export default App;
