import React, { Component } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
} from 'carbon-components-react';
import { InfoSection, InfoCard } from '../../components/Info';
import Globe32 from '@carbon/icons-react/lib/globe/32';
import PersonFavorite32 from '@carbon/icons-react/lib/person--favorite/32';
import Application32 from '@carbon/icons-react/lib/application/32';

const props = {
  tabs: {
    selected: 0,
    triggerHref: '#',
    role: 'navigation',
  },
  tab: {
    href: '#',
    role: 'presentation',
    tabIndex: 0,
  },
};

class LandingPage extends Component {
  render() {
    return (
      <div className="bx--grid bx--grid--full-width landing-page">
        <div className="bx--row landing-page__banner">
          <div className="bx--col-lg-16">
            <Breadcrumb noTrailingSlash aria-label="getting started">
              <BreadcrumbItem>
                <a href="/">Getting started</a>
              </BreadcrumbItem>
            </Breadcrumb>
            <h1>Design &amp; build with Carbon</h1>
          </div>
        </div>
        <div className="bx--row landing-page__r2">
          <div className="bx--col bx--no-gutter">
            <Tabs {...props.tabs} aria-label="card-nav">
              <Tab {...props.tab} label="About">
                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                  <div className="bx--row landing-page__tab-content">
                    <div className="bx--col-lg-8">
                      <strong>What is Carbon?</strong>
                      <p>
                        Carbon is IBM’s open-source design system for digital
                        products and experiences. With the IBM Design Language
                        as its foundation, the system consists of working code,
                        design tools and resources, human interface guidelines,
                        and a vibrant community of contributors.
                      </p>
                      <Button>Learn more</Button>
                    </div>
                    <div className="bx--col-lg-8">
                      <img
                        className="landing-page__illo"
                        src={`${process.env.PUBLIC_URL}/tab-illo.png`}
                        alt="Carbon illustration"
                      />
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab {...props.tab} label="Design">
                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                  <div className="bx--row landing-page__tab-content">
                    <div className="bx--col-lg-16">
                      Rapidly build beautiful and accessible experiences. The
                      Carbon kit contains all resources you need to get started.
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab {...props.tab} label="Develop">
                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                  <div className="bx--row landing-page__tab-content">
                    <div className="bx--col-lg-16">
                      Carbon provides styles and components in Vanilla, React,
                      Angular, and Vue for anyone building on the web.
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
        <InfoSection heading="The Principles" className="landing-page__r3">
          <InfoCard
            heading="Carbon is Open"
            body="It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute."
            icon={<PersonFavorite32 />}
          />
          <InfoCard
            heading="Carbon is Modular"
            body="Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."
            icon={<Application32 />}
          />
          <InfoCard
            heading="Carbon is Consistent"
            body="Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."
            icon={<Globe32 />}
          />
        </InfoSection>
      </div>
    );
  }
}

export default LandingPage;
