import React from 'react';
import { Link } from 'react-router-dom';
import * as cc from 'carbon-components-react/lib/components/UIShell';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';

const HEADER_LABEL = 'Carbon Tutorial';

const GlobalBar = () => (
  <cc.HeaderGlobalBar>
    <cc.HeaderGlobalAction aria-label="Notifications">
      <Notification20 />
    </cc.HeaderGlobalAction>
    <cc.HeaderGlobalAction aria-label="User Avatar">
      <UserAvatar20 />
    </cc.HeaderGlobalAction>
    <cc.HeaderGlobalAction aria-label="App Switcher">
      <AppSwitcher20 />
    </cc.HeaderGlobalAction>
  </cc.HeaderGlobalBar>
);

export default function TutorialHeader() {
  return (
    <cc.Header aria-label={HEADER_LABEL}>
      <cc.SkipToContent />
      <cc.HeaderName element={Link} prefix="IBM" to="/">
        Carbon Tutorial
      </cc.HeaderName>
      <cc.HeaderNavigation aria-label={HEADER_LABEL}>
        <cc.HeaderMenuItem element={Link} to="/repos">
          Repositories
        </cc.HeaderMenuItem>
      </cc.HeaderNavigation>
      <GlobalBar />
    </cc.Header>
  );
}
