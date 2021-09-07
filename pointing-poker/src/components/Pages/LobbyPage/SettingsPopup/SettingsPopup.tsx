import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import showSettingsState from "../../../../redux/store/selectors/settings.selector";

const SettingsPopup = (): any => {
  const select = useSelector(showSettingsState);
  console.log(select);
  return select ? <div>Settings</div> : null;
};

export default SettingsPopup;
