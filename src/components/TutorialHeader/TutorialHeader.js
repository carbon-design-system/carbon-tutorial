import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import {
  Header,
  HeaderGlobalAction,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';
import React from 'react';
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
    <HeaderGlobalAction aria-label="Notifications">
      <Notification20 />
    </HeaderGlobalAction>
    <HeaderGlobalAction aria-label="User Avatar">
      <UserAvatar20 />
    </HeaderGlobalAction>
    <HeaderGlobalAction aria-label="App Switcher">
      <AppSwitcher20 />
    </HeaderGlobalAction>
  </Header>
);
export default TutorialHeader;
