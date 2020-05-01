import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { WaterIcon, CloudShowersHeavyIcon, BoltIcon } from '@patternfly/react-icons';
import customData from './../../data.json';

const WaveConditions = () => {
  const waveConditionData = customData.data[customData.data.length - 1].accelZ;

  console.log(customData.data.length);

  const checkCondition = (condition: number) => {
 
    if(condition >= 15) {
      return <BoltIcon/>
    }
    if(condition >= 10 && condition < 15 ) {
      return <CloudShowersHeavyIcon/>
    }
    if(condition > 0 && condition < 10) {
      return <WaterIcon/>
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
