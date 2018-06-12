import React, { Component } from 'react';
import { ConfigProvider } from '@qlibbeton/config';
import { configFile } from './data';
import { Switch, Route } from 'react-router-dom';
import { PageHeader, PageContent, PageFooter } from './components/layout'
import { Pages } from './components/pages'

class App extends Component {
  state = {
    config: { ...configFile }
  }

  render() {
    return (
      <ConfigProvider config={this.state.config}>
        <div className="App">
          <PageHeader />

          <PageContent>
            <Switch>
              <Route path="/" exact     component={Pages.Home} />
              <Route path="/about"      component={Pages.About} />
              <Route path="/project"    component={Pages.Project} />
              <Route path="/contact"    component={Pages.Contact} />
              <Route path="/locations"  component={Pages.Locations} />
            </Switch>
          </PageContent>

          <PageFooter />
        </div>
      </ConfigProvider>
    );
  }
}

export default App;
