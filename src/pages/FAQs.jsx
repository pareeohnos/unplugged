// import Fab from "@mui/material/Fab/Fab";
import { Fab, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav/Nav.tsx'
import { useNavigate } from 'react-router-dom'

import Footer from '../components/Footer/Footer.tsx'

export default function FAQs() {
    const navigate = useNavigate()

    return (
        <div className="font-sans w-full h-full text-lg">
            <Nav logoColor="black" />
            <section className="w-full px-12 py-12 max-w-[956px] mx-auto">
                <h1 className="mb-6">
                    <span
                        id="about"
                        className="font-sans font-bold uppercase text-[#FF6D6D]"
                    >
                        FAQ
                    </span>
                </h1>
                <h2 className=" font-bold text-4xl text-[#2e4049]">
                    Here's what you need to know
                </h2>

                <ul className="w-full max-w-[956px] mx-auto text-[#2e4049] my-16">
                    <li className="mb-12">
                        <p className="mb-4 tracking-wide font-bold font-sans text-[#FF6D6D]">
                            WHY WAIT UNTIL AGE 14 FOR A SMARTPHONE? DOES IT
                            MATTER THAT MUCH?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Many experts, from child psychologists to internet
                            safety leaders – and even technology executives –
                            agree that it is best to wait until at least 14
                            before exposing children to smartphones. Social
                            media and apps are designed to encourage addictive
                            behaviors and studies show that using screens for
                            several hours a day can impair children’s cognitive
                            <sup>[1]</sup> and language abilities<sup>[2]</sup>,
                            quality of sleep<sup>[3]</sup>, and may even thin
                            the cortex of their brain.<sup>[2]</sup> Constant
                            stimulation from addictive apps, along with exposure
                            to harmful social interactions that children’s
                            developing minds are not ready for, can cause
                            cortisol to rise and has led to an explosion of
                            anxiety and depression in adolescents.
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-4 tracking-wide font-bold font-sans text-[#FF6D6D]">
                            I WANT MY CHILD TO HAVE A WAY TO CONNECT WITH THEIR
                            FRIENDS OUTSIDE OF SCHOOL. WHAT SHOULD I DO?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            After careful consideration, some families have
                            decided to allow their children to connect with
                            peers via texting and Facetime on a stripped-down
                            iPad kept at home. This can be a nice, slow
                            “on-ramp” where they connect socially with their
                            friends online, but also in a safe space. Everything
                            can be removed on the iPad except iMessage and
                            FaceTime (no App Store, games, internet browser,
                            etc). This way they can easily get by without
                            needing a fully connected smartphone.
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-4 tracking-wide font-bold font-sans text-[#FF6D6D]">
                            WHY ARE iPADS DIFFERENT?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            No one walks around with an iPad in their pocket
                            like a smartphone. The smartphone is a mini-computer
                            in your child's hands all day every day, whereas an
                            iPad is more often used within the home or for
                            travel. It’s not used as often as a phone, or for as
                            long.
                        </p>
                    </li>

                    <li className="mb-12">
                        <p className="mb-4 tracking-wide font-bold font-sans text-[#FF6D6D]">
                            HOW ELSE CAN MY KID STAY CONNECTED WITH OTHER KIDS?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            An old-school approach is not bad! My sister has
                            used a landline phone at home for a few years, and I
                            have found it super cute when my daughter calls her
                            cousins and grandpa on the landline! My family
                            followed this great idea and have secured a Fongo
                            phone. The cost is only a few dollars a month, and
                            we are hoping our daughter’s close friends and other
                            families will do it too.
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-4 tracking-wide font-bold font-sans text-[#FF6D6D]">
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
                        <p className="mb-4 tracking-wide font-bold font-sans text-[#FF6D6D]">
                            ISN’T IT SAFER TO HAVE A SMARTPHONE? WHAT IF I NEED
                            TO CONTACT MY CHILD?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Consider buying your child a basic phone that just
                            calls and texts without access to the internet or
                            online apps, or a two-way calling watch. The basic
                            phone avoids many of the distractions and dangers of
                            the smartphone. Most major carriers offer flip
                            phones or other basic phones as low-cost options.
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-4 tracking-wide font-bold font-sans text-[#FF6D6D]">
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
                            Apple Watch or something similar.
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-4 tracking-wide font-bold font-sans text-[#FF6D6D]">
                            MY CHILD ALREADY HAS A SMARTPHONE. IS IT TOO LATE?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            No! It is never too late to change your mind as a
                            parent. Please share with your child that many
                            families in their grade have decided that it is
                            better to wait to have a smartphone until at least
                            age 14. You can discuss with your child the many
                            reasons families in their community are waiting
                            until their children are older.
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-4 tracking-wide font-bold font-sans text-[#FF6D6D]">
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
                        <p className="mb-4 tracking-wide font-bold font-sans text-[#FF6D6D]">
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
                            notified that the pledge is in effect! We will not
                            share your information with any third party outside
                            of our organization and your personal information
                            will not be made public.
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-4 tracking-wide font-bold font-sans text-[#FF6D6D]">
                            WHAT HAPPENS AS SOON AS I SIGN THE PLEDGE?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            You will receive an email from Unplugged within one
                            to two business days with tips and suggestions on
                            how to rally other parents from your child's school
                            to sign the pledge. If you do not receive an email
                            after a couple of days, please notify us via email
                            at at{' '}
                            <a
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                href="mailto:info@unpluggedcanada.com"
                            >
                                info@unpluggedcanada.com
                            </a>
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-4 tracking-wide font-bold font-sans text-[#FF6D6D]">
                            IS MY PLEDGE ANONYMOUS?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            The pledge is anonymous, but we encourage discussion
                            as a way to overcome the social reservations you may
                            have. Together, we can help our children!
                        </p>
                    </li>
                    <li className="mb-12">
                        <p className="mb-4 tracking-wide font-bold font-sans text-[#FF6D6D]">
                            HOW DO I BRING THE PLEDGE TO MY SCHOOL?
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Simply{' '}
                            <a
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                target="_blank"
                                href="https://unpluggedcanada.com/#/pledge"
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
                        <p className="mb-4 tracking-wide font-bold font-sans text-[#FF6D6D]">
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
                        <p className="mb-4 tracking-wide font-bold font-sans text-[#FF6D6D]">
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

                <div className="w-full text-sm">
                    <p>
                        [1]{' '}
                        <em>
                            The Mere Presence of Your Smartphone Reduces Brain
                            Power, Study Shows. June 16, 2017{' '}
                            <a
                                className="text-blue-600"
                                target="_blank"
                                href="https://news.utexas.edu/2017/06/26/the-mere-presence-of-your-smartphone-reduces-brain-power/"
                            >
                                UTNews
                            </a>
                        </em>{' '}
                    </p>
                    <p>
                        [2]{' '}
                        <em>
                            Groundbreaking study examines effects of screen time
                            on kids. December 9, 2018,{' '}
                            <a
                                className="text-blue-600"
                                target="_blank"
                                href="https://www.cbsnews.com/news/groundbreaking-study-examines-effects-of-screen-time-on-kids-60-minutes/"
                            >
                                CBS News
                            </a>
                        </em>{' '}
                    </p>
                    <p>
                        [3]{' '}
                        <em>
                            Smartphones damaging children’s sleep and
                            development, should stay out of the bedroom, study
                            finds. November 12, 2016,{' '}
                            <a
                                className="text-blue-600"
                                target="_blank"
                                href="https://www.news.com.au/technology/smartphones-damaging-childrens-sleep-and-development-should-stay-out-of-the-bedroom-study-finds/news-story/55228f3ce745f536d5628150230d3cdf"
                            >
                                News.com
                            </a>
                        </em>{' '}
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    )
}
