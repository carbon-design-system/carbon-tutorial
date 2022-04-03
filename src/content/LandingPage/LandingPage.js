import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  Grid,
  Column,
} from '@carbon/react';
import { Application32, Globe32, PersonFavorite32 } from '@carbon/icons-react';

import { InfoSection, InfoCard } from '../../components/Info/Info';

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

const LandingPage = () => {
  return (
    <Grid className="landing-page">
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <a href="/">Getting started</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">
          Design &amp; build with Carbon
        </h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs
          {...props.tabs}
          aria-label="Tab navigation"
          className="tabs-group">
          <Tab {...props.tab} label="About" id="about">
            <Grid className="tabs-group-content">
              <Column
                md={4}
                sm={4}
                lg={7}
                className="landing-page__tab-content">
                <h2 className="landing-page__subheading">What is Carbon?</h2>
                <p className="landing-page__p">
                  Carbon is IBM’s open-source design system for digital products
                  and experiences. With the IBM Design Language as its
                  foundation, the system consists of working code, design tools
                  and resources, human interface guidelines, and a vibrant
                  community of contributors.
                </p>
                <Button>Learn more</Button>
              </Column>
              <Column md={4} sm={4} lg={{ span: 8, offset: 7 }}>
                <img
                  className="landing-page__illo"
                  src={`${process.env.PUBLIC_URL}/tab-illo.png`}
                  alt="Carbon illustration"
                />
              </Column>
            </Grid>
          </Tab>
          <Tab {...props.tab} label="Design" id="design">
            <Grid className="tabs-group-content">
              <Column
                lg={16}
                md={8}
                sm={4}
                className="landing-page__tab-content">
                Rapidly build beautiful and accessible experiences. The Carbon
                kit contains all resources you need to get started.
              </Column>
            </Grid>
          </Tab>
          <Tab {...props.tab} label="Develop" id="develop">
            <Grid className="tabs-group-content">
              <Column
                lg={16}
                md={8}
                sm={4}
                className="landing-page__tab-content">
                Carbon provides styles and components in Vanilla, React,
                Angular, and Vue for anyone building on the web.
              </Column>
            </Grid>
          </Tab>
        </Tabs>
      </Column>
      <Column lg={16} md={8} sm={4}>
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
      </Column>
    </Grid>
  );
};

export default LandingPage;
