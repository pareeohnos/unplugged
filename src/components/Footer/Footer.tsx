import React from 'react'
import './Footer.scss'
import { Fab } from '@mui/material'
import logoHorizontal from '../../assets/images/logoHorizontal.png'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useNavigate } from 'react-router-dom'
export default function Footer() {
    const navigate = useNavigate()

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="flex flex-col items-center md:items-start md:items-between md:flex-row ">
                    <div className="  md:max-w-80 mr-4 ">
                        {/* <h2 className="footer__logo">Unplugged</h2> */}
                        <div className="-ml-2">
                            <img
                                src={logoHorizontal}
                                alt="logo"
                                className="max-h-[75px]"
                            />
                        </div>

                        <ul className="footer__social-links flex mb-8 ">
                            <li>
                                <Fab
                                    className="footer__social-link"
                                    size="small"
                                    sx={{ mr: 1.5 }}
                                    color="info"
                                >
                                    <InstagramIcon />
                                </Fab>
                            </li>
                            <li>
                                <Fab
                                    className="footer__social-link"
                                    size="small"
                                    sx={{ mr: 1.5 }}
                                    color="info"
                                >
                                    <FacebookIcon />
                                </Fab>
                            </li>
                            <li>
                                <Fab
                                    className="footer__social-link"
                                    size="small"
                                    sx={{ mr: 1.5 }}
                                    color="info"
                                >
                                    <TwitterIcon />
                                </Fab>
                            </li>
                            <li>
                                <Fab
                                    className="footer__social-link"
                                    size="small"
                                    sx={{ mr: 1.5 }}
                                    color="info"
                                >
                                    <LinkedInIcon />
                                </Fab>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-around w-full mt-4 max-w-[860px]">
                        <div className="hidden min-[450px]:block footer__content-col mr-7">
                            <ul className="footer__list">
                                <li>
                                    <a
                                        className="cursor-pointer"
                                        onClick={() => navigate('/')}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="cursor-pointer"
                                        onClick={() => navigate('/Resources')}
                                    >
                                        Resources
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="cursor-pointer"
                                        onClick={() => navigate('/FAQs')}
                                    >
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="cursor-pointer"
                                        onClick={() => navigate('/Research')}
                                    >
                                        Research
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="cursor-pointer"
                                        onClick={() => navigate('/Ambassadors')}
                                    >
                                        Ambassadors
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="cursor-pointer"
                                        onClick={() => navigate('/government')}
                                    >
                                        Government Efforts
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__content-col">
                            <h3 className="footer__subtitle font-bold">
                                Contact
                            </h3>
                            <p className="footer__copy">
                                1900-1030 West Georgia St <br />
                                Vancouver, BC V6E 2Y3
                            </p>
                            <a
                                className="footer__contact-link"
                                href="mailto:info@unpluggedcanada.com"
                            >
                                info@unpluggedcanada.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full text-center text-sm text-[#f2f2f2] italic mt-5">
                    <h3 className="text-base mb-2 not-italic">
                        PRIVACY POLICY
                    </h3>
                    <p className="mb-4">
                        The security of your personal information is a priority
                        to our organization. We seek to protect this information
                        by maintaining electronic security measures and
                        safeguards designed to protect personal information
                        within our organization. When you enter the information
                        on the pledge form, it is stored in our pledge data
                        management system through Sales Force known in the
                        industry for its security.
                    </p>
                    <p>
                        We are the sole owners of the information collected on
                        this site. We will not sell or rent this information to
                        anyone. We will not share your information with any
                        third party outside of our organization. Your
                        information will not be made public on this website. If
                        your child’s pledge does become active (5 or more
                        pledges for your child’s grade), Unplugged will notify
                        you. You will receive via email a list of families from
                        your child’s grade that are willing to delay the use of
                        smartphones, along with each other’s names and emails to
                        connect you with each other. This helps you to support
                        one another!
                    </p>
                </div>
            </div>
        </footer>
    )
}
