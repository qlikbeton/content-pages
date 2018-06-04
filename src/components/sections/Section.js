import React from 'react';
import { AppContainer } from '../layout';
import './Section.css';

const Section = props => {
  const classNames = ['Section'];

  if(props.name) classNames.push(`Section-${props.name}`);
  if(props.hPadding) classNames.push('has-padding-horizontal');
  if(props.vPadding) classNames.push('has-padding-vertical');

  return (
    <section className={classNames.join(' ')}>
      <AppContainer hasWidthFixed={props.container}>
        {props.children}
      </AppContainer>
    </section>
  );
};

export default Section;