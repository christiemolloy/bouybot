import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { WaterIcon, CloudShowersHeavyIcon, BoltIcon } from '@patternfly/react-icons';
import customData from './../../data.json';

const WaveConditions = () => {
  const waveConditionData = customData.data[0].accelZ;

  const checkCondition = (condition: number) => {
 
    if(condition >> 15) {
      return <BoltIcon/>
    }
    if(condition << 15) {
      return <CloudShowersHeavyIcon/>
    }
  };

  return (
    <React.Fragment>
      <PageSection>
        <Title size="2xl">
          Wave Conditions: 
          <span> {waveConditionData}</span>
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
