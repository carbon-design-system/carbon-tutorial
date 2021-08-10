import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react';
import {
  AppSwitcher20,
  Notification20,
  UserAvatar20,
} from '@carbon/icons-react';
import { Link } from 'react-router-dom';

const TutorialHeader = () => {
  return (
    <HeaderName
      style={{ backgroundColor: 'blue' }}
      element={Link}
      to="/"
      prefix="IBM">
      Carbon Tutorial
      <HeaderMenuItem
        style={{ backgroundColor: 'blue' }}
        element={Link}
        to="/repos">
        Repositories
      </HeaderMenuItem>
      <HeaderGlobalBar style={{ backgroundColor: 'blue' }}>
        <HeaderGlobalAction aria-label="Notifications">
          <Notification20 color={'green'} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="User Avatar">
          <UserAvatar20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App Switcher">
          <AppSwitcher20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </HeaderName>
  );
};

export default TutorialHeader;
