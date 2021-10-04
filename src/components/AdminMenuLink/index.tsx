import React from "react";
import {
  AdminMenuLinkContainer,
  AdminMenuLinkWrap,
  AdminMenuIcon,
  AdminMenuText,
} from "./style.adminMenuLink";
import { useHistory } from "react-router";
import { LinkProps } from "react-router-dom";

interface AdminMenuLinkProps extends LinkProps {
  name: string;
  icon: React.ReactElement;
  subMenu?: boolean;
  fold?: boolean;
}

const AdminMenuLink: React.FC<AdminMenuLinkProps> = (props) => {
  const { to, name, icon, subMenu, fold } = props;
  const { location } = useHistory();

  return (
    <AdminMenuLinkContainer
      to={to}
      fold={fold}
      subMenu={subMenu}
      location={location.pathname}
    >
      <AdminMenuLinkWrap to={to}>
        <AdminMenuIcon>{icon}</AdminMenuIcon>
        <AdminMenuText>{name}</AdminMenuText>
      </AdminMenuLinkWrap>
    </AdminMenuLinkContainer>
  );
};

export default AdminMenuLink;
