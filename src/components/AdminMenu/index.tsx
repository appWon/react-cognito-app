import React from "react";
import { Menu } from "./style.adminMenu";
import { ThemeProvider } from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme as strictModeTheme } from "@material-ui/core/styles";

import AdminMenuLink from "../AdminMenuLink";
import AdminMenuList from "..//AdminMenuList";

import { StarBorder, Dashboard } from "@material-ui/icons";
import { ListItemIcon, ListItemText, ListItem } from "@material-ui/core";

const theme = strictModeTheme();

type MenuName = "contents";

const AdminMenu: React.FC = () => {
  const [open, setOpen] = React.useState({
    contents: true,
  });

  const handleClick = (menu: MenuName) => {
    setOpen({ ...open, [menu]: !open[menu] });
  };

  return (
    <ThemeProvider theme={theme}>
      <Menu component="aside">
        <AdminMenuLink to="/admin" name="홈" icon={<Dashboard />} />
        <AdminMenuList
          name="test"
          icon={<Dashboard />}
          open={open.contents}
          handleToggle={() => handleClick("contents")}
        >
          <AdminMenuLink
            subMenu
            to="/admin"
            name="서브메뉴1"
            icon={<StarBorder />}
          />
          <AdminMenuLink
            subMenu
            to="/admin"
            name="서브메뉴2"
            icon={<StarBorder />}
          />
        </AdminMenuList>
      </Menu>
    </ThemeProvider>
  );
};

export default AdminMenu;
