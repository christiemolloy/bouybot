import * as React from 'react';
import { PageSection, Title, Level, LevelItem } from '@patternfly/react-core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import customData from './../../dummyData.json';

const Dashboard = () => {

  const dashboardDataTemperature = customData.data[0].temperature;
  const dashboardDataPh = customData.data[0].ph;
  const dashboardDataWaveConditions = customData.data[0].waveConditions;

  return (
    <Router>
      <PageSection>
        <Title size="2xl">
            Wave conditions: 
            <p>{dashboardDataWaveConditions}</p>
          </Title>
      </PageSection>
      <PageSection>
        <Level style={{ justifyContent: 'space-around' }}>
          <LevelItem style={{ textAlign: 'center' }}>
            <Title size="2xl">
              <Link to="/temperature">
                Temperature
              </Link>
              <p>{dashboardDataTemperature}</p>
            </Title>
          </LevelItem>
          <LevelItem>
            <Title size="2xl">
              <Link to="/phlevels">
                Ph
              </Link>
              <p>{dashboardDataPh}</p>
            </Title>
          </LevelItem>
        </Level>
      </PageSection>
    </Router>
  );
};

export { Dashboard };
