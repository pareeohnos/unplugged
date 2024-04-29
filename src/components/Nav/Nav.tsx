import React from 'react'

import './Nav.scss'
import { Fab, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
// import logoHorizontal_black from "../../assets/images/logoHorizontal_black.png";
// import logo from '../../assets/images/logo.png'
import logoWhite from '../../assets/images/Unplugged-Logo-Stacked-W.svg'
import logoBlack from '../../assets/images/Unplugged-Logo-Stacked.svg'
//  <div className="absolute right-8 top-4">
//                     <img className="h-28 " src={logo} alt="" />
//                 </div>
export default function Nav({ logoColor = 'white' }) {
    const navigate = useNavigate()
    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row px-12 items-center md:justify-between">
                <div className="">
                    {/* <Typography variant="poster" sx={{ fontSize: 32 }}>
            Unplugged
          </Typography> */}
                    <div className="py-2">
                        <img
                            src={logoColor === 'white' ? logoWhite : logoBlack}
                            className="max-h-[90px] text-black cursor-pointer"
                            alt="logo"
                            onClick={() => navigate('/')}
                        />
                    </div>
                </div>

                <ul className="flex items-center wrap">
                    <li>
                        <a
                            className="nav__link cursor-pointer"
                            onClick={() => navigate('/research')}
                        >
                            <Typography sx={{ fontSize: 16, mr: '1rem' }}>
                                Research
                            </Typography>
                        </a>
                    </li>
                    <li>
                        <a
                            className="nav__link cursor-pointer"
                            onClick={() => navigate('/ambassadors')}
                        >
                            <Typography sx={{ fontSize: 16, mr: '1rem' }}>
                                Ambassadors
                            </Typography>
                        </a>
                    </li>
                    <li>
                        <a
                            className="nav__link cursor-pointer"
                            onClick={() => navigate('/resources')}
                        >
                            <Typography sx={{ fontSize: 16, mr: '1rem' }}>
                                Resources
                            </Typography>
                        </a>
                    </li>
                    <li>
                        <a
                            className="nav__link cursor-pointer"
                            onClick={() => navigate('/faqs')}
                        >
                            <Typography sx={{ fontSize: 16, mr: '2rem' }}>
                                FAQs
                            </Typography>
                        </a>
                    </li>

                    <li>
                        <Fab
                            color="primary"
                            variant="extended"
                            style={{ color: 'white', minWidth: '164px' }}
                            onClick={() => navigate('/pledge')}
                        >
                            SIGN THE PLEDGE
                        </Fab>
                    </li>
                </ul>
            </div>
        </div>
    )
}
