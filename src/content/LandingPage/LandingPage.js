import React, { Component } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
} from 'carbon-components-react';

class LandingPage extends Component {
  render() {
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
    return (
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="About">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-md-4 bx--col-lg-7">
                    <h2 className="landing-page__subheading">
                      What is Carbon?
                    </h2>
                    <p className="landing-page__p">
                      Carbon is IBM’s open-source design system for digital
                      products and experiences. With the IBM Design Language as
                      its foundation, the system consists of working code,
                      design tools and resources, human interface guidelines,
                      and a vibrant community of contributors.
                    </p>
                    <Button>Learn more</Button>
                  </div>
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
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
    );
  }
}

export default LandingPage;
