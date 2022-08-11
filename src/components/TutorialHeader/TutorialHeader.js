import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from '@carbon/react';

import { Switcher, Notification, UserAvatar } from '@carbon/react/icons';
import { Link } from 'react-router-dom';

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
        <Notification />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="User Avatar">
        <UserAvatar />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="App Switcher">
        <Switcher />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>
);

export default TutorialHeader;
