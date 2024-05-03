// import Fab from "@mui/material/Fab/Fab";

import { Fab, Typography } from '@mui/material'
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav/Nav.tsx'
import { useNavigate } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import Footer from '../components/Footer/Footer.tsx'

export default function Government() {
    const navigate = useNavigate()

    return (
        <div className="font-sans w-full h-full  text-lg leading-relaxed ">
            <Nav logoColor="black" />

            <main className="w-full px-12 py-12 max-w-[956px] mx-auto">
                <h2 className="mb-6">
                    <span
                        id="about"
                        className="font-sans font-bold uppercase text-[#FF6D6D]"
                    >
                        Government efforts
                    </span>
                </h2>

                <h3 className="font-title text-4xl text-[#2E4049] font-bold mb-16 mt-6">
                    What are the governments of Canada doing to protect
                    children?
                </h3>

                <div>
                    <div>
                        <div className="mb-12">
                            <p className="mb-4 uppercase tracking-wide font-bold font-sans text-[#FF6D6D]">
                                British Columbia
                            </p>
                            <p className=" text-lg leading-relaxed ">
                                <a
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    target="_blank"
                                    href="https://news.gov.bc.ca/releases/2024PREM0004-000088"
                                >
                                    {' '}
                                    The Provincial government of BC announced on
                                    January 26th, 2024{' '}
                                </a>
                                that they were taking action to restrict the use
                                of cellphones in schools. The Province will work
                                with school districts to ensure they have plans
                                set up for the start of the 2024-2025 school
                                year.
                            </p>
                        </div>
                        <div className="mb-12">
                            <p className="mb-4 uppercase tracking-wide font-bold font-sans text-[#FF6D6D]">
                                Ontario
                            </p>
                            <p>
                                <a
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    target="_blank"
                                    href="https://news.ontario.ca/en/release/1004501/ontario-cracking-down-on-cellphone-use-and-banning-vaping-in-schools"
                                >
                                    {' '}
                                    The Ontario government announced on April
                                    28th, 2024{' '}
                                </a>
                                that the province was banning the use of
                                cellphones in classes unless explicitly directed
                                by their teachers. Students in kindergarten to
                                Grade 6 will be required to keep phones on
                                silent and out of sight for the entire school
                                day, and for students in Grades 7 to 12,
                                cellphones will not be permitted during class
                                time. In addition, social media websites will be
                                removed from all school networks and devices.
                            </p>
                        </div>
                        <div className="mb-12">
                            <p className="mb-4 uppercase tracking-wide font-bold font-sans text-[#FF6D6D]">
                                Quebec
                            </p>

                            <p>
                                <a
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    target="_blank"
                                    href="https://www.cbc.ca/news/canada/montreal/cellphone-ban-quebec-new-year-1.7069440"
                                >
                                    {' '}
                                    The government in Quebec enacted a ban on
                                    cellphones in the classroom that began on
                                    December 31, 2023.{' '}
                                </a>
                                Covering public elementary and secondary
                                schools, each school must have a policy
                                restricting the use of cellphones in classroom,
                                except when needed for education purposes.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
