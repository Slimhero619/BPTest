import React from "react";
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CNavItem,
  CNavLink,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilBell } from "@coreui/icons";

const AppHeader = () => {
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderBrand className="mx-auto d-md-none" to="/"></CHeaderBrand>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
