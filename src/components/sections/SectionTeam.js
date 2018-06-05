import React from 'react';
import Section from './';
import { Person, Cards, Card, Heading, Text } from '../library';
import teamImg01 from '../../assets/img/img-team-01.jpg';
import teamImg02 from '../../assets/img/img-team-02.jpg';
import teamImg03 from '../../assets/img/img-team-03.jpg';
import teamImg04 from '../../assets/img/img-team-04.jpg';

const SectionTeam = props => (
  <Section name="Team" container paddingV>
    <Heading h1 accent title="Team Section" />
    <Text center subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

    <Cards>
      <Card>
        <Person image={teamImg01} name="Jann" title="Fondateur et administrateur">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Person>
      </Card>

      <Card>
        <Person image={teamImg02} name="Eric" title="Fondateur et administrateur">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Person>
      </Card>

      <Card>
        <Person image={teamImg03} name="Jean-Marie" title="Fondateur et administrateur">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Person>
      </Card>

      <Card>
        <Person image={teamImg04} name="Michel et Jessica" title="Fondateur et administrateur">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Person>
      </Card>
    </Cards>

    <Text center subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum <a>fermentum</a> augue.</Text>
  </Section>
);

export default SectionTeam;