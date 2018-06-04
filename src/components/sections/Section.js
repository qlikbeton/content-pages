import React from 'react';
import { AppContainer } from '../layout';
import './Section.css';

const Section = ({ children, name }) => (
  <section className={`Section ${name ? 'Section-'+ name : ''}`}>
    <AppContainer>
      {children}
    </AppContainer>
  </section>
)

export default Section;