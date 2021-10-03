export interface AdminState {
  menuFold: boolean;
}

export interface UpdateMenuToogle {
  type: "UPDATE_MENU_TOOGLE";
}

export type AdminAction = UpdateMenuToogle;
