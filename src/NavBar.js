import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="reacttable">
            <Typography
              marginRight={3}
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              React
            </Typography>
          </Link>
          <Link>
            <Typography
              marginRight={3}
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Axios
            </Typography>
          </Link>
          <Link to="reduxtable">
            <Typography
              marginRight={3}
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Redux
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
