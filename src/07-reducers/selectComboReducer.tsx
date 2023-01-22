import reducerFunction from "@utils/reducerFunction";

export type ComboSelectActions = keyof typeof cases;

interface Option {
  name: string;
  value: string;
}

interface OutputInterface {
  selectedValue: Option;
  order: "asc" | "desc";
}

interface InputInterface {
  selectedValue?: Option;
  order?: "asc" | "desc";
}

export interface ActionInterface {
  type: ComboSelectActions;
  payload: InputInterface;
}

const cases = {
  UPDATE_SELECT_VALUE: (state: OutputInterface, action: ActionInterface) => {
    const { selectedValue } = action.payload;
    if (!selectedValue) return state;
    return {
      ...state,
      selectedValue: selectedValue,
    };
  },
  UPDATE_ORDER: (state: OutputInterface, action: ActionInterface) => {
    const { order } = action.payload;
    return {
      ...state,
      order: order,
    };
  },
};

export const comboSelectReducer = (
  state: OutputInterface,
  action: ActionInterface
): OutputInterface => {
  return reducerFunction(state, action, cases);
};
