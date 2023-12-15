import React from "react";
import "./Footer.scss";
import { Fab } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left-col">
          <h2 className="footer__logo">Unplugged</h2>
          <p className="footer__copy">
            Lorem ipsum dolor sit amet. Iusto perspiciatis omnis nisi placeat.
            Minima tempore ullam ut ratione? Ullam, recusandae. Hic, natus
            deserunt.
          </p>
          <ul className="footer__social-links">
            <li>
              <Fab
                className="footer__social-link"
                size="small"
                sx={{ mr: 1.5 }}
                color="info"
              >
                <InstagramIcon />
              </Fab>
            </li>
            <li>
              <Fab
                className="footer__social-link"
                size="small"
                sx={{ mr: 1.5 }}
                color="info"
              >
                <FacebookIcon />
              </Fab>
            </li>
            <li>
              <Fab
                className="footer__social-link"
                size="small"
                sx={{ mr: 1.5 }}
                color="info"
              >
                <TwitterIcon />
              </Fab>
            </li>
            <li>
              <Fab
                className="footer__social-link"
                size="small"
                sx={{ mr: 1.5 }}
                color="info"
              >
                <LinkedInIcon />
              </Fab>
            </li>
          </ul>
        </div>
        <div className="footer__right-col">
          <div className="footer__content-col">
            <h3 className="footer__subtitle">Get Involved</h3>
            <ul className="footer__list">
              <li>About Us</li>
              <li>Volunteer</li>
              <li>Causes</li>
              <li>Projects</li>
              <li>Team</li>
            </ul>
          </div>
          <div className="footer__content-col">
            <h3 className="footer__subtitle">Utility</h3>
            <ul className="footer__list">
              <li>Resources</li>
              <li>FAQs</li>
              <li>Research</li>
              <li>Partners</li>
              <li>Sponsors</li>
            </ul>
          </div>
          <div className="footer__content-col">
            <h3 className="footer__subtitle">Contact</h3>
            <p className="footer__copy">
              1030 West Georgia St <br />
              Vancouver, BC V6E 2Y3
            </p>
            <a
              className="footer__contact-link"
              href="mailto:support@unplugged.com"
            >
              support@unplugged.com
            </a>
            <a className="footer__contact-link" href="tel:+4733378901">
              +47 333 78 901
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
