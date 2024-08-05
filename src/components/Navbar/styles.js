import { styled } from "@mui/system";

const Navbar = styled("div")({
  width: "100%",
  background: "rgba(15, 18, 20, 0.8)",
  minHeight: "65px",
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

const Link = styled("a")({
  color: "white",
  height: "100%",
  display: "block",
  padding: "20px",
  textDecoration: "none",
  fontSize: "24px",
  fontWeight: "400",
});

export default {
  Navbar,
  Link,
};
