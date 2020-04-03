import React, {useState} from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  DropdownPosition,
  DropdownDirection,
  KebabToggle,
  PageSection,
  Title
} from '@patternfly/react-core';
import { CaretDownIcon } from '@patternfly/react-icons';
import customData from './../../dummyData.json';

const PHLevels = () => {

  const [dropdownState, setDropdownState] = useState(false);

  const conditionData = customData.data[0].ph;

  const onSelect = event => {
    setDropdownState(!dropdownState);
    // this.onFocus();
  };

  const onToggle = dropdownState => {
    setDropdownState(dropdownState);
  };

  const dropdownItems = [
    <DropdownItem key="action" component="button">
      1 Hour
    </DropdownItem>,
    <DropdownItem key="action" component="button">
      5 Hours
    </DropdownItem>,
    <DropdownItem key="action" component="button">
      1 Week
    </DropdownItem>,
    <DropdownItem key="action" component="button">
      1 Month
    </DropdownItem>,
    <DropdownItem key="action" component="button">
      3 Months
    </DropdownItem>,
    <DropdownItem key="action" component="button">
      6 Months
    </DropdownItem>,
    <DropdownItem key="action" component="button">
      1 Year
    </DropdownItem>
  ];

  return (
    <React.Fragment>
      <PageSection>
        <Title size="2xl">
          pH: {conditionData}
        </Title>
      </PageSection>
      <PageSection>
        <Dropdown
          onSelect={onSelect}
          dropdownItems={dropdownItems}
          isOpen={dropdownState}
          toggle={
            <DropdownToggle id="toggle-id" onToggle={onToggle} iconComponent={CaretDownIcon}>
              Dropdown
            </DropdownToggle>
          }
        />
      </PageSection>
    </React.Fragment>
  )
  };

export default PHLevels;
