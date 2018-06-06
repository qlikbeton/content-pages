import React from 'react';
import './Section.css';

const Section = props => {
  const styles = {};
  const classNames = ['Section'];

  if(props.name)      classNames.push(`Section-${props.name}`);
  if(props.center)    classNames.push('is-centered');
  if(props.minimal)   classNames.push('is-minimal');
  if(props.background)classNames.push(`has-background-${props.background}`);
  if(props.cover)     classNames.push('has-cover');
  if(props.cover)     styles.backgroundImage = `url(${props.cover})`;

  return (
    <section className={classNames.join(' ')} style={styles}>
      {props.children}
    </section>
  );
};

const SectionContent = props => {
  const classNames = ['Section-content'];

  if(props.background) classNames.push(`has-background-${props.background}`);

  return (
    <div className={classNames.join(' ')}>
      <SectionContainer hasWidthFixed={props.container}>
        <SectionWrapper hasWidthFixed={props.wrapper}>
          {props.children}
        </SectionWrapper>
      </SectionContainer>
    </div>
  );
};

const SectionContainer = props => (
  <div className={`Section-container ${props.hasWidthFixed ? 'has-width-fixed' : ''}`}>
    {props.children}
  </div>
);

const SectionWrapper = props => (
  <div className={`Section-wrapper ${props.hasWidthFixed ? 'has-width-fixed' : ''}`}>
    {props.children}
  </div>
);


export default Section;

export {
  SectionContent,
  SectionContainer,
  SectionWrapper
};