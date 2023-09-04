import { Box } from "@mui/material";
import logo from "../../assets/logo.png"

function Header() {
  return (
    <Box
      component="img"
      sx={{
        alignItems: "center",
        height: "30ch",
        width: "auto",
      }}
      alt="John Doe Form"
      src={logo}
    />
  );
}

export default Header;