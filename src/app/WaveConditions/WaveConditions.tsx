import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { WaterIcon, CloudShowersHeavyIcon, BoltIcon } from '@patternfly/react-icons';
import customData from './../../data.json';

const WaveConditions = () => {
  const waveConditionData = customData.data[customData.data.length - 1].accelZ;

  console.log(customData.data.length);

  const checkCondition = (condition: number) => {
 
    if(condition >= 25) {
      return <WaterIcon/>
    }
    else if(condition >= 15 && condition < 25 ) {
      return <CloudShowersHeavyIcon/>
    }
    else{
      return <BoltIcon/>
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
