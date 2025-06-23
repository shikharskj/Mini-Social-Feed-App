import type { ReactNode, MouseEvent } from "react";
import type { ModalSize } from "../../../types";
import PortalComponent from "../PortalComponent";

type ModalProps = {
  isOpen: boolean;
  heading?: string;
  children: ReactNode;
  submitDisabled?: boolean;
  onSubmit?: () => void;
  footerContent?: ReactNode;
  whiteBackgroundLayover?: boolean;
  size?: ModalSize;
};

const sizeClassMap: Record<ModalSize, string> = {
  sm: "min-w-[300px]",
  md: "min-w-[500px]",
  lg: "min-w-[800px]",
};

export const Modal = ({
  isOpen,
  children,
  heading = "",
  submitDisabled,
  onSubmit,
  footerContent,
  whiteBackgroundLayover = false,
  size = 'md'
}: ModalProps) => {

  const sizeClass = sizeClassMap[size];

  const handleContainerClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent clicks inside modal from closing it
  };

  return isOpen ? (
    <PortalComponent whiteBackgroundLayover={whiteBackgroundLayover}>
      <div
        className={`${sizeClass} text-center p-2 pb-5 bg-gray-200 max-h-[90vh] rounded-3xl`}
        onClick={handleContainerClick}
      >
        <div className="px-12 pt-6 pb-12 h-auto flex flex-col items-center justify-center bg-white rounded-2xl">
          <div className="flex w-full justify-between">
            <div>{heading}</div>
          </div>
          <div className="flex f-col w-full">{children}</div>
          <div className="w-full">
            <button
              onClick={onSubmit}
              disabled={submitDisabled}
              className={`w-full h-[50px] ${
                submitDisabled
                  ? "bg-neutral-500"
                  : "bg-[#5057EA] hover:bg-[#5050ea]  cursor-pointer hover:shadow-md transition hover:translate-y-[-2px]"
              } text-white rounded-xl`}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="text-[14px] text-slate-500 mt-2">{footerContent}</div>
      </div>
    </PortalComponent>
  ) : null;
};

export default Modal;
