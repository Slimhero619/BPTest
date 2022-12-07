import React from "react";
import CIcon from "@coreui/icons-react";
import { cilNotes, cilDescription, cilFile, cilShortText } from "@coreui/icons";
import { CNavItem, CNavTitle, CNavGroup } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Page 1",
    to: "/Page1",
    icon: <CIcon icon={cilShortText} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    component: CNavItem,
    name: "Page 2",
    to: "/Page2",
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    component: CNavTitle,
    name: "Example Title",
  },
  {
    component: CNavItem,
    name: "Page 3",
    to: "/Page3",
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    component: CNavTitle,
    name: "Second Title",
  },
  {
    component: CNavGroup,
    name: "Forms",
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Form 1",
        to: "/Form1",
      },
      {
        component: CNavItem,
        name: "Form 2",
        to: "/Form2",
      },
    ],
  },
];

export default _nav;
