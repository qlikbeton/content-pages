import React from 'react';
import { withConfig } from '../config';
import Section, { SectionContent } from './';
import { Text, Image, Heading, Button, Icon } from '../library';

const SectionContactDetails = ({ config, ...props }) => (
  <Section name="ContactDetails">
    <SectionContent container>
      <div className="Contact-row">
        <div className="_row">
          <div>
            <Icon name="download" />
          </div>
          <div>
            <div className="_contact-title">Contact us</div>
            <div className="_contact-opening">MON - FRI (9:00-17:00)</div>
          </div>
        </div>

        <div className="_row">
          <div>
            <Icon name="phone" />
          </div>
          <div className="_contact-phone">
            <div className="_contact-phone-no">0800-14-245</div>
            <div className="_contact-phone-desc"><span>Appel gratuit</span></div>
          </div>
        </div>

        <div>
          <Button label="Appeler Maintenant" icon="chat" onClick={() => console.log('click')} primary small />
        </div>
      </div>
    </SectionContent>
  </Section>
);

export default withConfig(SectionContactDetails);