import { Dispatch, FC, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "react-pro-sidebar";
import { Typography } from "@mui/material";
import { useTheme } from "../../theme/ThemeProvider";

type SideItemProps = {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const SideItem: FC<SideItemProps> = ({
  title,
  to,
  icon,
  selected,
  setSelected,
}) => {
  const { colors } = useTheme();

  return (
    <MenuItem
      component={<Link to={to} />}
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

export default SideItem;
