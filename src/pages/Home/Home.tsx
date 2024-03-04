// import Fab from "@mui/material/Fab/Fab";
import { Fab, Typography } from "@mui/material";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React from "react";
import Nav from "../../components/Nav/Nav.tsx";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import Footer from "../../components/Footer/Footer.tsx";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="font-sans">
      {/* <Nav /> */}
      <header className="hero relative">
        <div className="absolute right-8 top-4">
          <img className="w-16 h-16" src={logo} alt="" />
        </div>
        <div className="p-8 flex flex items-center justify-center flex-col">
          {/* <div>
            <p className="hero__text" style={{ fontSize: "2.5rem" }}>
              Protect our children
            </p>
          </div> */}
          <div>
            <h1 className="text-white text-[40px] font-mincho md:px-[80px] md:text-[80px] ">
              Say Yes To Waiting For Smartphones
            </h1>
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
            <a href="#about">
              <Fab variant="extended" sx={{ ml: "1rem" }}>
                LEARN MORE
              </Fab>
            </a>
          </div>
        </div>
      </header>

      <section className="about-us">
        <div className="about-us__container  flex  flex-col md:flex-row">
          <div className="about-us__people w-3/5 leading-7 mr-12">
            <p>
              <span
                id="about"
                className="font-proxima text-[32px] text-[#FF6D6D]"
              >
                About Us
              </span>
            </p>
            <h2 className="font-mincho  text-[24px] text-[#2E4049] font-bold mb-4 mt-6">
              Help Families and Fostering Better Relationships
            </h2>
            <p className="mb-5">
              Empowering parents to embrace the Unplugged Canada pledge means
              uniting to postpone the introduction of smartphones to children
              until at least the culmination of 8th grade. Shielding the
              formative elementary and middle school years from the potential
              hazards and distractions of smartphones is our shared goal. By
              joining forces, we reduce the societal pressure to provide phones
              at an early age, challenging the prevailing norm where ten years
              old is the average age for a child's first smartphone.
            </p>
            <p className="mb-5">
              Over 50,000 parents have already committed to delaying smartphones
              for their families, sparking a significant positive impact in
              communities nationwide. Despite their widespread use in elementary
              and middle schools due to unrealistic societal expectations,
              smartphones pose distractions and potential dangers for children.
            </p>
            <p className="mb-5">
              The increasing prevalence of these devices is rapidly reshaping
              childhood, diminishing outdoor play, face-to-face time with
              friends, and engagement with books and family. Parents often feel
              helpless in the face of this evolving presence, necessitating
              community support to resist the pressure in classrooms, social
              circles, and family gatherings. By standing together with other
              parents, we can collectively choose to wait until at least the end
              of eighth grade before introducing smartphones.
            </p>
            <p className="mb-5">
              The Unplugged Canada pledge actively encourages parents to
              postpone smartphone access for their children. In cases where
              communication is essential before 8th grade, we offer suitable
              basic phones and watches, ensuring a connection without the
              distractions and dangers associated with smartphones. If you
              prefer your child to have a basic phone or watch for calls and
              texts only, signing the pledge is still an option.!
            </p>
            <p className="people__copy">
              Childhood is too precious to sacrifice on the altar of
              smartphones.{" "}
              <span
                className="text-[#FF6D6D] font-medium cursor-pointer"
                onClick={() => navigate("/pledge")}
              >
                Take the Unplugged Canada pledge
              </span>{" "}
              today and make a commitment to preserve the innocence of
              childhood.
            </p>
          </div>
          <div className="about-us__goals">
            <h2 className="font-mincho  text-[24px] text-[#2E4049] font-bold mt-14">
              Our Goals
            </h2>
            <ul className="goals__list mt-4 list-disc ">
              <li>
                <p className="goals__goal">
                  Reduce Rates in Addictive Patterns
                </p>
              </li>
              <li>
                <p className="goals__goal">Improve Academic Performance</p>
              </li>
              <li>
                <p className="goals__goal">Mental & Physical Health</p>
              </li>
              <li>
                <p className="goals__goal">Improve Sleep Pattern</p>
              </li>
              <li>
                <p className="goals__goal">
                  Improve Relationships, Communication and Social Skills
                </p>
              </li>
              <li>
                <p className="goals__goal">
                  Reduce Anxiety & Symptoms Associated With Depression
                </p>
              </li>
              <li>
                <p className="goals__goal">
                  Protect Youth From Sexual Content and Cyber Bullying
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
