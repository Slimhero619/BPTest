import React from "react";
import { CCol, CContainer, CRow } from "@coreui/react";

const Page1 = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <span className="clearfix">
              <p className="text-medium-emphasis float-start">Page1</p>
            </span>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Page1;
