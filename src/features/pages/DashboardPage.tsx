import { Box } from "@mui/material";
import PageHeader from "../components/PageHeader";
import { useTheme } from "../theme/ThemeProvider";
import OpenLayersMap from "../maps/components/OpenLayersMap";
import AttackForm from "../maps/components/AttackForm";

const DashboardPage = () => {
  const { colors } = useTheme();

  return (
    <Box m="20px">
      <PageHeader title="dashboard" subtitle="Welcome to the admin dashboard" />

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="75vh"
        gap="20px"
      >
        <Box
          gridColumn="span 9"
          sx={{ backgroundColor: colors.primary[400] }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <OpenLayersMap height="100%" />
        </Box>
        <Box
          gridColumn="span 3"
          sx={{ backgroundColor: colors.primary[400] }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <AttackForm />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
