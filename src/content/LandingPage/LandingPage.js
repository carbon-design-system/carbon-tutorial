import React from 'react';
import {
  Grid,
  Column,
  Breadcrumb,
  BreadcrumbItem,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
  TabList,
  Button,
} from '@carbon/react';
import './_landing-page.scss';

const LandingPage = () => {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <a href="/"> Getting Started </a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">
          Design &amp; build with Carbon
        </h1>
      </Column>

      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Tab navigation">
            <Tab>About</Tab>
            <Tab>Design</Tab>
            <Tab>Develop</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Grid className="landing-page__tab-content">
                <Column
                  lg={7}
                  md={4}
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
                    src={`${process.env.PUBLIC_URL}/tab-illo.png`}
                    className="landing-page__illo"
                    alt="Carbon illustration"
                  />
                </Column>
              </Grid>
            </TabPanel>

            <TabPanel>
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
            </TabPanel>

            <TabPanel>
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
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>

      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <Grid>
          <Column lg={4} md={4} sm={4}>
            <h3 className="landing-page__label">The Principles</h3>
          </Column>
          <Column lg={4} md={4} sm={4}>
            Carbon is open
          </Column>
          <Column lg={4} md={4} sm={4}>
            Carbon is modular
          </Column>
          <Column lg={4} md={4} sm={4}>
            Carbon is consistent
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
};

export default LandingPage;
