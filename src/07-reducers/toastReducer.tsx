import type { TypeOfToasts } from "@myTypes/ToastTypes";

export const toastInit = {
  toastType: "hide",
  show: false,
  content: null,
} satisfies State;
interface State {
  show: boolean;
  toastType: TypeOfToasts;
  content: React.ReactNode | null;
}

interface SuccessAction {
  type: "success_toast";
  payload: {
    content: React.ReactNode;
    toastType: "success";
    show: boolean;
  };
}

interface ErrorAction {
  type: "error_toast";
  payload: {
    content: React.ReactNode;
    toastType: "error";
    show: boolean;
  };
}

type WarningAction = {
  type: "warning_toast";
  payload: {
    content: React.ReactNode;
    toastType: "warning";
    show: boolean;
  };
};

type NotificationAction = {
  type: "notification_toast";
  payload: {
    content: React.ReactNode;
    toastType: "notification";
    show: boolean;
  };
};

type HideAction = {
  type: "hide_toast";
  payload: typeof toastInit;
};

export type ShowActions =
  | SuccessAction
  | ErrorAction
  | WarningAction
  | NotificationAction;

export type ToastActions =
  | SuccessAction
  | ErrorAction
  | WarningAction
  | NotificationAction
  | HideAction;

export const toastReducer = (state: State, action: ToastActions) => {
  switch (action.type) {
    case "success_toast":
      return { ...state, ...action.payload };
    case "error_toast":
      return { ...state, ...action.payload };
    case "warning_toast":
      return { ...state, ...action.payload };
    case "notification_toast":
      return { ...state, ...action.payload };
    case "hide_toast":
      return toastInit;
    default:
      return state;
  }
};
