import React, { Component } from 'react';
import { AppHeader, AppContent, AppFooter } from './components/layout'
import { Breadcrumbs } from './components/library'
import { SectionHero } from './components/sections'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />

        <AppContent>
            <Breadcrumbs />
            <SectionHero />
        </AppContent>

        <AppFooter />
      </div>
    );
  }
}

export default App;
