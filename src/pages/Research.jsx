// import Fab from "@mui/material/Fab/Fab";
import { Fab, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav/Nav.tsx'
import { useNavigate } from 'react-router-dom'

import Footer from '../components/Footer/Footer.tsx'

export default function Research() {
    const navigate = useNavigate()

    return (
        <div className="font-sans w-full h-full">
            <div
                style={{
                    backgroundImage:
                        'url("https://images.squarespace-cdn.com/content/v1/58938b9fbebafb25099e8c5b/1713208193748-DYE5TQV9JLD5AG94S1HO/W8_BannerImagesupdatedcottoncandy_1.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: '25% 60%',
                }}
                className="h-[335px] w-full"
            >
                <div className="bg-[rgba(255,255,255,.7)]">
                    <Nav />
                </div>
            </div>
            <main className="w-full px-12 pt-12 pb-12">
                <div>
                    <h2 className="font-proxima text-[32px] text-[#FF6D6D]">
                        Research
                    </h2>

                    <ul>
                        <li>
                            <a
                                target={'_blank'}
                                href="https://www.freetheanxiousgeneration.com/research/the-evidence"
                            >
                                <h3 className="font-mincho  text-[24px] text-[#2E4049] font-bold mb-4 mt-6">
                                    The Anxious Generation - Jonathan Haidt
                                </h3>
                            </a>
                            <p className="mb-4">
                                In The Anxious Generation, social psychologist
                                Jonathan Haidt lays out the facts about the
                                epidemic of teen mental illness that hit many
                                countries at the same time. He then investigates
                                the nature of childhood, including why children
                                need play and independent exploration to mature
                                into competent, thriving adults. Haidt shows how
                                the *play-based childhood" began to decline in
                                the 1980s, and how it was finally wiped out by
                                the arrival of the "phone-based childhood" in
                                the early 2010s.
                            </p>
                            <p className="mb-4">
                                He presents more than a dozen mechanisms by
                                which this "great rewiring of childhood" has
                                interfered with children's social and
                                neurological development, covering everything
                                from sleep deprivation to attention
                                fragmentation, addiction, loneliness, social
                                contagion, social comparison, and perfectionism.
                            </p>
                            <p>
                                He explains why social media damages girls more
                                than boys and why boys have been withdrawing
                                from the real world into the virtual world, with
                                disastrous consequences for themselves, their
                                families, and their societies.
                            </p>
                        </li>
                        <li>
                            <a
                                target={'_blank'}
                                href="https://www.waituntil8th.org/blog/2022/5/20/psychiatrist-warns-parents-about-smartphones"
                            >
                                <h3 className="font-mincho  text-[24px] text-[#2E4049] font-bold mb-4 mt-6">
                                    Psychiatrist Warns Parents about Smartphones
                                    - Dr. Adriana Stacey
                                </h3>
                            </a>
                            <p className="mb-4 max-w-[70ch] mx-auto">
                                <em>
                                    "The list of issues caused by smartphone is
                                    honestly too expansive to discuss at length
                                    in this article - depression, anxiety,
                                    isolation, increased ADHD symptoms,
                                    inauthenticity, cyberbullying, social
                                    pressure, insomnia, the inability to get
                                    away from non-family influence - the list
                                    goes on. Some scientists are even beginning
                                    to see a link between suicidal thoughts and
                                    smartphone usage. These effects do not go
                                    away when your child turns 12. Or 14. Or 16.
                                    Or probably even 18. After all the brain is
                                    not fully mature until around age 25."{' '}
                                </em>
                            </p>
                            <p>
                                Dr. Stacey is a general psychiatrist. Her work
                                is mostly concentrated with teens and college
                                students. She has a specific interest in how
                                smartphones affect the mental health of
                                children. Dr. Stacey’s insights in regard to
                                technology use have been featured in
                                the Washington Post and on the Today Show. Dr.
                                Stacey has a Bachelor of Science in Biology from
                                the University of Alabama and an M.D. from the
                                University of Arkansas for Medical Sciences. She
                                completed her psychiatry training at the
                                University of Wisconsin.
                            </p>
                        </li>
                        <li>
                            <a
                                target={'_blank'}
                                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8204720/#:~:text=Results%3A%20Comorbidity,and%20education%20professionals."
                            >
                                <h3 className="font-mincho  text-[24px] text-[#2E4049] font-bold mb-4 mt-6">
                                    Excessive Smartphone Use in Young Adults -
                                    Yehuda Wacks [National Institute of Health]
                                </h3>
                            </a>

                            <p>
                                The effects of excessive use of computer screens
                                and smartphones are raising serious concerns
                                among health and educational authorities due to
                                negative effects of such use in children and
                                adolescents. Recent reviews have argued that the
                                evidence supporting excessive smartphone use as
                                an addictive behavior is scarce. In particular,
                                Billieux have argued that there is insufficient
                                evidence for behavioral and neurobiological
                                similarities between excessive smartphone use
                                other types of addictive behaviors.
                            </p>
                            <p>
                                Panova and Carbonell also argued that there is
                                insufficient evidence to support for the
                                diagnosis of smartphone addiction and finally
                                Montag have argued that excessive smartphone use
                                is a form of Internet Use Disorder. The
                                smartphones are being used for various purposes
                                such as gaming, Social Network Services,
                                watching video clips. Therefore, excessive use
                                of smartphones may have difference
                                characteristics according to the type of
                                smartphone use. This present paper will review
                                the existing evidence on excessive smartphone
                                use, and it will discuss its similarities with
                                and differences from Internet addiction.
                            </p>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-proxima text-[32px] text-[#FF6D6D] text-center my-12">
                        Would you like to learn more on the issue? Here are some
                        great books to get you started.
                    </h2>

                    <ul>
                        <li className="flex mb-4">
                            <img
                                className="w-[200px] h-[300px] object-cover  mr-8 "
                                src="https://images.squarespace-cdn.com/content/v1/58938b9fbebafb25099e8c5b/1516246787819-COOL1QXJTFXNKMB4H5QZ/Be+the+Parent+Please.jpg?format=1500w"
                                alt="Be the Parent Please Book Cover"
                            />
                            <div className="text-lg leading-relaxed mb-10">
                                <p className="mb-4">
                                    <a
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        target="_blank"
                                        href="https://www.amazon.com/gp/product/1599474824/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1599474824&linkCode=as2&tag=waituntil8th-20&linkId=19b80cbcf8271fcc0de3b07102b9a7b0"
                                    >
                                        Be the Parent, Please
                                    </a>{' '}
                                    is a must-read for any parent fumbling
                                    around in this digital world of parenting.
                                </p>
                                <p className="mb-4">
                                    Toddlers on tablets. Pre-teens on Tumblr.
                                    Thanks to a variety of factors—from tech
                                    companies hungry for new audiences, to
                                    school administrations bent on making
                                    education digital, to a culture that
                                    promotes everyone as the star of their own
                                    reality shows—technology is irrevocably a
                                    part of childhood, and parents are
                                    struggling to keep up. What should be
                                    allowed? What should be denied? And, given
                                    the ubiquity of technology and its inherent
                                    usefulness, what do sensible boundaries even
                                    look like?{' '}
                                </p>
                                <p className="mb-4">
                                    A noted columnist and mother of three, Naomi
                                    Schaefer Riley fully understands the
                                    seductive nature of screens. Riley gives
                                    parents a wakeup call to put healthy
                                    boundaries in place when it comes to
                                    technology and kids.
                                </p>
                            </div>
                        </li>

                        <li className="flex mb-4">
                            <img
                                className="w-[200px] h-[300px] object-cover  mr-8 "
                                src="https://images.squarespace-cdn.com/content/v1/58938b9fbebafb25099e8c5b/1516299770251-ZY5ONR87CN4IWPMXCWEK/Wired+Child+.jpg?format=300w"
                                alt="Be the Parent Please Book Cover"
                            />
                            <div className="text-lg leading-relaxed mb-10">
                                <p className="mb-4">
                                    <a
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        target="_blank"
                                        href="https://www.amazon.com/gp/product/150321169X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=150321169X&linkCode=as2&tag=waituntil8th-20&linkId=5afe5dfc2d4637392c93872c0be7e07b"
                                    >
                                        Wired Child
                                    </a>{' '}
                                    is a practical guide to building your
                                    child’s bond with family and fostering
                                    school success amid the allure of digital
                                    screens. Kids’ obsessive use of video games,
                                    social media, and texting is eclipsing their
                                    connections with family and school—the two
                                    most important contributors to their
                                    well-being. The result: a generation of kids
                                    who suffer from soaring rates of emotional
                                    and academic problems, with many falling
                                    prey to an epidemic of video game and
                                    internet addictions.
                                </p>
                                <p className="mb-4">
                                    Wired Child gives you the confidence and
                                    skills you need to safely navigate your
                                    children through a rapidly shifting media
                                    landscape. Dr. Freed offers concrete
                                    parenting strategies that will help you
                                    create the strong family kids need and
                                    encourage their school success. You’ll also
                                    learn how to protect kids from destructive
                                    tech addictions, and instead guide them to
                                    use technology productively as a positive
                                    force for their future.
                                </p>
                            </div>
                        </li>
                        <li className="flex mb-4">
                            <img
                                className="w-[200px] h-[300px] object-cover  mr-8 "
                                src="https://images.squarespace-cdn.com/content/v1/58938b9fbebafb25099e8c5b/1517325922554-R5SSWZZIWTF92BGWZL8G/iGenCover+copy+2.jpg?format=1500w"
                                alt="Be the Parent Please Book Cover"
                            />
                            <div className="text-lg leading-relaxed mb-10">
                                <p className="mb-4">
                                    In{' '}
                                    <a
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        target="_blank"
                                        href="https://www.amazon.com/gp/product/1501151983/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1501151983&linkCode=as2&tag=waituntil8th-20&linkId=187802b9865270cd812e9f6c0cd84729"
                                    >
                                        iGen: Why Today’s Super-Connected Kids
                                        Are Growing Up Less Rebellious, More
                                        Tolerant, Less Happy--and Completely
                                        Unprepared for Adulthood--and What That
                                        Means for the Rest of Us
                                    </a>
                                    , Dr. Jean Twenge offers am alarming
                                    portrait of a new generation. Born in the
                                    mid-1990s to the mid-2000s and later, iGen
                                    is the first generation to spend their
                                    entire adolescence in the age of the
                                    smartphone. These kids had an instagram
                                    account before high school and do not
                                    remember a time before the internet. With
                                    social media and texting replacing other
                                    activities, iGen spends less time with their
                                    friends in person—perhaps why they are
                                    experiencing unprecedented levels of
                                    anxiety, depression, and loneliness. With
                                    generational divides wider than ever,
                                    parents, educators, and employers have an
                                    urgent need to understand today’s rising
                                    generation of teens and young adults.
                                </p>
                            </div>
                        </li>

                        <li className="flex mb-4">
                            <img
                                className="w-[200px] h-[300px] object-cover  mr-8 "
                                src="https://images.squarespace-cdn.com/content/v1/58938b9fbebafb25099e8c5b/1517155236683-3BKQ0XIDZH6YYO1RYKXO/big+disconnect.jpg?format=1500w"
                                alt="Be the Parent Please Book Cover"
                            />
                            <div className="text-lg leading-relaxed mb-10">
                                <p className="mb-4">
                                    In{' '}
                                    <a
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        target="_blank"
                                        href="https://www.amazon.com/gp/product/0062082434/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0062082434&linkCode=as2&tag=waituntil8th-20&linkId=0e7a057ca1d87c93d4bedf84d484b374"
                                    >
                                        The Big Disconnect
                                    </a>
                                    In the Big Disconnect, clinical psychologist
                                    Catherine Steiner-Adair takes an in-depth
                                    look at how the Internet and the digital
                                    revolution are profoundly changing childhood
                                    and family dynamics, and offers solutions
                                    parents can use to successfully shepherd
                                    their children through the technological
                                    wilderness. Families are in crisis as they
                                    face this issue, and even more so than they
                                    realize. Not only do chronic tech
                                    distractions have deep and lasting effects
                                    but children also desperately need parents
                                    to provide what tech cannot: close,
                                    significant interactions with the adults in
                                    their lives. Drawing on real-life stories
                                    from her clinical work with children and
                                    parents and her consulting work with
                                    educators and experts across the country,
                                    Steiner-Adair offers insights and advice
                                    that can help parents achieve greater
                                    understanding, authority, and confidence as
                                    they engage with the tech revolution
                                    unfolding in their living rooms.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>

            <Footer />
        </div>
    )
}
