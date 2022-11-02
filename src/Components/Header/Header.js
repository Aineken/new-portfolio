import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyled";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import logo from "../../utils/andrzul_logo.svg";

function Header() {
  return (
    <Container>
      <Div1>
        <NavLink white href="#">
          <img
            src={logo}
            alt="Logo"
            style={{ marginRight: "1rem", maxWidth: "100px", width: "100%" }}
          />

          <span>Ayan Zhambekov</span>
        </NavLink>
      </Div1>
      <Div2>
        <NavLink href="#project">Project</NavLink>

        <NavLink href="#tech">Technologies</NavLink>

        <NavLink href="#about">About</NavLink>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Aineken" target="_blank">
          <GitHub sx={{ fontSize: "3rem" }} />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/ayan-zhambekov-893091161/"
          target="_blank"
        >
          <LinkedIn sx={{ fontSize: "3rem" }} />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/andrzul/" target="_blank">
          <Instagram sx={{ fontSize: "3rem" }} />
        </SocialIcons>
      </Div3>
    </Container>
  );
}

export default Header;
