import React, { memo } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useTheme } from "../theme/ThemeProvider";

type PageHeaderProps = { title: string; subtitle: string };

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  const { colors } = useTheme();

  return (
    <Box mb="12px">
      <Typography variant="h2" component="h1" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="h5" component="h2" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default memo(PageHeader);
