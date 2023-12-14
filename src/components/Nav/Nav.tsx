import React from "react";

import "./Nav.scss";
import { Fab, Typography } from "@mui/material";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav__container">
        <div className="nav__logo-container">
          <Typography variant="poster" sx={{ fontSize: 32 }}>
            Unplugged
          </Typography>
        </div>

        <ul className="nav__list">
          <li>
            <a className="nav__link" href="http://localhost:3000/">
              <Typography sx={{ fontSize: 14, mr: "1rem" }}>Home</Typography>
            </a>
          </li>
          <li>
            <a className="nav__link" href="http://localhost:3000/">
              <Typography sx={{ fontSize: 14, mr: "1rem" }}>
                Our Team
              </Typography>
            </a>
          </li>
          <li>
            <a className="nav__link" href="http://localhost:3000/">
              <Typography sx={{ fontSize: 14, mr: "1rem" }}>
                Case Studies
              </Typography>
            </a>
          </li>
          <li>
            <a className="nav__link" href="http://localhost:3000/">
              <Typography sx={{ fontSize: 14, mr: "1rem" }}>
                Resources
              </Typography>
            </a>
          </li>
          <li>
            <a className="nav__link" href="http://localhost:3000/">
              <Typography sx={{ fontSize: 14, mr: "1rem" }}>Contact</Typography>
            </a>
          </li>
          <li>
            <Fab color="primary" variant="extended" style={{ color: "white" }}>
              SIGN THE PLEDGE
            </Fab>
          </li>
        </ul>
      </div>
    </div>
  );
}
