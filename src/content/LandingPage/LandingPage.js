import React, { Component } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
} from 'carbon-components-react';

const props = {
  tabs: {
    className: 'some-class',
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
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <a href="/">Getting started</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1>Design &amp; build with Carbon</h1>
        </div>
        <div className="bx--row landing-page__r2">
          <Tabs {...props.tabs}>
            <Tab {...props.tab} label="Tab label 1">
              <div className="bx--row">
                <div className="bx--col-lg-8">
                  <strong>What is Carbon?</strong>
                  <p>
                    Carbon is IBM’s open-source design system for digital
                    products and experiences. With the IBM Design Language as
                    its foundation, the system consists of working code, design
                    tools and resources, human interface guidelines, and a
                    vibrant community of contributors.
                  </p>
                  <Button>Learn more</Button>
                </div>
                <div className="bx--col-lg-8">
                  <img
                    className="landing-page-illustration"
                    src={`${process.env.PUBLIC_URL}/Banner_illustration.png`}
                    alt="Carbon illustration"
                  />
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Tab label 2">
              <div>Content for second tab goes here.</div>
            </Tab>
            <Tab {...props.tab} label="Tab label 3">
              <div>Content for third tab goes here.</div>
            </Tab>
          </Tabs>
        </div>
        <div className="bx--row landing-page__r3">
          <div className="bx--col-lg-4">
            <strong>The Principles</strong>
          </div>
          <div className="bx--col-lg-4">1/4</div>
          <div className="bx--col-lg-4">1/4</div>
          <div className="bx--col-lg-4">1/4</div>
        </div>
        <div className="bx--row landing-page__r4">
          <div className="bx--col-lg-4">
            <strong>Who is Carbon for?</strong>
          </div>
          <div className="bx--col-lg-4">1/4</div>
          <div className="bx--col-lg-8">1/2</div>
        </div>
        <div className="bx--row landing-page__r5">
          <div className="bx--offset-lg-4 bx--col-lg-4">1/4</div>
          <div className="bx--col-lg-8">1/2</div>
        </div>
        <div className="bx--row landing-page__r6">
          <div className="bx--col-lg-4">
            <strong>Get design guidance &amp; code</strong>
          </div>
          <div className="bx--col-lg-4">1/4</div>
          <div className="bx--col-lg-4">1/4</div>
          <div className="bx--col-lg-4">1/4</div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
