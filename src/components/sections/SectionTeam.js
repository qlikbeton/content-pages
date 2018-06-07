import React from 'react';
import Section, { SectionContent } from './';
import { Person, Cards, Card, Heading, Text } from '../library';

const SectionTeam = props => (
  <Section name="Team">
    <SectionContent container>
      <Heading h2 accent title="Team Section" />
      <Text center subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

      {props.list && 
        <Cards>
        {props.list.map((item, idx) => (
          <Card key={idx}>
            <Person {...item}>{item.description}</Person>
          </Card>
        ))}
        </Cards>
      }

      <Text center subtitle noSpacing>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum <a>fermentum</a> augue.</Text>
    </SectionContent>
  </Section>
);

export default SectionTeam;