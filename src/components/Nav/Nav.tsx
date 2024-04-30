import React from 'react'

import './Nav.scss'
import { Button, Fab, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
// import logoHorizontal_black from "../../assets/images/logoHorizontal_black.png";
// import logo from '../../assets/images/logo.png'
import logoWhite from '../../assets/images/Unplugged-Logo-Stacked-W.svg'
import logoBlack from '../../assets/images/Unplugged-Logo-Stacked.svg'

import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

export default function Nav({ logoColor = 'white' }) {
    const navigate = useNavigate()

    const [open, setOpen] = React.useState(false)

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }
    const DrawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <List>
                {[
                    'Research',
                    'Ambassadors',
                    'Resources',
                    'Faqs',
                    'Government',
                ].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText
                                primary={text}
                                onClick={() => navigate('/' + text)}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <div className="w-full max-w-[956px] mx-auto">
            <div className="relative flex  md:flex-row px-12 items-center justify-between">
                <div className="">
                    {/* <Typography variant="poster" sx={{ fontSize: 32 }}>
            Unplugged
          </Typography> */}
                    <div className="py-2">
                        <img
                            src={logoColor === 'white' ? logoWhite : logoBlack}
                            className="min-h-[90px] min-w-[90px] max-h-[90px] max-w-[90px]text-black cursor-pointer"
                            alt="logo"
                            onClick={() => navigate('/')}
                        />
                    </div>
                </div>
                <div className="md:hidden">
                    <Button
                        variant="contained"
                        className=""
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </Button>
                </div>
                <Drawer
                    open={open}
                    onClose={toggleDrawer(false)}
                    anchor="right"
                >
                    {DrawerList}
                </Drawer>
                <ul className="hidden md:flex items-center wrap">
                    <li>
                        <a
                            className="nav__link cursor-pointer"
                            onClick={() => navigate('/')}
                        >
                            <Typography sx={{ fontSize: 16, mr: '1rem' }}>
                                Home
                            </Typography>
                        </a>
                    </li>
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
                            <Typography sx={{ fontSize: 16, mr: '1rem' }}>
                                FAQs
                            </Typography>
                        </a>
                    </li>
                    <li>
                        <a
                            className="nav__link cursor-pointer"
                            onClick={() => navigate('/government')}
                        >
                            <Typography sx={{ fontSize: 16, mr: '1rem' }}>
                                Government Efforts
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
