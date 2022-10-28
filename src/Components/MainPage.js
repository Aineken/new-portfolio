import {
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material/";
import { red } from "@mui/material/colors";

const ProductHero = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  alignItems: "center",
  backgroundColor: red[400],
  height: "100vh",
  [theme.breakpoints.up("sm")]: {
    height: "80vh",
    minHeight: 500,
    maxHeight: 1300,
  },
}));

function MainPage() {
  return (
    <ProductHero>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={1}>
            <Stack direction="column" gap={3}>
              <IconButton
                aria-label="GitHub"
                sx={{ height: 50, width: 50 }}
                component="label"
              >
                <GitHub />
              </IconButton>
              <IconButton sx={{ height: 50, width: 50 }} component="label">
                <Twitter />
              </IconButton>
              <IconButton sx={{ height: 50, width: 50 }} component="label">
                <LinkedIn />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item xs={7}>
            <Box sx={{ p: "20px" }}>
              <Typography justify="center" aligh="center" variant="h2">
                Hi, i am web developer!
              </Typography>
            </Box>
          </Grid>{" "}
          <Grid item xs={4}>
            <Typography>Hello</Typography>
          </Grid>
        </Grid>
      </Container>
    </ProductHero>
  );
}

export default MainPage;
