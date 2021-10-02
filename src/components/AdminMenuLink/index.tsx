import React from "react";
import { Link } from "react-router-dom";
import { AdminMenuLinkContainer } from "./style.adminMenuLink";
import { LinkProps } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

interface AdminMenuLinkProps extends LinkProps {
  name: string;
  icon: React.ReactElement;
  subMenu?: boolean;
}

const AdminMenuLink: React.FC<AdminMenuLinkProps> = (props) => {
  const { to, name, icon, subMenu } = props;

  return (
    <AdminMenuLinkContainer subMenu={subMenu}>
      <ListItem button component={Link} to={to}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{name}</ListItemText>
      </ListItem>
    </AdminMenuLinkContainer>
  );
};

export default AdminMenuLink;
