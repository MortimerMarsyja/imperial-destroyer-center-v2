import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

interface Props {
  show: boolean;
  hideToast: () => void;
  children: React.ReactNode;
  toastTimeOut?: number;
  toastType?: "success" | "error" | "warning" | "info" | null;
}

const Toast = ({
  show,
  hideToast,
  children,
  toastTimeOut,
  toastType,
}: Props) => {
  const [node] = useState(document.createElement("div"));

  const removeNode = () => {
    if (document.querySelector("#toast")?.children.length) {
      document.querySelector("#toast")?.childNodes[0].remove();
    }
  };

  const handleToastType = () => {
    switch (toastType) {
      case "success":
        return "green";
      case "error":
        return "red";
      case "warning":
        return "yellow";
      case "info":
        return "blue";
      default:
        return "green";
    }
  };

  useEffect(() => {
    if (show) {
      document
        .querySelector("#toast")
        ?.appendChild(node)
        .classList.add("show", handleToastType());
      setTimeout(() => {
        removeNode();
        hideToast();
      }, toastTimeOut || 3000);
    } else {
      removeNode();
    }

    return () => removeNode();
  }, [node, children, show]);

  return ReactDOM.createPortal(children, node);
};

export default Toast;
