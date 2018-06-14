import React from 'react';
import { withConfig } from '../config';
import Section, { SectionContent } from './';
import { Button, Icon } from '../library';

const SectionContactDetails = ({ config, ...props }) => (
  <Section name="ContactDetails">
    <SectionContent container>
      <div className="Contact-row">
        <div className="_row">
          <div>
            <Icon name="headset" size="large" />
          </div>
          <div className="_contact-schedule">
            <div className="_contact-title">{config.translate(props.name)('contactUs')}</div>
            <div className="_contact-opening">{config.translate(props.name)('opening')}</div>
          </div>
        </div>

        <div className="_row">
          <div>
            <Icon name="phone" />
          </div>
          <div className="_contact-phone">
            <div className="_contact-phone-no">{config.translate(props.name)('phoneNumber')}</div>
            <div className="_contact-phone-desc"><span>{config.translate(props.name)('freeCall')}</span></div>
          </div>
        </div>

        <div>
          <Button primary small
            label={config.translate(props.name)('callSupport')}
            icon="chat"
            iconSize="regular"
            iconPosition="left"
            onClick={() => console.log('click')} />
        </div>
      </div>
    </SectionContent>
  </Section>
);

export default withConfig(SectionContactDetails);