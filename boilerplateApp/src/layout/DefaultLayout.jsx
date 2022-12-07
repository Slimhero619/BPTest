import * as React from "react";
import AppSidebar from "../components/AppSidebar/AppSidebar";
import AppContent from "../components/AppContent/AppContent";
import AppHeader from "../components/AppHeader/AppHeader";

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
