// import Fab from "@mui/material/Fab/Fab";

import { Fab, Typography } from '@mui/material'
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav/Nav.tsx'
import { useNavigate } from 'react-router-dom'

import Footer from '../components/Footer/Footer.tsx'

export default function About() {
    const navigate = useNavigate()

    return (
        <div className="font-sans w-full h-full">
            <Nav />

            <main className="w-full px-12 py-12">
                {/* Mission  */}
                <div>
                    <h2 className="text-2xl font-medium mb-4">Mission</h2>
                    <div>
                        <p className="text-lg leading-relaxed mb-4">
                            Our mission is to unplug smart phones, rekindle
                            real-life connections, and guide our children
                            towards a life filled with the warmth of human
                            relationships and the beauty of the natural world.
                            Together, we can create a more balanced and
                            nourishing world for our children where the values
                            of nature, empathy, and authentic connection take
                            center stage.
                        </p>
                        <p className="text-lg leading-relaxed mb-10">
                            As a community that puts our children’s mental,
                            social, and emotional wellbeing first, we can
                            together shift the culture away from the known harms
                            of addictive online technologies. By simply
                            minimizing screen time and delaying the introduction
                            of cell phones until adolescence, we can reverse the
                            deep harms that we’ve seen from their overuse and
                            profoundly improve young people’s wellbeing. It’s
                            time to act, and it’s simple to start.
                        </p>
                    </div>
                </div>

                {/* Vision  */}
                <div>
                    <h2 className="text-2xl font-medium mb-4">Vision</h2>
                    <div>
                        <p className="text-lg leading-relaxed mb-10">
                            Small lifestyle shifts that reduce and delay
                            screen time to nurture healthy and happy children
                            who are protected from the harms of addictive online
                            behaviours. As families together shift to spending
                            less time online, they rediscover the joy of
                            in-person connections and find wellness in their
                            natural surroundings, experiencing improved quality
                            of life.
                        </p>
                    </div>
                </div>

                <div>
                    <div className="w-[242px] h-[242px] overflow-hidden mb-10 mx-auto">
                        <img
                            className="rounded-full w-full h-full object-cover"
                            src="https://pmimmigration.com/wp-content/uploads/2023/09/Jenny_pm-800x800.jpg"
                            alt="Jenny Perez Profile Picture"
                        />
                    </div>
                    <h2 className="text-2xl font-medium mb-4">Jeny Perez</h2>
                    <div className="w-full ">
                        <p className="text-lg leading-relaxed mb-4">
                            Thank you so much for being here and reading this!
                            I’m Jenny – a mother and an entrepreneur who has
                            been passionate about the impact of online
                            technologies on children’s minds for over a decade.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            I’ve travelled to 75 countries, lived in developing
                            countries, and have called Canada my home for 22
                            years. Alongside this I have spent 15 years
                            watching, listening, and talking with young people
                            almost every day. As I have worked to learn from
                            different cultures, perspectives, and practices,
                            I’ve maintained an openness and curiosity about the
                            world that has helped me to define my values and
                            recognize what truly matters most.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            One of the things I feel most nostalgic about is the
                            days where we really connected with each other
                            without phones or screens. I know that these
                            technologies are here to stay, and they serve
                            important purposes. However, it is undeniable that
                            they are overused, and they are introduced too
                            early, and this has caused untold harm to young
                            people. I’ve researched the effects of smartphones
                            on developing brains (check out our research page),
                            and this fueled my desire to found Unplugged.
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
                        {/* <p className="text-lg leading-relaxed mb-4"></p>
                        <p className="text-lg leading-relaxed mb-4"></p> */}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
