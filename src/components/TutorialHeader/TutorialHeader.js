import React from 'react';

import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  SkipToContent,
} from 'carbon-components-react';

// Can't import it because it will be unused, since modules of this tag are returning error
// import { HeaderGlobalAction } from 'carbon-components-react';

import { Link } from 'react-router-dom';

//This import is returning the error "Module not found: Can't resolve '@carbon/icons-react'".
// import {
//   AppSwitcher20,
//   Notification20,
//   UserAvatar20,
// } from '@carbon/icons-react';

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
    <HeaderGlobalBar />
    {/* <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="Notifications">
        <Notification20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="User Avatar">
        <UserAvatar20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="App Switcher">
        <AppSwitcher20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar> */}
  </Header>
);

export default TutorialHeader;
