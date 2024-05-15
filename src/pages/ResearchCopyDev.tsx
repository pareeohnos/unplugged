import React from 'react'
import Nav from '../components/Nav/Nav.tsx'

import kidPhotoOcean from '../assets/images/researchBg.png'
import anxiousBook from '../assets/images/Anxious Generation 1.jpg'
import anxiousInfographic from '../assets/images/Anxious Generation 2.png'

import Footer from '../components/Footer/Footer.tsx'

export default function Research() {
    return (
        <div className="flex flex-col bg-neutral-100">
            <Nav />
            <div className="flex items-center relative justify-center w-full h-[240px] lg:h-[300px]">
                <img
                    src={kidPhotoOcean}
                    className="w-full h-full object-cover object-top absolute top-0 right-0"
                    alt="FAQs Wallpaper"
                />
            </div>
            <main className="w-full px-4 py-5 lg:px-[180px]  lg:py-16 max-w-[1440px] flex flex-col gap-5 lg:gap-10 mx-auto">
                <h3 className="text-red-500 font-bold text-lg text-center lg:text-left">
                    Research
                </h3>

                {/* anxious mobile */}
                <div className="flex lg:hidden flex-col gap-10">
                    <a
                        target={'_blank'}
                        href="https://www.freetheanxiousgeneration.com/research/the-evidence"
                        rel="noreferrer"
                    >
                        <h3 className=" hover:underline text-center text-2xl  text-blue-600 font-bold">
                            The Anxious Generation - Jonathan Haidt
                        </h3>
                    </a>

                    <article className="flex flex-col gap-5">
                        <img
                            className="object-cover scale-75 -mt-20"
                            src={anxiousBook}
                            alt="The Anxious Generation Book Cover"
                        />

                        <div className="flex flex-col gap-5 -mt-16">
                            <p className="text-neutral-700 text-base font-normal">
                                In The Anxious Generation, social psychologist
                                Jonathan Haidt lays out the facts about the
                                epidemic of teen mental illness that has hit
                                many countries at the same time. He then
                                investigates the nature of childhood, including
                                why children need play and independent
                                exploration to mature into competent, thriving
                                adults. Haidt shows how the “play-based
                                childhood" began to decline in the 1980s, and
                                how it was finally wiped out by the arrival of
                                the "phone-based childhood" in the early 2010s.
                            </p>

                            <p className="text-neutral-700 text-base font-normal">
                                He presents more than a dozen mechanisms by
                                which this "great rewiring of childhood" has
                                interfered with children's social and
                                neurological development, covering everything
                                from sleep deprivation to attention
                                fragmentation, addiction, loneliness, social
                                contagion, social comparison, and perfectionism.
                            </p>

                            <p className="text-neutral-700 text-base font-normal">
                                He explains why social media damages girls more
                                than boys and why boys have been withdrawing
                                from the real world into the virtual world, with
                                disastrous consequences for themselves, their
                                families, and their societies.
                            </p>
                        </div>
                        {/* Divider */}
                        <div className="w-full h-[1px] bg-neutral-300" />
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    )
}
