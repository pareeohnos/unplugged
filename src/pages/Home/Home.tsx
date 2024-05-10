// import Fab from "@mui/material/Fab/Fab";

// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React, { useState, useEffect } from 'react'
import Nav from '../../components/Nav/Nav.tsx'
import { useNavigate } from 'react-router-dom'

import photo2 from '../../assets/images/hero-carousel-1.webp'
import photo3 from '../../assets/images/hero-carousel-2.webp'
import photo4 from '../../assets/images/hero-carousel-3.webp'
import orangeWave from '../../assets/images/orangeWave.svg'
import ball from '../../assets/images/ball-asset.svg'
import boat from '../../assets/images/boat-asset.svg'

import './home.css'

import Footer from '../../components/Footer/Footer.tsx'
import { Button } from '../../components/ui/Button.tsx'
import { Card, IconType } from '../../components/ui/Card.tsx'
import { Blurhash } from 'react-blurhash'
import { PromotionCard } from '../../components/ui/PromotionCard.tsx'

export default function Home() {
    const navigate = useNavigate()
    const images = [photo2, photo3, photo4]

    const hash = [
        'L3C6_G0000Dd00~o?I^%0JX.{SD#',
        'L6C%4;DQDP~U=zEMImS10xb]IXs.',
        'LEF5Qz9uNbkE~VRRt6ozExRks8xu',
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    console.log(currentImageIndex)
    const [imageLoaded, setImageLoaded] = useState(false)
    const [nextImageLoaded, setNextImageLoaded] = useState(false)

    useEffect(() => {
        const nextImageIndex = (currentImageIndex + 1) % images.length
        const nextImage = new Image()
        nextImage.src = images[nextImageIndex]
        nextImage.onload = () => {
            setNextImageLoaded(true)
        }

        const timer = setInterval(() => {
            setCurrentImageIndex(
                (previousIndex) => (previousIndex + 1) % images.length
            )
            setImageLoaded(false)
            setNextImageLoaded(false)
        }, 7000)

        return () => clearInterval(timer)
    }, [currentImageIndex])

    const handleImageLoad = () => {
        setImageLoaded(true)
    }

    return (
        <div className="font-sans overflow-x-hidden">
            <Nav />
            <section
                className={`relative overflow-hidden lg:px-20 lg:py-20 bg-slate-200 h-[240px] lg:h-[600px] transition-all duration-300 ease-in-out max-w-screen overflow-x-hidden`}
            >
                <img
                    src={images[currentImageIndex]}
                    onLoad={handleImageLoad}
                    onError={() => setImageLoaded(false)}
                    alt="background"
                    className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-1000 ${imageLoaded ? 'fade-in' : 'fade-out'}`}
                    style={{ visibility: imageLoaded ? 'visible' : 'hidden' }}
                />

                {!nextImageLoaded && (
                    <img
                        src={images[(currentImageIndex + 1) % images.length]}
                        alt="Preload next background"
                        className={`absolute top-0 left-0 h-full object-cover transition-opacity duration-1000 ${nextImageLoaded ? 'fade-in' : 'fade-out'}`}
                        style={{
                            visibility: nextImageLoaded ? 'visible' : 'hidden',
                        }}
                        onLoad={() => setNextImageLoaded(true)}
                    />
                )}
                <div
                    className="hidden relative px-10 py-[10px] lg:flex flex-col z-20 gap-[30px] rounded-[8px] w-fit"
                    style={{
                        backgroundColor: 'rgba(245, 245, 245, 0.80)',
                    }}
                >
                    <h1 className="text-gray-700 text-[48px] z-20 font-medium leading-[64px]">
                        Say{' '}
                        <span className="relative z-10">
                            yes{' '}
                            <img
                                src={orangeWave}
                                className="absolute -z-10 bottom-1 -left-1"
                                alt="Orange wave"
                            />
                        </span>{' '}
                        to waiting <br />
                        for smartphones
                    </h1>

                    <div className="flex flex-col h-full gap-3">
                        <Button
                            className="max-w-fit text-xl h-[51px]"
                            onClick={() => navigate('/pledge')}
                        >
                            SIGN THE PLEDGE
                        </Button>

                        <a
                            onClick={() => navigate('/research')}
                            className="ml-4 underline font-normal text-sm cursor-pointer"
                        >
                            LEARN MORE
                        </a>
                    </div>
                </div>
            </section>

            {/* COMPONENT FOR MOBILE SCREEN */}

            <div
                className="lg:hidden px-4 py-6 flex flex-col gap-[30px] rounded-[8px] w-full"
                style={{
                    backgroundColor: 'rgba(245, 245, 245, 0.80)',
                }}
            >
                <h1 className="text-gray-700 text-[32px] text-center font-medium leading-[44px]">
                    Say{' '}
                    <span className="relative z-10">
                        yes{' '}
                        <img
                            src={orangeWave}
                            className="absolute -z-10 bottom-1 -left-1"
                            alt="Orange wave"
                        />
                    </span>{' '}
                    to waiting <br />
                    for smartphones
                </h1>

                <div className="flex flex-col h-full gap-3">
                    <Button
                        className="w-full"
                        onClick={() => navigate('/pledge')}
                    >
                        SIGN THE PLEDGE
                    </Button>

                    <a
                        onClick={() => navigate('/research')}
                        className="text-center underline font-normal text-sm cursor-pointer"
                    >
                        LEARN MORE
                    </a>
                </div>
            </div>

            <div className="flex items-center justify-center bg-neutral-100">
                <section className="lg:px-44 px-4 lg:py-16 py-8 flex flex-col gap-6 max-w-[1440px] w-full">
                    <h2 className="text-gray-700 text-center text-xl lg:text-[32px] font-bold leading-[24px] ">
                        Welcome
                    </h2>

                    <h3 className="text-gray-700 text-center lg:text-left font-bold text-2xl lg:text-[32px]">
                        Our mission
                    </h3>

                    <p className="text-base lg:text-xl text-gray-700 font-normal leading-7">
                        Our mission is to unplug smart phones, rekindle
                        real-life connections, and guide our children towards a
                        life filled with the warmth of human relationships and
                        the beauty of the natural world. Together, we can create
                        a more balanced and nourishing world for our children
                        where the values of nature, empathy, and authentic
                        connection take center stage.
                        <br /> <br />
                        As a community that puts our children’s mental, social,
                        and emotional wellbeing first, we can together shift the
                        culture away from the known harms of addictive online
                        technologies. By simply minimizing screen time and
                        delaying the introduction of cell phones until
                        adolescence, we can reverse the deep harms that we’ve
                        seen from their overuse and profoundly improve young
                        people’s wellbeing. It’s time to act, and it’s simple to
                        start.
                    </p>

                    <h3 className="text-gray-700 font-bold text-center lg:text-left text-2xl lg:text-[32px]">
                        Our vision
                    </h3>

                    <p className="text-base lg:text-xl text-gray-700 font-normal leading-7">
                        We aim to implement small lifestyle shifts that reduce
                        and delay screen time to nurture healthy and happy
                        children who are protected from the harms of addictive
                        online behaviours. As families shift to spending less
                        time online together, they rediscover the joy of
                        in-person connections and find wellness in their natural
                        surroundings, experiencing an improved quality of life.
                    </p>
                </section>
            </div>

            <section className="w-full relative bg-gray-700 py-8 lg:py-16 flex flex-col items-center justify-center overflow-hidden leading-relaxed px-4 lg:px-20">
                <span className="text-center  text-slate-100 text-[24px] lg:text-[30px]">
                    <strong className="text-[32px]">
                        What is the Unplugged Pledge?{' '}
                        <br className="lg:hidden" />
                    </strong>
                    <br className="hidden lg:block" /> By signing this Pledge,
                    you are committing to not providing your child(ren) with a
                    smartphone until they reach at least 14 years of age.
                </span>
                <br /> <br />
                <span className="text-center  text-slate-100 text-[24px] lg:text-[30px]">
                    <strong>Why should I sign the Pledge? </strong>
                    <br className="hidden lg:block" /> Collective effort helps
                    everyone succeed and shift the culture.
                </span>
                <img
                    src={ball}
                    alt="ball"
                    className="absolute lg:hidden h-[102px] w-[102px] -left-[27px] -top-[19px] rotate-90"
                />
                {/* Desktop */}
                <img
                    src={ball}
                    alt="ball"
                    className="absolute hidden lg:block h-[205px] w-[205px] -left-[25px] -bottom-[42px]"
                />
                <img
                    src={boat}
                    alt="boat"
                    className="absolute hidden lg:block -right-[25px] -bottom-[5px]"
                />
                <img
                    src={boat}
                    alt="boat"
                    className="absolute w-[153px] h-[105px] left-[271px] bottom-0 lg:hidden"
                />
            </section>

            {/* <div className="flex bg-neutral-50 items-center justify-center">
                <section className="max-w-[1440px] py-8 lg:py-16 px-4 lg:px-44 w-full flex flex-col gap-8">
                    <h3 className="text-orange-500 text-[32px] font-bold leading-[40px]">
                        Some things you need to know!
                    </h3>

                    <ol className="list-disc space-y-5 pl-5 lg:pl-0">
                        <li>
                            To sign the pledge, your child must at least be in
                            kindergarten (for now!)
                        </li>
                        <li>
                            Please sign up your children younger than 14. To add
                            another child to a pledge form, simply select “add
                            another child” on the form.
                        </li>
                        <li>
                            Since pledges are organized by school, it is very
                            important to correctly identify your child’s school
                            in our database when filling out the pledge form. To
                            find your child’s school in our database, type one
                            or two key words from the school name and hit the
                            magnifier icon on the form. Avoid words such as
                            “the,” “elementary,” “middle,” “junior,” and
                            “school.”
                        </li>

                        <li>
                            If you cannot find your child’s current school or
                            next school, there is a place on the form to enter
                            the school’s name. Please be as specific as possible
                            here and avoid any acronyms. Please try to enter the
                            school’s name as it appears officially.
                        </li>

                        <li>
                            On the pledge form, we ask for your child’s current
                            school and next school. Please enter the current
                            school your child attends and please list the next
                            school your child will attend, which might be an
                            upper elementary school, intermediate school, junior
                            high school, middle school or high school.
                        </li>

                        <li>
                            Unplugged is only taking pledges from Canada at the
                            moment.
                        </li>
                    </ol>
                </section>
            </div> */}

            <div className="bg-neutral-200 flex items-center justify-center">
                <section className="max-w-[1440px] py-8 lg:py-16 px-4 lg:px-20 flex flex-col gap-10">
                    <h2 className="text-gray-700 text-center text-bold text-[32px]">
                        How excess screen exposure can impact children
                    </h2>
                    <div className="md:grid md:place-items-center">
                        <div className="max-w-[1120px] flex flex-col md:grid md:grid-cols-3 gap-5 md:place-items-center">
                            <Card
                                icon={IconType.HEAD}
                                title="Impaired Cognitive Development"
                                description="Excessive screen time can hinder the development of crucial cognitive skills like critical thinking, problem-solving, and creativity. It's essential for children to engage in real-world interactions and experiences to foster healthy cognitive growth."
                            />
                            <Card
                                icon={IconType.CLOSE}
                                title="Exposure to Inappropriate Content"
                                description="Monitor and control children's online activity to prevent exposure to age-inappropriate content, cyberbullying, and online predators. Establish clear boundaries and open communication about online safety."
                            />
                            <Card
                                icon={IconType.EYES}
                                title="Social Isolation and Emotional Detachment"
                                description="Excessive screen time can lead to social isolation, reducing opportunities for face-to-face interaction and emotional development. Encourage real-world connections, hobbies, and social activities to foster well-being."
                            />
                        </div>
                    </div>
                </section>
            </div>

            {/* <div className="bg-neutral-50 flex items-center justify-center">
                <section className="max-w-[1440px] w-full py-8 lg:py-16 px-4 lg:px-44 flex flex-col gap-10">
                    <h2 className="text-gray-700 text-center text-bold text-[32px]">
                        Communities in action
                    </h2>
                    <PromotionCard
                        date="When: Wednesday June 5 - @ 6:60"
                        pin="Where: Hillcrest Community School"
                        title="Hillcrest Community School presents: Unpluggued"
                        title2="Waiting for Smartphones"
                        pathImage="https://s3-alpha-sig.figma.com/img/0b5c/7760/d8e6aa809d77c09810b2aeaadfae14e1?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LtUi9Mz6GTam-QeeJQJ4D--nbuX0wkgI5lgytlw7GiPWOGJauQABlfRvQz26-86wr72P4NTOzM3p~~nrI~nKFe8sNRYKeuTGcM61LhDpj0Ic9DyZaoCnMvaA0CjqcqAlgx3j3p9kylpnN6NNhwQYWskPjLVy6pd2gGz7ouv0IvLGn2zN~GgN1QYS0srExZABuaU1D715u8xjIHbOcBo8Umdcdk1io~Gw1HxTaDrvQZUz1ihMTuCi7f52BqkE709HJUpuCD33IDge4MpuAuP9wutdIExhlI5iM1SHeJlfr8RpNA4FDfTo97j8xMhKzW6jOkIPd94Az0RHtlbET1Vrzg__"
                    />

                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl lg:text-2xl text-gray-700 font-semibold ">
                                Come join us for a panel discussion to learn
                                more about:
                            </h3>

                            <ol className="list-disc pl-5 space-y-2 font-normal text-[20px] text-gray-700">
                                <li>
                                    The negative effects of smartphones and
                                    social media how to feel
                                </li>
                                <li>
                                    How to feel more empowered to saying yes to
                                    waiting for the smartphones
                                </li>
                                <li>Alternative options to a smartphone</li>
                                <li>
                                    Being part of a collective action movement
                                    in the real world
                                </li>
                            </ol>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl lg:text-2xl text-gray-700 font-semibold ">
                                Panelists include:
                            </h3>

                            <div className="flex flex-col gap-2">
                                <span className="text-[20px] text-gray-700 font-normal">
                                    Mike Stroh: Resgistred Psycholtherapist
                                </span>
                                <span className="text-[20px] text-gray-700 font-normal">
                                    Katy Albert: MEd, BCBA
                                </span>
                                <span className="text-[20px] text-gray-700 font-normal">
                                    Jonathan Tilly: Grade 6 Hillcrest teacher
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div> */}

            <Footer />
        </div>
    )
}
