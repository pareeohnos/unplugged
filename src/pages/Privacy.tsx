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
                    our organization. Our systems use the latest security
                    products to ensure your data is safe and secure. We do not
                    share your data with any third party, and all data exchange
                    over our computer networks is digitally encrypted. We also
                    will not post the information from the pledges anywhere.
                </span>

                {/* Divider */}
                <div className="w-full h-[1px] bg-neutral-300" />

                <span className="text-base lg:text-xl  font-normal text-neutral-700 ">
                    If you would like, you can opt out of sharing your child’s
                    name altogether when completing the pledge.
                </span>

                {/* Divider */}
                <div className="w-full h-[1px] bg-neutral-300" />
            </main>

            <Footer />
        </div>
    )
}
