import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { WaterIcon, CloudShowersHeavyIcon, BoltIcon } from '@patternfly/react-icons';
import customData from './../../dummyData.json';

const WaveConditions = () => {
  const waveConditionData = customData.data[0].waveConditions;

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
        <Title size="2xl">
          Wave Conditions: 
          <span>{waveConditionData}</span>
        </Title>
      </PageSection>
      <PageSection style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '200px'}}>
          {checkCondition(waveConditionData)}
        </div>
      </PageSection>
    </React.Fragment>
  );
};

export default WaveConditions;
