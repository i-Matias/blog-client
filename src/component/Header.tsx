import { Input } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import "./assets/header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="spacer"></div>
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs-container">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/blog">
          Blog
        </Link>
        <Link underline="hover" color="inherit" href="/">
          About
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Contact
        </Link>
      </Breadcrumbs>

      <div className="search-bar">
        <Input placeholder="Search" />
      </div>
    </div>
  );
};

export default Header;
