import React from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  SkipToContent,
} from 'carbon-components-react';

import { Notification20, Switcher20, UserAvatar20 } from '@carbon/icons-react';

const TutorialHeader = () => (
  <Header aria-label="Carbon Tutorial">
    <SkipToContent />
    <HeaderName element={Link} to="/" prefix="IBM">
      Carbon Tutorial
    </HeaderName>
    <HeaderNavigation aria-label="Carbon Tutorial">
      <HeaderMenuItem element={Link} to="/repos">
        Repositories
      </HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="Notifications">
        <Notification20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="User Avatar">
        <UserAvatar20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="App Switcher">
        <Switcher20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>
);

export default TutorialHeader;
