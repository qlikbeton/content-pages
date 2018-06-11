import React from 'react';
import { ImageBackground, Heading, Text } from './';
import img01 from '../../assets/img/img-gallery.jpg';
import './Gallery.css';

const Gallery = props => {
  const classNames = ['Gallery'];

  return (
    <div className={classNames.join(' ')}>
      <div className="Gallery-col">
        <div className="Gallery-col">
          <ImageBackground src={img01} half>
            <Heading h2 title="Bon a savoir" inherit />
          </ImageBackground>
        </div>
        <div className="Gallery-col">
          <ImageBackground src={img01} half>
            <Heading h1 title="DIY indice: 2/10" inherit capitalize />
          </ImageBackground>
        </div>
      </div>
      <div className="Gallery-col">
        <ImageBackground src={img01}>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar.</Text>
        </ImageBackground>
      </div>
    </div>
  );
}

export default Gallery;