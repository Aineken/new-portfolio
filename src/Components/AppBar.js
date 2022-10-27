import { AppBar, Box, Typography, Toolbar, Link, Button } from "@mui/material";
import { Stack, styled } from "@mui/system";
import React from "react";
import logo from "../utils/andrzul_logo.svg";

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
  fontSize: "22px",
  margin: 0,
  height: "auto",
});

function Appbar() {
  return (
    <Box>
      <AppBar>
        <Toolbar
          sx={{ flexWrap: "wrap", gap: "30px", maxHeight: "300px" }}
          gap={3}
          variant="regular"
        >
          <Stack
            sx={{ flexGrow: 1 }}
            direction="row"
            justify="center"
            p={2}
            alignItems="center"
          >
            <Link href="/" styl>
              <img
                style={{ height: "60px", top: "4px", position: "relative" }}
                src={logo}
                alt=""
              />
            </Link>

            <Typography
              fontWeight="regular "
              pl={3}
              variant="h5"
              color="inherit"
              noWrap
            >
              Ayan Zhambekov
            </Typography>
          </Stack>

          <StyledLink href="#">Home</StyledLink>
          <StyledLink href="#">About</StyledLink>
          <StyledLink href="#">Skills</StyledLink>
          <StyledLink href="#">Services</StyledLink>
          <StyledLink href="#hello">Contact</StyledLink>

          <Button href="#" color="inherit" variant="outlined">
            <Typography variant="h6" fontWeight="bold">
              Sign Up!
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Appbar;
