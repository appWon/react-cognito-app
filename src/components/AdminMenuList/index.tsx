import React, { ButtonHTMLAttributes } from "react";
import { AdminMenuListContainer } from "./style.adminMenu";
import {
  ListItem,
  ListItemIcon,
  Collapse,
  List,
  ListItemText,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

interface AdminMenuListProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement;
  name: string;
  open: boolean;
  handleToggle: () => void;
}

const AdminMenuList: React.FC<AdminMenuListProps> = (props) => {
  const { name, icon, open, children, handleToggle } = props;

  return (
    <AdminMenuListContainer>
      <ListItem button onClick={handleToggle}>
        <ListItemIcon>{open ? <ExpandMore /> : icon}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </AdminMenuListContainer>
  );
};

export default AdminMenuList;
