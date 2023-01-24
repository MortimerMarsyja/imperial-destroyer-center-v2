export type ToastType =
  | "success"
  | "error"
  | "warning"
  | "notification"
  | "none";

interface State {
  show: boolean;
  type: ToastType;
  content: React.ReactNode | null;
}

type SuccessAction = {
  type: "success_toast";
  payload: {
    content: React.ReactNode;
    toastType: "success";
    show: boolean;
  };
};

type ErrorAction = {
  type: "error_toast";
  payload: {
    content: React.ReactNode;
    toastType: "error";
    show: boolean;
  };
};

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
  type: "none_toast";
};

type ActionInterface =
  | SuccessAction
  | ErrorAction
  | WarningAction
  | NotificationAction
  | HideAction;

export const toastInit = {
  type: "none",
  show: false,
  content: null,
} satisfies State;

const cases = {
  success_toast: (state: State, action: SuccessAction) => {
    const { payload } = action;
    return { ...state, ...payload };
  },
  notification_toast: (state: State, action: NotificationAction) => {
    const { payload } = action;
    return { ...state, ...payload };
  },
  warning_toast: (state: State, action: WarningAction) => {
    const { payload } = action;
    return { ...state, ...payload };
  },
  error_toast: (state: State, action: ErrorAction): State => {
    const { payload } = action;
    return { ...state, ...payload };
  },
  notification_tost: (state: State, action: NotificationAction): State => {
    const { payload } = action;
    return { ...state, ...payload };
  },
  none_toast: (): State => {
    {
      return toastInit;
    }
  },
};

export const toastReducer = (state: State, action: ActionInterface): State => {
  const { type } = action;
  return cases[type] ? cases[type](state, action) : state;
};
