import React from "react";
import {
  AdminMenuLinkContainer,
  AdminMenuLinkWrap,
  AdminMenuIcon,
  AdminMenuText,
} from "./style.adminMenuLink";
import { LinkProps } from "react-router-dom";

interface AdminMenuLinkProps extends LinkProps {
  name: string;
  icon: React.ReactElement;
  subMenu?: boolean;
  fold?: boolean;
}

const AdminMenuLink: React.FC<AdminMenuLinkProps> = (props) => {
  const { to, name, icon, subMenu, fold } = props;

  return (
    <AdminMenuLinkContainer subMenu={subMenu} fold={fold}>
      <AdminMenuLinkWrap to={to}>
        <AdminMenuIcon>{icon}</AdminMenuIcon>
        <AdminMenuText>{name}</AdminMenuText>
      </AdminMenuLinkWrap>
    </AdminMenuLinkContainer>
  );
};

export default AdminMenuLink;
