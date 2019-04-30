import React, { Component } from 'react';
import Add24 from '@carbon/icons-react/es/add/24';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';

class TutorialHeader extends Component {
  render() {
    return (
      <>
        <Header aria-label="Carbon Tutorial">
          <SkipToContent />
          <HeaderName href="/" prefix="IBM">
            Carbon Tutorial
          </HeaderName>
          <HeaderNavigation aria-label="Carbon Tutorial">
            <HeaderMenuItem href="/repos">Link 1</HeaderMenuItem>
          </HeaderNavigation>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Notifications">
              <Add24 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Notifications">
              <Add24 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Notifications">
              <Add24 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      </>
    );
  }
}

export default TutorialHeader;
