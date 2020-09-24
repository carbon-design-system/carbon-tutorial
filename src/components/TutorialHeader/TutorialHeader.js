import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react';

import {
  AppSwitcher20,
  Notification20,
  UserAvatar20,
} from '@carbon/icons-react';

import { Link } from 'react-router-dom';

const TutorialHeader = () => (
  <HeaderGlobalBar>
    <HeaderName element={Link} to="/" prefix="IBM">
      Carbon Tutorial
    </HeaderName>
    <HeaderMenuItem element={Link} to="/repos">
      Repositories
    </HeaderMenuItem>
    <HeaderGlobalAction aria-label="Notifications">
      <Notification20 />
    </HeaderGlobalAction>
    <HeaderGlobalAction aria-label="User Avatar">
      <UserAvatar20 />
    </HeaderGlobalAction>
    <HeaderGlobalAction aria-label="App Switcher">
      <AppSwitcher20 />
    </HeaderGlobalAction>
  </HeaderGlobalBar>
);

export default TutorialHeader;
