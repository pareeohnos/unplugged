// import Fab from "@mui/material/Fab/Fab";
import { Fab, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav/Nav.tsx'
import { useNavigate } from 'react-router-dom'
import gracePhoto from '../assets/images/grace.JPG'
import parentGuidePhoto from '../assets/images/4.png'
import jennyKidPhoto from '../assets/images/3.png'
import josettePhoto from '../assets/images/josette_calleja.jpg'
import Footer from '../components/Footer/Footer.tsx'
import InsertLinkIcon from '@mui/icons-material/InsertLink'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

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
            <main className="w-full px-12 pt-12 pb-12 max-w-[956px] mx-auto">
                <h2 className="font-proxima text-[36px] text-[#FF6D6D] mb-8">
                    Ambassadors
                </h2>
                <div className="max-w-[956px]">
                    <div
                        style={{
                            background: `url(${jennyKidPhoto})`,
                            backgroundPosition: '100% 50%',
                        }}
                        className="w-[242px] h-[242px] overflow-hidden mb-10 rounded-full mx-auto"
                    ></div>

                    <a
                        href="https://www.linkedin.com/in/perezmckenzie/"
                        target="_blank"
                    >
                        <h3 className=" text-2xl  text-[#2E4049] font-bold mb-4">
                            Jenny Perez{' '}
                            <LinkedInIcon
                                // fontSize="large"
                                sx={{ color: '#2E4049' }}
                            />
                        </h3>
                    </a>

                    <div className="w-full mb-12">
                        <p className="text-lg leading-relaxed mb-4">
                            Thank you so much for being here and reading this!
                            I’m Jenny – a mother and an entrepreneur who has
                            been passionate about the impact of online
                            technologies on children’s minds for over a decade.
                            After encountering Brooke Shannon’s{' '}
                            <a
                                href="https://www.waituntil8th.org/"
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                target="_blank"
                            >
                                Wait Until 8th
                            </a>{' '}
                            campaign which is active in the United States, I was
                            inspired to start a similar movement here in Canada.
                        </p>

                        <p className="text-lg leading-relaxed mb-4">
                            I’ve travelled to 75 countries, lived in developing
                            countries, and have called Canada my home for 22
                            years. Alongside this I have spent 15 years
                            watching, listening, and talking with young people
                            nearly every day. As I have worked to learn from
                            different cultures, perspectives, and practices,
                            I’ve maintained an openness and curiosity about the
                            world that has helped me to define my values and
                            recognize what truly matters most.
                        </p>

                        <p className="text-lg leading-relaxed mb-4">
                            One of the things I feel most nostalgic about are
                            the days where we really connected with each other
                            without phones or screens. I know that these
                            technologies are here to stay, and they serve
                            important purposes in our lives. However, it is
                            undeniable that they are overused and that they are
                            introduced too early, and this has caused untold
                            harm to young people. I’ve continued to learn about
                            the effects of smartphones on developing brains
                            (check out our research page), and this has fueled
                            my desire to found Unplugged.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            I want my daughter, and all our children, to enjoy
                            childhood. I want them to be happy – isn’t that the
                            most important thing? I want them to live full lives
                            and to be mentally, socially, and emotionally
                            resilient. When I think about our everyday life, I
                            simply want to enjoy a meal together, feel like a
                            family, and talk to each other. Reducing screen time
                            and delaying the introduction of smartphones
                            supports all these things.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Doing things differently is possible. I have managed
                            to do this so far with my beautiful nine-year-old
                            daughter, but I know that if we do it together as a
                            community, it will be even easier.
                        </p>
                    </div>
                </div>

                <div className="w-full max-w-[956px] grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <div
                            style={{
                                background: `url(${gracePhoto})`,
                                backgroundSize: '100%',
                                backgroundPosition: ' 55% 60%',
                            }}
                            className="w-[300px] h-[300px] rounded-full overflow-hidden mb-10 mx-auto "
                        ></div>
                        <a
                            href="https://www.linkedin.com/in/grace-yu-b71baa186/?originalSubdomain=ca"
                            target="_blank"
                        >
                            <h3 className=" text-2xl  text-[#2E4049] font-bold mb-4">
                                Dr. Grace Yu | MDCM FRCPC Pediatrics{' '}
                                <LinkedInIcon
                                    // fontSize="large"
                                    sx={{ color: '#2E4049' }}
                                />
                            </h3>
                        </a>
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
                            Department of Pediatrics and have been the recipient
                            of awards for Family Centered Care and Community
                            Pediatrician of the Year from the UBC Department of
                            the Pediatrics. I was also a member of the Pediatric
                            Residency Training Committee for over 10 years and
                            was Assistant Program Director for the Pediatric
                            Residents for one year.
                        </p>
                    </div>
                    <div>
                        <div
                            style={{
                                background: `url(${josettePhoto})`,
                                backgroundSize: '315%',
                                backgroundPosition: ' 60% 18%',
                            }}
                            className="w-[300px] h-[300px] rounded-full overflow-hidden mb-10 mx-auto"
                        ></div>

                        <a href="https://callejacoaching.com/" target="_blank">
                            <h3 className=" text-2xl  text-[#2E4049] font-bold mb-4">
                                Josette Calleja{' '}
                                <InsertLinkIcon
                                    // fontSize="large"
                                    sx={{ color: '#2E4049' }}
                                />
                            </h3>
                        </a>

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
                </div>
            </main>

            <Footer />
        </div>
    )
}
