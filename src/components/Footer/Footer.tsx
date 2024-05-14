import React from 'react'
import './Footer.scss'
// import { Fab } from '@mui/material'
import logoHorizontal from '../../assets/images/unplugged_footer_logo.svg'
// import InstagramIcon from '@mui/icons-material/Instagram'
// import FacebookIcon from '@mui/icons-material/Facebook'
// import TwitterIcon from '@mui/icons-material/Twitter'
// import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useNavigate } from 'react-router-dom'

const paths = [
    'Pledge',
    'Research',
    'Ambassadors',
    'Resources',
    'Faqs',
    'Government',
    'Communities',
]
export default function Footer() {
    const navigate = useNavigate()

    return (
        <footer className="bg-gray-700 py-8 lg:py-10 px-4 lg:px-20 flex flex-col gap-10">
            <div className="w-full flex items-center justify-center h-fit">
                <img
                    src={logoHorizontal}
                    alt="logo"
                    className="stroke-neutral-100 text-neutral-100 fill-slate-100 cursor-pointer"
                />
            </div>

            <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
                <div className="flex justify-center flex-col gap-5">
                    <div className="flex flex-wrap gap-4">
                        {paths.map((path) => (
                            <span
                                className="text-gray-100 text-sm hover:underline cursor-pointer"
                                onClick={() => navigate(`/${path}`)}
                            >
                                {path === 'Communities'
                                    ? 'Communities in action'
                                    : path}
                            </span>
                        ))}
                    </div>

                    <span
                        onClick={() => navigate('/privacy-policy')}
                        className="text-xs text-gray-100 font-semibold underline hover:cursor-pointer"
                    >
                        PRIVACY POLICY
                    </span>
                </div>

                <div className="flex flex-col gap-5">
                    <h3 className="text-neutral-100 font-bold text-base">
                        Contact
                    </h3>
                    <p className="text-neutral-100 text-sm font-normal">
                        1900-1030 West Georgia St <br />
                        Vancouver, BC V6E 2Y3
                    </p>
                    <a
                        className="text-neutral-100 text-sm font-normal hover:underline hover:cursor-pointer"
                        href="mailto:info@unpluggedcanada.com"
                    >
                        info@unpluggedcanada.com
                    </a>
                </div>
            </div>
        </footer>
    )
}
