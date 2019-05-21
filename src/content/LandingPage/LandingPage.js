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
            <Breadcrumb noTrailingSlash>
              <BreadcrumbItem>
                <a href="/">Getting started</a>
              </BreadcrumbItem>
            </Breadcrumb>
            <h1>Design &amp; build with Carbon</h1>
          </div>
        </div>
        <div className="bx--row landing-page__r2">
          <Tabs {...props.tabs}>
            <Tab {...props.tab} label="About">
              <div className="bx--row landing-page__tab-content">
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
                    className="landing-page__illo"
                    src={`${process.env.PUBLIC_URL}/tab-illo.png`}
                    alt="Carbon illustration"
                  />
                </div>
              </div>
            </Tab>

            <Tab {...props.tab} label="Design">
              <div className="bx--row landing-page__tab-content">
                <div className="bx--col-lg-16">
                  Rapidly build beautiful and accessible experiences. The Carbon
                  kit contains all resources you need to get started.
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Develop">
              <div className="bx--row landing-page__tab-content">
                <div className="bx--col-lg-16">
                  Carbon provides styles and components in Vanilla, React,
                  Angular, and Vue for anyone building on the web.
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>

        <div className="bx--row landing-page__r3">
          <div className="bx--col-lg-4">
            <strong>The Principles</strong>
          </div>
          <div className="bx--col-lg-4">Carbon is Open</div>
          <div className="bx--col-lg-4">1/4</div>
          <div className="bx--col-lg-4">1/4</div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
