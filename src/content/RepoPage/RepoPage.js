import React from 'react';
import { Button } from 'carbon-components-react';
import { Checkbox } from 'carbon-components-react';
import { Dropdown } from 'carbon-components-react';

const items = [
  {
    id: 'option-1',
    text: 'Option 1',
  },
  {
    id: 'option-2',
    text: 'Option 2',
  },
  {
    id: 'option-3',
    text: 'Option 3',
  },
  {
    id: 'option-4',
    text: 'Option 4',
  },
];

const RepoPage = () => {
  return (
    <div>
      REPO PAGE
      <Button>Button</Button>
      <fieldset>
        <legend>Label</legend>
        <Checkbox id="checkbox-label-1" labelText="abc" />
        <Checkbox id="checkbox-label-2" labelText="def" />
      </fieldset>
      <div style={{ width: 300 }}>
        <Dropdown
          titleText="Type"
          items={items}
          itemToString={item => (item ? item.text : '')}
        />
      </div>
      <div style={{ width: 300, paddingLeft: 20 }}>
        <Dropdown
          titleText="Type 2"
          items={items}
          itemToString={item => (item ? item.text : '')}
        />
      </div>
    </div>
  );
};

export default RepoPage;
