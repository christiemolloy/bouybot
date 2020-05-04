import React, {useState} from 'react';
import {
  Select,
  SelectVariant,
  SelectOption,
  PageSection,
  Title
} from '@patternfly/react-core';
import realData from './../data.json';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartVoronoiContainer } from '@patternfly/react-charts';
import './pHLevels.css';

const PHLevels = () => {
  const visibleData: object[] = [];
  for (let i = realData.data.length - 75; i < realData.data.length; i++) {
    const newVisObject = {name: realData.data.length - i, x: realData.data.length - i, y: realData.data[i].temp}; 
    visibleData.push(newVisObject);
  }
  // state
  const [isExpanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState('');
  const [pHGraphDataState, setpHGraphDataState] = useState(visibleData);

  const pHData = realData.data[realData.data.length - 1].pH;

  // data
  const chartData: object[] = [];
  realData.data.forEach((element, index) => {
    const newObject = { name: index, x: index, y: element.pH };
    chartData.push(newObject);
  });

  console.log('what is chartdata' + chartData);
  // pass data based on selection
  function pHGraphData(selectedState) {
  var numdata = 0

    if(selectedState == '75 Data Points') {
      numdata = 75;
      visibleData.length = 0;
      var startingIndex = realData.data.length-75;
      if (startingIndex < 0)
        startingIndex = 0;
      for (let i = startingIndex; i < realData.data.length; i++) {
        const newVisObject = {name: realData.data.length - i, x: realData.data.length - i, y: realData.data[i].temp}; 
        visibleData.push(newVisObject);
      }
      console.log('what is visibleData' + visibleData);
      console.log(JSON.stringify(visibleData));
  
      return setpHGraphDataState(visibleData);
    }
    else if(selectedState == '150 Data Points') {
      numdata = 150;
      visibleData.length = 0;
      var startingIndex = realData.data.length-150;
      if (startingIndex < 0)
        startingIndex = 0;
      for (let i = startingIndex; i < realData.data.length; i++) {
        const newVisObject = {name: realData.data.length - i, x: realData.data.length - i, y: realData.data[i].temp}; 
        visibleData.push(newVisObject);
      }
      return setpHGraphDataState(visibleData);
    }
    else if(selectedState == '225 Data Points') {
      numdata = 225;
      visibleData.length = 0;
      var startingIndex = realData.data.length-225;
      if (startingIndex < 0)
        startingIndex = 0;
      for (let i = startingIndex; i < realData.data.length; i++) {
        const newVisObject = {name: realData.data.length - i, x: realData.data.length - i, y: realData.data[i].temp}; 
        visibleData.push(newVisObject);
      }
      return setpHGraphDataState(visibleData);
    }
    else if(selectedState == '300 Data Points') {
      numdata = 300;
      visibleData.length = 0;
      var startingIndex = realData.data.length-300;
      if (startingIndex < 0)
        startingIndex = 0;
      for (let i = startingIndex; i < realData.data.length; i++) {
        const newVisObject = {name: realData.data.length - i, x: realData.data.length - i, y: realData.data[i].temp}; 
        visibleData.push(newVisObject);
      }
      return setpHGraphDataState(visibleData);
    }
    else if(selectedState == '375 Data Points') {
      numdata = 375;
      visibleData.length = 0;
      var startingIndex = realData.data.length-375;
      if (startingIndex < 0)
        startingIndex = 0;
      for (let i = startingIndex; i < realData.data.length; i++) {
        const newVisObject = {name: realData.data.length - i, x: realData.data.length - i, y: realData.data[i].temp}; 
        visibleData.push(newVisObject);
      }
      return setpHGraphDataState(visibleData);
    }
    else if(selectedState == '450 Data Points') {
      numdata = 450;
      visibleData.length = 0;
      var startingIndex = realData.data.length-450;
      if (startingIndex < 0)
        startingIndex = 0;
      for (let i = startingIndex; i < realData.data.length; i++) {
        const newVisObject = {name: realData.data.length - i, x: realData.data.length - i, y: realData.data[i].temp}; 
        visibleData.push(newVisObject);
      }
      return setpHGraphDataState(visibleData);
    }
    else if(selectedState == '525 Data Points') {
      numdata = 525;
      visibleData.length = 0;
      var startingIndex = realData.data.length-525;
      if (startingIndex < 0)
        startingIndex = 0;
      for (let i = startingIndex; i < realData.data.length; i++) {
        const newVisObject = {name: realData.data.length - i, x: realData.data.length - i, y: realData.data[i].temp}; 
        visibleData.push(newVisObject);
      }
      return setpHGraphDataState(visibleData);
    }
    else if(selectedState == '600 Data Points') {
      numdata = 600;
      visibleData.length = 0;
      var startingIndex = realData.data.length-600;
      if (startingIndex < 0)
        startingIndex = 0;
      for (let i = startingIndex; i < realData.data.length; i++) {
        const newVisObject = {name: realData.data.length - i, x: realData.data.length - i, y: realData.data[i].temp}; 
        visibleData.push(newVisObject);
      }
      return setpHGraphDataState(visibleData);
    }
  }
  
  const onToggle = isExpanded => {
    setIsExpanded(isExpanded);
  };

  const onSelect = (event, selection, isPlaceholder) => {
    if (isPlaceholder) {
      clearSelection();
      setSelected(selection);
      pHGraphData(selection);
      console.log('did it call temp graph data' + selection);
      setIsExpanded(false);
      console.log('selected:', selection);
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
    { value: '75 Data Points', disabled: false, isPlaceholder: true },
    { value: '150 Data Points', disabled: false },
    { value: '225 Data Points', disabled: false },
    { value: '300 Data Points', disabled: false },
    { value: '375 Data Points', disabled: false },
    { value: '450 Data Points', disabled: false },
    { value: '525 Data Points', disabled: false },
    { value: '600 Data Points', disabled: false }
  ];

  console.log('what is' + pHGraphDataState);

  return (
    <React.Fragment>
      <PageSection>
        <Title size="2xl">
          pH Levels:
          <span> {pHData}</span>
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
