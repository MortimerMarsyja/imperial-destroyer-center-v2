import { People } from "@myTypes/People";
import { Planet } from "@myTypes/Planet";

type PlanetListLoadedAction = {
  type: "PLANET_LIST_LOADED";
  payload: { planetList: Planet[]; count: number };
};

type PlanetListSortAction = {
  type: "PLANET_LIST_SORT";
  payload: { sort: "asc" | "desc"; sortBy: SortByType };
};

type PlanetListNextAction = {
  type: "PLANET_LIST_NEXT";
};

type PlanetListPreviousAction = {
  type: "PLANET_LIST_PREVIOUS";
};

type PlanetListReset = {
  type: "PLANET_LIST_RESET";
};

type PlanetActionType =
  | PlanetListLoadedAction
  | PlanetListSortAction
  | PlanetListNextAction
  | PlanetListPreviousAction
  | PlanetListReset;

export type SortByType = "" | "name" | "population" | "terrain";

interface PlanetState {
  planetList: Planet[];
  planetListInitial: Planet[];
  page: number;
  totalPages: number;
  sort: "asc" | "desc";
  sortBy: SortByType;
}

const PLANETS_PER_PAGE = 10;

export const initialState: PlanetState = {
  planetList: [],
  planetListInitial: [],
  page: 1,
  totalPages: 1,
  sort: "asc",
  sortBy: "",
};

function sortPlanets(
  planetList: Planet[],
  planetListInitial: Planet[],
  sort: "asc" | "desc",
  sortBy: SortByType
): Planet[] {
  if (sortBy === "") {
    return [...planetListInitial];
  }
  const sortedPlanetList = planetList.sort((a: Planet, b: Planet): number => {
    if (sort === "asc") {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    } else {
      if (a[sortBy] > b[sortBy]) {
        return -1;
      }
      if (a[sortBy] < b[sortBy]) {
        return 1;
      }
      return 0;
    }
  });
  return sortedPlanetList;
}

// const cases = {
//   PLANET_LIST_LOADED: (
//     state: PlanetState,
//     action: PlanetListLoadedAction
//   ): PlanetState => {
//     const { planetList, count } = action.payload;
//     const { sort, sortBy } = state;
//     const planetListInitial = [...planetList];
//     return {
//       ...state,
//       planetList: sortPlanets(planetList, planetListInitial, sort, sortBy),
//       planetListInitial,
//       totalPages: Math.ceil(count / PLANETS_PER_PAGE),
//     };
//   },
//   PLANET_LIST_SORT: (
//     state: PlanetState,
//     action: PlanetListSortAction
//   ): PlanetState => {
//     const { sort, sortBy } = action.payload;
//     return {
//       ...state,
//       sort,
//       sortBy,
//       planetList: sortPlanets(
//         state.planetList,
//         state.planetListInitial,
//         sort,
//         sortBy
//       ),
//     };
//   },
//   PLANET_LIST_NEXT: (state: PlanetState): PlanetState => {
//     return {
//       ...state,
//       page: state.page + 1,
//     };
//   },
//   PLANET_LIST_PREVIOUS: (state: PlanetState): PlanetState => {
//     return {
//       ...state,
//       page: state.page - 1,
//     };
//   },
//   PLANET_LIST_RESET: (): PlanetState => {
//     return initialState;
//   },
// };

const reducer = (state: PlanetState, action: PlanetActionType): PlanetState => {
  switch (action.type) {
    case "PLANET_LIST_LOADED":
      const { planetList, count } = action.payload;
      const { sort, sortBy } = state;
      const planetListInitial = [...planetList];
      return {
        ...state,
        planetList: sortPlanets(planetList, planetListInitial, sort, sortBy),
        planetListInitial,
        totalPages: Math.ceil(count / PLANETS_PER_PAGE),
      };
    case "PLANET_LIST_SORT":
      const { sort: sortAction, sortBy: sortByAction } = action.payload;
      return {
        ...state,
        sort: sortAction,
        sortBy: sortByAction,
        planetList: sortPlanets(
          state.planetList,
          state.planetListInitial,
          sortAction,
          sortByAction
        ),
      };
    case "PLANET_LIST_NEXT":
      return {
        ...state,
        page: state.page + 1,
      };
    case "PLANET_LIST_PREVIOUS":
      return {
        ...state,
        page: state.page - 1,
      };
    case "PLANET_LIST_RESET":
      return initialState;
    default:
      return state;
  }
};

export default reducer;
