import Layout from "./features/layout/Layout";
import { Box } from "@mui/material";
import Router from "./features/router/Router";
const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Layout>
        <Router />
      </Layout>
    </Box>
  );
};

export default App;
