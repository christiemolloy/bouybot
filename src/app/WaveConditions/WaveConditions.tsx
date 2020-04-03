import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { WaterIcon, CloudShowersHeavyIcon, BoltIcon } from '@patternfly/react-icons';
import customData from './../../dummyData.json';

const WaveConditions = () => {
  const conditionData = customData.data[0].waveConditions;
  console.log(conditionData);

  const checkCondition = (condition) => {
    if(condition === 'calm') {
      return <WaterIcon/>
    }
    if(condition === 'rough') {
      return <BoltIcon/>
    }
    if(condition === 'stormy') {
      return <CloudShowersHeavyIcon/>
    }
  };

  return (
    <React.Fragment>
      <PageSection>
        <Title size="2xl">Wave Conditions:</Title>
      </PageSection>
      <PageSection>
        <div style={{ fontSize: '100px'}}>
          {checkCondition(conditionData)}
        </div>
      </PageSection>
    </React.Fragment>
  );
};

export default WaveConditions;
