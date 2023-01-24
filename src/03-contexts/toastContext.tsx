import Toast from "@components/Toast";
import { toastReducer, toastInit, ToastType } from "@reducers/toastReducer";
import { createContext, useContext } from "react";
import { useReducer } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

type ModalContextType = {
  showToast: (content: React.ReactNode, type: ToastType) => void;
  hideToast: () => void;
};

export const ToastContentContext = createContext<ModalContextType>({
  showToast: () => {},
  hideToast: () => {},
});

export const ToastContentProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(toastReducer, toastInit);
  const showToast = (content: React.ReactNode, type: ToastType) => {
    dispatch({
      type: `${type}_toast`,
      payload: {
        content,
        toastType: type,
        show: true,
      },
    });
  };

  const hideToast = () => {
    dispatch({ type: "none_toast" });
  };

  return (
    <ToastContentContext.Provider value={{ hideToast, showToast }}>
      {children}
      <Toast
        show={state?.show}
        toastType={state?.toastType}
        hideToast={hideToast}
        children={state?.content}
        toastTimeOut={2500}
      />
    </ToastContentContext.Provider>
  );
};

export const useToastContext = () => useContext(ToastContentContext);
