// import Fab from "@mui/material/Fab/Fab";
import { Fab, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav/Nav.tsx'
import { useNavigate } from 'react-router-dom'

import Footer from '../components/Footer/Footer.tsx'

export default function FAQs() {
    const navigate = useNavigate()

    return (
        <div className="font-sans w-full h-full">
            <Nav logoColor="black" />
            <section className="w-full px-12 pt-12 pb-12">
                <h1 className=" text-[32px] text-[#2e4049] text-center">
                    Frequently Asked Questions
                </h1>

                <ul className="w-full max-w-[956px] mx-auto text-[#2e4049] my-16">
                    <li className="mb-12">
                        <p className="mb-8 tracking-wide font-medium text-2xl text-[#FF6D6D]">
                            WHY WAIT UNTIL AGE 14 FOR A SMARTPHONE? DOES IT
                            MATTER THAT MUCH?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Many experts from child psychologists to internet
                            safety leaders – and even technology executives –
                            agree that it is best to wait until at least 14
                            before exposing children to smartphones. Social
                            media and apps are designed to encourage addictive
                            behaviors and studies show that using screens for
                            several hours a day can impair children’s cognitive
                            capacity, language ability, and quality of sleep,
                            and may even thin the cortex of their brain.
                            Constant stimulation from addictive apps, along with
                            exposure to harmful social interactions that
                            children’s developing minds are not ready for, can
                            cause cortisol to rise and has led to an explosion
                            of anxiety and depression in adolescents. Find out
                            more here
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-8 tracking-wide font-medium text-2xl text-[#FF6D6D]">
                            I WANT MY CHILD TO HAVE A WAY TO CONNECT WITH THEIR
                            FRIENDS OUTSIDE OF SCHOOL. WHAT SHOULD I DO?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            After careful consideration, some families have
                            decided to allow their children to connect with
                            peers via texting and Facetime on a stripped down
                            iPad kept at home. This can be a nice, slow “on
                            ramp” where they connect socially with their friends
                            online but in a safe space. Everything can be
                            removed on the iPad except iMessage and FaceTime (no
                            App Store, games, internet browser, etc). This way
                            they can easily get by without a smartphone.
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-8 tracking-wide font-medium text-2xl text-[#FF6D6D]">
                            WHY ARE iPADS DIFFERENT?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            No one walks around with an iPad in their pocket
                            like a smartphone. The smartphone is essentially a
                            mini-computer in your child's hands all day every
                            day, whereas an iPad is more often used within the
                            home or for travel. It’s not used as often as a
                            phone, or for as long.
                        </p>
                    </li>

                    <li className="mb-12">
                        <p className="mb-8 tracking-wide font-medium text-2xl text-[#FF6D6D]">
                            HOW ELSE CAN MY KID STAY CONNECTED WITH OTHER KIDS?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            An old school approach is not bad! My sister has
                            used a landline phone at home for a few years, and I
                            found it super cute when my daughter called her
                            cousins and grandpa on the landline! My family
                            followed this great idea and have secured a Fongo
                            phone (link here Felix please). The cost is only a
                            few dollars a month, and we are hoping our
                            daughter’s close friends and other families will do
                            it too.
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-8 tracking-wide font-medium text-2xl text-[#FF6D6D]">
                            WHAT ABOUT WHEN MY CHILD GETS TO MIDDLE SCHOOL? IT
                            IS SO BIG THERE!
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            The truth is that many families have navigated
                            middle school phone-free for decades. The school
                            office phone is available when your child needs to
                            reach you or when you need to reach them. Coaches
                            and teachers have phones the child can use in
                            emergencies. In many districts, students have
                            regular access to school-issued email. Yes, your
                            children are reachable!
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-8 tracking-wide font-medium text-2xl text-[#FF6D6D]">
                            ISN’T IT SAFER TO HAVE A SMARTPHONE? WHAT IF I NEED
                            TO CONTACT MY CHILD?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Consider buying your child a basic phone that just
                            calls and texts without access to the internet or
                            online apps, or a two-way calling watch. The basic
                            phone avoids many of the distractions and dangers of
                            the smartphone. We have a list of (@Felix Reynoso
                            could you please help me with some suggestions in
                            Canada here?)
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-8 tracking-wide font-medium text-2xl text-[#FF6D6D]">
                            CAN I GET MY CHILD A SMARTWATCH AND STILL SIGN THE
                            PLEDGE?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Yes. The pledge is for smartphones only. If you get
                            a smartwatch for your child, keep some things in
                            mind. They can be very distracting, especially at
                            school. In addition, a child can access some
                            inappropriate content on some smartwatches. You can
                            turn off notifications on the watch during the
                            school day and disable your child’s ability to
                            download apps onto the watch.{' '}
                            <a
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                target="_blank"
                                href="https://protectyoungeyes.com/your-complete-guide-to-understanding-the-apple-watch/"
                            >
                                Check out this guide
                            </a>{' '}
                            from Protect Young Eyes if you are considering an
                            Apple Watch.
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-8 tracking-wide font-medium text-2xl text-[#FF6D6D]">
                            MY CHILD ALREADY HAS A SMARTPHONE. IS IT TOO LATE?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            No! It is never too late to change your mind as a
                            parent.  Please share with your child that many
                            families in their grade have decided that it is
                            better to wait to have a smartphone until at least
                            age 14. You can discuss with your child the many
                            reasons families in their community are waiting
                            until their children are older.
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-8 tracking-wide font-medium text-2xl text-[#FF6D6D]">
                            MY CHILD'S SIBLING GOT A SMARTPHONE WHEN THEY WERE
                            YOUNGER. HOW DO I SWITCH GEARS WITH THIS CHILD?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            You can be honest with your children about why you
                            have changed your approach. We know more now than we
                            used to. Circumstances and community constantly
                            shape how parents make decisions for each child. You
                            can reassure them that other children in their grade
                            are following the same path and they will not be the
                            only person without a smartphone.
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-8 tracking-wide font-medium text-2xl text-[#FF6D6D]">
                            HOW DOES THE PLEDGE WORK?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            By banding together, we can decrease the social
                            pressure within the child’s grade to have a
                            smartphone. By signing the online pledge, you
                            promise not to give your child a smartphone until at
                            least age 14, as long as at least five families from
                            your child’s grade and school also sign the pledge.
                            As soon as five families have signed, you will be
                            notified that the pledge is in effect and we will
                            let you know who else has made the pledge so that
                            you can connect with each other! We will not share
                            your information with any third party outside of our
                            organization and your personal information will not
                            be made public on this site.
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-8 tracking-wide font-medium text-2xl text-[#FF6D6D]">
                            WHAT HAPPENS AS SOON AS I SIGN THE PLEDGE?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            You will receive an email from Unplugged in one to
                            two business days with tips and suggestions on how
                            to rally other parents from your child's school to
                            sign the pledge. If you do not receive an email
                            after a couple of days, please notify us via email
                            at info@unplugged.ca
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-8 tracking-wide font-medium text-2xl text-[#FF6D6D]">
                            IS MY PLEDGE ANONYMOUS?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            The pledge is anonymous until five or more parents
                            from your child’s grade and school sign, and then it
                            becomes active. At this point, you will know the
                            other families who are on board and they will know
                            that you have signed up too.
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-8 tracking-wide font-medium text-2xl text-[#FF6D6D]">
                            HOW DO I BRING THE PLEDGE TO MY SCHOOL?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Simply{' '}
                            <a
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                target="_blank"
                                href="https://unpluggedcanada.com/"
                            >
                                sign the pledge
                            </a>{' '}
                            yourself and encourage other parents in your school
                            community to sign as well. Once you take the pledge,
                            you will receive an email in one to two business
                            days with suggestions on how to spread the word.
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-8 tracking-wide font-medium text-2xl text-[#FF6D6D]">
                            DO YOU HAVE ANY OTHER RESOURCES I COULD SHARE?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Yes! Please go to our{' '}
                            <a
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                target="_blank"
                                href="https://unpluggedcanada.com/research"
                            >
                                Research page
                            </a>{' '}
                            for many materials you may share in your community.
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-8 tracking-wide font-medium text-2xl text-[#FF6D6D]">
                            DO YOU HAVE A SIGN UP SHEET I COULD USE TO GATHER
                            SIGNATURES INSTEAD?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Yes! You may use this{' '}
                            <a
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                href="#"
                            >
                                SIGN UP SHEET
                            </a>{' '}
                            to gather pledges at your school. After you gather
                            the pledges, you will need to enter them online{' '}
                            <a
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                target="_blank"
                                href="https://unpluggedcanada.com/pledge/"
                            >
                                here
                            </a>{' '}
                            so each pledge will be officially registered with
                            Unplugged.
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-8 tracking-wide font-medium text-2xl text-[#FF6D6D]">
                            IS THE PLEDGE ONLY IN CANADA?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Yes, the Unplugged pledge is only in Canada, but we
                            plan to expand it to South America in the future.
                            There is a very similar movement in the US called{' '}
                            <a
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                target="_blank"
                                href="https://www.waituntil8th.org/"
                            >
                                Wait Until 8th
                            </a>{' '}
                            which is gaining traction too.
                        </p>
                    </li>
                </ul>
            </section>
            <Footer />
        </div>
    )
}
