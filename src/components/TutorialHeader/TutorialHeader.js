import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/es/components/UIShell';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import AppSwitcher from '@carbon/icons-react/lib/app-switcher/20';
import { Link } from 'react-router-dom';

const TutorialHeader = () => (
  <Header aria-label="Carbon Tutorial">
    <SkipToContent />

    <HeaderName element={Link} to="/" prefix="IBM">
      Carbon Tutorial
    </HeaderName>

    <HeaderNavigation aria-label="Carbon Tutorial">
      <HeaderMenuItem element={Link} to="/repos">
        {' '}
        Repositories{' '}
      </HeaderMenuItem>
    </HeaderNavigation>

    <HeaderGlobalBar>
      <HeaderGlobalAction>
        <Notification20 />
      </HeaderGlobalAction>

      <HeaderGlobalAction>
        <UserAvatar20 />
      </HeaderGlobalAction>

      <HeaderGlobalAction>
        <AppSwitcher />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>
);

export default TutorialHeader;
