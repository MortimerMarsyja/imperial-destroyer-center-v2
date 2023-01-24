interface ActionInterface {
  type: string;
  payload?: any;
}

type CasesInterface = {
  [key: string]: <S>(state: S, action: ActionInterface) => S;
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
