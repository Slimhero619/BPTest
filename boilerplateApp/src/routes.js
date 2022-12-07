import * as React from "react";

const Page1 = React.lazy(() => import("./views/pages/page1/Page1"));
const Page2 = React.lazy(() => import("./views/pages/page2/Page2"));
const Page3 = React.lazy(() => import("./views/pages/page3/Page3"));
const Form1 = React.lazy(() => import("./views/forms/form1/Form1"));
const Form2 = React.lazy(() => import("./views/forms/form2/Form2"));

const routes = [
  { path: "/Page1", name: "Page1", component: Page1, exact: true },
  { path: "/Page2", name: "Page2", component: Page2, exact: true },
  { path: "/Page3", name: "Page3", component: Page3, exact: true },
  { path: "/Form1", name: "Form1", component: Form1, exact: true },
  { path: "/Form2", name: "Form2", component: Form2, exact: true },
];

export default routes;
