import React from 'react';

import {
  EuiPageTemplate,
  EuiButton,
  EuiSideNav,
  EuiPageSideBar,
  EuiPanel,
  EuiResizableContainer,
} from '@elastic/eui';

export interface MainContentProps {
  sideNav: string;
  button: string;
  content: string;
}

const rightSideItems: JSX.Element[] = [
  <EuiButton key="1">first button</EuiButton>,
  <EuiButton key="2">second button</EuiButton>,
];

const sideNav = () => {
  const sideNavItems = [
    {
      name: 'Kibana',
      id: 0,
      items: [
        {
          name: 'Advanced settings',
          id: 1,
          onClick: () => {},
        },
        {
          name: 'Index Patterns (link)',
          id: 2,
          href: 'http://www.elastic.co',
        },
        {
          name: 'Saved Objects',
          id: 3,
          onClick: () => {},
          isSelected: true,
        },
        {
          name: 'Reporting',
          id: 4,
          onClick: () => {},
        },
      ],
    },
  ];

  return (
    <EuiPanel paddingSize="s" borderRadius="none" color="transparent">
      <EuiSideNav
        aria-label="Basic example"
        mobileTitle="Navigate within $APP_NAME"
        style={{ width: 192 }}
        items={sideNavItems}
      />
    </EuiPanel>
  );
};

export const MainContent = (props: MainContentProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { button, content } = props;

  return (
    <EuiPageTemplate
      pageSideBar={sideNav()}
      // pageSideBarProps={{ item }}
      pageHeader={{
        iconType: 'logoElastic',
        pageTitle: 'Page title',
        rightSideItems,
        tabs: [{ label: 'Tab 1', isSelected: true }, { label: 'Tab 2' }],
      }}
    >
      <div>
        <div>test</div>
        <EuiButton>button</EuiButton>
      </div>
    </EuiPageTemplate>
  );
};

export default MainContent;
