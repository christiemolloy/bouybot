import * as React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { Alert, PageSection } from '@patternfly/react-core';
import { DynamicImport } from '@app/DynamicImport';
import { accessibleRouteChangeHandler } from '@app/utils/utils';
import { Dashboard } from '@app/Dashboard/Dashboard';
import Temperature from '@app/Temperature/Temperature';
import PHLevels from '@app/PHLevels/PHLevels';
import WaveConditions from '@app/WaveConditions/WaveConditions';
import { useDocumentTitle } from '@app/utils/useDocumentTitle';
import { LastLocationProvider, useLastLocation } from 'react-router-last-location';

let routeFocusTimer: number;

const getSupportModuleAsync = () => () => import(/* webpackChunkName: 'support' */ '@app/Support/Support');

// const Support = (routeProps: RouteComponentProps) => {
//   const lastNavigation = useLastLocation();
//   return (
//     /* eslint-disable @typescript-eslint/no-explicit-any */
//     <DynamicImport load={getSupportModuleAsync()} focusContentAfterMount={lastNavigation !== null}>
//       {(Component: any) => {
//         let loadedComponent: any;
//         /* eslint-enable @typescript-eslint/no-explicit-any */
//         if (Component === null) {
//           loadedComponent = (
//             <PageSection aria-label="Loading Content Container">
//               <div className="pf-l-bullseye">
//                 <Alert title="Loading" className="pf-l-bullseye__item" />
//               </div>
//             </PageSection>
//           );
//         } else {
//           loadedComponent = <Component.Support {...routeProps} />;
//         }
//         return loadedComponent;
//       }}
//     </DynamicImport>
//   );
// };

export interface IAppRoute {
  label?: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  /* eslint-enable @typescript-eslint/no-explicit-any */
  exact?: boolean;
  path: string;
  title: string;
  isAsync?: boolean;
}

const routes: IAppRoute[] = [
  {
    component: Dashboard,
    exact: true,
    label: 'Dashboard',
    path: '/',
    title: 'Main Dashboard Title'
  },
  {
    component: Temperature,
    exact: true,
    isAsync: true,
    label: 'Temperature',
    path: '/temperature',
    title: 'Temperature Page Title'
  },
  {
    component: PHLevels,
    exact: true,
    isAsync: true,
    label: 'pH',
    path: '/phlevels',
    title: 'pH Page Title'
  },
  {
    component: WaveConditions,
    exact: true,
    isAsync: true,
    label: 'Wave Conditions',
    path: '/waveconditions',
    title: 'Wave conditions Page Title'
  }
];

// a custom hook for sending focus to the primary content container
// after a view has loaded so that subsequent press of tab key
// sends focus directly to relevant content
const useA11yRouteChange = (isAsync: boolean) => {
  const lastNavigation = useLastLocation();
  React.useEffect(() => {
    if (!isAsync && lastNavigation !== null) {
      routeFocusTimer = accessibleRouteChangeHandler();
    }
    return () => {
      window.clearTimeout(routeFocusTimer);
    };
  }, [isAsync, lastNavigation]);
};

const RouteWithTitleUpdates = ({ component: Component, isAsync = false, title, ...rest }: IAppRoute) => {
  useA11yRouteChange(isAsync);
  useDocumentTitle(title);

  function routeWithTitle(routeProps: RouteComponentProps) {
    return <Component {...rest} {...routeProps} />;
  }

  return <Route render={routeWithTitle} />;
};

const AppRoutes = () => (
  <LastLocationProvider>
    <Switch>
      {routes.map(({ path, exact, component, title, isAsync }, idx) => (
        <RouteWithTitleUpdates
          path={path}
          exact={exact}
          component={component}
          key={idx}
          title={title}
          isAsync={isAsync}
        />
      ))}
    </Switch>
  </LastLocationProvider>
);

export { AppRoutes, routes };
