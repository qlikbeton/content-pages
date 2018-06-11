import React from 'react';
import Section, { SectionContent } from './';
import { Heading, Text, Feature, List, ListItem, Gallery, Branding, Cards, Card, CardStep, Button, Info, InfoCol } from '../library';
import img from '../../assets/img/img-feature.jpg';
import coverImg from '../../assets/img/bg-hero.jpg';

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

        <Info vcenter>
          <InfoCol cols={8}>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar.</Text>
          </InfoCol>
          <InfoCol cols={4}>
            <Button label="Call To Action" to="/" primary small />
          </InfoCol>
        </Info>

        <Branding cover={coverImg} title="Branding Section">
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          <br /><br />
          <Heading h2 title="Materials" inherit capitalize />
          <List>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">Pelleteuse</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">Pelle</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">Fil</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">Fil a plomb</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">Dameuse</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">Niveau</div>
            </ListItem>
          </List>
        </Branding>

        <Card center>
          <Heading h2 title="Cest quoi?" capitalize />
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar.</Text>
        </Card>

        <Info>
          <InfoCol cols={4}>
            <Heading h2 title="Le Qlik" capitalize />
          </InfoCol>
          <InfoCol cols={8}>
            <Text noSpacing>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue.</Text>
          </InfoCol>
        </Info>
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

        <Branding cover={coverImg} title="Branding Section">
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          <br /><br />
          <Heading h2 title="Materials" inherit capitalize />
          <List>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">Pelleteuse</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">Pelle</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">Fil</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">Fil a plomb</div>
            </ListItem>
          </List>
        </Branding>

        <Info>
          <InfoCol cols={4}>
            <Heading h2 title="Le Qlik" capitalize />
          </InfoCol>
          <InfoCol cols={8}>
            <Text noSpacing>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue.</Text>
          </InfoCol>
        </Info>
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
          <Button label="Call To Action" to="/" primary small />
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

        <Branding cover={coverImg} title="Branding Section">
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          <Heading h1 title="DIY indice: 7/10" inherit spacing capitalize />
          <Heading h2 title="Materials" inherit capitalize />
          <List>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">Pelleteuse</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">Pelle</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">Fil</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">Fil a plomb</div>
            </ListItem>
          </List>
        </Branding>

        <Info>
          <InfoCol cols={4}>
            <Heading h2 title="Lorem ipsum dolor sit amet" capitalize />
          </InfoCol>
          <InfoCol cols={8}>
            <Text noSpacing>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue.</Text>
          </InfoCol>
        </Info>
      </SectionContent>
    </Section>
  </React.Fragment>
);

export default SectionStages;