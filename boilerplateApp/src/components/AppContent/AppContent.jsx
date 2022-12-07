import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";

import routes from "../../routes";

const AppContent = () => {
  return (
    <CContainer lg>
      <React.Suspense fallback={<CSpinner color="primary" />}>
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component {...props} />
                    </>
                  )}
                />
              )
            );
          })}
          <Redirect from="/" to="/page1" />
        </Switch>
      </React.Suspense>
    </CContainer>
  );
};

export default AppContent;
