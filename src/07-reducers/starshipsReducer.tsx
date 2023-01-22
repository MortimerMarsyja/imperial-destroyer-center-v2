import reducerFunction from "@utils/reducerFunction";

export type StarshipActions = "UPDATE_STARSHIP_LIST" | "FILTER_STARSHIP_LIST";

export interface ActionInterface<Starship> {
  type: StarshipActions;
  payload?: PayloadInterface<Starship>;
}

interface PayloadInterface<Starship> {
  starshipList: Starship[];
  filterBy?: string;
  filter?: string;
}

const cases = {
  UPDATE_STARSHIP_LIST: <Starship,>(
    state: Starship[],
    action: ActionInterface<Starship>
  ) => {
    return action.payload;
  },
  FILTER_STARSHIP_LIST: <Starship,>(
    state: Starship[],
    action: ActionInterface<Starship>
  ) => {
    action.payload?.starshipList.filter((starship: Starship) => {
      const { payload } = action;
      if (!payload?.filterBy || !payload?.filter) return starship;
      if (payload && payload.filterBy && payload.filter) {
        return starship[payload.filterBy] === payload.filter;
      }
    });
  },
};

export const starshipStateReducer = <Starship,>(
  state: Starship[],
  action: ActionInterface<Starship>
): Starship[] => {
  return reducerFunction(state, action, cases);
};
