import React from 'react';
import {
  Grid,
  Column,
  Breadcrumb,
  BreadcrumbItem,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Button,
} from '@carbon/react';

const LandingPage = () => {
  return (
    <Grid className="landing-page" fullWidth>
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
        <Tabs defaultSelectedIndex={0}>
          <TabList aria-label={'List of tabs'} className={'tabs-group'}>
            <Tab>About</Tab>
            <Tab>Design</Tab>
            <Tab>Develop</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  md={4}
                  lg={7}
                  sm={4}
                  className="landing-page__tab-content">
                  <h2 className="landing-page__subheading">What is Carbon?</h2>
                  <p className="landing-page__p">
                    Carbon is IBM’s open-source design system for digital
                    products and experiences. With the IBM Design Language as
                    its foundation, the system consists of working code, design
                    tools and resources, human interface guidelines, and a
                    vibrant community of contributors.
                  </p>
                  <Button>Learn more</Button>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                  <img
                    className="landing-page__illo"
                    src={`${process.env.PUBLIC_URL}/tab-illo.png`}
                    alt="Carbon illustration"
                  />
                </Column>
                <Column lg={16} md={8} sm={4} className={'landing-page__r3'}>
                  <Grid>
                    <Column md={4} lg={4} sm={4}>
                      <h3 className="landing-page__label">The principles</h3>
                    </Column>
                    <Column md={4} lg={4} sm={4}>
                      <h3>Carbon is Open</h3>
                    </Column>
                    <Column md={4} lg={4} sm={4}>
                      <h3>Carbon is Modular</h3>
                    </Column>
                    <Column md={4} lg={4} sm={4}>
                      <h3>Carbon is Consistent</h3>
                    </Column>
                  </Grid>
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className={'tabs-group-content'}>
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className={'landing-page__tab-content'}>
                  Rapidly build beautiful and accessible experiences. The Carbon
                  kit contains all resources you need to get started.
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className={'tabs-group-content'}>
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className={'landing-page__tab-content'}>
                  Carbon provides styles and components in Vanilla, React,
                  Angular, and Vue for anyone building on the web.
                </Column>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
    </Grid>
  );
};

export default LandingPage;
