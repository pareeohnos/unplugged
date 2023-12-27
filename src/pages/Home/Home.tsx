// import Fab from "@mui/material/Fab/Fab";
import { Fab, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React from "react";
import Nav from "../../components/Nav/Nav.tsx";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

import Footer from "../../components/Footer/Footer.tsx";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Nav />
      <header className="hero">
        <div className="hero__container">
          <div>
            <Typography
              className="hero__text"
              variant="poster"
              style={{ fontSize: "2.5rem" }}
            >
              Protect our children
            </Typography>
          </div>
          <div>
            <Typography
              className="hero__text"
              variant="h1"
              style={{ fontSize: "5rem" }}
            >
              Say Yes To Waiting For Smartphones
            </Typography>
          </div>
          <div className="hero__buttons">
            <Fab
              color="primary"
              variant="extended"
              style={{ color: "white" }}
              onClick={() => navigate("/pledge")}
            >
              SIGN THE PLEDGE
            </Fab>
            <Fab variant="extended" sx={{ ml: "1rem" }}>
              LEARN MORE
            </Fab>
          </div>
        </div>
      </header>
      {/* INFO BOXES */}
      <section className="info-boxes">
        <div className="info-box info-box--1">
          <div>
            <Typography
              variant="h2"
              className="info-box__title"
              style={{ fontSize: 35, fontWeight: 800 }}
            >
              Education
            </Typography>
            <Typography className="info-box__copy">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              dolores culpa pariatur exercitatione
            </Typography>
            <Fab
              sx={{ backgroundColor: "#FFF" }}
              className="info-box__button"
              variant="extended"
            >
              DISCOVER
            </Fab>
          </div>
        </div>
        <div className="info-box info-box--2">
          <div>
            <Typography
              variant="h2"
              style={{ fontSize: 35, fontWeight: 800 }}
              className="info-box__title"
            >
              Education
            </Typography>
            <Typography className="info-box__copy">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              dolores culpa pariatur exercitatione
            </Typography>
            <a href="http:/localhost:3000" className="info-box__link">
              <Typography> JOIN ORGANIZATION</Typography>
            </a>
          </div>
        </div>
        <div className="info-box info-box--3">
          <div>
            <Fab sx={{ backgroundColor: "#FFF" }} className="info-box__button">
              <PlayArrowIcon />
            </Fab>
          </div>
        </div>
      </section>

      <section className="about-us">
        <div className="about-us__container">
          <div className="about-us__people">
            <p>
              <span className="people__poster">About Us</span>
            </p>
            <h2 className="people__title">
              Help Families and Fostering Better Relationships
            </h2>
            <p className="people__copy">
              Lorem ipsum dolor sit amet. Quaerat eaque voluptas ratione
              tempore! Rerum at reprehenderit voluptatum quasi. Nobis pariatur
              odit est inventore. Libero quia qui doloremque error. Ipsa
              provident eum temporibus. Ex?
            </p>
            <p className="people__copy">
              Lorem ipsum dolor sit. Dolore labore praesentium itaque. Assumenda
              fuga quam autem. Dolorum ex est deserunt! Dolor hic veritatis
              totam?
            </p>
            <Fab color="primary" variant="extended" style={{ color: "white" }}>
              MORE ABOUT
            </Fab>
          </div>
          <div className="about-us__goals">
            <h2 className="goals__title">Our Goals</h2>
            <ul className="goals__list">
              <li>
                <p className="goals__goal">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </li>
              <li>
                <p className="goals__goal">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </li>
              <li>
                <p className="goals__goal">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </li>
              <li>
                <p className="goals__goal">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </li>
              <li>
                <p className="goals__goal">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </li>
              <li>
                <p className="goals__goal">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
