import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

type ToastType = {
  type: string;
  message: string;
};

export function Notification({ type, message}: ToastType) {

  injectStyle();
  switch (type) {
    case "success":
      toast.success(`${message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    case "error":
      toast.error(`${message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    case "warn":
      toast.warn(`${message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    case "info":
      toast.info(`${message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    default:
      toast.info(`${message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
  }
}

export function Toast() {
  return <ToastContainer />;
}
