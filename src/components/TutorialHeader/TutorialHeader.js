/*
Note: you can find a description of the different components used UI Shell in our carbon-components-react package.
https://github.com/carbon-design-system/carbon/tree/master/packages/react/src/components/UIShell

Note: When creating navigation headers, it’s important to have a Skip to content link so keyboard
users can skip the navigation items and go straight to the main content.

Note: It’s important that the TutorialHeader returns the Carbon Header as its containing element,
as we’ll later be rendering TutorialHeader in App.js as a preceeding sibling of Content, another UI Shell component.
Those components need to live one after another for the UI Shell to properly render.
*/
import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';

/*
We need to use the Link component instead of the default anchor elements to prevent full page reload when navigating
to different pages with React Router. To use Link, update the HeaderName component to use the element prop and
replace the href with to:
*/
import { Link } from 'react-router-dom';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';

const TutorialHeader = () => (
  <Header aria-label="Carbon Tutorial">
    <SkipToContent />
    <HeaderName element={Link} to="/" prefix="IBM">
      Carbon Tutorial
    </HeaderName>
    <HeaderNavigation aria-label="Carbon Tutorial">
      <HeaderMenuItem element={Link} to="/repos">
        My Repositories
      </HeaderMenuItem>
    </HeaderNavigation>
    <HeaderNavigation aria-label="Carbon Tutorial">
      <HeaderMenuItem element={Link} to="/repos">
        Same Place
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
        <AppSwitcher20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>
);

export default TutorialHeader;
