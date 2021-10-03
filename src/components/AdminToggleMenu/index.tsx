import React, { ButtonHTMLAttributes } from "react";
import {
  AdminToggleMenuContainer,
  AdminToggleMenuItem,
  AdminToggleMenuIcon,
  AdminToggleMenuText,
  AdminToggleMenuList,
} from "./style.adminMenu";

import { ExpandMore } from "@material-ui/icons";

interface AdminMenuListProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement;
  name: string;
  open: boolean;
  handleToggle: () => void;
}

const AdminToggleMenu: React.FC<AdminMenuListProps> = (props) => {
  const { name, icon, open, children, handleToggle } = props;

  return (
    <AdminToggleMenuContainer>
      <AdminToggleMenuItem onClick={handleToggle}>
        <AdminToggleMenuIcon>
          {open ? <ExpandMore width="30" height="30" /> : icon}
        </AdminToggleMenuIcon>
        <AdminToggleMenuText>{name}</AdminToggleMenuText>
      </AdminToggleMenuItem>
      <AdminToggleMenuList open={open ? 1 : 0}>{children}</AdminToggleMenuList>
    </AdminToggleMenuContainer>
  );
};

export default AdminToggleMenu;
