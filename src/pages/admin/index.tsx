import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { AdminMainContainer, AdminContentWrap } from "./style.admin";

import AdminMenu from "../../components/AdminMenu";
import AdminNav from "../../components/AdminNav";
import AdminMainContent from "../../components/AdminMain";

const AdminMain: React.FC<RouteComponentProps> = (props) => {
  return (
    <AdminMainContainer>
      <AdminNav />
      <AdminContentWrap>
        <AdminMenu />
        <AdminMainContent />
      </AdminContentWrap>
    </AdminMainContainer>
  );
};

export default AdminMain;
