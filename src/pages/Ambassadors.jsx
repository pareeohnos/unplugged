// import Fab from "@mui/material/Fab/Fab";
import { Fab, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav/Nav.tsx'
import { useNavigate } from 'react-router-dom'
import gracePhoto from '../assets/images/grace.JPG'
import parentGuidePhoto from '../assets/images/4.png'
import josettePhoto from '../assets/images/josette_calleja.jpg'
import Footer from '../components/Footer/Footer.tsx'

export default function Ambassadors() {
    const navigate = useNavigate()

    return (
        <div className="font-sans w-full h-full">
            <div
                style={{
                    backgroundImage: `url(${parentGuidePhoto})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '25% 100%',
                }}
                className="h-[335px] w-full"
            >
                <div className="bg-[rgba(255,255,255,.40)]">
                    <Nav />
                </div>
            </div>
            <main className="w-full px-12 pt-12 pb-12">
                <h2 className="font-proxima text-[36px] text-[#FF6D6D] mb-16">
                    Ambassadors
                </h2>

                <div class="w-full max-w-[956px] gap-4">
                    <div>
                        <div
                            style={{
                                background: `url(${josettePhoto})`,
                                backgroundSize: '315%',
                                backgroundPosition: ' 60% 18%',
                            }}
                            className="w-[300px] h-[300px] rounded-full overflow-hidden mb-10 mx-auto"
                        ></div>
                        <h3 className="text-2xl font-medium mb-4">
                            Josette Calleja
                        </h3>
                        <p className="text-lg leading-relaxed mb-4">
                            I am Josette Calleja, a parent coach, a passionate
                            executive, and wellness specialist. I am a strong
                            supporter of Unplugged because I believe our
                            children need a childhood filled with meaningful
                            connections, outdoor adventures and genuine
                            interactions. The things a cell phone cannot
                            provide. In my practise, I often see children become
                            so absorbed in screens, potentially hindering their
                            development and connection to the world around them.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Research shows that spending time outdoors and
                            engaging in real-world interactions significantly
                            contributes to a child’s wellbeing, self esteem and
                            overall development. Keeping our kids off the phone
                            at this critical age will provide the opportunity to
                            connect with nature, nurture their curiosity and
                            build authentic relationships offline. Please join
                            us in taking a stand for a cell phone-free childhood
                            so our kids embrace a lifestyle that values genuine
                            connections, imagination and healthy development.
                            Let’s together make a difference in shaping a
                            healthier future for the next generation.
                        </p>
                    </div>

                    <div>
                        <div
                            style={{
                                background: `url(${gracePhoto})`,
                                backgroundSize: '100%',
                                backgroundPosition: ' 55% 60%',
                            }}
                            className="w-[300px] h-[300px] rounded-full overflow-hidden mb-10 mx-auto mt-16"
                        ></div>
                        <h3 className="text-2xl font-medium mb-4">
                            Dr. Grace Yu | MDCM FRCPC Pediatrics
                        </h3>
                        <p className="text-lg leading-relaxed mb-4">
                            I fully support the Unplugged Canada initiative. I
                            have been a practicing pediatrician in Vancouver, BC
                            for almost 25 years. For the past 5-10 years, not a
                            day goes by in my practice that I do not have
                            parents describing the struggle they have prying
                            their children off of their cell phones, tablets,
                            computers or away from the television. There is
                            constant conflict in many homes over managing screen
                            time. Countless parents are unable to engage their
                            kids while they are on screen. The more screen time
                            kids have, the more they want.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            We know that youth are experiencing increased mental
                            health challenges including anxiety, depression,
                            emotional dysregulation, ADHD, and sleep challenges.
                            Constant digital stimulation increases mood swings
                            and feelings of tension and irritability.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Being a child is such a short and precious time in
                            one’s life. Childhood is the chance for kids to be
                            creative, active, and interactive. People have their
                            whole lives to be on screens. Let kids play, laugh,
                            be curious and explore with one another. We should
                            be advocating for less screen times in schools, not
                            more!
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            I completed my Medical Degree at McGill University.
                            I moved to Vancouver for my Pediatric Residency
                            training at BC Children’s and Women’s Hospital.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            I enjoy teaching pediatric and family medicine
                            residents, and medical students at the hospital. I
                            am a Clinical Assistant Professor in the UBC
                            Department of Pediatrics. I have been the recipient
                            of awards for Family Centered Care and Community
                            Pediatrician of the Year from the UBC Department of
                            the Pediatrics. I was a member of the Pediatric
                            Residency Training Committee for over 10 years and
                            was Assistant Program Director for the Pediatric
                            Residents for one year.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
