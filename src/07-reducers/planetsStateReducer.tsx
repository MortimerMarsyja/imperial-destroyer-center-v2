import reducerFunction from "@utils/reducerFunction";

export type PlanetListActions = keyof typeof cases;

interface People {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  url: string;
  created: string;
  edited: string;
}
interface Planet {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: People[];
  url: string;
  created: string;
  edited: string;
}

interface OutputInterface {
  planetList: Planet[];
  page: number;
  link: string;
  totalPages: number;
}
interface InputInterface {
  planetList?: Planet[];
  page?: number;
  count?: number;
  sort?: "asc" | "desc";
  filterBy?: string;
}

export interface ActionInterface {
  type: PlanetListActions;
  payload?: InputInterface;
}

const cases = {
  UPDATE_PLANET_LIST: (state: OutputInterface, action: ActionInterface) => {
    return {
      ...state,
      planetList: action.payload?.planetList,
    };
  },
  NEXT_PAGE: (state: OutputInterface, action: ActionInterface) => {
    if (state.totalPages && state.page === state.totalPages) return state;
    return {
      ...state,
      page: state.page + 1,
      link: `planets?page=${state.page + 1}`,
    };
  },
  PREV_PAGE: (state: OutputInterface, action: ActionInterface) => {
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
  SET_TOTAL_PAGES: (state: OutputInterface, action: ActionInterface) => {
    if (!action.payload?.count) return state;
    return {
      ...state,
      totalPages: Math.ceil(action.payload?.count / 10),
    };
  },
  FILTER_PLANET_LIST_BY: (state: OutputInterface, action: ActionInterface) => {
    const { payload } = action;
    if (!payload) return state;
    const { sort, filterBy, planetList } = payload;
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

export const planetStateReducer = (
  state: OutputInterface,
  action: ActionInterface
): OutputInterface => {
  return reducerFunction<OutputInterface>(state, action, cases);
};
