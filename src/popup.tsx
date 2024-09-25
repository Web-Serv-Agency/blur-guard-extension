import "@/style.css";

import DefaultPopup from "@/popup/default-popup";
import ReduxProvider from "@/redux/redux-provider";

function IndexPopup() {
  return (
    <ReduxProvider>
      <DefaultPopup />
    </ReduxProvider>
  );
}

export default IndexPopup;
