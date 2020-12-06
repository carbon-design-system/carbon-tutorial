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
  <Header aria-label="Carbon Tutorial">
    {' '}
    {/*used to display the trigger for a menu */}
    <SkipToContent />
    <HeaderName
      element={Link}
      // @ts-ignore
      to="/"
      prefix="IBM">
      {' '}
      {/* used to display the name of the product */}
      Carbon Tutorial
    </HeaderName>
    <HeaderNavigation aria-label="Carbon Tutorial">
      <HeaderMenuItem
        element={Link}
        // @ts-ignore
        to="/repos">
        Repositories
      </HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar>
      {' '}
      {/* used to display global actions */}
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
  </Header>
);

export default TutorialHeader;
