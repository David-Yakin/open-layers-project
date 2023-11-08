import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ROUTES from "../router/models/routes";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import { useTheme } from "@emotion/react";

const ErrorPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Container sx={{ height: "100%" }}>
      <Typography variant="h2" component="h1">
        Error 404
      </Typography>
      <Typography variant="h5" component="h2">
        Page not found
      </Typography>
      <Divider sx={{ my: 2 }} />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5">
            Oops... The requested URL was not found on this server
          </Typography>
          <Button
            variant="text"
            color="error"
            onClick={() => navigate(ROUTES.ROOT)}
          >
            Click here to return to the home page...
          </Button>
        </Grid>
        <Grid item xs={12} md={4} justifyContent="center">
          <img
            width="100%"
            src={
              theme.palette.mode === "dark"
                ? "/images/broken-robot-wight.png"
                : "/images/broken-robot.png"
            }
            alt="broken robot"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ErrorPage;
