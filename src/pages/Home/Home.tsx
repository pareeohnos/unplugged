// import Fab from "@mui/material/Fab/Fab";
import { Fab, Typography } from "@mui/material";
import React from "react";
import Nav from "../../components/Nav/Nav.tsx";
import "./Home.scss";

export default function Home() {
  return (
    <div>
      <Nav />
      <header className="hero">
        <div className="hero__container">
          <div>
            <Typography variant="poster" style={{ fontSize: "2.5rem" }}>
              Protect our children
            </Typography>
          </div>
          <div>
            <Typography variant="h1" style={{ fontSize: "5rem" }}>
              Say Yes To Waiting For Smartphones
            </Typography>
          </div>
          <div className="hero__buttons">
            <Fab color="primary" variant="extended" style={{ color: "white" }}>
              SIGN THE PLEDGE
            </Fab>
            <Fab variant="extended" sx={{ ml: "1rem" }}>
              LEARN MORE
            </Fab>
          </div>
        </div>
      </header>
    </div>
  );
}
