import React from 'react';
import {
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  SkipToContent,
} from 'carbon-components-react';
import Notification20 from '@carbon/icons-react/es/notification/20';
import UserAvatar20 from '@carbon/icons-react/es/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-react/es/app-switcher/20';
import { Link } from 'react-router-dom';

const TutorialHeader = () => {
  return (
    <>
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />

        <HeaderName element={Link} to={'/'} prefix="IBM">
          Carbon Tutorial
        </HeaderName>

        <HeaderNavigation aria-label="Carbon Tutorial">
          <HeaderMenuItem element={Link} to={'/repos'}>
            Repositories
          </HeaderMenuItem>
        </HeaderNavigation>

        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label={'Notifications'}>
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label={'User Avatar'}>
            <UserAvatar20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label={'App Switcher'}>
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    </>
  );
};

export default TutorialHeader;
