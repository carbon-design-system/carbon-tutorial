import React from 'react';
import * as cc from 'carbon-components-react';

const tabProps = { href: '#', role: 'presentation', tabIndex: 0 };

const RowBanner = () => (
  <div className="bx--row landing-page__banner">
    <div className="bx--col-lg-16">
      <cc.Breadcrumb aria-label="Page navigation" noTrailingSlash>
        <cc.BreadcrumbItem>
          <a href="/">Getting started</a>
        </cc.BreadcrumbItem>
      </cc.Breadcrumb>
      <h1 className="landing-page__heading">Design &amp; Build With Carbon</h1>
    </div>
  </div>
);

const TabContentAbout = () => (
  <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
    <div className="bx--row landing-page__tab-content">
      <div className="bx--col-md-4 bx--col-lg-7">
        <h2 className="landing-page__subheading">What is Carbon?</h2>
        <p className="landing-page__p">
          Carbon is IBM's open-source design system for digital products and
          experiences. With the IBM Design Language as its foundation, the
          system consists of working code, design tools and resources, human
          interface guidelines, and a vibrant community of contributors.
        </p>
        <cc.Button>Learn more</cc.Button>
      </div>
      <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
        <img
          className="landing-page__illo"
          src={`${process.env.PUBLIC_URL}/tab-illo.png`}
        />
      </div>
    </div>
  </div>
);

const TabContentDesign = () => (
  <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
    <div className="bx--row landing-page__tab-content">
      <div className="bx--col-lg-16">
        Rapidly build beautiful and accessible experiences. The Carbon kit
        contains all resources you need to get started.
      </div>
    </div>
  </div>
);

const TabContentDevelop = () => (
  <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
    <div className="bx--row landing-page__tab-content">
      <div className="bx--col-lg-16">
        Carbon provides styles and components in Vanilla, React, Angular, and
        Vue for anyone building on the web.
      </div>
    </div>
  </div>
);

const Row1 = ({ tab, allTabs }) => (
  <div className="bx--row landing-page__r2">
    <div className="bx--col bx--no-gutter">
      <cc.Tabs
        aria-label="Tab navigation"
        role="navigation"
        selected={0}
        triggerHref="#">
        <cc.Tab {...tabProps} label="About">
          <TabContentAbout />
        </cc.Tab>
        <cc.Tab {...tabProps} label="Design">
          <TabContentDesign />
        </cc.Tab>
        <cc.Tab {...tabProps} label="Develop">
          <TabContentDevelop />
        </cc.Tab>
      </cc.Tabs>
    </div>
  </div>
);

const Row2 = () => (
  <div className="bx--row landing-page__r3">
    <div className="bx--col-md-4 bx--col-lg-4">
      <h3 className="landing-page__label">The Principles</h3>
    </div>
    <div className="bx--col-md-4 bx--col-lg-4">Carbon is Open</div>
    <div className="bx--col-md-4 bx--col-lg-4">Carbon is Modular</div>
    <div className="bx--col-md-4 bx--col-lg-4">Carbon is Consistent</div>
  </div>
);

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <RowBanner />
      <Row1 />
      <Row2 />
    </div>
  );
};

export default LandingPage;
