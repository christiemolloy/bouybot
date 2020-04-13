import React, {useState} from 'react';
import {
  Select,
  SelectVariant,
  SelectOption,
  PageSection,
  Title
} from '@patternfly/react-core';
import customData from './../../dummyData.json';
import custompHData from './../../dummyDataPHLevels.json';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartVoronoiContainer } from '@patternfly/react-charts';
import './pHLevels.css';

const PHLevels = () => {

  // state
  const [isExpanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState('');
  const [pHGraphDataState, setpHGraphDataState] = useState(custompHData["1Hour"]);

  // data
  const phData = customData.data[0].ph;

  // pass data based on selection
  function pHGraphData(selectedState) {
    if(selectedState == '5 Hours') {
      return setpHGraphDataState(custompHData["5Hours"]);
    }
    else if(selectedState == '1 Week') {
      return setpHGraphDataState(custompHData["1Week"]);
    }
    else if(selectedState == '1 Month') {
      return setpHGraphDataState(custompHData["1Month"]);
    }
    else if(selectedState == '3 Months') {
      return setpHGraphDataState(custompHData["3Months"]);
    }
    else if(selectedState == '6 Months') {
      return setpHGraphDataState(custompHData["6Months"]);
    }
    else if(selectedState == '1 Year') {
      return setpHGraphDataState(custompHData["1Year"]);
    }
    else {
      return setpHGraphDataState(custompHData["1Hour"]);
    }
  }

  const onToggle = isExpanded => {
    setIsExpanded(isExpanded);
  };

  const onSelect = (event, selection, isPlaceholder) => {
    if (isPlaceholder) {
      clearSelection();
    }
    else {
      setSelected(selection);
      pHGraphData(selection);
      setIsExpanded(false);
      console.log('selected:', selection);
    }
  };

  const clearSelection = () => {
    setSelected('');
    setIsExpanded(false);
  };

  const options = [
    { value: '1 Hour', disabled: false, isPlaceholder: true },
    { value: '5 Hours', disabled: false },
    { value: '1 Week', disabled: false },
    { value: '1 Month', disabled: false },
    { value: '6 Months', disabled: false },
    { value: '1 Year', disabled: false }
  ];

  return (
    <React.Fragment>
      <PageSection>
        <Title size="2xl">
          pH Levels:
          <span> {phData}</span>
        </Title>
      </PageSection>
      <PageSection>
      <Select
        className="app-select"
        variant={SelectVariant.single}
        aria-label="Select Input"
        onToggle={onToggle}
        onSelect={onSelect}
        selections={selected}
        isExpanded={isExpanded}
      >
       {options.map((option, index) => (
          <SelectOption
            isDisabled={option.disabled}
            key={index}
            value={option.value}
            isPlaceholder={option.isPlaceholder}
          />
          ))}
      </Select>
      <div style={{ height: '250px', width: '600px' }}>
        <Chart
          ariaDesc="Chart"
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
              data={pHGraphDataState}
            />
          </ChartGroup>
        </Chart>
        </div>
      </PageSection>
    </React.Fragment>
  );
};

export default PHLevels;
