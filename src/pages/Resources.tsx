import React from 'react'
import Nav from '../components/Nav/Nav.tsx'
import Footer from '../components/Footer/Footer.tsx'
import resourcesBg from '../assets/images/resources.jpeg'
import { useNavigate } from 'react-router-dom'

const paragraphs = [
    'You can be the catalyst for change in your community!',
    'Once five parents have signed up from your child’s school and grade, your pledge becomes active! This means you have all committed to wait until your children are 14 years old before giving them smartphones.',
    'Once the pledge is active, we will send you a group email to let you know that the pledge has started and other families from your children’s grade are committed!',
    'As more families join an active pledge and the size of your group increases, we will provide updates on this growth.',
]

export default function Resources() {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col bg-neutral-100">
            <Nav />
            <div className="flex items-center relative justify-center w-full h-[240px] lg:h-[300px]">
                <h2 className="text-2xl lg:text-[40px] z-20 font-bold uppercase text-neutral-100">
                    RESOURCES
                </h2>
                <img
                    src={resourcesBg}
                    className="w-full h-full object-cover absolute top-0 right-0"
                    alt="FAQs Wallpaper"
                />
            </div>
            <main className="w-full px-4 py-5 lg:px-[180px]  lg:py-16 max-w-[1440px] flex flex-col gap-5 lg:gap-10 mx-auto">
                <h1 className="lg:text-[32px] text-2xl text-center lg:text-left text-gray-700 font-bold">
                    Getting Unplugged commitment in your community in just three
                    steps...
                </h1>
                {/* Cards Div */}
                <div className="flex py-5 flex-col lg:grid lg:grid-cols-3 gap-5">
                    {/* Card 1 */}
                    <div className="rounded-lg bg-neutral-100 shadow-md border flex py-5 px-8 flex-col gap-[10px]">
                        <div className="flex flex-col gap-5 items-center justify-center w-full">
                            <svg
                                width="41"
                                height="34"
                                viewBox="0 0 41 34"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M35.313 0.583379C35.757 0.316271 36.2873 0.231555 36.7924 0.34701C37.2976 0.462466 37.7384 0.769116 38.0223 1.2026L40.0062 4.22857C40.2649 4.62387 40.3755 5.09783 40.3187 5.56679C40.2619 6.03574 40.0412 6.46954 39.6956 6.79163L39.6896 6.79964L39.6616 6.82569L39.5473 6.9319L39.0964 7.36275C36.6015 9.78272 34.1822 12.2795 31.8421 14.8495C27.4395 19.6911 22.2111 26.0276 18.6922 32.1757C17.7103 33.8911 15.3115 34.2598 13.8887 32.7789L0.893081 19.2763C0.706844 19.0827 0.561426 18.8536 0.46547 18.6027C0.369515 18.3518 0.324981 18.0842 0.334515 17.8158C0.344049 17.5473 0.407456 17.2835 0.520969 17.0401C0.634482 16.7966 0.795782 16.5785 0.995283 16.3986L4.92303 12.8556C5.26819 12.5444 5.71079 12.3628 6.17505 12.342C6.63932 12.3212 7.0964 12.4623 7.46805 12.7414L14.0991 17.7132C24.4576 7.49902 30.3312 3.57929 35.313 0.583379ZM35.7338 5.02414C31.1448 7.8938 25.4175 12.056 15.6983 21.7732C15.3572 22.1143 14.9046 22.3209 14.4235 22.3551C13.9424 22.3893 13.465 22.2489 13.0791 21.9595L6.38191 16.9376L5.21761 17.9877L15.8726 29.0616C19.5719 22.9094 24.664 16.7853 28.8783 12.1522C31.0975 9.71429 33.3863 7.34063 35.7418 5.03416L35.7338 5.02414Z"
                                    fill="#16A34A"
                                />
                            </svg>
                            <span className="text-center text-neutral-800 text-xl font-semibold">
                                First, sign the pledge.
                            </span>
                        </div>

                        <span className="text-base text-center text-neutral-500 font-semibold">
                            Sign the pledge by{' '}
                            <span
                                onClick={() => navigate('/Pledge')}
                                className="text-blue-500 hover:underline"
                            >
                                clicking here.
                            </span>
                        </span>
                    </div>
                    {/* Card 2 */}
                    <div className="rounded-lg bg-neutral-100 shadow-md border flex py-5 px-8 flex-col gap-[10px]">
                        <div className="flex flex-col gap-5 items-center justify-center w-full">
                            <svg
                                width="40"
                                height="48"
                                viewBox="0 0 40 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M34.2857 6.85712H3.80955C1.71432 6.85712 0.0190781 8.5714 0.0190781 10.6666L3.05176e-05 33.5238C3.05176e-05 35.619 1.71432 37.3333 3.80955 37.3333H19.0476V33.5238H3.80955V14.4762L19.0476 24L34.2857 14.4762V24H38.0953V10.6666C38.0953 8.5714 36.381 6.85712 34.2857 6.85712ZM19.0476 20.1904L3.80955 10.6666H34.2857L19.0476 20.1904ZM29.2191 41.1428L22.4762 34.4L25.1619 31.7143L29.2 35.7524L37.2762 27.6762L40 30.3619L29.2191 41.1428Z"
                                    fill="#16A34A"
                                />
                            </svg>

                            <span className="text-center text-neutral-800 text-xl font-semibold">
                                We will send you a welcome
                            </span>
                        </div>

                        <span className="text-base text-center text-neutral-500 font-semibold">
                            Receive our confirmation email
                        </span>
                    </div>
                    {/* Card 3 */}
                    <div className="rounded-lg bg-neutral-100 shadow-md border flex py-5 px-8 flex-col gap-[10px]">
                        <div className="flex flex-col gap-5 items-center justify-center w-full">
                            <svg
                                width="49"
                                height="48"
                                viewBox="0 0 49 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M24.3334 13.8349C17.6147 13.8349 12.1682 19.2814 12.1682 26C12.1682 32.7187 17.6147 38.1652 24.3334 38.1652C31.052 38.1652 36.4985 32.7187 36.4985 26C36.4985 19.2814 31.052 13.8349 24.3334 13.8349ZM8.11317 26C8.11317 17.0419 15.3752 9.77985 24.3334 9.77985C33.2915 9.77985 40.5536 17.0419 40.5536 26C40.5536 34.9582 33.2915 42.2202 24.3334 42.2202C15.3752 42.2202 8.11317 34.9582 8.11317 26Z"
                                    fill="#16A34A"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M14.0557 7.50349C14.3454 8.58514 13.7034 9.69683 12.6218 9.98653C11.5902 10.2628 10.6495 10.8058 9.89434 11.561C9.13918 12.3162 8.59616 13.2568 8.31987 14.2884C8.03018 15.3701 6.91849 16.0121 5.83684 15.7224C4.75519 15.4327 4.11318 14.321 4.40287 13.2394C4.86335 11.52 5.76839 9.95224 7.02699 8.69364C8.28559 7.43505 9.85337 6.53001 11.5727 6.06953C12.6544 5.77984 13.766 6.42184 14.0557 7.50349ZM34.611 7.50349C34.9006 6.42184 36.0123 5.77984 37.094 6.06953C38.8133 6.53001 40.3811 7.43505 41.6397 8.69364C42.8983 9.95224 43.8033 11.52 44.2638 13.2394C44.5535 14.321 43.9115 15.4327 42.8298 15.7224C41.7482 16.0121 40.6365 15.3701 40.3468 14.2884C40.0705 13.2568 39.5275 12.3162 38.7723 11.561C38.0172 10.8058 37.0765 10.2628 36.0449 9.98653C34.9633 9.69683 34.3213 8.58514 34.611 7.50349ZM24.3333 15.8624C25.4531 15.8624 26.3609 16.7701 26.3609 17.8899V23.9725H30.4159C31.5357 23.9725 32.4434 24.8802 32.4434 26C32.4434 27.1198 31.5357 28.0275 30.4159 28.0275H24.8402C23.4407 28.0275 22.3058 26.8927 22.3058 25.4931V17.8899C22.3058 16.7701 23.2136 15.8624 24.3333 15.8624Z"
                                    fill="#16A34A"
                                />
                            </svg>

                            <span className="text-center text-neutral-800 text-xl font-semibold">
                                Now just wait
                            </span>
                        </div>

                        <span className="text-base text-center text-neutral-500 font-semibold">
                            And spread the word if you like
                        </span>
                    </div>
                </div>

                {paragraphs.map((paragraph) => {
                    return (
                        <span className="text-base lg:text-xl font-normal text-neutral-700 ">
                            {paragraph}
                        </span>
                    )
                })}

                {/* Divider */}
                <div className="w-full h-[1px] bg-neutral-300" />

                <h2 className="lg:text-[32px] text-2xl text-center lg:text-left text-gray-700 font-bold">
                    Spread the pledge
                </h2>

                <span className="text-base lg:text-xl  font-normal text-neutral-700 ">
                    Help us spread this important message of Unplugged in your
                    school community. Your voice is important in fueling
                    momentum at your school and beyond. Here are some simple
                    ways to help:
                </span>

                {/* Divider */}
                <div className="w-full h-[1px] bg-neutral-300" />

                <h3 className="text-red-500 text-center lg:text-left font-bold text-lg">
                    START SMALL
                </h3>

                <span className="text-base lg:text-xl  font-normal text-neutral-700 ">
                    Grab a friend or two and ask if they have heard about
                    Unplugged. Share with them why you have signed it and ask if
                    they might be interested in helping bring the pledge to
                    their school community. Connect them to the Unplugged
                    website if they want to know more.
                </span>

                {/* Divider */}
                <div className="w-full h-[1px] bg-neutral-300" />

                <h3 className="text-red-500 text-center lg:text-left font-bold text-lg">
                    SPREAD THE WORD
                </h3>

                <span className="text-base lg:text-xl  font-normal text-neutral-700 ">
                    Here are a few possible communication channels:
                </span>

                <ol className="list-disc space-y-5 pl-5">
                    <li className="text-base lg:text-xl  font-normal text-neutral-700 ">
                        Email or group chats are likely the most effective way
                        to contact most parents from your child’s grade.
                    </li>

                    <li className="text-base lg:text-xl  font-normal text-neutral-700 ">
                        Connect with your school’s Parent Advisory Committee
                        (PAC) Chair and ask if details about Unplugged can be
                        shared in their monthly meetings.
                    </li>

                    <li className="text-base lg:text-xl  font-normal text-neutral-700 ">
                        Ask your school’s principal if they can advertise
                        Unplugged in their bulletins.
                    </li>

                    <li className="text-base lg:text-xl  font-normal text-neutral-700 ">
                        <a
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            target="_blank"
                            href="https://github.com/felixreynoso/unplugged/raw/main/src/assets/Unplugged-Flyer-single.pdf"
                            rel="noreferrer"
                        >
                            Click here
                        </a>{' '}
                        for our flyer!
                    </li>
                </ol>

                <span className="text-base lg:text-xl  font-normal text-neutral-700 ">
                    If you can’t get momentum with the school administration,
                    start within your own circles! Of course, not everyone you
                    contact will be moved to make this decision, but you will be
                    amazed about how many actually will!
                </span>

                {/* Divider */}
                <div className="w-full h-[1px] bg-neutral-300" />

                <h2 className="lg:text-[32px] text-2xl text-center lg:text-left text-gray-700 font-bold">
                    Community events
                </h2>

                <span className="text-base lg:text-xl  font-normal text-neutral-700 ">
                    Parents in your community might have questions or concerns
                    they need to voice before they can commit to taking the
                    pledge. Or they might just prefer face-to-face
                    conversations! Unplugged is planning to host a speaker event
                    in Vancouver with Brooke Shannon, Founder of{' '}
                    <a
                        className="font-medium text-blue-500 hover:underline"
                        target="_blank"
                        href="https://www.waituntil8th.org/"
                        rel="noreferrer"
                    >
                        Wait until 8th
                    </a>
                    , which was the inspiration for Unplugged here in Canada.
                    Stay tuned! If you can’t get to this event, we are happy to
                    schedule some time to customize a call for you or your PAC
                    so together we can spread this important initiative. Just{' '}
                    <a
                        className="font-medium text-blue-500 hover:underline"
                        href="mailto:info@unpluggedcanada.com"
                    >
                        get in touch!
                    </a>
                </span>

                {/* Divider */}
                <div className="w-full h-[1px] bg-neutral-300" />

                <h2 className="lg:text-[32px] text-2xl text-center lg:text-left text-gray-700 font-bold">
                    Share in your social circles
                </h2>

                <span className="text-base lg:text-xl  font-normal text-neutral-700 ">
                    Communicate the good news today about the Unplugged pledge
                    with your family and friends by sharing it on your preferred
                    platform. Be sure to tag @Unplugged in your post!
                </span>

                <div className="grid grid-cols-4 lg:flex lg:items-center lg:justify-center lg:gap-10">
                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/unpluggedcanada/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg
                            width="88"
                            height="88"
                            viewBox="0 0 88 88"
                            className="cursor-pointer"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#filter0_d_78_1009)">
                                <rect
                                    x="16"
                                    y="8"
                                    width="56"
                                    height="56"
                                    rx="8"
                                    fill="#F5F5F5"
                                />
                                <rect
                                    x="16.5"
                                    y="8.5"
                                    width="55"
                                    height="55"
                                    rx="7.5"
                                    stroke="#D4D4D4"
                                />
                                <path
                                    d="M37.28 20H50.72C55.84 20 60 24.16 60 29.28V42.72C60 45.1812 59.0223 47.5416 57.282 49.282C55.5416 51.0223 53.1812 52 50.72 52H37.28C32.16 52 28 47.84 28 42.72V29.28C28 26.8188 28.9777 24.4584 30.718 22.718C32.4584 20.9777 34.8188 20 37.28 20ZM36.96 23.2C35.4324 23.2 33.9673 23.8069 32.8871 24.8871C31.8069 25.9673 31.2 27.4324 31.2 28.96V43.04C31.2 46.224 33.776 48.8 36.96 48.8H51.04C52.5676 48.8 54.0327 48.1931 55.1129 47.1129C56.1931 46.0327 56.8 44.5676 56.8 43.04V28.96C56.8 25.776 54.224 23.2 51.04 23.2H36.96ZM52.4 25.6C52.9304 25.6 53.4391 25.8107 53.8142 26.1858C54.1893 26.5609 54.4 27.0696 54.4 27.6C54.4 28.1304 54.1893 28.6391 53.8142 29.0142C53.4391 29.3893 52.9304 29.6 52.4 29.6C51.8696 29.6 51.3609 29.3893 50.9858 29.0142C50.6107 28.6391 50.4 28.1304 50.4 27.6C50.4 27.0696 50.6107 26.5609 50.9858 26.1858C51.3609 25.8107 51.8696 25.6 52.4 25.6ZM44 28C46.1217 28 48.1566 28.8429 49.6569 30.3431C51.1571 31.8434 52 33.8783 52 36C52 38.1217 51.1571 40.1566 49.6569 41.6569C48.1566 43.1571 46.1217 44 44 44C41.8783 44 39.8434 43.1571 38.3431 41.6569C36.8429 40.1566 36 38.1217 36 36C36 33.8783 36.8429 31.8434 38.3431 30.3431C39.8434 28.8429 41.8783 28 44 28ZM44 31.2C42.727 31.2 41.5061 31.7057 40.6059 32.6059C39.7057 33.5061 39.2 34.727 39.2 36C39.2 37.273 39.7057 38.4939 40.6059 39.3941C41.5061 40.2943 42.727 40.8 44 40.8C45.273 40.8 46.4939 40.2943 47.3941 39.3941C48.2943 38.4939 48.8 37.273 48.8 36C48.8 34.727 48.2943 33.5061 47.3941 32.6059C46.4939 31.7057 45.273 31.2 44 31.2Z"
                                    fill="#374151"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_d_78_1009"
                                    x="0"
                                    y="0"
                                    width="88"
                                    height="88"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                >
                                    <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset dy="8" />
                                    <feGaussianBlur stdDeviation="8" />
                                    <feComposite
                                        in2="hardAlpha"
                                        operator="out"
                                    />
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_78_1009"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_78_1009"
                                        result="shape"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </a>
                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Funpluggedcanada.com%2F"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg
                            width="88"
                            height="88"
                            viewBox="0 0 88 88"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#filter0_d_78_1007)">
                                <rect
                                    x="16"
                                    y="8"
                                    width="56"
                                    height="56"
                                    rx="8"
                                    fill="#F5F5F5"
                                />
                                <rect
                                    x="16.5"
                                    y="8.5"
                                    width="55"
                                    height="55"
                                    rx="7.5"
                                    stroke="#D4D4D4"
                                />
                                <path
                                    d="M58.72 20H29.28C28.572 20 28 20.572 28 21.28V50.72C28 51.428 28.572 52 29.28 52H58.72C59.428 52 60 51.428 60 50.72V21.28C60 20.572 59.428 20 58.72 20ZM55.024 29.34H52.468C50.464 29.34 50.076 30.292 50.076 31.692V34.776H54.86L54.236 39.604H50.076V52H45.088V39.608H40.916V34.776H45.088V31.216C45.088 27.084 47.612 24.832 51.3 24.832C53.068 24.832 54.584 24.964 55.028 25.024V29.34H55.024Z"
                                    fill="#374151"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_d_78_1007"
                                    x="0"
                                    y="0"
                                    width="88"
                                    height="88"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                >
                                    <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset dy="8" />
                                    <feGaussianBlur stdDeviation="8" />
                                    <feComposite
                                        in2="hardAlpha"
                                        operator="out"
                                    />
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_78_1007"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_78_1007"
                                        result="shape"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </a>

                    {/* Twitter */}
                    <a
                        href="https://twitter.com/intent/tweet?url=https%3A%2F%2Funpluggedcanada.com%2F"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg
                            width="88"
                            height="88"
                            viewBox="0 0 88 88"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#filter0_d_78_1008)">
                                <rect
                                    x="16"
                                    y="8"
                                    width="56"
                                    height="56"
                                    rx="8"
                                    fill="#F5F5F5"
                                />
                                <rect
                                    x="16.5"
                                    y="8.5"
                                    width="55"
                                    height="55"
                                    rx="7.5"
                                    stroke="#D4D4D4"
                                />
                                <path
                                    d="M53.2016 21.6H58.1088L47.3888 33.8L60 50.4H50.1248L42.392 40.3312L33.5424 50.4H28.6304L40.0976 37.352L28 21.6H38.1248L45.1168 30.8032L53.2016 21.6ZM51.48 47.4752H54.2L36.6464 24.3712H33.728L51.48 47.4752Z"
                                    fill="#374151"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_d_78_1008"
                                    x="0"
                                    y="0"
                                    width="88"
                                    height="88"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                >
                                    <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset dy="8" />
                                    <feGaussianBlur stdDeviation="8" />
                                    <feComposite
                                        in2="hardAlpha"
                                        operator="out"
                                    />
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_78_1008"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_78_1008"
                                        result="shape"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </a>

                    {/* Linkedin */}
                    <a
                        href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Funpluggedcanada.com%2F"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg
                            width="88"
                            height="88"
                            viewBox="0 0 88 88"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#filter0_d_78_1010)">
                                <rect
                                    x="16"
                                    y="8"
                                    width="56"
                                    height="56"
                                    rx="8"
                                    fill="#F5F5F5"
                                />
                                <rect
                                    x="16.5"
                                    y="8.5"
                                    width="55"
                                    height="55"
                                    rx="7.5"
                                    stroke="#D4D4D4"
                                />
                                <path
                                    d="M56.4444 20C57.3874 20 58.2918 20.3746 58.9586 21.0414C59.6254 21.7082 60 22.6126 60 23.5556V48.4444C60 49.3874 59.6254 50.2918 58.9586 50.9586C58.2918 51.6254 57.3874 52 56.4444 52H31.5556C30.6126 52 29.7082 51.6254 29.0414 50.9586C28.3746 50.2918 28 49.3874 28 48.4444V23.5556C28 22.6126 28.3746 21.7082 29.0414 21.0414C29.7082 20.3746 30.6126 20 31.5556 20H56.4444ZM55.5556 47.5556V38.1333C55.5556 36.5963 54.945 35.1221 53.8581 34.0353C52.7712 32.9484 51.2971 32.3378 49.76 32.3378C48.2489 32.3378 46.4889 33.2622 45.6356 34.6489V32.6756H40.6756V47.5556H45.6356V38.7911C45.6356 37.4222 46.7378 36.3022 48.1067 36.3022C48.7668 36.3022 49.3998 36.5644 49.8666 37.0312C50.3333 37.498 50.5956 38.131 50.5956 38.7911V47.5556H55.5556ZM34.8978 29.8844C35.6899 29.8844 36.4496 29.5698 37.0097 29.0097C37.5698 28.4496 37.8844 27.6899 37.8844 26.8978C37.8844 25.2444 36.5511 23.8933 34.8978 23.8933C34.1009 23.8933 33.3368 24.2099 32.7733 24.7733C32.2099 25.3368 31.8933 26.1009 31.8933 26.8978C31.8933 28.5511 33.2444 29.8844 34.8978 29.8844ZM37.3689 47.5556V32.6756H32.4444V47.5556H37.3689Z"
                                    fill="#374151"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_d_78_1010"
                                    x="0"
                                    y="0"
                                    width="88"
                                    height="88"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                >
                                    <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset dy="8" />
                                    <feGaussianBlur stdDeviation="8" />
                                    <feComposite
                                        in2="hardAlpha"
                                        operator="out"
                                    />
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_78_1010"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_78_1010"
                                        result="shape"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    )
}
