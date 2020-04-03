import * as React from 'react';
import { PageSection, Title, Level, LevelItem } from '@patternfly/react-core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Dashboard = () => {
  return (
    <Router>
      <PageSection>
        <Title size="2xl">
            Wave conditions: 
          </Title>
      </PageSection>
      <PageSection>
        <Level style={{ justifyContent: 'space-around' }}>
          <LevelItem style={{ textAlign: 'center' }}>
            <Title size="2xl">
              <Link to="/temperature">
                Temperature
              </Link>
            </Title>
            <div>0</div>
          </LevelItem>
          <LevelItem>
            <Title size="2xl">
              <Link to="/phlevels">
                Ph
              </Link>
            </Title>
            <div>0</div>
          </LevelItem>
        </Level>
      </PageSection>
    </Router>
  );
};

export { Dashboard };
