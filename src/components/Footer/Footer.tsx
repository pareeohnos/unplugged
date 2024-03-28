import React from "react";
import "./Footer.scss";
import { Fab } from "@mui/material";
import logoHorizontal from "../../assets/images/logoHorizontal.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container flex flex-col justify-between md:flex-row ">
        <div className="w-full md:max-w-72 mr-4 ">
          {/* <h2 className="footer__logo">Unplugged</h2> */}
          <div className="-ml-2">
            <img src={logoHorizontal} alt="logo" className="max-h-[75px]" />
          </div>
          <p className="footer__copy">
            Uplugged is a volunteer run organization dedicated to the growth and
            wellbeing of the youth in Canada. If you want to know more about our
            mission, follow us on social media, or contact us for a quick chat.
          </p>
          <ul className="footer__social-links flex justify-center mb-8 ">
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
        <div className="flex flex md:justify-between w-full mt-4 max-w-[860px]">
          <div className="footer__content-col mr-7">
            <h3 className="footer__subtitle">Get Involved</h3>
            <ul className="footer__list">
              <li>About Us</li>
              <li>Volunteer</li>
              <li>Causes</li>
              <li>Projects</li>
              <li>Team</li>
            </ul>
          </div>
          <div className="hidden min-[450px]:block footer__content-col mr-7">
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
              +1 (800)-UNPLUGGED
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
