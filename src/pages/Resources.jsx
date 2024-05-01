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

export default function Resources() {
    const navigate = useNavigate()

    return (
        <div className="font-sans w-full h-full">
            <Nav logoColor="black" />

            <main className="w-full px-12 py-12 max-w-[956px] mx-auto">
                <h2 className=" mb-6">
                    <span
                        id="about"
                        className="font-proxima text-[32px] text-[#FF6D6D]"
                    >
                        Resources
                    </span>
                </h2>

                <div className="w-full text-lg leading-relaxed mb-10">
                    <h3 className=" text-center text-[32px] text-[#2E4049] font-bold mb-12 mt-6 tracking-wider">
                        Getting the Unplugged pledge in your community...
                    </h3>

                    <div className="mb-12">
                        <p className="mb-5 text-xl">
                            <em>
                                {' '}
                                You can be the catalyst for change in your
                                community!
                            </em>
                        </p>
                        <p className="mb-5">
                            <span className="text-[#ff6d6d] font-bold tracking-widest">
                                First
                            </span>
                            ,{' '}
                            <a
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                                onClick={() => navigate('/pledge')}
                            >
                                sign
                            </a>{' '}
                            the pledge.
                        </p>
                        <p className="mb-5">
                            <span className="text-[#ff6d6d] font-bold tracking-widest">
                                Next
                            </span>
                            , we will send you a welcome email from Unplugged.
                        </p>
                        <p className="mb-5">
                            <span className="text-[#ff6d6d] font-bold tracking-widest">
                                Then
                            </span>
                            , all you have to do is wait (and spread the word if
                            you like – see below!).
                        </p>
                        <p className="mb-5">
                            Once five parents have signed up from your child’s
                            school and grade, your pledge becomes{' '}
                            <em>active!</em> This means you have all committed
                            to wait until your children are 14 years old before
                            giving them smartphones.
                        </p>
                        <p className="mb-5">
                            Once the pledge is active, we will send you a group
                            email to let you know that the pledge has started
                            and other families from your children’s grade are
                            committed!
                        </p>
                        <p>
                            {' '}
                            As more families join an active pledge and the size
                            of your group increases, we will provide updates on
                            this growth.
                        </p>
                    </div>

                    <div className="mb-12">
                        <h4 className=" text-center mb-5 tracking-wide font-bold text-2xl text-[#539c99]">
                            SPREAD THE PLEDGE
                        </h4>
                        <p className="mb-5">
                            Help us spread this important message of Unplugged
                            in your school community. Your voice is important in
                            fueling momentum at your school and beyond. Here are
                            some simple ways to help:
                        </p>

                        <h4 className="mb-5 tracking-wide font-medium text-2xl text-[#FF6D6D]">
                            START SMALL
                        </h4>
                        <p className="mb-5">
                            Grab a friend or two and ask if they have heard
                            about Unplugged. Share with them why you have signed
                            it and ask if they might be interested in helping
                            bring the pledge to their school community. Connect
                            them to the Unplugged website if they want to know
                            more.
                        </p>

                        <h4 className="mb-5 tracking-wide font-medium text-2xl text-[#FF6D6D]">
                            SPREAD THE WORD
                        </h4>
                        <p className="mb-5">
                            Here are a few possible communication channels:
                        </p>
                        <ol className="list-disc pl-5 max-w-[50ch]">
                            <li className="mb-4">
                                Email or group chats are likely the most
                                effective way to contact most parents from your
                                child’s grade.
                            </li>
                            <li className="mb-4">
                                Connect with your school’s Parent Advisory
                                Committee (PAC) Chair and ask if details about
                                Unplugged can be shared in their monthly
                                meetings.
                            </li>
                            <li className="mb-4">
                                Ask your school’s principal if they can
                                advertise Unplugged in their bulletins.
                            </li>
                            <li className="mb-4">
                                Click{' '}
                                <a
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    target="_blank"
                                    href="https://github.com/felixreynoso/unplugged/raw/main/src/assets/Unplugged-Flyer-single.pdf"
                                >
                                    here
                                </a>{' '}
                                for our flyer!”
                            </li>
                        </ol>
                        <p className="mb-5">
                            If you can’t get momentum with the school
                            administration, start within your own circles! Of
                            course, not everyone you contact will be moved to
                            make this decision, but you will be amazed about how
                            many actually will!
                        </p>
                    </div>

                    <div className="mb-12">
                        <h4 className=" text-center mb-5 tracking-wide font-bold text-2xl text-[#539c99]">
                            COMMUNITY EVENTS
                        </h4>
                        Parents in your community might have questions or
                        concerns they need to voice before they can commit to
                        taking the pledge. Or they might just prefer
                        face-to-face conversations! Unplugged is planning to
                        host a speaker event in Vancouver with Brooke Shannon,
                        Founder of{' '}
                        <a
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            target="_blank"
                            href="https://www.waituntil8th.org/"
                        >
                            Wait until 8th
                        </a>{' '}
                        , which was the inspiration for Unplugged here in
                        Canada. Stay tuned! If you can’t get to this event, we
                        are happy to schedule some time to customize a call for
                        you or your PAC so together we can spread this important
                        initiative. Just{' '}
                        <a
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            href="mailto:info@unpluggedcanada.com"
                        >
                            get in touch!
                        </a>
                        <p></p>
                    </div>
                    <div className="mb-12">
                        <h4 className=" text-center mb-5 tracking-wide font-bold text-2xl text-[#539c99]">
                            SHARE WITH YOUR SOCIAL CIRCLES
                        </h4>
                        <p>
                            Communicate the good news today about the Unplugged
                            pledge with your family and friends by sharing it on
                            your preferred platform. Be sure to tag Unplugged in
                            your post!
                        </p>
                        <ul className=" flex my-8 justify-center">
                            <li>
                                <a
                                    href="https://www.instagram.com/unpluggedcanada/"
                                    target="_blank"
                                >
                                    <Fab sx={{ mr: 1.5 }}>
                                        <InstagramIcon
                                            fontSize="large"
                                            sx={{ color: '#539c99' }}
                                        />
                                    </Fab>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Funpluggedcanada.com%2F"
                                    target="_blank"
                                >
                                    <Fab sx={{ mr: 1.5 }}>
                                        <FacebookIcon
                                            fontSize="large"
                                            sx={{ color: '#539c99' }}
                                        />
                                    </Fab>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/intent/tweet?url=https%3A%2F%2Funpluggedcanada.com%2F"
                                    target="_blank"
                                >
                                    <Fab sx={{ mr: 1.5 }}>
                                        <TwitterIcon
                                            fontSize="large"
                                            sx={{ color: '#539c99' }}
                                        />
                                    </Fab>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Funpluggedcanada.com%2F"
                                    target="_blank"
                                >
                                    <Fab sx={{ mr: 1.5 }}>
                                        <LinkedInIcon
                                            fontSize="large"
                                            sx={{ color: '#539c99' }}
                                        />
                                    </Fab>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
