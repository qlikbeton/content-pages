import React from 'react';
import Page from './';
import './HomePage.css';
import coverImg from '../../assets/img/bg-cover.png';

const sectionStyle = {
  backgroundImage: `url(${coverImg})`
};

const HomePage = props => (
  <Page name="Home">
    <div className="Section-home" style={sectionStyle}>
      <div className="Section-home-container">
        <h1>Coming Soon</h1>
        <h2>La page Lorem ipsum dolor sit amet, consectetur.</h2>
        <p>La page Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sapien elit, tempus et turpis sed, dictum fermentum augue. Nam interdum leo finibus, pulvinar nibh vel, sodales metus. Sed imperdiet a diam quis pulvinar.</p>
      </div>

      <div className="Section-home-form">
        <form>
          <input type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </Page>
);

export default HomePage;