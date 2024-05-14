import Footer from '../components/Footer/Footer.tsx'
import Nav from '../components/Nav/Nav.tsx'
import React from 'react'
import privacyPolice from '../assets/images/privacyPolice.jpeg'

export default function Privacy() {
    return (
        <div className="flex flex-col bg-neutral-100">
            <Nav />
            <div className="flex items-center relative justify-center w-full h-[240px] lg:h-[300px]">
                <h2 className="text-2xl lg:text-[40px] z-20 font-bold uppercase text-neutral-100">
                    PRIVACY POLICY
                </h2>
                <img
                    src={privacyPolice}
                    className="w-full h-full object-cover absolute top-0 right-0"
                    alt="FAQs Wallpaper"
                />
            </div>
            <main className="w-full px-4 py-5 lg:px-[180px]  lg:py-16 max-w-[1440px] flex flex-col gap-5 lg:gap-10 mx-auto">
                <span className="text-base lg:text-xl  font-normal text-neutral-700 ">
                    The security of your personal information is a priority to
                    our organization. We seek to protect this information by
                    maintaining electronic security measures and safeguards
                    designed to protect personal information within our
                    organization. When you enter the information on the pledge
                    form, it is stored in our pledge data management system
                    through Sales Force known in the industry for its security.
                </span>

                {/* Divider */}
                <div className="w-full h-[1px] bg-neutral-300" />

                <span className="text-base lg:text-xl  font-normal text-neutral-700 ">
                    We are the sole owners of the information collected on this
                    site. We will not sell or rent this information to anyone.
                    We will not share your information with any third party
                    outside of our organization. Your information will not be
                    made public on this website. If your child’s pledge does
                    become active (5 or more pledges for your child’s grade),
                    Unplugged will notify you. You will receive via email a list
                    of families from your child’s grade that are willing to
                    delay the use of smartphones, along with each other’s names
                    and emails to connect you with each other. This helps you to
                    support one another!
                </span>

                {/* Divider */}
                <div className="w-full h-[1px] bg-neutral-300" />
            </main>

            <Footer />
        </div>
    )
}
