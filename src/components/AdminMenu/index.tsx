import React from "react";
import { AdminMenuWrap } from "./style.adminMenu";
import { useSelector } from "react-redux";
import { adminSelector } from "../../store/selector";
import { StarBorder, Dashboard } from "@material-ui/icons";

import AdminMenuLink from "../AdminMenuLink";
import AdminToggleMenu from "../AdminToggleMenu";

type MenuName = "contents";

const AdminMenu: React.FC = (props) => {
  const [open, setOpen] = React.useState({
    contents: true,
  });
  const { menuFold } = useSelector(adminSelector);

  const handleClick = (menu: MenuName) => {
    setOpen({ ...open, [menu]: !open[menu] });
  };

  return (
    <AdminMenuWrap fold={menuFold}>
      <AdminMenuLink to="/admin" name="홈" icon={<Dashboard />} />
      <AdminToggleMenu
        name="test"
        icon={<Dashboard />}
        open={open.contents}
        handleToggle={() => handleClick("contents")}
      >
        <AdminMenuLink
          subMenu
          to="/test1"
          name="서브메뉴1"
          fold={menuFold}
          icon={<StarBorder />}
        />
        <AdminMenuLink
          subMenu
          to="/test2"
          name="서브메뉴2"
          fold={menuFold}
          icon={<StarBorder />}
        />
      </AdminToggleMenu>
    </AdminMenuWrap>
  );
};

export default AdminMenu;
