import { type ReactElement } from "react";
import ReactDOM from "react-dom";

const PortalComponent = ({
  children,
  whiteBackgroundLayover = false,
}: {
  children: ReactElement;
  whiteBackgroundLayover: boolean;
}) => {
  return ReactDOM.createPortal(
    <div
      className={`fixed  z-50 flex items-center justify-center ${
        whiteBackgroundLayover
          ? "bg-white top-12 left-0 right-0 bottom-0"
          : "bg-black/40 inset-0"
      }`}
    >
      {children}
    </div>,
    document.getElementById("modal-root") as HTMLElement // Target container outside the root element
  );
};

export default PortalComponent;
