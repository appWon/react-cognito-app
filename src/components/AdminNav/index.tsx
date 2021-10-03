import React from "react";
import {
  AdminNavContainer,
  AdminNavWrap,
  AdminNavIcon,
} from "./style.adminNav";
import { useDispatch } from "react-redux";
import { Menu } from "@material-ui/icons";

import { updateMenuToogle } from "../../store/admin";

const AdminNav: React.FC = () => {
  const dispatch = useDispatch();

  const handleMenuToggle = () => {
    dispatch(updateMenuToogle());
  };

  return (
    <AdminNavContainer>
      <AdminNavWrap>
        <AdminNavIcon onClick={handleMenuToggle}>
          <Menu />
        </AdminNavIcon>
      </AdminNavWrap>
    </AdminNavContainer>
  );
};

export default AdminNav;
