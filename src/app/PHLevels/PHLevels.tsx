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
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartVoronoiContainer } from '@patternfly/react-charts';

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
      <div style={{ height: '250px', width: '600px' }}>
        <Chart
          ariaDesc="Average number of pets"
          ariaTitle="Line chart example"
          containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
          height={250}
          maxDomain={{y: 10}}
          minDomain={{y: 0}}
          padding={{
            bottom: 50,
            left: 50,
            right: 200, // Adjusted to accommodate legend
            top: 50
          }}
          width={600}
        >
          <ChartAxis tickValues={[2, 3, 4]} />
          <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
          <ChartGroup>
            <ChartLine
              data={[
                { name: 'Cats', x: '2015', y: 1 },
                { name: 'Cats', x: '2016', y: 2 },
                { name: 'Cats', x: '2017', y: 5 },
                { name: 'Cats', x: '2018', y: 3 }
              ]}
            />
            <ChartLine
              data={[
                { name: 'Dogs', x: '2015', y: 2 },
                { name: 'Dogs', x: '2016', y: 1 },
                { name: 'Dogs', x: '2017', y: 7 },
                { name: 'Dogs', x: '2018', y: 4 }
              ]}
              style={{
                data: {
                  strokeDasharray: '3,3'
                }
              }}
            />
            <ChartLine
              data={[
                { name: 'Birds', x: '2015', y: 3 },
                { name: 'Birds', x: '2016', y: 4 },
                { name: 'Birds', x: '2017', y: 9 },
                { name: 'Birds', x: '2018', y: 5 }
              ]}
            />
            <ChartLine
              data={[
                { name: 'Mice', x: '2015', y: 3 },
                { name: 'Mice', x: '2016', y: 3 },
                { name: 'Mice', x: '2017', y: 8 },
                { name: 'Mice', x: '2018', y: 7 }
              ]}
            />
          </ChartGroup>
        </Chart>
        </div>
      </PageSection>
    </React.Fragment>
  )
  };

export default PHLevels;
