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
  <Header arial-label="Carbon Tutorial">
    <SkipToContent />
    <HeaderName element={Link} to="/" prefix="IBM">
      Carbon Tutorial
    </HeaderName>
    <HeaderNavigation arial-label="Carbon Tutorial">
      <HeaderMenuItem element={Link} to="/repos">
        Repositories
      </HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar>
      <HeaderGlobalAction arial-label="Notifications">
        <Notification20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction arial-label="User Avatar">
        <UserAvatar20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction arial-label="App Switcher">
        <AppSwitcher20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>
);

export default TutorialHeader;
