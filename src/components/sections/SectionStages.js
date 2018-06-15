import React from 'react';
import { withConfig } from '../config';
import Section, { SectionContent } from './';
import { Image, Heading, RichText, Text, Feature, List, ListItem, Gallery, Branding, Cards, Card, CardCol, CardStep, Button, Info, InfoCol } from '../library';
import { stage01Img, stage02Img, stage03Img, stage04Img, stage05Img, brandingImg, galleryImg, materialImg } from '../../data';


const SectionStages = ({ config, ...props }) => (
  <React.Fragment>
    <Section name="Stage-01">
      <SectionContent container>
        <Heading h2 title={config.translate(props.name)('title')} accent />
        <Text center subtitle regular>{config.translate(props.name)('subtitle')}</Text>

        <Feature image={stage01Img} symbol="01" inversed full>
          <Heading h2 title={config.translate(props.name)('stage01.title')} />
          <RichText text={config.translate(props.name)('stage01.text')} />
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
            text: <RichText text={config.translate(props.name)('stage01.gallery.third')} />
          }
        }} />

        <Card center moreSpacing>
          <RichText subtitle regular text={config.translate(props.name)('stage01.card')} />
        </Card>
      </SectionContent>
    </Section>

    <Section name="Stage-02">
      <SectionContent container background="gray">
        <Feature image={stage02Img} symbol="02" full>
          <Heading h2 title={config.translate(props.name)('stage02.title')} />
          <RichText text={config.translate(props.name)('stage02.text')} />
        </Feature>

        <Cards>
          <CardStep number="1">
            <RichText text={config.translate(props.name)('stage02.step01')} />
          </CardStep>
          <CardStep number="2">
            <RichText text={config.translate(props.name)('stage02.step02')} />
          </CardStep>
          <CardStep number="3">
            <RichText text={config.translate(props.name)('stage02.step03')} />
          </CardStep>
        </Cards>

        <Info vcenter>
          <InfoCol cols={8}>
            <RichText text={config.translate(props.name)('stage02.info01.text')} />
          </InfoCol>
          <InfoCol cols={4}>
            <Button label={config.translate(props.name)('stage02.info01.cta')} icon="arrow-right" to="/" primary small />
          </InfoCol>
        </Info>

        <Branding cover={brandingImg} title={config.translate(props.name)('stage02.tips.title')}>
          <RichText text={config.translate(props.name)('stage02.tips.text')} />
          
          <Heading h2 title={config.translate(props.name)('stage02.tips.subtitle')} spacingTop inherit capitalize />
          <List>
            <ListItem>
              <div className="List-item-image"><Image src={materialImg} alt="" /></div>
              <div className="List-item-title"><RichText text={config.translate(props.name)('stage02.tips.material01')} /></div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"><Image src={materialImg} alt="" /></div>
              <div className="List-item-title"><RichText text={config.translate(props.name)('stage02.tips.material02')} /></div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"><Image src={materialImg} alt="" /></div>
              <div className="List-item-title"><RichText text={config.translate(props.name)('stage02.tips.material03')} /></div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"><Image src={materialImg} alt="" /></div>
              <div className="List-item-title"><RichText text={config.translate(props.name)('stage02.tips.material04')} /></div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"><Image src={materialImg} alt="" /></div>
              <div className="List-item-title"><RichText text={config.translate(props.name)('stage02.tips.material05')} /></div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"><Image src={materialImg} alt="" /></div>
              <div className="List-item-title"><RichText text={config.translate(props.name)('stage02.tips.material06')} /></div>
            </ListItem>
          </List>
        </Branding>

        <Card center moreSpacing>
          <Heading h2 title={config.translate(props.name)('stage02.card.title')} capitalize />
          <RichText text={config.translate(props.name)('stage02.card.text')} />
        </Card>

        <Info>
          <InfoCol cols={4}>
            <Heading h2 title={config.translate(props.name)('stage02.info02.title')} capitalize />
          </InfoCol>
          <InfoCol cols={8}>
            <RichText text={config.translate(props.name)('stage02.info02.text')} />
          </InfoCol>
        </Info>
      </SectionContent>
    </Section>

    <Section name="Stage-03">
      <SectionContent container>
        <Feature image={stage03Img} symbol="03" inversed full>
          <Heading h2 title={config.translate(props.name)('stage03.title')} />
          <RichText text={config.translate(props.name)('stage03.text')} />
        </Feature>

        <Cards cols={2}>
          <CardCol>        
            <Card>
              <RichText center text={config.translate(props.name)('stage03.card01')} />
            </Card>
          </CardCol>
          <CardCol>          
            <Card>
              <RichText center text={config.translate(props.name)('stage03.card02')} />
            </Card>
          </CardCol>
          <CardCol>          
            <Card>
              <RichText center text={config.translate(props.name)('stage03.card03')} />
            </Card>
          </CardCol>
          <CardCol>          
            <Card>
              <RichText center text={config.translate(props.name)('stage03.card04')} />
            </Card>
          </CardCol>
        </Cards>

        <Branding cover={brandingImg} title={config.translate(props.name)('stage03.tips.title')}>
          <RichText text={config.translate(props.name)('stage03.tips.text')} />
          
          <Heading h2 title={config.translate(props.name)('stage03.tips.subtitle')} spacingTop inherit capitalize />
          <List>
            <ListItem>
              <div className="List-item-image"><Image src={materialImg} alt="" /></div>
              <div className="List-item-title"><RichText text={config.translate(props.name)('stage03.tips.material01')} /></div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"><Image src={materialImg} alt="" /></div>
              <div className="List-item-title"><RichText text={config.translate(props.name)('stage03.tips.material02')} /></div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"><Image src={materialImg} alt="" /></div>
              <div className="List-item-title"><RichText text={config.translate(props.name)('stage03.tips.material03')} /></div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"><Image src={materialImg} alt="" /></div>
              <div className="List-item-title"><RichText text={config.translate(props.name)('stage03.tips.material04')} /></div>
            </ListItem>
          </List>
        </Branding>

        <Info>
          <InfoCol cols={4}>
            <Heading h2 title={config.translate(props.name)('stage03.info.title')} capitalize />
          </InfoCol>
          <InfoCol cols={8}>
            <RichText text={config.translate(props.name)('stage03.info.text')} />
          </InfoCol>
        </Info>
      </SectionContent>
    </Section>

    <Section name="Stage-04">
      <SectionContent container background="gray">
        <Feature image={stage04Img} symbol="04" full>
          <Heading h2 title={config.translate(props.name)('stage04.title')} />
          <RichText text={config.translate(props.name)('stage04.text')} />
        </Feature>

        <Card center moreSpacing>
          <RichText text={config.translate(props.name)('stage04.card.text')} />
          <br />
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
                <RichText spacingBottom text={config.translate(props.name)('stage04.gallery.third.text')} />
                <br />
                <Button label={config.translate(props.name)('stage04.gallery.third.cta')} to="/" primary small />
              </div>                
            ),
          }
        }} />
      </SectionContent>
    </Section>

    <Section name="Stage-05">
      <SectionContent container>
        <Feature image={stage05Img} symbol="05" inversed full>
          <Heading h2 title={config.translate(props.name)('stage05.title')} />
          <RichText text={config.translate(props.name)('stage05.text')} />
        </Feature>

        <Cards>
          <CardStep number="1">
            <RichText text={config.translate(props.name)('stage05.step01')} />
          </CardStep>
          <CardStep number="2">
            <RichText text={config.translate(props.name)('stage05.step02')} />
          </CardStep>
          <CardStep number="3">
            <RichText text={config.translate(props.name)('stage05.step03')} />
          </CardStep>
        </Cards>

        <Branding cover={brandingImg} title={config.translate(props.name)('stage05.tips.title')}>
          <RichText text={config.translate(props.name)('stage05.tips.text')} />
          <Heading h1 title={config.translate(props.name)('stage05.tips.indice')} inherit spacing capitalize />
          <Heading h2 title={config.translate(props.name)('stage05.tips.subtitle')} inherit capitalize />
          <List>
            <ListItem>
              <div className="List-item-image"><Image src={materialImg} alt="" /></div>
              <div className="List-item-title"><RichText text={config.translate(props.name)('stage05.tips.material01')} /></div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"><Image src={materialImg} alt="" /></div>
              <div className="List-item-title"><RichText text={config.translate(props.name)('stage05.tips.material02')} /></div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"><Image src={materialImg} alt="" /></div>
              <div className="List-item-title"><RichText text={config.translate(props.name)('stage05.tips.material03')} /></div>
            </ListItem>
            <ListItem>
              <div className="List-item-image"><Image src={materialImg} alt="" /></div>
              <div className="List-item-title"><RichText text={config.translate(props.name)('stage05.tips.material04')} /></div>
            </ListItem>
          </List>
        </Branding>

        <Info>
          <InfoCol cols={4}>
            <Heading h2 title={config.translate(props.name)('stage05.info.title')} capitalize />
          </InfoCol>
          <InfoCol cols={8}>
            <RichText text={config.translate(props.name)('stage05.info.text')} />
          </InfoCol>
        </Info>
      </SectionContent>
    </Section>
  </React.Fragment>
);

export default withConfig(SectionStages);