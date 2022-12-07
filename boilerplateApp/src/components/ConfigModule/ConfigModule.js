import * as React from "react";
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/webs";
import "@pnp/sp/files";

export const useConfigModule = () => {
  const [isInSetup, setIsInSetup] = React.useState(false);
  const isInSetusChk = async () => {
    try {
      const field = await sp.web.fields.getByTitle("Nothing").get();
      setIsInSetup(false);
    } catch (e) {
      setIsInSetup(true);
    }
  };
  return { isInSetusChk, isInSetup, setIsInSetup };
};
