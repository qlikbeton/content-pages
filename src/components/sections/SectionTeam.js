import React from 'react';
import { withConfig } from '../config';
import Section, { SectionContent } from './';
import { Person, Cards, Card, Heading, Text } from '../library';

const SectionTeam = ({ config, ...props }) => (
  <Section name="Team">
    <SectionContent container>
      <Heading h2 accent title={config.translate(props.name)('title')} />
      <Text center subtitle>{config.translate(props.name)('subtitle')}</Text>

      {props.list && 
        <Cards>
        {props.list.map((item, idx) => (
          <Card key={idx}>
            <Person
              {...item}
              title={config.translate(props.name)(`${item.key}.title`)}>
              {config.translate(props.name)(`${item.key}.description`)}
            </Person>
          </Card>
        ))}
        </Cards>
      }

      <Text center subtitle noSpacing>{config.translate(props.name)('details')}</Text>
    </SectionContent>
  </Section>
);

export default withConfig(SectionTeam);