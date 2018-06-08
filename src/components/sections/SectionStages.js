import React from 'react';
import Section, { SectionContent } from './';
import { Heading, Text, Feature, Gallery, Branding, Cards, Card, CardStep, Button, Info } from '../library';
import img from '../../assets/img/img-feature.jpg';

const SectionStages = props => (
  <React.Fragment>
    <Section name="Stage-01">
      <SectionContent container>
        <Heading h2 title="Stages Section" accent />
        <Text center subtitle regular>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

        <Feature image={img} symbol="01" inversed full>
          <Heading h2 title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar. In pulvinar eros ut lacus rhoncus, ac porttitor metus malesuada. Donec quis venenatis nulla. Integer mattis orci at placerat porttitor.</Text>
        </Feature>

        <Gallery />

        <Card center>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar.</Text>
        </Card>
      </SectionContent>
    </Section>

    <Section name="Stage-02">
      <SectionContent container background="gray">
        <Feature image={img} symbol="02" full>
          <Heading h2 title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue.</Text>      
        </Feature>

        <Cards>
          <CardStep number="1">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar.</Text>
          </CardStep>
          <CardStep number="2">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </CardStep>
          <CardStep number="3">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue.</Text>
          </CardStep>
        </Cards>

        {/*<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue.</Text>
        <Button label="Call To Action" primary />*/}

        <Branding />

        <Card center>
          <Heading h3 title="Cest quoi?" />
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar.</Text>
        </Card>

        {/*<Info>
          <Heading h3 title="Le Qlik" />
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue.</Text>
        </Info>*/}
      </SectionContent>
    </Section>

    <Section name="Stage-03">
      <SectionContent container>
        <Feature image={img} symbol="03" inversed full>
          <Heading h2 title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar. In pulvinar eros ut lacus rhoncus, ac porttitor metus malesuada. Donec quis venenatis nulla. Integer mattis orci at placerat porttitor.</Text>      
        </Feature>

        <Cards cols={2}>
          <Card>
            <Text center>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar.</Text>
          </Card>
          <Card>
            <Text center>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar.</Text>
          </Card>
          <Card>
            <Text center>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar.</Text>
          </Card>
          <Card>
            <Text center>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar.</Text>
          </Card>
        </Cards>

        <Branding />

        {/*<Heading h3 title="Le Qlik" />
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue.</Text>*/}
      </SectionContent>
    </Section>

    <Section name="Stage-04">
      <SectionContent container background="gray">
        <Feature image={img} symbol="04" full>
          <Heading h2 title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue.</Text>      
        </Feature>

        <Card center>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar.</Text>
          <Button label="Call To Action" primary />
        </Card>

        <Gallery />
      </SectionContent>
    </Section>

    <Section name="Stage-05">
      <SectionContent container>
        <Feature image={img} symbol="05" inversed full>
          <Heading h2 title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar. In pulvinar eros ut lacus rhoncus, ac porttitor metus malesuada. Donec quis venenatis nulla. Integer mattis orci at placerat porttitor.</Text>      
        </Feature>

        <Cards>
          <CardStep number="1">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar.</Text>
          </CardStep>
          <CardStep number="2">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </CardStep>
          <CardStep number="3">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue.</Text>
          </CardStep>
        </Cards>

        <Branding />

        {/*<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue.</Text>*/}
      </SectionContent>
    </Section>
  </React.Fragment>
);

export default SectionStages;