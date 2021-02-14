import { useReducer } from "react";

const initialState = {
  showMenu: false
};

const actions = {};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SHOW_MENU:
      return {
        ...state,
        showMultipleCart: !state.showMenu
      };

    default:
      throw new Error("SiiBus reducer error - action not supported.");
  }
};

export const useSiiBus = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClick = event => {
    event.preventDefault();
    console.log("click");
    dispatch({ type: actions.SHOW_MENU, payload: event });
  };

  return {
    ...state,
    onClick
  };
};

export default useSiiBus;
