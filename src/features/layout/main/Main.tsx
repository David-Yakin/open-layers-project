import { Box } from "@mui/material";
import { FC } from "react";

type MainProps = { children: JSX.Element | JSX.Element[] };

const Main: FC<MainProps> = ({ children }) => {
  return <Box sx={{ flexGrow: 1 }}>{children}</Box>;
};

export default Main;
