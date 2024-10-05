import "@/style.css";

import RenderPopup from "@/popup/render-popup";
import ReduxProvider from "@/redux/redux-provider";

function IndexPopup() {
  return (
    <ReduxProvider>
      <RenderPopup />
    </ReduxProvider>
  );
}

export default IndexPopup;
