import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';

class TutorialHeader extends Component {
  render() {
    return (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        {/* <HeaderName href="/" prefix="IBM">
          Carbon Tutorial
        </HeaderName> */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <HeaderName prefix="IBM">Carbon Tutorial</HeaderName>
        </Link>
        <HeaderNavigation aria-label="Carbon Tutorial">
          {/* <HeaderMenuItem href="/repos">Link 1</HeaderMenuItem> */}
          <li>
            <Link
              to="/repos"
              className="bx--header__menu-item"
              role="menuitem"
              tabindex="0">
              <span className="bx--text-truncate--end">Link 1</span>
            </Link>
          </li>
        </HeaderNavigation>
        <HeaderGlobalBar>
          <HeaderGlobalAction>
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction>
            <UserAvatar20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction>
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    );
  }
}

export default TutorialHeader;
