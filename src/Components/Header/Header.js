import {
  Toolbar,
  Typography,
  AppBar,
  Button,
  Link,
  Stack,
} from "@mui/material";
import { StyledLink } from "./HeaderStyled";

import logo from "../../utils/andrzul_logo.svg";

function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{ flexWrap: "wrap", gap: "30px", maxHeight: "300px" }}
        variant="regular"
      >
        <Stack
          sx={{ flexGrow: 1 }}
          direction="row"
          justify="center"
          p={2}
          alignItems="center"
        >
          <Link href="/">
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

        <StyledLink href="#">Projects</StyledLink>
        <StyledLink href="#">Technologies</StyledLink>
        <StyledLink href="#">About</StyledLink>

        <Button href="#" color="inherit" variant="outlined">
          <Typography variant="h6" fontWeight="bold">
            Sign Up!
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
