import React from 'react'
import Nav from '../components/Nav/Nav.tsx'
import gracePhoto from '../assets/images/grace.JPG'
import ambassadorsHeroImage from '../assets/images/ambassadors.jpeg'
import jennyPhoto from '../assets/images/JennyLinkedinProfileAvatar.png'
import josettePhoto from '../assets/images/JosetteAvatar.png'

import Footer from '../components/Footer/Footer.tsx'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function Ambassadors() {
    return (
        <div className="flex flex-col">
            <Nav />
            <div className="flex items-center relative justify-center w-full h-[240px] lg:h-[300px]">
                <h2 className="text-2xl lg:text-[40px] z-20 font-bold uppercase text-neutral-100">
                    Ambassadors
                </h2>
                <img
                    src={ambassadorsHeroImage}
                    className="w-full h-full object-cover absolute top-0 right-0"
                    alt="Blue stones wallpaper"
                />
            </div>
            <main className="w-full px-4 py-5 lg:px-[180px] bg-neutral-100 lg:py-10 max-w-[1440px] mx-auto">
                <div className="w-full py-5 flex flex-col gap-10">
                    <div className="relative h-[240px] mx-auto w-[240px] rounded-full overflow-hidden">
                        <img
                            src={jennyPhoto}
                            alt="Jenny Perez"
                            className="absolute top-0 right-0 w-full h-full"
                        />
                    </div>

                    <a
                        href="https://www.linkedin.com/in/perezmckenzie/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="flex gap-[10px]">
                            <h3 className=" text-2xl hover:underline  text-blue-600 font-bold">
                                Jenny Perez{' '}
                            </h3>
                            <LinkedInIcon
                                // fontSize="large"
                                sx={{ color: '#2563EB' }}
                            />
                        </div>
                    </a>

                    <p className="text-xl leading-relaxed text-neutral-700">
                        Thank you so much for being here and reading this! I’m
                        Jenny – a mother and an entrepreneur who has been
                        passionate about the impact of online technologies on
                        children’s minds for over a decade. After encountering
                        Brooke Shannon’s{' '}
                        <a
                            href="https://www.waituntil8th.org/"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Wait Until 8th
                        </a>{' '}
                        campaign which is active in the United States, I was
                        inspired to start a similar movement here in Canada.
                    </p>

                    <p className="text-xl leading-relaxed text-neutral-700">
                        I’ve travelled to 75 countries, lived in developing
                        countries, and have called Canada my home for 22 years.
                        Alongside this I have spent 15 years watching,
                        listening, and talking with young people nearly every
                        day. As I have worked to learn from different cultures,
                        perspectives, and practices, I’ve maintained an openness
                        and curiosity about the world that has helped me to
                        define my values and recognize what truly matters most.
                    </p>

                    <p className="text-xl leading-relaxed text-neutral-700">
                        One of the things I feel most nostalgic about are the
                        days where we really connected with each other without
                        phones or screens. I know that these technologies are
                        here to stay, and they serve important purposes in our
                        lives. However, it is undeniable that they are overused
                        and that they are introduced too early, and this has
                        caused untold harm to young people. I’ve continued to
                        learn about the effects of smartphones on developing
                        brains (check out our research page), and this has
                        fueled my desire to found Unplugged.
                    </p>
                    <p className="text-xl leading-relaxed text-neutral-700">
                        I want my daughter, and all our children, to enjoy
                        childhood. I want them to be happy – isn’t that the most
                        important thing? I want them to live full lives and to
                        be mentally, socially, and emotionally resilient. When I
                        think about our everyday life, I simply want to enjoy a
                        meal together, feel like a family, and talk to each
                        other. Reducing screen time and delaying the
                        introduction of smartphones supports all these things.
                    </p>
                    <p className="text-xl leading-relaxed text-neutral-700">
                        Doing things differently is possible. I have managed to
                        do this so far with my beautiful nine-year-old daughter,
                        but I know that if we do it together as a community, it
                        will be even easier.
                    </p>
                </div>

                <div className="flex flex-col py-5 gap-5 lg:grid lg:grid-cols-2">
                    <section className="flex flex-col gap-6">
                        <div className="relative h-[240px] shadow-md mx-auto w-[240px] rounded-full overflow-hidden">
                            <img
                                src={gracePhoto}
                                alt="Jenny Perez"
                                className="absolute top-0 right-0 w-full h-full"
                            />
                        </div>
                        <a
                            href="https://citypedspecialty.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h3 className=" text-2xl hover:underline lg:text-center text-blue-600 font-bold">
                                Dr. Grace Yu | MDCM FRCPC Pediatrics
                            </h3>
                        </a>
                        <p className="text-xl leading-relaxed text-neutral-700">
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
                        <p className="text-xl leading-relaxed text-neutral-700">
                            We know that youth are experiencing increased mental
                            health challenges including anxiety, depression,
                            emotional dysregulation, ADHD, and sleep challenges.
                            Constant digital stimulation increases mood swings
                            and feelings of tension and irritability.
                        </p>
                        <p className="text-xl leading-relaxed text-neutral-700">
                            Being a child is such a short and precious time in
                            one’s life. Childhood is the chance for kids to be
                            creative, active, and interactive. People have their
                            whole lives to be on screens. Let kids play, laugh,
                            be curious and explore with one another. We should
                            be advocating for less screen times in schools, not
                            more!
                        </p>
                        <p className="text-xl leading-relaxed text-neutral-700">
                            I completed my Medical Degree at McGill University.
                            I moved to Vancouver for my Pediatric Residency
                            training at BC Children’s and Women’s Hospital.
                        </p>
                        <p className="text-xl leading-relaxed text-neutral-700">
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
                    </section>

                    <section className="flex flex-col gap-6">
                        <div className="relative h-[240px] mx-auto w-[240px] rounded-full overflow-hidden">
                            <img
                                src={josettePhoto}
                                alt="Josette Calleja"
                                className="absolute top-0 right-0 w-full h-full"
                            />
                        </div>
                        <a
                            href="https://callejacoaching.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h3 className=" text-2xl lg:text-center hover:underline  text-blue-600 font-bold">
                                Josette Calleja
                            </h3>
                        </a>
                        <p className="text-xl leading-relaxed text-neutral-700">
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
                        <p className="text-xl leading-relaxed text-neutral-700">
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
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    )
}
