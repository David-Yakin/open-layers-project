import { Box } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import OpenLayersMap from "../components/OpenLayersMap";

const MapPage = () => {
  return (
    <Box p="20px">
      <PageHeader title="Map Page" subtitle="This is the main map page" />

      <OpenLayersMap />
    </Box>
  );
};

export default MapPage;
