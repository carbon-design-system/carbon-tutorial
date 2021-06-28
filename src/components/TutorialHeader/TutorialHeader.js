import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> fea887c33a67a15dd0ecc984051177a8fc36a7b0
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from 'carbon-components-react';

import {
<<<<<<< HEAD
    AppSwitcher20,
    Notification20,
    UserAvatar20,
  } from '@carbon/icons-react';
  
=======
  AppSwitcher20,
  Notification20,
  UserAvatar20,
} from '@carbon/icons-react';

import { Link } from 'react-router-dom';
>>>>>>> fea887c33a67a15dd0ecc984051177a8fc36a7b0

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="IBM">
          Carbon Tutorial
        </HeaderName>
        <HeaderNavigation aria-label="Carbon Tutorial">
<<<<<<< HEAD
          <HeaderMenuItem element={Link} to="/repos">Repositories</HeaderMenuItem>
=======
          <HeaderMenuItem element={Link} to="/repos">
            Repositories
          </HeaderMenuItem>
>>>>>>> fea887c33a67a15dd0ecc984051177a8fc36a7b0
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
<<<<<<< HEAD
              <HeaderMenuItem element={Link} to="/repos">Repositories</HeaderMenuItem>
=======
              <HeaderMenuItem element={Link} to="/repos">
                Repositories
              </HeaderMenuItem>
>>>>>>> fea887c33a67a15dd0ecc984051177a8fc36a7b0
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
<<<<<<< HEAD
            <HeaderGlobalAction aria-label="Notifications">
                <Notification20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="User Avatar">
                <UserAvatar20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="App Switcher">
                <AppSwitcher20 />
            </HeaderGlobalAction>
=======
          <HeaderGlobalAction aria-label="Notifications">
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="User Avatar">
            <UserAvatar20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher">
            <AppSwitcher20 />
          </HeaderGlobalAction>
>>>>>>> fea887c33a67a15dd0ecc984051177a8fc36a7b0
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default TutorialHeader;
