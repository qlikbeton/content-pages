import React from 'react';
import { AppContainer, AppWrapper } from '../layout';
import './Section.css';

const Section = props => {
  const styles = {};
  const classNames = ['Section'];

  if(props.name) classNames.push(`Section-${props.name}`);
  if(props.paddingH) classNames.push('has-padding-horizontal');
  if(props.paddingV) classNames.push('has-padding-vertical');
  if(props.cover) classNames.push('has-cover');
  if(props.cover) styles.backgroundImage = `url(${props.cover})`;

  return (
    <section className={classNames.join(' ')} style={styles}>
      <AppContainer hasWidthFixed={props.container}>
        <AppWrapper hasWidthFixed={props.wrapper}>
          {props.children}
        </AppWrapper>
      </AppContainer>
    </section>
  );
};

export default Section;