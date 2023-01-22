import reducerFunction from "@utils/reducerFunction";

export type PlanetListActions = keyof typeof cases;

interface OutputInterface<Planet> {
  planetList: Planet[];
  page: number;
  link: string;
  totalPages: number;
}
interface InputInterface<Planet> {
  planetList?: Planet[];
  page?: number;
  count?: number;
  sort?: "asc" | "desc";
  filterBy?: string;
}

export interface ActionInterface<Planet> {
  type: PlanetListActions;
  payload?: InputInterface<Planet>;
}

const cases = {
  UPDATE_PLANET_LIST: <Planet,>(
    state: OutputInterface<Planet>,
    action: ActionInterface<Planet>
  ) => {
    return {
      ...state,
      planetList: action.payload?.planetList,
    };
  },
  NEXT_PAGE: <Planet,>(
    state: OutputInterface<Planet>,
    action: ActionInterface<Planet>
  ) => {
    if (state.totalPages && state.page === state.totalPages) return state;
    return {
      ...state,
      page: state.page + 1,
      link: `planets?page=${state.page + 1}`,
    };
  },
  PREV_PAGE: <Planet,>(
    state: OutputInterface<Planet>,
    action: ActionInterface<Planet>
  ) => {
    if (state.page === 1) {
      return {
        ...state,
      };
    }
    return {
      ...state,
      page: state.page - 1,
      link: state.page === 1 ? "planets" : `planets?page=${state.page - 1}`,
    };
  },
  SET_TOTAL_PAGES: <Planet,>(
    state: OutputInterface<Planet>,
    action: ActionInterface<Planet>
  ) => {
    if (!action.payload?.count) return state;
    return {
      ...state,
      totalPages: Math.ceil(action.payload?.count / 10),
    };
  },
  FILTER_PLANET_LIST_BY: <Planet,>(
    state: OutputInterface<Planet>,
    action: ActionInterface<Planet>
  ) => {
    const { payload } = action;
    if (!payload) return state;
    const { sort, filterBy, planetList } = payload;
    console.log("show me data", { sort, filterBy, planetList });
    if (!planetList || !filterBy || !sort) return state;
    const sortedPlanetList = planetList.sort((a: Planet, b: Planet) => {
      if (sort === "asc") {
        if (a[filterBy] < b[filterBy]) {
          return -1;
        }
        if (a[filterBy] > b[filterBy]) {
          return 1;
        }
        return 0;
      }
      if (sort === "desc") {
        if (a[filterBy] > b[filterBy]) {
          return -1;
        }
        if (a[filterBy] < b[filterBy]) {
          return 1;
        }
        return 0;
      }
    });
    return {
      ...state,
      planetList: sortedPlanetList,
    };
  },
};

export const planetStateReducer = <Planet,>(
  state: OutputInterface<Planet>,
  action: ActionInterface<Planet>
): OutputInterface<Planet> => {
  return reducerFunction(state, action, cases);
};
