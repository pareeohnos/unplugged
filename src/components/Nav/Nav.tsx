import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/unplugged_vertical_logo.svg'
import logoMobile from '../../assets/images/unplugged_horizontal_logo.svg'
import { Button } from '../ui/Button.tsx'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '../ui/Sheet.tsx'
import { Menu } from 'lucide-react'

const paths = [
    'Pledge',
    'Research',
    'Ambassadors',
    'Resources',
    'Faqs',
    'Government',
]

export default function Nav() {
    const navigate = useNavigate()
    return (
        <>
            <header className="px-20 py-[10px] bg-neutral-100 w-full hidden lg:block">
                <nav className="flex justify-center gap-8 items-center">
                    <img
                        src={logo}
                        alt="unplugged Logo"
                        className="cursor-pointer"
                        onClick={() => navigate('/')}
                    />
                    <div className="flex flex-1 items-center justify-center gap-6">
                        {paths.map((path) => (
                            <span
                                className="text-neutral-600 hover:underline cursor-pointer text-base"
                                onClick={() => navigate(`/${path}`)}
                            >
                                {path}
                            </span>
                        ))}
                    </div>
                    <Button
                        className="rounded-[4px]"
                        onClick={() => navigate('/Pledge')}
                    >
                        SIGN THE PLEDGE
                    </Button>
                </nav>
            </header>

            <header className="flex justify-between px-4 py-[10px] bg-neutral-100 lg:hidden">
                <img
                    src={logoMobile}
                    alt="unplugged Logo"
                    className="cursor-pointer"
                    onClick={() => navigate('/')}
                />

                <Sheet>
                    <SheetTrigger>
                        <Menu size={24} />
                    </SheetTrigger>
                    <SheetContent className="px-6 flex flex-col gap-6 overflow-auto bg-slate-100">
                        <SheetHeader className="flex flex-row ">
                            <SheetTitle>
                                <img
                                    src={logo}
                                    alt="unplugged Logo"
                                    className="cursor-pointer"
                                    onClick={() => navigate('/')}
                                />
                            </SheetTitle>
                        </SheetHeader>

                        <nav className="flex flex-col gap-5 pt-5">
                            <div className="flex flex-col gap-5">
                                {paths.map((path) => (
                                    <span
                                        className="text-neutral-600 hover:underline border-b cursor-pointer text-base"
                                        onClick={() => navigate(`/${path}`)}
                                    >
                                        {path}
                                    </span>
                                ))}
                            </div>
                            <Button
                                className="rounded-[4px]"
                                onClick={() => navigate('/Pledge')}
                            >
                                SIGN THE PLEDGE
                            </Button>
                        </nav>
                    </SheetContent>
                </Sheet>
            </header>
        </>
    )
}
