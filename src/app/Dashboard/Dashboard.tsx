import * as React from 'react';
import { Button, PageSection, Title, Level, LevelItem } from '@patternfly/react-core';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import customData from './../../dummyData.json';
import { routes } from '@app/routes';
import './Dashboard.css';

const Dashboard = () => {

  const dashboardDataTemperature = customData.data[0].temperature;
  const dashboardDataPh = customData.data[0].ph;
  const dashboardDataWaveConditions = customData.data[0].waveConditions;

  const routePathTemperature = routes[1].path;
  const routePathPh = routes[2].path;
  const routePathWaveConditions = routes[3].path;

  return (
    <Switch>
      <PageSection>
        <Title size="2xl">
          <Route path={routePathWaveConditions}>
            Wave conditions:
          </Route>
          <span> {dashboardDataWaveConditions}</span>
        </Title>
      </PageSection>
      <PageSection>
        <Level style={{ justifyContent: 'space-around' }}>
          <LevelItem style={{ textAlign: 'center' }}>
            <Title size="2xl">
              <Route path={routePathTemperature}>
                Temperature
              </Route>
              <p>{dashboardDataTemperature} C</p>
            </Title>
          </LevelItem>
          <LevelItem>
            <Title size="2xl">
              <Route path={routePathPh}>
                pH
              </Route>
              <p>{dashboardDataPh}</p>
            </Title>
          </LevelItem>
        </Level>
      </PageSection>
    </Switch>
  );
};

export { Dashboard };
