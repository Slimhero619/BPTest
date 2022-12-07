import React from "react";
import { CSidebar, CSidebarBrand, CSidebarNav } from "@coreui/react";
import { AppSidebarNav } from "../AppSidebarNav/AppSidebarNav";
import navigation from "../../_nav";

const AppSidebar = () => {
  return (
    <CSidebar position="fixed">
      <CSidebarBrand className="d-none d-md-flex" to="/">
        Boilerplate App
      </CSidebarBrand>
      <CSidebarNav>
        <AppSidebarNav items={navigation} />
      </CSidebarNav>
    </CSidebar>
  );
};

export default AppSidebar;
