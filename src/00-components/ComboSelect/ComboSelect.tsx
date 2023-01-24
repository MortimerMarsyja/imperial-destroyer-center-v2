import Asc from "@assets/icons/Asc";
import Desc from "@assets/icons/Desc";
import { useThemeContext } from "@contexts/themeContext";
import { comboSelectReducer } from "@reducers/selectComboReducer";
import { FC, useEffect } from "react";
import { useReducer } from "react";
import StyledComboSelect from "./ComboSelect.styled";

interface Option {
  name: string;
  value: string;
}

interface Props {
  options: Option[];
  inOrder: "asc" | "desc";
  getComboValue: (incoming: any) => any;
}

const ComboSelect: FC<Props> = ({ options, inOrder, getComboValue }) => {
  const { theme } = useThemeContext();
  const initialState = {
    selectedValue: { name: "-", value: "" },
    order: inOrder,
  };
  const [state, dispatch] = useReducer(comboSelectReducer, initialState);
  const { order } = state;

  const handleUpdateOrder = () => {
    dispatch({
      type: "UPDATE_ORDER",
      payload: {
        order: order === "asc" ? "desc" : "asc",
      },
    });
  };
  useEffect(() => {
    getComboValue(state);
  }, [state]);
  return (
    <StyledComboSelect theme={theme}>
      <button onClick={handleUpdateOrder}>
        {order === "asc" ? <Asc size={18} /> : <Desc size={18} />}
      </button>
      <select
        onChange={(e) => {
          dispatch({
            type: "UPDATE_SELECT_VALUE",
            payload: {
              selectedValue: options.find(
                (option) => option.value === e.target.value
              ),
            },
          });
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </StyledComboSelect>
  );
};

export default ComboSelect;
