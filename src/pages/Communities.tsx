import React from 'react'
import Nav from '../components/Nav/Nav.tsx'
import Footer from '../components/Footer/Footer.tsx'
import hillcrestLogo from '../assets/images/hillcrestLogo.png'
import { PromotionCard } from '../components/ui/PromotionCard.tsx'
import { Button } from '../components/ui/Button.tsx'

export default function Communities() {
    return (
        <div className="flex flex-col bg-neutral-100">
            <Nav />
            <div className="flex items-center relative justify-center w-full h-[240px] lg:h-[300px]">
                <h2 className="text-2xl lg:text-[40px] z-20 font-bold uppercase text-neutral-100">
                    Communities in action
                </h2>
                <img
                    src={
                        'https://s3-alpha-sig.figma.com/img/f134/425f/d2dd8eb278c6700fb2db873307cfe51c?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FKfbjy3f~JDpxlJE-vzcLEouUSni3GfuSesjMb2qV1I8lh5BbOBfF1NSAArVoNwkB1U5us0uTkJUawih0fzcq-c4PGRlxiRON5lFB5aGA4dcBHQg9zgQXs2xooBkhzW~WKfxHnZdYZQexdJE~EzQwW3ljo8oygFYS~l8-DiaWab4MGZtH9ulSyq-zhJlhpiD9evzZTFg1DvKYdlMrvaG~WOuHvEUiGCguizfL6mOo9iYczYwx~WAkgV6j--X-4er7aDL~shCn9H9DPxTu9~pp96mM3p0KL8sxBwxJDMa-JfDDj4A0y1zhCgr87ujEq5j6n27S6rzNQY0sbyZZEmkCQ__'
                    }
                    className="w-full h-full object-cover absolute top-0 right-0"
                    alt="Blue stones wallpaper"
                />
            </div>
            <main className="w-full px-4 py-5 lg:px-[180px]  lg:py-10 max-w-[1440px] mx-auto">
                <div className="bg-neutral-200 rounded-lg flex items-center justify-center">
                    <section className="max-w-[1440px] w-full py-8 lg:py-5 px-4 lg:px-8 flex flex-col gap-10">
                        <PromotionCard
                            date="When: Wednesday June 5 - @ 6:60"
                            pin="Where: Hillcrest Community School"
                            title="Hillcrest Community School presents: Unpluggued"
                            title2="Waiting for Smartphones"
                            pathImage={hillcrestLogo}
                        />

                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-6">
                                <h3 className="text-xl lg:text-2xl text-gray-700 font-semibold ">
                                    Come join us for a panel discussion to learn
                                    more about:
                                </h3>

                                <span className="text-[20px] text-gray-700 font-normal">
                                    Originally sparked by casual discussions
                                    among parents and educators in Toronto, our
                                    group has grown into a dynamic weekly online
                                    gathering focused on addressing the impacts
                                    of smartphones on children's mental health
                                    and attention. Driven by insights from the
                                    Toronto District School Board’s lawsuit and
                                    research, such as Jonathan Haidt’s Anxious
                                    Generation, we’ve explored the challenges
                                    faced by our students, particularly those
                                    without smartphones.
                                </span>

                                <span className="text-[20px] text-gray-700 font-normal">
                                    We’ve connected with experts and established
                                    partnerships, like our recent collaboration
                                    with Jenny Perez at unpluggedcanada.com,
                                    inspired by the U.S. initiative Wait Until
                                    8th. Our commitment is to foster a
                                    collective cultural shift, starting with a
                                    panel discussion at our school on June 5.
                                    This event will feature experts from
                                    education, mental health, and technology,
                                    aiming to empower families and advocate for
                                    wider community engagement across the TDSB.
                                    We believe in the power of collective action
                                    to support our children in navigating
                                    today’s digital landscape. Join us in making
                                    a difference.
                                </span>
                            </div>
                            <div className="flex flex-col gap-6">
                                <h3 className="text-xl lg:text-2xl text-gray-700 font-semibold ">
                                    Panelists include:
                                </h3>

                                <div className="flex flex-col lg:grid lg:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[20px] text-gray-700 font-normal">
                                            <strong>Mike Stroh</strong>:
                                            Resgistred Psycholtherapist
                                        </span>
                                        <span className="text-[20px] text-gray-700 font-normal">
                                            <strong>Katy Albert</strong>: MEd,
                                            BCBA
                                        </span>
                                        <span className="text-[20px] text-gray-700 font-normal">
                                            <strong>Jonathan Tilly</strong>:
                                            Grade 6 Hillcrest teacher
                                        </span>
                                    </div>
                                    <div className="lg:h-full lg:flex lg:items-end lg:justify-end pt-4 lg:pt-0 lg:pb-4">
                                        <Button className="w-full lg:w-fit">
                                            CLICK HERE TO VIEW OFFICIAL FLYER
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    )
}
