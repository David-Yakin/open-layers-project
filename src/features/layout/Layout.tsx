import { FC } from "react";
import Topbar from "./topbar/TopBar";
import Sidebar from "./sidebar/SideBar";
import Main from "./main/Main";
import { Box } from "@mui/material";

type LayoutProps = { children: JSX.Element[] | JSX.Element };

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Box className="main">
        <Topbar />
        <Main>{children}</Main>
      </Box>
    </>
  );
};

export default Layout;
