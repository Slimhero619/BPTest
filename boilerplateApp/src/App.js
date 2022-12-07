import * as React from "react";
import { sp } from "@pnp/sp";
import { Web } from "@pnp/sp/webs";
import { Route, Switch, MemoryRouter } from "react-router-dom";
import "@coreui/coreui/dist/css/coreui.min.css";

export function App() {
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  );

  const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

  if (window.location.origin === "http://localhost:9000") {
    let web = Web("http://localhost:8081/sites/covid19rollup");
    sp.setup({
      sp: {
        headers: {
          Accept: "application/json; odata=verbose",
        },
        baseUrl: "http://localhost:8081/sites/covid19rollup", // change to site using as rest proxy
      },
    });
  } else {
    let baseURLS = window.location.href.split("/SiteAssets/")[0];
    let web = Web(baseURLS);
    sp.setup({
      sp: {
        headers: {
          Accept: "application/json; odata=verbose",
        },
        baseUrl: baseURLS,
      },
    });
  }

  return (
    <MemoryRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            path="/"
            name="Home"
            render={(props) => <DefaultLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </MemoryRouter>
  );
}
