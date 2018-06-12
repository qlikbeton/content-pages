import React from 'react';
import { withConfig } from '../config';
import Section, { SectionContent } from './';
import { Heading, Text, Feature, List, ListItem, Gallery, Branding, Cards, Card, CardCol, CardStep, Button, Info, InfoCol } from '../library';
import img from '../../assets/img/img-feature.jpg';
import coverImg from '../../assets/img/bg-hero.jpg';
import galleryImg from '../../assets/img/img-gallery.jpg';

const SectionStages = ({ config, ...props }) => (
  <React.Fragment>
    <Section name="Stage-01">
      <SectionContent container>
        <Heading h2 title={config.translate(props.name)('title')} accent />
        <Text center subtitle regular>{config.translate(props.name)('subtitle')}</Text>

        <Feature image={img} symbol="01" inversed full>
          <Heading h2 title={config.translate(props.name)('stage01.title')} />
          <Text>{config.translate(props.name)('stage01.text')}</Text>
        </Feature>

        <Gallery images={{
          first: {
            image: galleryImg,
            text: <Heading h2 title={config.translate(props.name)('stage01.gallery.first')} inherit />
          },
          second: {
            image: galleryImg,
            text: <Heading h1 title={config.translate(props.name)('stage01.gallery.second')} inherit capitalize />
          },
          third: {
            image: galleryImg,
            text: <Text>{config.translate(props.name)('stage01.gallery.third')}</Text>
          }
        }} />

        <Card center>
          <Text>{config.translate(props.name)('stage01.card')}</Text>
        </Card>
      </SectionContent>
    </Section>

    <Section name="Stage-02">
      <SectionContent container background="gray">
        <Feature image={img} symbol="02" full>
          <Heading h2 title={config.translate(props.name)('stage02.title')} />
          <Text>{config.translate(props.name)('stage02.text')}</Text>
        </Feature>

        <Cards>
          <CardStep number="1">
            <Text>{config.translate(props.name)('stage02.step01')}</Text>
          </CardStep>
          <CardStep number="2">
            <Text>{config.translate(props.name)('stage02.step02')}</Text>
          </CardStep>
          <CardStep number="3">
            <Text>{config.translate(props.name)('stage02.step03')}</Text>
          </CardStep>
        </Cards>

        <Info vcenter>
          <InfoCol cols={8}>
            <Text>{config.translate(props.name)('stage02.info01.text')}</Text>
          </InfoCol>
          <InfoCol cols={4}>
            <Button label={config.translate(props.name)('stage02.info01.cta')} icon="arrow-right" to="/" primary small />
          </InfoCol>
        </Info>

        <Branding cover={coverImg} title={config.translate(props.name)('stage02.tips.title')}>
          <Text>{config.translate(props.name)('stage02.tips.text')}</Text>
          
          <Heading h2 title={config.translate(props.name)('stage02.tips.subtitle')} spacingTop inherit capitalize />
          <List>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">{config.translate(props.name)('stage02.tips.material01')}</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">{config.translate(props.name)('stage02.tips.material02')}</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">{config.translate(props.name)('stage02.tips.material03')}</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">{config.translate(props.name)('stage02.tips.material04')}</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">{config.translate(props.name)('stage02.tips.material05')}</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">{config.translate(props.name)('stage02.tips.material06')}</div>
            </ListItem>
          </List>
        </Branding>

        <Card center>
          <Heading h2 title={config.translate(props.name)('stage02.card.title')} capitalize />
          <Text>{config.translate(props.name)('stage02.card.text')}</Text>
        </Card>

        <Info>
          <InfoCol cols={4}>
            <Heading h2 title={config.translate(props.name)('stage02.info02.title')} capitalize />
          </InfoCol>
          <InfoCol cols={8}>
            <Text noSpacing>{config.translate(props.name)('stage02.info02.text')}</Text>
          </InfoCol>
        </Info>
      </SectionContent>
    </Section>

    <Section name="Stage-03">
      <SectionContent container>
        <Feature image={img} symbol="03" inversed full>
          <Heading h2 title={config.translate(props.name)('stage03.title')} />
          <Text>{config.translate(props.name)('stage03.text')}</Text>
        </Feature>

        <Cards cols={2}>
          <CardCol>        
            <Card>
              <Text center>{config.translate(props.name)('stage03.card01')}</Text>
            </Card>
          </CardCol>
          <CardCol>          
            <Card>
              <Text center>{config.translate(props.name)('stage03.card02')}</Text>
            </Card>
          </CardCol>
          <CardCol>          
            <Card>
              <Text center>{config.translate(props.name)('stage03.card03')}</Text>
            </Card>
          </CardCol>
          <CardCol>          
            <Card>
              <Text center>{config.translate(props.name)('stage03.card04')}</Text>
            </Card>
          </CardCol>
        </Cards>

        <Branding cover={coverImg} title={config.translate(props.name)('stage03.tips.title')}>
          <Text>{config.translate(props.name)('stage03.tips.text')}</Text>
          
          <Heading h2 title={config.translate(props.name)('stage03.tips.subtitle')} spacingTop inherit capitalize />
          <List>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">{config.translate(props.name)('stage03.tips.material01')}</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">{config.translate(props.name)('stage03.tips.material02')}</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">{config.translate(props.name)('stage03.tips.material03')}</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">{config.translate(props.name)('stage03.tips.material04')}</div>
            </ListItem>
          </List>
        </Branding>

        <Info>
          <InfoCol cols={4}>
            <Heading h2 title={config.translate(props.name)('stage03.info.title')} capitalize />
          </InfoCol>
          <InfoCol cols={8}>
            <Text noSpacing>{config.translate(props.name)('stage03.info.text')}</Text>
          </InfoCol>
        </Info>
      </SectionContent>
    </Section>

    <Section name="Stage-04">
      <SectionContent container background="gray">
        <Feature image={img} symbol="04" full>
          <Heading h2 title={config.translate(props.name)('stage04.title')} />
          <Text>{config.translate(props.name)('stage04.text')}</Text>
        </Feature>

        <Card center>
          <Text>{config.translate(props.name)('stage04.card.text')}</Text>
          <Button label={config.translate(props.name)('stage04.card.cta')} to="/" icon="arrow-right" primary small />
        </Card>

        <Gallery images={{
          first: {
            image: galleryImg,
            text: <Heading h2 title={config.translate(props.name)('stage04.gallery.first')} inherit />,
          },
          second: {
            image: galleryImg,
            text: <Heading h1 title={config.translate(props.name)('stage04.gallery.second')} inherit capitalize />,
          },
          third: {
            image: galleryImg,
            text: (
              <div>
                <Text spacingBottom>{config.translate(props.name)('stage04.gallery.third.text')}</Text>
                <Button label={config.translate(props.name)('stage04.gallery.third.cta')} to="/" primary small />
              </div>                
            ),
          }
        }} />
      </SectionContent>
    </Section>

    <Section name="Stage-05">
      <SectionContent container>
        <Feature image={img} symbol="05" inversed full>
          <Heading h2 title={config.translate(props.name)('stage05.title')} />
          <Text>{config.translate(props.name)('stage05.text')}</Text>
        </Feature>

        <Cards>
          <CardStep number="1">
            <Text>{config.translate(props.name)('stage05.step01')}</Text>
          </CardStep>
          <CardStep number="2">
            <Text>{config.translate(props.name)('stage05.step02')}</Text>
          </CardStep>
          <CardStep number="3">
            <Text>{config.translate(props.name)('stage05.step03')}</Text>
          </CardStep>
        </Cards>

        <Branding cover={coverImg} title={config.translate(props.name)('stage05.tips.title')}>
          <Text>{config.translate(props.name)('stage05.tips.text')}</Text>
          <Heading h1 title={config.translate(props.name)('stage05.tips.indice')} inherit spacing capitalize />
          <Heading h2 title={config.translate(props.name)('stage05.tips.subtitle')} inherit capitalize />
          <List>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">{config.translate(props.name)('stage05.tips.material01')}</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">{config.translate(props.name)('stage05.tips.material02')}</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">{config.translate(props.name)('stage05.tips.material03')}</div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"></div>
              <div className="List-item-title">{config.translate(props.name)('stage05.tips.material04')}</div>
            </ListItem>
          </List>
        </Branding>

        <Info>
          <InfoCol cols={4}>
            <Heading h2 title={config.translate(props.name)('stage05.info.title')} capitalize />
          </InfoCol>
          <InfoCol cols={8}>
            <Text noSpacing>{config.translate(props.name)('stage05.info.text')}</Text>
          </InfoCol>
        </Info>
      </SectionContent>
    </Section>
  </React.Fragment>
);

export default withConfig(SectionStages);