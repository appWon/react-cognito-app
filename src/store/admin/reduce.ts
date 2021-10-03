import { AdminState, AdminAction } from "./types";

const initalAdminState: AdminState = {
  menuFold: false,
};

export const adminReducer = (
  state: AdminState = initalAdminState,
  action: AdminAction
) => {
  switch (action.type) {
    case "UPDATE_MENU_TOOGLE":
      return {
        ...state,
        menuFold: !state.menuFold,
      };

    default:
      return state;
  }
};
