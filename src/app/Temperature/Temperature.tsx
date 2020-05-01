import React, {useState} from 'react';
import {
  Select,
  SelectVariant,
  SelectOption,
  PageSection,
  Title
} from '@patternfly/react-core';
import realData from './../../data.json';
import customTemperatureData from './../../dummyDataTemperature.json';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartVoronoiContainer } from '@patternfly/react-charts';
import './Temperature.css';

const Temperature = () => {

  // state
  const [isExpanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState('');
  const [temperatureGraphDataState, setTemperatureGraphDataState] = useState(customTemperatureData["1Hour"]);

  const temperatureData = realData.data[realData.data.length - 1].temp;

  // create new array and push the new objects to pass through to the chart
  const chartData: object[] = [];
  realData.data.forEach((element, index) => {
    const newObject = { name: index, x: index, y: element.temp };
    chartData.push(newObject);
  });

  console.log('what is chartdata' + chartData);

  // pass data based on selection
  function temperatureGraphData(selectedState) {
    if(selectedState == '5 Hours') {
      return setTemperatureGraphDataState(customTemperatureData["5Hours"]);
    }
    else if(selectedState == '1 Week') {
      return setTemperatureGraphDataState(customTemperatureData["1Week"]);
    }
    else if(selectedState == '1 Month') {
      return setTemperatureGraphDataState(customTemperatureData["1Month"]);
    }
    else if(selectedState == '3 Months') {
      return setTemperatureGraphDataState(customTemperatureData["3Months"]);
    }
    else if(selectedState == '6 Months') {
      return setTemperatureGraphDataState(customTemperatureData["6Months"]);
    }
    else if(selectedState == '1 Year') {
      return setTemperatureGraphDataState(customTemperatureData["1Year"]);
    }
    else {
      return setTemperatureGraphDataState(customTemperatureData["1Hour"]);
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
      temperatureGraphData(selection);
      console.log('did it call temp graph data' + selection);
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

  console.log('what is' + temperatureGraphDataState);
  // console.log('what is this' + customTemperatureData["1Year"]);

  return (
    <React.Fragment>
      <PageSection>
        <Title size="2xl">
          Temperature: 
          <span> {temperatureData} C</span>
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
          maxDomain={{y: 50}}
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
              data={chartData}
            />
          </ChartGroup>
        </Chart>
        </div>
      </PageSection>
    </React.Fragment>
  );
};

export default Temperature;
