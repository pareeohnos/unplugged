// import Fab from "@mui/material/Fab/Fab";

import { Fab, Typography } from '@mui/material'
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React, { useState, useEffect } from 'react'
import Nav from '../../components/Nav/Nav.tsx'
import './Home.scss'
import { useNavigate } from 'react-router-dom'
// import logo from '../../assets/images/logo.png'
import photo1 from '../../assets/images/pexels-thirdman-8926648.jpg'
import photo2 from '../../assets/images/teens_1.jpeg'
import photo3 from '../../assets/images/teens_2.jpeg'
import photo4 from '../../assets/images/teens_3.jpeg'

import Footer from '../../components/Footer/Footer.tsx'

export default function Home() {
    const navigate = useNavigate()
    const photos = [photo1, photo2, photo3, photo4]

    const [background, setBackground] = useState(photo1)

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setBackground(photos[0])

            photos.unshift(photos.pop())
        }, 5000)

        //Clearing the interval
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="font-sans">
            <div className="absolute bg-[rgba(255,255,255,0.50)] top-0 w-full  left-0 z-50">
                <Nav />
            </div>
            <header
                className="hero relative transition-all duration-300 ease-in-out"
                style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${background}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* <div className="absolute right-8 top-4">
                    <img className="h-28 " src={logo} alt="" />
                </div> */}
                <div className="p-8 flex flex items-center justify-center flex-col">
                    <div>
                        <h1 className="text-white text-[40px] font-mincho md:px-[80px] md:text-[80px] max-w-[956px] mx-auto ">
                            Say Yes To Waiting For Smartphones
                        </h1>
                    </div>
                    <div className="hero__buttons">
                        <Fab
                            color="primary"
                            variant="extended"
                            style={{ color: 'white' }}
                            onClick={() => navigate('/pledge')}
                        >
                            SIGN THE PLEDGE
                        </Fab>
                        <a href="#about" className="inline-block mt-4">
                            <Fab variant="extended" sx={{ ml: '1rem' }}>
                                LEARN MORE
                            </Fab>
                        </a>
                    </div>
                </div>
            </header>

            <section className="about-us w-full p-12 text-lg leading-relaxed max-w-[956px] mx-auto ">
                <h2 className=" mb-6">
                    <span
                        id="about"
                        className="font-proxima text-[32px] text-[#FF6D6D]"
                    >
                        About Us
                    </span>
                </h2>

                {/* Mission  */}
                <div>
                    <h3 className="font-mincho text-2xl  text-[#2E4049] font-bold mb-4 ">
                        Mission
                    </h3>
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
                    <h3 className="font-mincho text-2xl  text-[#2E4049] font-bold mb-4 ">
                        Vision
                    </h3>
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
                    <div className="w-[242px] h-[242px] overflow-hidden mb-10">
                        <img
                            className="rounded-full w-full h-full object-cover"
                            src="https://pmimmigration.com/wp-content/uploads/2023/09/Jenny_pm-800x800.jpg"
                            alt="Jenny Perez Profile Picture"
                        />
                    </div>

                    <h3 className="font-mincho text-2xl  text-[#2E4049] font-bold mb-4 ">
                        Jeny Perez
                    </h3>

                    <div className="w-full mb-12">
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
                    <div>
                        <h3 className="font-mincho text-2xl  text-[#2E4049] font-bold mb-4 ">
                            How To Sign The Pledge?
                        </h3>
                        <ol className="list-decimal pl-6">
                            <li className="mb-6">
                                To sign the pledge, your child must be in at
                                least kindergarten.
                            </li>
                            <li className="mb-6">
                                Please sign up each of your children younger
                                than 14. To add another child to a pledge form,
                                please select “add another student” on the form.
                            </li>
                            <li className="mb-6">
                                Since pledges are organized by schools, it is
                                very important to identify the correct school in
                                our database when filling out the pledge form.
                                To find your child’s school in our database,
                                type one or two key words from the school name
                                and hit the magnifier icon on the form. Avoid
                                words such as “the,” “elementary,” “middle,”
                                “junior,” and “school.”
                            </li>
                            <li className="mb-6">
                                If you cannot find your child’s school or next
                                school, there is a place on the form to enter
                                the school’s name. Please be as specific as
                                possible here and avoid any acronyms.
                            </li>
                            <li className="mb-6">
                                On the pledge form, we ask for your child’s
                                current school and next school. Please enter the
                                current school your child attends and please
                                list the next school your child will attend such
                                as an upper elementary school, intermediate
                                school, junior high school, middle school or
                                high school.
                            </li>
                            <li className="mb-6">
                                Unplugged is only taking pledges from Canada at
                                the moment.
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
