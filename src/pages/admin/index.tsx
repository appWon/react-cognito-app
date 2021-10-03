import React from "react";
import { RouteComponentProps } from "react-router-dom";

import AdminMenu from "../../components/AdminMenu";
import AdminNav from "../../components/AdminNav";

const Admin: React.FC<RouteComponentProps> = (props) => {
  return (
    <>
      <AdminNav />
      <AdminMenu />
    </>
  );
};

export default Admin;
