import { PlanetListActions } from "@reducers/planetsStateReducer";
import { ToastActions } from "@reducers/toastReducer";
import { StarshipActions } from "@reducers/starshipsReducer";
import { ComboSelectActions } from "@reducers/selectComboReducer";

interface ActionInterface {
  type: PlanetListActions | StarshipActions | ToastActions | ComboSelectActions;
  payload?: any;
}

type CasesInterface = {
  [key in PlanetListActions | ToastActions | StarshipActions]: <S>(
    state: S,
    action: ActionInterface
  ) => S;
};

const reducerFunction = <S,>(
  state: S,
  action: ActionInterface,
  cases: CasesInterface
): S => {
  const caseFn = cases[action.type];
  return caseFn ? caseFn(state, action) : state;
};

export default reducerFunction;
