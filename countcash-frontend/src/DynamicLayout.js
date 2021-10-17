import React from 'react';
import {LoginNavigation, SignupNavigation, LogoutNavigation} from './Navigation';

const DynamicLayout = props => {
  const { component: RoutedComponent, layout} = props;
  
    const actualRouteComponent = (
           <RoutedComponent {...props} />
    );
    switch (layout) {
      case 'LOGIN': {
        return (
          <div>
            <LoginNavigation />
            {actualRouteComponent}
          </div>
        )
      }
      case 'SIGNUP': {
        return (
          <div>
            <SignupNavigation />
            {actualRouteComponent}
          </div>
        )
      }
      case 'MAIN': {
        return (
          <div>
            <LogoutNavigation />
            {actualRouteComponent}
          </div>
        )
      }
      default: {
        return (
          <div>
            <SignupNavigation />
            {actualRouteComponent}
          </div>
        )
      }
    }
  };    

  export default DynamicLayout;