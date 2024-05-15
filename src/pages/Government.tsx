// import Fab from "@mui/material/Fab/Fab";

// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React from 'react'
import Nav from '../components/Nav/Nav.tsx'
import { useNavigate } from 'react-router-dom'
import govermentBg from '../assets/images/govermentBg.jpeg'

import Footer from '../components/Footer/Footer.tsx'

export default function Government() {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col bg-neutral-100">
            <Nav />
            <div className="flex items-center relative justify-center w-full h-[240px] lg:h-[300px]">
                <h2 className="text-2xl lg:text-[40px] z-20 font-bold uppercase text-neutral-100">
                    GOVERNMENT EFFORTS
                </h2>
                <img
                    src={govermentBg}
                    className="w-full h-full object-cover absolute top-0 right-0"
                    alt="FAQs Wallpaper"
                />
            </div>
            <main className="w-full px-4 py-5 lg:px-[180px]  lg:py-16 max-w-[1440px] flex flex-col gap-5 lg:gap-10 mx-auto">
                <h1 className="lg:text-[32px] text-2xl text-center lg:text-left text-gray-700 font-bold">
                    What are the governments of Canada doing to protect
                    children?
                </h1>

                <div className="flex flex-col gap-5">
                    <h3 className="text-red-500 font-bold text-lg text-center lg:text-left">
                        BRITISH COLUMBIA
                    </h3>

                    <span className="text-neutral-700 lg:text-xl text-base font-normal ">
                        <a
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            target="_blank"
                            href="https://news.gov.bc.ca/releases/2024PREM0004-000088"
                            rel="noreferrer"
                        >
                            {' '}
                            The Provincial government of BC announced on January
                            26th, 2024{' '}
                        </a>
                        that they were taking action to restrict the use of
                        cellphones in schools. The Province will work with
                        school districts to ensure they have plans set up for
                        the start of the 2024-2025 school year.
                    </span>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-neutral-300" />

                <div className="flex flex-col gap-5">
                    <h3 className="text-red-500 font-bold text-lg text-center lg:text-left">
                        ONTARIO
                    </h3>

                    <span className="text-neutral-700 lg:text-xl text-base font-normal ">
                        <a
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            target="_blank"
                            href="https://news.ontario.ca/en/release/1004501/ontario-cracking-down-on-cellphone-use-and-banning-vaping-in-schools"
                            rel="noreferrer"
                        >
                            {' '}
                            The Ontario government announced on April 28th, 2024{' '}
                        </a>
                        that the province was banning the use of cellphones in
                        classes unless explicitly directed by their teachers.
                        Students in kindergarten to Grade 6 will be required to
                        keep phones on silent and out of sight for the entire
                        school day, and for students in Grades 7 to 12,
                        cellphones will not be permitted during class time. In
                        addition, social media websites will be removed from all
                        school networks and devices.
                    </span>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-neutral-300" />

                <div className="flex flex-col gap-5 mb-5">
                    <h3 className="text-red-500 font-bold text-lg text-center lg:text-left">
                        QUEBEC
                    </h3>

                    <span className="text-neutral-700 lg:text-xl text-base font-normal ">
                        <a
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            target="_blank"
                            href="https://www.cbc.ca/news/canada/montreal/cellphone-ban-quebec-new-year-1.7069440"
                            rel="noreferrer"
                        >
                            {' '}
                            The government in Quebec enacted a ban on cellphones
                            in the classroom that began on December 31, 2023.{' '}
                        </a>
                        Covering public elementary and secondary schools, each
                        school must have a policy restricting the use of
                        cellphones in classroom, except when needed for
                        education purposes.
                    </span>
                </div>
            </main>

            <Footer />
        </div>
    )
}
