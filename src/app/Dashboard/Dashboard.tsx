import * as React from 'react';
import { Button, PageSection, Title, Level, LevelItem } from '@patternfly/react-core';
import { NavLink } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import customData from './../../data.json';
import { routes } from '@app/routes';
import './Dashboard.css';
import { WaterIcon, BoltIcon, CloudShowersHeavyIcon } from '@patternfly/react-icons';

const Dashboard = () => {

  const dashboardDataTemperature = customData.data[customData.data.length - 1].temp;
  const dashboardDataPh = customData.data[customData.data.length - 1].pH;
  const dashboardDataWaveConditions = customData.data[customData.data.length - 1].accelZ;

  
    console.log(customData.data.length);
  
    const checkCondition = (condition: number) => {
   
      if(condition >= 25) {
        return <BoltIcon/>
      }
      else if(condition >= 15 && condition < 25 ) {
        return <CloudShowersHeavyIcon/>
      }
      else{
        return <WaterIcon/>
      }
    };

  const routePathTemperature = routes[1].path;
  const routePathPh = routes[2].path;
  const routePathWaveConditions = routes[3].path;

  return (
    <React.Fragment>
      <PageSection>
        <Title size="2xl">
          <NavLink exact to={routePathWaveConditions}>
            Wave conditions:
          </NavLink>
          <span> {dashboardDataWaveConditions}</span>
        </Title>
      </PageSection>
      <PageSection>
        <Level style={{ justifyContent: 'space-around' }}>
          <LevelItem style={{ textAlign: 'center' }}>
            <Title size="2xl">
              <NavLink exact to={routePathTemperature}>
                Temperature
              </NavLink>
              <p>{dashboardDataTemperature} C</p>
            </Title>
          </LevelItem>
          <LevelItem>
            <Title size="2xl">
              <NavLink exact to={routePathPh}>
                pH
              </NavLink>
              <p>{dashboardDataPh}</p>
            </Title>
          </LevelItem>
        </Level>
      </PageSection>
      </React.Fragment>
  );
};

export { Dashboard };
