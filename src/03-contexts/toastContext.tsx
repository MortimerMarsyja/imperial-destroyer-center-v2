import { createContext, useContext } from "react";
import { useReducer } from "react";
// reducers
import { toastReducer, toastInit, ShowActions } from "@reducers/toastReducer";
// components
import Toast from "@components/Toast";
import { TypeOfToasts } from "@myTypes/ToastTypes";
// types
interface ProviderProps {
  children: React.ReactNode;
}

type ModalContextType = {
  showToast: (content: React.ReactNode, type: TypeOfToasts) => void;
  hideToast: () => void;
};

export const ToastContentContext = createContext<ModalContextType>({
  showToast: () => {},
  hideToast: () => {},
});

export const ToastContentProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(toastReducer, toastInit);
  const { show, toastType, content } = state;
  const showToast = (content: React.ReactNode, type: TypeOfToasts) => {
    const toastContent = {
      type: `${type}_toast`,
      payload: {
        content,
        toastType: type,
        show: true,
      },
    } satisfies ShowActions;

    dispatch(toastContent);
  };

  const hideToast = () => {
    dispatch({
      type: "none_toast",
      payload: {
        toastType: "none",
        show: false,
        content: null,
      },
    });
  };

  return (
    <ToastContentContext.Provider value={{ hideToast, showToast }}>
      {children}
      <Toast
        show={show}
        toastType={toastType}
        hideToast={hideToast}
        children={content}
        toastTimeOut={2500}
      />
    </ToastContentContext.Provider>
  );
};

export const useToastContext = () => useContext(ToastContentContext);
