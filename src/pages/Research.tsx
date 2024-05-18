import React from 'react'
import Nav from '../components/Nav/Nav.tsx'

import kidPhotoOcean from '../assets/images/researchBg.png'
import anxiousBook from '../assets/images/Anxious Generation 1.jpg'
import anxiousInfographic from '../assets/images/Anxious Generation 2.png'

import Footer from '../components/Footer/Footer.tsx'

export default function Research() {
    return (
        <div className="flex flex-col bg-neutral-100">
            <Nav />
            <div className="flex items-center relative justify-center w-full h-[240px] lg:h-[300px]">
                <img
                    src={kidPhotoOcean}
                    className="w-full h-full object-cover object-top absolute top-0 right-0"
                    alt="FAQs Wallpaper"
                />
            </div>
            <main className="w-full px-4 py-5 lg:px-[180px]  lg:py-16 max-w-[1440px] flex flex-col gap-5 lg:gap-10 mx-auto">
                <h3 className="text-red-500 font-bold text-lg text-center lg:text-left">
                    Research
                </h3>

                {/* anxious mobile */}
                <div className="flex lg:hidden flex-col gap-10">
                    <a
                        target={'_blank'}
                        href="https://www.freetheanxiousgeneration.com/research/the-evidence"
                        rel="noreferrer"
                    >
                        <h3 className=" hover:underline text-center text-2xl  text-blue-600 font-bold">
                            The Anxious Generation - Jonathan Haidt
                        </h3>
                    </a>

                    <article className="flex flex-col gap-5">
                        <img
                            className="object-cover scale-75 -mt-20"
                            src={anxiousBook}
                            alt="The Anxious Generation Book Cover"
                        />

                        <div className="flex flex-col gap-5 -mt-16">
                            <p className="text-neutral-700 text-base font-normal">
                                In The Anxious Generation, social psychologist
                                Jonathan Haidt lays out the facts about the
                                epidemic of teen mental illness that has hit
                                many countries at the same time. He then
                                investigates the nature of childhood, including
                                why children need play and independent
                                exploration to mature into competent, thriving
                                adults. Haidt shows how the “play-based
                                childhood" began to decline in the 1980s, and
                                how it was finally wiped out by the arrival of
                                the "phone-based childhood" in the early 2010s.
                            </p>

                            <p className="text-neutral-700 text-base font-normal">
                                He presents more than a dozen mechanisms by
                                which this "great rewiring of childhood" has
                                interfered with children's social and
                                neurological development, covering everything
                                from sleep deprivation to attention
                                fragmentation, addiction, loneliness, social
                                contagion, social comparison, and perfectionism.
                            </p>

                            <p className="text-neutral-700 text-base font-normal">
                                He explains why social media damages girls more
                                than boys and why boys have been withdrawing
                                from the real world into the virtual world, with
                                disastrous consequences for themselves, their
                                families, and their societies.
                            </p>
                        </div>
                        {/* Divider */}
                        <div className="w-full h-[1px] bg-neutral-300" />
                    </article>
                </div>

                {/* anxious desktop */}
                <div className="hidden lg:flex flex-col gap-10">
                    <a
                        target={'_blank'}
                        href="https://www.freetheanxiousgeneration.com/research/the-evidence"
                        rel="noreferrer"
                    >
                        <h3 className=" hover:underline text-center text-[32px] text-blue-600 font-bold">
                            The Anxious Generation - Jonathan Haidt
                        </h3>
                    </a>

                    <article className="flex flex-row gap-5 items-start">
                        <img
                            className="object-cover max-w-[200px]"
                            src={anxiousBook}
                            alt="The Anxious Generation Book Cover"
                        />

                        <div className="flex flex-col gap-5 ">
                            <p className="text-neutral-700 text-xl font-normal">
                                In The Anxious Generation, social psychologist
                                Jonathan Haidt lays out the facts about the
                                epidemic of teen mental illness that has hit
                                many countries at the same time. He then
                                investigates the nature of childhood, including
                                why children need play and independent
                                exploration to mature into competent, thriving
                                adults. Haidt shows how the “play-based
                                childhood" began to decline in the 1980s, and
                                how it was finally wiped out by the arrival of
                                the "phone-based childhood" in the early 2010s.
                            </p>

                            <p className="text-neutral-700 text-xl font-normal">
                                He presents more than a dozen mechanisms by
                                which this "great rewiring of childhood" has
                                interfered with children's social and
                                neurological development, covering everything
                                from sleep deprivation to attention
                                fragmentation, addiction, loneliness, social
                                contagion, social comparison, and perfectionism.
                            </p>

                            <p className="text-neutral-700 text-xl font-normal">
                                He explains why social media damages girls more
                                than boys and why boys have been withdrawing
                                from the real world into the virtual world, with
                                disastrous consequences for themselves, their
                                families, and their societies.
                            </p>
                        </div>
                        {/* Divider */}
                    </article>
                    <div className="w-full h-[1px] bg-neutral-300" />
                </div>

                {/* section cards */}
                <section className="flex flex-col gap-6 py-5 lg:gap-10">
                    <h3 className="text-center text-2xl lg:text-[32px] text-gray-700 font-bold">
                        How can we free the anxioous generation?
                    </h3>
                    {/* div cards */}
                    <div className="w-full flex flex-col lg:flex-row gap-5 py-5 ">
                        {/* Card1 */}
                        <div className="h-[294px] lg:max-w-[350px] py-5 px-8 flex flex-col gap-[10px] border shadow-md bg-neutral-100 rounded-lg">
                            {/* Icon + title */}
                            <div className="flex flex-col gap-5 items-center justify-center">
                                <svg
                                    width="39"
                                    height="40"
                                    viewBox="0 0 39 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.55128 1.32727L0.242188 3.63636L7.31491 10.7091V36.3636C7.31491 37.3281 7.69803 38.253 8.37998 38.9349C9.06193 39.6169 9.98685 40 10.9513 40H29.1331C30.0975 40 31.0224 39.6169 31.7044 38.9349C32.3863 38.253 32.7695 37.3281 32.7695 36.3636V36.1636L36.1149 39.5091L38.424 37.2M29.1331 32.7273H10.9513V14.3455L29.1331 32.5273V32.7273ZM29.1331 7.27273V23.2727L32.7695 26.9091V3.63636C32.7695 2.67194 32.3863 1.74702 31.7044 1.06507C31.0224 0.383116 30.0975 0 29.1331 0H10.9513C9.64219 0 8.40582 0.672727 7.75128 1.81818L13.2058 7.27273H29.1331Z"
                                        fill="#16A34A"
                                    />
                                </svg>
                                <span className="text-neutral-800 text-xl text-center font-semibold ">
                                    Roll back the phone-based childhood
                                </span>
                            </div>
                            {/* description */}
                            <span className="text-base text-center font-semibold text-neutral-500">
                                This means delaying children’s access to
                                smartphones until hight school and social media
                                platforms until 16. Schools need to go
                                phone-free.
                            </span>
                        </div>

                        {/* card2 */}
                        <div className="h-[294px] lg:max-w-[350px] py-5 px-8 flex flex-col gap-[10px] border shadow-md bg-neutral-100 rounded-lg">
                            {/* Icon + title */}
                            <div className="flex flex-col gap-5 items-center justify-center">
                                <svg
                                    width="34"
                                    height="40"
                                    viewBox="0 0 34 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21.9999 7.50029C24.071 7.50029 25.75 5.82132 25.75 3.75015C25.75 1.67897 24.071 0 21.9999 0C19.9287 0 18.2497 1.67897 18.2497 3.75015C18.2497 5.82132 19.9287 7.50029 21.9999 7.50029ZM9.6314 24.8033L8.47511 27.5003H3.24912C1.8686 27.5003 0.749023 28.6199 0.749023 30.0004C0.749023 31.3809 1.8686 32.5005 3.24912 32.5005H9.30014C10.8041 32.5005 12.1581 31.6067 12.7464 30.2277L13.4331 28.6246L12.5995 28.1323C11.2463 27.3331 10.251 26.1502 9.6314 24.8033ZM30.7502 17.4999H27.3102L25.2742 13.3396C24.2976 11.3434 22.5046 9.88398 20.4475 9.35974L14.8941 7.70811C12.6831 7.17684 10.3806 7.66514 8.57824 9.04723L5.4789 11.4231C4.38276 12.263 4.17494 13.8318 5.01638 14.9279C5.85782 16.0241 7.42585 16.2295 8.5212 15.3904L11.6221 13.0146C12.2213 12.5544 12.9847 12.3895 13.5964 12.5349L14.7449 12.8763L11.8182 19.7039C10.8322 22.0071 11.7159 24.7049 13.873 25.9784L20.5123 29.898L18.3661 36.7522C17.9536 38.0695 18.6872 39.4719 20.0045 39.8844C20.2537 39.9625 20.5053 40 20.7529 40C21.8163 40 22.8022 39.3148 23.1374 38.246L25.6094 30.3504C26.0711 28.7277 25.3836 26.9846 23.9187 26.101L19.1341 23.2775L21.5803 17.1616L23.164 20.3985C23.789 21.6751 25.1109 22.4993 26.5321 22.4993H30.7502C32.1307 22.4993 33.2503 21.3797 33.2503 19.9992C33.2503 18.6187 32.1307 17.4999 30.7502 17.4999Z"
                                        fill="#16A34A"
                                    />
                                </svg>

                                <span className="text-neutral-800 text-xl text-center font-semibold ">
                                    Restore the play-based childhood
                                </span>
                            </div>
                            {/* description */}
                            <span className="text-base text-center font-semibold text-neutral-500">
                                Children and adolescents need more opportunities
                                for independence, free play, and responsibility.
                            </span>
                        </div>

                        {/* card3 */}
                        <div className="h-[294px] lg:max-w-[350px] py-5 px-8 flex flex-col gap-[10px] border shadow-md bg-neutral-100 rounded-lg">
                            {/* Icon + title */}
                            <div className="flex flex-col gap-5 items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="49"
                                    height="48"
                                    viewBox="0 0 49 48"
                                    fill="none"
                                >
                                    <path
                                        d="M13.6878 21.2462C13.857 21.2462 14.0458 21.2722 14.2542 21.3243C14.4625 21.3764 14.6708 21.448 14.8791 21.5391C15.0875 21.6303 15.2958 21.7149 15.5041 21.793C15.7124 21.8711 15.9012 21.9493 16.0705 22.0274L15.758 22.0665C15.6539 22.0795 15.5432 22.086 15.426 22.086C15.2046 22.086 15.0028 22.0534 14.8205 21.9883C14.6383 21.9232 14.469 21.8386 14.3127 21.7344C14.1565 21.6303 14.0003 21.5521 13.844 21.5001C13.6878 21.448 13.5445 21.4089 13.4143 21.3829C13.2841 21.3829 13.1669 21.4089 13.0628 21.461C12.9586 21.5131 12.8544 21.5717 12.7503 21.6368C12.7503 21.5847 12.7047 21.5587 12.6136 21.5587C12.7047 21.4675 12.874 21.3959 13.1214 21.3438C13.3688 21.2917 13.5576 21.2592 13.6878 21.2462ZM16.3244 22.125C16.8583 22.125 17.3465 22.2162 17.7892 22.3985C17.6069 22.4636 17.4246 22.5157 17.2424 22.5547C17.0601 22.5938 16.8713 22.6198 16.676 22.6328C16.4156 22.6328 16.1812 22.6068 15.9729 22.5547C16.038 22.4506 16.1031 22.3855 16.1682 22.3594C16.2333 22.3334 16.2853 22.2553 16.3244 22.125ZM24 4.0005C25.8359 4.0005 27.6002 4.24138 29.2928 4.72314C30.9855 5.2049 32.574 5.87545 34.0583 6.73481C35.5427 7.59416 36.8968 8.64231 38.1207 9.87926C39.3447 11.1162 40.3863 12.4638 41.2457 13.9221C42.105 15.3804 42.7821 16.9689 43.2769 18.6876C43.7716 20.4063 44.0125 22.1771 43.9995 24C43.9995 25.8359 43.7586 27.6002 43.2769 29.2928C42.7951 30.9855 42.1245 32.574 41.2652 34.0583C40.4058 35.5427 39.3577 36.8968 38.1207 38.1207C36.8838 39.3447 35.5362 40.3863 34.0779 41.2457C32.6196 42.105 31.0311 42.7821 29.3124 43.2769C27.5937 43.7716 25.8229 44.0125 24 43.9995C22.1641 43.9995 20.3998 43.7586 18.7072 43.2769C17.0145 42.7951 15.426 42.1245 13.9417 41.2652C12.4573 40.4058 11.1032 39.3577 9.87926 38.1207C8.65533 36.8838 7.61369 35.5362 6.75434 34.0779C5.89498 32.6196 5.21792 31.0311 4.72314 29.3124C4.22836 27.5937 3.98748 25.8229 4.0005 24C4.0005 22.1641 4.24138 20.3998 4.72314 18.7072C5.2049 17.0145 5.87545 15.426 6.73481 13.9417C7.59416 12.4573 8.64231 11.1032 9.87926 9.87926C11.1162 8.65533 12.4638 7.61369 13.9221 6.75434C15.3804 5.89498 16.9689 5.21792 18.6876 4.72314C20.4063 4.22836 22.1771 3.98748 24 4.0005ZM38.8824 14.8401C38.7002 14.5536 38.5179 14.2802 38.3356 14.0198C38.1533 13.7594 37.9645 13.4925 37.7692 13.219C37.7431 13.3362 37.7106 13.4208 37.6715 13.4729C37.6325 13.525 37.6064 13.6422 37.5934 13.8245C37.5934 13.9417 37.639 14.0523 37.7301 14.1565C37.8213 14.2607 37.9385 14.3648 38.0817 14.469C38.2249 14.5732 38.3681 14.6513 38.5114 14.7034C38.6546 14.7554 38.7783 14.801 38.8824 14.8401ZM37.5348 12.9261C37.5348 13.0302 37.5153 13.1018 37.4762 13.1409H37.5934C37.6455 13.1409 37.6846 13.1474 37.7106 13.1604L37.5348 12.9261ZM24 41.4996C25.4843 41.4996 26.9361 41.3108 28.3554 40.9332C29.7746 40.5556 31.1157 40.0217 32.3787 39.3316C33.6417 38.6416 34.8135 37.7952 35.8942 36.7926C36.9749 35.7901 37.9189 34.6703 38.7262 33.4334C38.5569 33.0427 38.3942 32.6456 38.2379 32.242C38.0817 31.8383 38.0036 31.4217 38.0036 30.992C38.0036 30.5233 38.0231 30.1457 38.0621 29.8592C38.1012 29.5728 38.1468 29.3189 38.1989 29.0975C38.2509 28.8762 38.277 28.6874 38.277 28.5311C38.277 28.3749 38.2575 28.1731 38.2184 27.9257C38.1793 27.6783 38.0687 27.4114 37.8864 27.1249C37.7041 26.8385 37.4632 26.4348 37.1637 25.914C37.1768 25.8229 37.1963 25.6992 37.2223 25.5429C37.2484 25.3867 37.2744 25.2239 37.3004 25.0547C37.3265 24.8854 37.333 24.7291 37.32 24.5859C37.307 24.4427 37.2744 24.319 37.2223 24.2148C36.8838 24.1758 36.5322 24.1042 36.1677 24C35.8031 23.8958 35.4776 23.7396 35.1911 23.5313L35.3083 23.4336C35.139 23.4727 34.9698 23.5248 34.8005 23.5899C34.6312 23.655 34.4685 23.7266 34.3122 23.8047C34.156 23.8828 33.9867 23.9349 33.8044 23.9609C33.6222 23.987 33.4464 24.013 33.2771 24.0391L32.9646 24L33.0232 23.8633C32.8409 23.9154 32.6456 23.9805 32.4373 24.0586C32.229 24.1367 32.0271 24.1758 31.8318 24.1758C31.7016 24.1758 31.5128 24.1302 31.2654 24.0391C31.0181 23.9479 30.7707 23.8372 30.5233 23.707C30.2759 23.5768 30.0545 23.4336 29.8592 23.2774C29.6639 23.1211 29.5663 22.9714 29.5663 22.8282L29.6053 22.7696C29.5402 22.6914 29.4556 22.6198 29.3514 22.5547C29.2473 22.4896 29.1496 22.4245 29.0585 22.3594C28.9673 22.2943 28.8827 22.2227 28.8046 22.1446C28.7264 22.0665 28.6939 21.9753 28.7069 21.8711L28.9218 21.6954L28.4725 21.6368L28.3163 21.0509C28.3423 21.116 28.4009 21.142 28.4921 21.129C28.5832 21.116 28.6548 21.0899 28.7069 21.0509L28.0038 20.6798L28.4921 19.4298C28.3098 18.7527 28.2642 18.2319 28.3554 17.8673C28.4465 17.5028 28.6223 17.2033 28.8827 16.9689C29.1431 16.7346 29.4296 16.5002 29.742 16.2658C30.0545 16.0315 30.3735 15.7124 30.6991 15.3088L30.6405 15.0744L31.9295 13.512L32.2225 13.4729C32.587 13.4729 32.9972 13.4599 33.4529 13.4339C33.9086 13.4078 34.3708 13.3622 34.8396 13.2971C35.3083 13.232 35.7705 13.1669 36.2263 13.1018C36.682 13.0367 37.0986 12.9521 37.4762 12.8479C37.0596 12.3532 36.6234 11.8844 36.1677 11.4417C35.7119 10.999 35.2237 10.5759 34.7029 10.1722C34.5596 10.2243 34.3839 10.2959 34.1755 10.3871C33.9672 10.4782 33.7589 10.5954 33.5505 10.7386C33.3422 10.8818 33.1795 11.0381 33.0623 11.2074C32.9451 11.3766 32.8735 11.5524 32.8474 11.7347L32.9646 12.1058C32.7303 12.4834 32.4698 12.7177 32.1834 12.8089C31.8969 12.9 31.604 12.9521 31.3045 12.9651C31.005 12.9781 30.6925 12.9781 30.367 12.9651C30.0415 12.9521 29.729 13.0107 29.4296 13.1409L29.1171 12.4769L29.41 11.3441L29.078 10.8558L32.4568 9.80114C32.3136 9.43656 32.0792 9.16313 31.7537 8.98084C31.4282 8.79856 31.0701 8.70741 30.6795 8.70741V8.51211L31.7732 8.33633C30.5623 7.73739 29.3059 7.28167 28.0038 6.96918C26.7018 6.65668 25.3672 6.50044 24 6.50044C22.8672 6.50044 21.7475 6.61111 20.6407 6.83246C19.534 7.05381 18.4663 7.37281 17.4377 7.78947C16.409 8.20612 15.413 8.72694 14.4495 9.35193C13.4859 9.97691 12.6071 10.68 11.8128 11.4613C12.1513 11.4613 12.4117 11.5459 12.594 11.7152C12.7763 11.8844 12.9456 12.0732 13.1018 12.2815C13.2581 12.4899 13.4208 12.6787 13.5901 12.8479C13.7594 13.0172 13.9872 13.1083 14.2737 13.1214L14.5862 12.887L14.5471 12.4573L15.1916 11.5394L14.6838 10.0941C14.7489 10.055 14.8466 9.98993 14.9768 9.89879C15.107 9.80765 15.2177 9.76208 15.3088 9.76208C15.6994 9.76208 15.9989 9.78161 16.2072 9.82067C16.4156 9.85973 16.5978 9.93134 16.7541 10.0355C16.9103 10.1397 17.047 10.2894 17.1642 10.4847C17.2814 10.68 17.4637 10.9274 17.7111 11.2269L18.4142 10.68C18.5444 10.7321 18.7527 10.8167 19.0392 10.9339C19.3256 11.0511 19.6186 11.1943 19.9181 11.3636C20.2175 11.5329 20.4714 11.7086 20.6798 11.8909C20.8881 12.0732 20.9988 12.2425 21.0118 12.3987C21.0118 12.594 20.9402 12.7503 20.797 12.8675C20.6537 12.9847 20.4649 13.0823 20.2306 13.1604C19.9962 13.2386 19.7553 13.2971 19.5079 13.3362C19.2605 13.3753 19.0131 13.4273 18.7658 13.4925C18.5184 13.5576 18.3296 13.6227 18.1994 13.6878C18.0692 13.7529 17.991 13.8635 17.965 14.0198L19.0978 14.3909C18.8374 14.6122 18.5574 14.814 18.258 14.9963C17.9585 15.1786 17.646 15.3479 17.3205 15.5041L17.3986 15.8361L15.6018 16.5392V17.0861L15.4651 17.1447L15.5627 16.4611L15.4846 16.4416C15.3934 16.4416 15.3414 16.4611 15.3283 16.5002C15.3153 16.5392 15.3088 16.5848 15.3088 16.6369C15.3088 16.689 15.3218 16.7411 15.3479 16.7931C15.3739 16.8452 15.3804 16.8843 15.3674 16.9103L15.1135 16.7736L15.1526 16.8517C15.1526 16.8908 15.1721 16.9494 15.2112 17.0275C15.2502 17.1056 15.3023 17.1773 15.3674 17.2424C15.4325 17.3075 15.4846 17.3726 15.5237 17.4377C15.5627 17.5028 15.5888 17.5353 15.6018 17.5353C15.6018 17.5744 15.5757 17.6134 15.5237 17.6525C15.4716 17.6916 15.4065 17.7176 15.3283 17.7306C15.2502 17.7436 15.1981 17.7632 15.1721 17.7892C15.1461 17.8153 15.1461 17.8218 15.1721 17.8087C15.3544 17.8087 15.3934 17.8218 15.2893 17.8478C15.1851 17.8739 15.0224 17.939 14.801 18.0431C14.5797 18.1473 14.3778 18.297 14.1956 18.4923C14.0133 18.6876 13.9091 18.9741 13.8831 19.3517C13.8831 19.573 13.8896 19.7879 13.9026 19.9962C13.9156 20.2045 13.9091 20.4194 13.8831 20.6407C13.7008 20.1459 13.4273 19.7683 13.0628 19.5079C12.6982 19.2475 12.2555 19.1173 11.7347 19.1173L10.8949 19.1954L11.305 19.4689C11.0837 19.4428 10.8558 19.4168 10.6214 19.3907C10.3871 19.3647 10.1462 19.3582 9.89879 19.3712C9.6514 19.3842 9.43005 19.4363 9.23475 19.5275C9.03944 19.6186 8.84413 19.7553 8.64882 19.9376L8.53164 20.8165C8.53164 21.2331 8.62278 21.5717 8.80507 21.8321C8.98736 22.0925 9.30636 22.2292 9.76208 22.2422C10.1527 22.2422 10.5368 22.1836 10.9144 22.0665C11.292 21.9493 11.6631 21.8126 12.0276 21.6563C11.9105 21.9428 11.7803 22.2162 11.637 22.4766C11.4938 22.737 11.3896 23.0235 11.3245 23.336L11.5784 23.4531C11.8909 23.2448 12.1774 23.2123 12.4378 23.3555C12.6982 23.4987 12.9521 23.707 13.1995 23.9805C13.4469 24.2539 13.7008 24.5338 13.9612 24.8203C14.2216 25.1067 14.5015 25.3151 14.801 25.4453L14.137 25.7968L12.5745 24.9179C12.5875 24.944 12.6005 25.0026 12.6136 25.0937C12.6266 25.1849 12.6201 25.2044 12.594 25.1523L11.8909 23.9609C11.4743 23.9479 11.0316 23.8828 10.5628 23.7656C10.0941 23.6484 9.61885 23.4922 9.13709 23.2969C8.65533 23.1016 8.20612 22.8867 7.78947 22.6524C7.37281 22.418 6.98871 22.1706 6.63715 21.9102L6.50044 24C6.50044 25.5885 6.71528 27.1379 7.14495 28.6483C7.57463 30.1587 8.18008 31.5779 8.96131 32.906C9.74254 34.2341 10.6996 35.445 11.8323 36.5387C12.9651 37.6325 14.2216 38.5634 15.6018 39.3316C15.5367 39.0582 15.5302 38.7848 15.5822 38.5114C15.6343 38.2379 15.6994 37.9645 15.7775 37.6911C15.8557 37.4176 15.9403 37.1442 16.0315 36.8708C16.1226 36.5973 16.1682 36.3174 16.1682 36.0309C16.1682 35.6143 16.1031 35.1781 15.9729 34.7224C15.8427 34.2667 15.6864 33.8044 15.5041 33.3357C15.3218 32.867 15.12 32.4047 14.8987 31.949C14.6773 31.4933 14.5015 31.0636 14.3713 30.66C14.2411 30.2564 14.137 29.8788 14.0588 29.5272C13.9807 29.1757 14.0198 28.8697 14.176 28.6093L13.8831 28.4725C13.9612 28.2903 14.0654 28.1145 14.1956 27.9452C14.3258 27.7759 14.4625 27.6067 14.6057 27.4374C14.7489 27.2681 14.8596 27.0859 14.9377 26.8906C15.0159 26.6952 15.0614 26.4999 15.0744 26.3046C15.0744 26.1744 15.0484 26.0377 14.9963 25.8945C14.9442 25.7513 14.8987 25.6145 14.8596 25.4843L15.2698 25.582C15.4911 25.0742 15.7906 24.7291 16.1682 24.5469C16.5458 24.3646 17.021 24.2669 17.5939 24.2539C17.659 24.2539 17.7957 24.2799 18.0041 24.332C18.2124 24.3841 18.4337 24.4557 18.6681 24.5469C18.9025 24.638 19.1238 24.7096 19.3321 24.7617C19.5405 24.8138 19.6967 24.8659 19.8009 24.9179C19.8009 25.0091 19.853 25.0677 19.9571 25.0937C20.0613 25.1198 20.1199 25.1653 20.1329 25.2304L20.0938 25.3867C20.1329 25.3997 20.2241 25.4453 20.3673 25.5234C20.5105 25.6015 20.6667 25.6992 20.836 25.8164C21.0053 25.9335 21.155 26.0377 21.2852 26.1289C21.4154 26.22 21.5066 26.2916 21.5587 26.3437C21.793 26.3437 22.112 26.4218 22.5157 26.5781C22.9193 26.7343 23.362 26.9296 23.8438 27.164C24.3255 27.3984 24.8008 27.6783 25.2695 28.0038C25.7382 28.3293 26.1809 28.6548 26.5976 28.9803C27.0142 29.3059 27.3333 29.6314 27.5546 29.9569C27.7759 30.2824 27.9062 30.5688 27.9452 30.8162L27.2812 31.5193C27.3333 32.1834 27.2877 32.6912 27.1445 33.0427C27.0012 33.3943 26.7799 33.6873 26.4804 33.9216C26.1809 34.156 25.8359 34.3513 25.4453 34.5076C25.0547 34.6638 24.6315 34.8851 24.1758 35.1716C24.1758 35.432 24.1107 35.7119 23.9805 36.0114C23.8503 36.3109 23.6875 36.5973 23.4922 36.8708C23.2969 37.1442 23.0625 37.3721 22.7891 37.5543C22.5157 37.7366 22.2422 37.8278 21.9688 37.8278L21.1485 37.2028C21.1746 37.2288 21.1746 37.2744 21.1485 37.3395C21.1225 37.4046 21.0899 37.4176 21.0509 37.3786C21.1811 37.626 21.2136 37.9124 21.1485 38.2379C21.0834 38.5634 20.9727 38.8955 20.8165 39.234C20.6602 39.5725 20.4845 39.8915 20.2892 40.191C20.0938 40.4905 19.9181 40.7444 19.7618 40.9527C20.4649 41.135 21.168 41.2717 21.8711 41.3629C22.5743 41.454 23.2839 41.4996 24 41.4996Z"
                                        fill="#16A34A"
                                    />
                                </svg>
                                <span className="text-neutral-800 text-xl text-center font-semibold ">
                                    Reclain life in the real world
                                </span>
                            </div>
                            {/* description */}
                            <span className="text-base text-center font-semibold text-neutral-500">
                                Replace screen time with real-world experiences
                                involving friends and independent activity, so
                                that limits on devices don’t feel like
                                deprivation but the opening up of a world of
                                opportunities.
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-center text-2xl lg:text-[32px] text-gray-700 font-bold">
                            The Four New Norms
                        </h3>
                        <span className="text-neutral-700 text-base lg:text-xl font-normal text-center ">
                            For solving collective action problems
                        </span>
                    </div>

                    {/* Subcards div */}
                    <div className="flex flex-col lg:grid lg:grid-cols-2 pb-5 gap-5">
                        {/* card1 */}
                        <div className="h-[96px] py-5 px-6 flex flex-row gap-5 border shadow-md items-center bg-neutral-100 rounded-lg">
                            <svg
                                className="flex-shrink-0"
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    width="48"
                                    height="48"
                                    rx="24"
                                    fill="#16A34A"
                                />
                                <path
                                    d="M26.418 14V34H22.7949V17.5254H22.6777L18 20.5137V17.1934L22.9707 14H26.418Z"
                                    fill="white"
                                />
                            </svg>
                            <span className="text-lg font-semibold text-neutral-800">
                                No smartphones before high school
                            </span>
                        </div>

                        {/* Card2 */}
                        <div className="h-[96px] py-5 px-6 flex flex-row gap-5 border shadow-md items-center bg-neutral-100 rounded-lg">
                            <svg
                                width="48"
                                height="48"
                                className="flex-shrink-0"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    width="48"
                                    height="48"
                                    rx="24"
                                    fill="#16A34A"
                                />
                                <path
                                    d="M17.1156 34V31.4181L23.9653 24.7033C24.6204 24.0417 25.1663 23.4541 25.6031 22.9403C26.0398 22.4265 26.3674 21.9287 26.5857 21.447C26.8041 20.9653 26.9133 20.4515 26.9133 19.9056C26.9133 19.2826 26.772 18.7495 26.4894 18.3064C26.2068 17.8568 25.8182 17.51 25.3237 17.2659C24.8292 17.0218 24.2672 16.8998 23.6378 16.8998C22.9891 16.8998 22.4207 17.0347 21.9326 17.3044C21.4444 17.5678 21.0655 17.9435 20.7958 18.4316C20.5324 18.9197 20.4008 19.501 20.4008 20.1753H17C17 18.9229 17.2858 17.8343 17.8574 16.9094C18.429 15.9846 19.2158 15.2685 20.2177 14.7611C21.2261 14.2537 22.3821 14 23.6859 14C25.009 14 26.1715 14.2473 27.1734 14.7418C28.1753 15.2364 28.9525 15.9139 29.5048 16.7746C30.0636 17.6352 30.343 18.6179 30.343 19.7225C30.343 20.4611 30.2017 21.1869 29.9191 21.8998C29.6365 22.6127 29.1387 23.4027 28.4258 24.2697C27.7193 25.1368 26.727 26.1869 25.4489 27.42L22.0482 30.8786V31.0135H30.6416V34H17.1156Z"
                                    fill="white"
                                />
                            </svg>

                            <span className="text-lg font-semibold text-neutral-800">
                                No social media before 16
                            </span>
                        </div>

                        {/* card3 */}
                        <div className="h-[96px] py-5 px-6 flex flex-row gap-5 border shadow-md items-center bg-neutral-100 rounded-lg">
                            <svg
                                width="48"
                                height="48"
                                className="flex-shrink-0"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    width="48"
                                    height="48"
                                    rx="24"
                                    fill="#16A34A"
                                />
                                <path
                                    d="M24.1388 34C22.77 34 21.5532 33.7655 20.4886 33.2966C19.4303 32.8276 18.5938 32.1749 17.9791 31.3384C17.3644 30.5019 17.038 29.5355 17 28.4392H20.5741C20.6058 28.9651 20.7801 29.4246 21.097 29.8175C21.4138 30.2041 21.8352 30.5051 22.3612 30.7205C22.8872 30.936 23.4766 31.0437 24.1293 31.0437C24.8264 31.0437 25.4442 30.9233 25.9829 30.6825C26.5215 30.4354 26.943 30.0932 27.2471 29.6559C27.5513 29.2186 27.7003 28.7148 27.6939 28.1445C27.7003 27.5551 27.5482 27.0355 27.2376 26.5856C26.9271 26.1356 26.4772 25.7839 25.8878 25.5304C25.3048 25.2769 24.6014 25.1502 23.7776 25.1502H22.057V22.4316H23.7776C24.4556 22.4316 25.0482 22.3143 25.5551 22.0798C26.0684 21.8454 26.4708 21.5158 26.7624 21.0913C27.0539 20.6603 27.1965 20.1629 27.1901 19.5989C27.1965 19.0475 27.0729 18.5691 26.8194 18.1635C26.5722 17.7516 26.2205 17.4316 25.7643 17.2034C25.3143 16.9753 24.7852 16.8612 24.1768 16.8612C23.5811 16.8612 23.0298 16.9689 22.5228 17.1844C22.0158 17.3999 21.6071 17.7072 21.2966 18.1065C20.9861 18.4994 20.8213 18.9683 20.8023 19.5133H17.4087C17.4341 18.4233 17.7478 17.4664 18.3498 16.6426C18.9582 15.8124 19.7693 15.166 20.7833 14.7034C21.7972 14.2345 22.9347 14 24.1958 14C25.4949 14 26.6229 14.244 27.5798 14.7319C28.5431 15.2136 29.2877 15.8631 29.8137 16.6806C30.3397 17.4981 30.6027 18.4011 30.6027 19.3897C30.609 20.4861 30.2858 21.4049 29.6331 22.1464C28.9867 22.8878 28.1375 23.3726 27.0856 23.6008V23.7529C28.4544 23.943 29.5032 24.4499 30.2319 25.2738C30.967 26.0913 31.3314 27.1084 31.3251 28.3251C31.3251 29.4151 31.0146 30.391 30.3935 31.2528C29.7788 32.1084 28.9297 32.7801 27.846 33.2681C26.7687 33.756 25.533 34 24.1388 34Z"
                                    fill="white"
                                />
                            </svg>

                            <span className="text-lg font-semibold text-neutral-800">
                                Phone-free schools
                            </span>
                        </div>

                        {/* card4 */}

                        <div className="h-[105px] lg:h-[96px] lg:gap-5 py-4 px-6 flex flex-row gap-2 border shadow-md items-center bg-neutral-100 rounded-lg">
                            <svg
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                                fill="none"
                                className="flex-shrink-0"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    width="48"
                                    height="48"
                                    className="min-h-[48px]"
                                    rx="24"
                                    fill="#16A34A"
                                />
                                <path
                                    d="M16 30.2892V27.4083L24.4863 14.0001H26.8887V18.1017H25.4238L19.7109 27.1544V27.3107H31.5566V30.2892H16ZM25.541 34.0001V29.4103L25.5801 28.1212V14.0001H28.998V34.0001H25.541Z"
                                    fill="white"
                                />
                            </svg>

                            <span className="text-base font-semibold text-neutral-800">
                                More independence, free play, and responsibility
                                in the real world.
                            </span>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-neutral-300" />

                    {/* quoted section mobile */}
                    <div className="flex lg:hidden py-5 flex-col gap-6">
                        <a
                            target={'_blank'}
                            href="https://www.waituntil8th.org/blog/2022/5/20/psychiatrist-warns-parents-about-smartphones"
                            rel="noreferrer"
                        >
                            <h3 className="hover:underline text-center text-2xl  text-blue-600 font-bold">
                                Psychiatrist Warns Parents about Smartphones -
                                Dr. Adriana Stacey
                            </h3>
                        </a>
                        {/* quoted */}
                        <div className="w-full flex items-center justify-center">
                            <svg
                                width="19"
                                height="32"
                                viewBox="0 0 19 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.690995 20.3839C0.773354 24.1175 1.94011 27.3845 5.04231 29.7317C8.32295 32.2162 12.9351 32.0652 15.8451 29.3885C19.4826 26.0393 19.3316 20.7271 15.4608 17.7347C13.2096 15.9914 10.7251 15.9914 8.22687 17.2131C7.18365 17.721 6.52478 17.419 6.40124 16.2934C6.38751 16.0875 6.38751 15.8816 6.38751 15.6757C6.46987 12.1754 7.8288 9.19679 10.1074 6.60247C11.7958 4.68075 13.9508 3.39046 16.2432 2.30606C16.4491 2.20997 16.6962 1.9629 16.7236 1.757C16.7922 1.24912 16.7511 0.713781 16.7511 -1.50465e-07C15.5019 0.480428 14.3764 0.864772 13.292 1.33147C5.08349 4.87292 0.498825 11.7774 0.690995 20.3839Z"
                                    fill="#9CA3AF"
                                />
                            </svg>

                            <svg
                                width="19"
                                height="32"
                                viewBox="0 0 19 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.690995 20.3839C0.773354 24.1175 1.94011 27.3845 5.04231 29.7317C8.32295 32.2162 12.9351 32.0652 15.8451 29.3885C19.4826 26.0393 19.3316 20.7271 15.4608 17.7347C13.2096 15.9914 10.7251 15.9914 8.22687 17.2131C7.18365 17.721 6.52478 17.419 6.40124 16.2934C6.38751 16.0875 6.38751 15.8816 6.38751 15.6757C6.46987 12.1754 7.8288 9.19679 10.1074 6.60247C11.7958 4.68075 13.9508 3.39046 16.2432 2.30606C16.4491 2.20997 16.6962 1.9629 16.7236 1.757C16.7922 1.24912 16.7511 0.713781 16.7511 -1.50465e-07C15.5019 0.480428 14.3764 0.864772 13.292 1.33147C5.08349 4.87292 0.498825 11.7774 0.690995 20.3839Z"
                                    fill="#9CA3AF"
                                />
                            </svg>
                        </div>

                        <p className="text-neutral-700 text-base font-normal">
                            The list of issues caused by smartphone is honestly
                            too expansive to discuss at length in this article -
                            depression, anxiety, isolation, increased ADHD
                            symptoms, inauthenticity, cyberbullying, social
                            pressure, insomnia, the inability to get away from
                            non-family influence - the list goes on. Some
                            scientists are even beginning to see a link between
                            suicidal thoughts and smartphone usage. These
                            effects do not go away when your child turns 12. Or
                            14. Or 16. Or probably even 18. After all the brain
                            is not fully mature until around age 25.
                        </p>

                        <div className="w-full flex items-center justify-center">
                            <svg
                                width="19"
                                height="32"
                                viewBox="0 0 19 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.4662 11.6161C18.3839 7.88245 17.2171 4.61554 14.1149 2.2683C10.8343 -0.21621 6.22215 -0.0652177 3.31212 2.61146C-0.325412 5.96074 -0.17442 11.2729 3.69647 14.2653C5.94762 16.0086 8.43213 16.0086 10.9304 14.7869C11.9736 14.279 12.6325 14.581 12.756 15.7066C12.7697 15.9125 12.7697 16.1184 12.7697 16.3243C12.6874 19.8246 11.3284 22.8032 9.04982 25.3975C7.36146 27.3192 5.20639 28.6095 2.91405 29.6939C2.70816 29.79 2.46108 30.0371 2.43362 30.243C2.36499 30.7509 2.40617 31.2862 2.40617 32C3.65529 31.5196 4.78086 31.1352 5.86526 30.6685C14.0737 27.1271 18.6584 20.2226 18.4662 11.6161Z"
                                    fill="#9CA3AF"
                                />
                            </svg>
                            <svg
                                width="19"
                                height="32"
                                viewBox="0 0 19 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.4662 11.6161C18.3839 7.88245 17.2171 4.61554 14.1149 2.2683C10.8343 -0.21621 6.22215 -0.0652177 3.31212 2.61146C-0.325412 5.96074 -0.17442 11.2729 3.69647 14.2653C5.94762 16.0086 8.43213 16.0086 10.9304 14.7869C11.9736 14.279 12.6325 14.581 12.756 15.7066C12.7697 15.9125 12.7697 16.1184 12.7697 16.3243C12.6874 19.8246 11.3284 22.8032 9.04982 25.3975C7.36146 27.3192 5.20639 28.6095 2.91405 29.6939C2.70816 29.79 2.46108 30.0371 2.43362 30.243C2.36499 30.7509 2.40617 31.2862 2.40617 32C3.65529 31.5196 4.78086 31.1352 5.86526 30.6685C14.0737 27.1271 18.6584 20.2226 18.4662 11.6161Z"
                                    fill="#9CA3AF"
                                />
                            </svg>
                        </div>

                        <p className="text-neutral-700 text-base font-normal">
                            Dr. Stacey is a general psychiatrist whose work
                            concentrates on teens and college students. She has
                            a specific interest in how smartphones affect the
                            mental health of children. Dr. Stacey’s insights in
                            regard to technology use have been featured in the
                            Washington Post and on the Today Show. Dr. Stacey
                            has a Bachelor of Science in Biology from the
                            University of Alabama and an M.D. from the
                            University of Arkansas for Medical Sciences. She
                            completed her psychiatry training at the University
                            of Wisconsin.
                        </p>
                    </div>

                    {/* quoted section desktop */}

                    <div className="py-5 hidden lg:flex flex-col gap-10">
                        <div className="px-[158px]">
                            <a
                                target={'_blank'}
                                href="https://www.waituntil8th.org/blog/2022/5/20/psychiatrist-warns-parents-about-smartphones"
                                rel="noreferrer"
                            >
                                <h3 className=" hover:underline text-left text-[32px] text-blue-600 font-bold">
                                    Psychiatrist Warns Parents about Smartphones
                                    - Dr. Adriana Stacey
                                </h3>
                            </a>
                        </div>
                        <div className="px-20 flex gap-5">
                            {/* quoted */}
                            <div className="flex h-full gap-2 items-start justify-start">
                                <svg
                                    width="24"
                                    height="42"
                                    viewBox="0 0 24 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.00759064 27.1786C0.117402 32.1567 1.67307 36.5126 5.80934 39.6423C10.1835 42.9549 16.333 42.7536 20.2131 39.1847C25.0631 34.719 24.8618 27.6361 19.7006 23.6463C16.6991 21.3219 13.3864 21.3219 10.0554 22.9508C8.66447 23.628 7.78597 23.2253 7.62125 21.7245C7.60295 21.45 7.60295 21.1755 7.60295 20.901C7.71276 16.2339 9.52466 12.2624 12.5628 8.80329C14.814 6.241 17.6874 4.52061 20.7438 3.07475C21.0184 2.94663 21.3478 2.61719 21.3844 2.34267C21.4759 1.66549 21.421 0.951706 21.421 -2.00619e-07C19.7555 0.640571 18.2547 1.15303 16.8089 1.7753C5.86425 6.49723 -0.248638 15.7032 0.00759064 27.1786Z"
                                        fill="#9CA3AF"
                                    />
                                </svg>
                                <svg
                                    width="24"
                                    height="42"
                                    viewBox="0 0 24 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.00759064 27.1786C0.117402 32.1567 1.67307 36.5126 5.80934 39.6423C10.1835 42.9549 16.333 42.7536 20.2131 39.1847C25.0631 34.719 24.8618 27.6361 19.7006 23.6463C16.6991 21.3219 13.3864 21.3219 10.0554 22.9508C8.66447 23.628 7.78597 23.2253 7.62125 21.7245C7.60295 21.45 7.60295 21.1755 7.60295 20.901C7.71276 16.2339 9.52466 12.2624 12.5628 8.80329C14.814 6.241 17.6874 4.52061 20.7438 3.07475C21.0184 2.94663 21.3478 2.61719 21.3844 2.34267C21.4759 1.66549 21.421 0.951706 21.421 -2.00619e-07C19.7555 0.640571 18.2547 1.15303 16.8089 1.7753C5.86425 6.49723 -0.248638 15.7032 0.00759064 27.1786Z"
                                        fill="#9CA3AF"
                                    />
                                </svg>
                            </div>

                            <p className="text-neutral-700 text-xl font-normal">
                                The list of issues caused by smartphone is
                                honestly too expansive to discuss at length in
                                this article - depression, anxiety, isolation,
                                increased ADHD symptoms, inauthenticity,
                                cyberbullying, social pressure, insomnia, the
                                inability to get away from non-family influence
                                - the list goes on. Some scientists are even
                                beginning to see a link between suicidal
                                thoughts and smartphone usage. These effects do
                                not go away when your child turns 12. Or 14. Or
                                16. Or probably even 18. After all the brain is
                                not fully mature until around age 25.
                            </p>

                            <div className="flex h-full gap-2 mt-auto items-end justify-end">
                                <svg
                                    width="25"
                                    height="42"
                                    viewBox="0 0 25 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M24.5354 14.8214C24.4256 9.84327 22.8699 5.48738 18.7336 2.35773C14.3594 -0.954946 8.20994 -0.753624 4.3299 2.81528C-0.520146 7.28098 -0.318823 14.3639 4.84236 18.3537C7.8439 20.6781 11.1566 20.6781 14.4875 19.0492C15.8785 18.372 16.757 18.7747 16.9217 20.2754C16.94 20.55 16.94 20.8245 16.94 21.099C16.8302 25.7661 15.0183 29.7376 11.9802 33.1967C9.72901 35.759 6.85559 37.4794 3.79914 38.9253C3.52461 39.0534 3.19517 39.3828 3.15857 39.6573C3.06706 40.3345 3.12197 41.0483 3.12197 42C4.78745 41.3594 6.28822 40.847 7.73409 40.2247C18.6787 35.5028 24.7916 26.2968 24.5354 14.8214Z"
                                        fill="#9CA3AF"
                                    />
                                </svg>
                                <svg
                                    width="25"
                                    height="42"
                                    viewBox="0 0 25 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M24.5354 14.8214C24.4256 9.84327 22.8699 5.48738 18.7336 2.35773C14.3594 -0.954946 8.20994 -0.753624 4.3299 2.81528C-0.520146 7.28098 -0.318823 14.3639 4.84236 18.3537C7.8439 20.6781 11.1566 20.6781 14.4875 19.0492C15.8785 18.372 16.757 18.7747 16.9217 20.2754C16.94 20.55 16.94 20.8245 16.94 21.099C16.8302 25.7661 15.0183 29.7376 11.9802 33.1967C9.72901 35.759 6.85559 37.4794 3.79914 38.9253C3.52461 39.0534 3.19517 39.3828 3.15857 39.6573C3.06706 40.3345 3.12197 41.0483 3.12197 42C4.78745 41.3594 6.28822 40.847 7.73409 40.2247C18.6787 35.5028 24.7916 26.2968 24.5354 14.8214Z"
                                        fill="#9CA3AF"
                                    />
                                </svg>
                            </div>
                        </div>

                        <p className="text-neutral-700 text-xl font-normal">
                            Dr. Stacey is a general psychiatrist whose work
                            concentrates on teens and college students. She has
                            a specific interest in how smartphones affect the
                            mental health of children. Dr. Stacey’s insights in
                            regard to technology use have been featured in the
                            Washington Post and on the Today Show. Dr. Stacey
                            has a Bachelor of Science in Biology from the
                            University of Alabama and an M.D. from the
                            University of Arkansas for Medical Sciences. She
                            completed her psychiatry training at the University
                            of Wisconsin.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-neutral-300" />

                    <div className="flex flex-col gap-6 lg:gap-10 py-5">
                        <a
                            target={'_blank'}
                            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8204720/#:~:text=Results%3A%20Comorbidity,and%20education%20professionals."
                            rel="noreferrer"
                        >
                            <h3 className=" hover:underline text-center lg:text-left text-2xl lg:text-[32px] text-blue-600 font-bold">
                                Excessive Smartphone Use in Young Adults -
                                Yehuda Wacks [National Institute of Health]{' '}
                            </h3>
                        </a>
                        <p className="text-neutral-700 text-base lg:text-xl font-normal">
                            The effects of excessive use of computer screens and
                            smartphones are raising serious concerns among
                            health and educational authorities due to negative
                            effects of such use in children and adolescents.
                            Recent reviews have argued that the evidence
                            supporting excessive smartphone use as an addictive
                            behavior is scarce. Smartphones are being used for
                            various purposes such as gaming, Social Network
                            Services, and watching video clips. Therefore,
                            excessive use of smartphones may have different
                            characteristics according to the type of smartphone
                            use. This paper reviews the existing evidence on
                            excessive smartphone use, and it will discuss its
                            similarities with and differences from Internet
                            addiction. The excessive use of the smartphone has
                            been associated with impaired cognitive functions
                            and mental health problems. There are unique
                            findings on the association between using
                            smartphones, need of constant stimulation, deficits
                            in everyday cognitive functioning and brain changes
                            which should send alarm signals to clinicians and
                            educators in the modern world.
                        </p>
                    </div>
                    {/* Divider */}
                    <div className="w-full h-[1px] bg-neutral-300" />

                    <h3 className="text-red-500 font-bold text-lg uppercase text-center lg:text-left">
                        Would you like to learn more? Here are some great books.
                    </h3>
                    {/* div book 1 */}
                    <div className="py-5 flex flex-col lg:flex-row gap-5 px-3 lg:py-10 lg:px-5 bg-neutral-200 rounded-lg shadow-md">
                        <img
                            className="w-[200px] h-[300px] object-cover mx-auto "
                            src="https://images.squarespace-cdn.com/content/v1/58938b9fbebafb25099e8c5b/1516246787819-COOL1QXJTFXNKMB4H5QZ/Be+the+Parent+Please.jpg?format=1500w"
                            alt="Be the Parent Please Book Cover"
                        />

                        <p className="text-base lg:text-xl font-normal text-neutral-700">
                            <a
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                target="_blank"
                                href="https://www.amazon.com/gp/product/1599474824/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1599474824&linkCode=as2&tag=waituntil8th-20&linkId=19b80cbcf8271fcc0de3b07102b9a7b0"
                                rel="noreferrer"
                            >
                                Be the Parent, Please
                            </a>{' '}
                            is a must-read for any parent fumbling around in
                            this digital world of parenting. <br /> <br />
                            Toddlers on tablets. Pre-teens on Tumblr. Thanks to
                            a variety of factors—from tech companies hungry for
                            new audiences, to school dministrations bent on
                            making education digital, to a culture that promotes
                            everyone as the star of their own reality shows—
                            echnology is irrevocably a part of childhood, and
                            parents are struggling to keep up. What should be
                            allowed? What should be denied? And, given the
                            ubiquity of technology and its inherent usefulness,
                            what do sensible boundaries even look like? <br />{' '}
                            <br />A noted columnist and mother of three, Naomi
                            Schaefer Riley fully understands the seductive
                            nature of screens. Riley gives parents a wakeup call
                            to put healthy boundaries in place when it comes to
                            technology and kids.
                        </p>
                    </div>

                    {/* div book 2 */}
                    <div className="py-5 flex flex-col lg:flex-row gap-5 px-3 lg:py-10 lg:px-5 rounded-lg">
                        <img
                            className="w-[200px] h-[300px] object-cover mx-auto"
                            src="https://m.media-amazon.com/images/I/71PGou+7PyL._SL1200_.jpg"
                            alt="I-minds Book Cover"
                        />

                        <p className="text-base lg:text-xl font-normal leading-7 text-neutral-700">
                            <a
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                target="_blank"
                                href="https://www.amazon.com/gp/product/1599474824/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1599474824&linkCode=as2&tag=waituntil8th-20&linkId=19b80cbcf8271fcc0de3b07102b9a7b0"
                                rel="noreferrer"
                            >
                                i-Minds: How Cell Phones, Computers, Gaming, and
                                Social Media are Changing our Brains, our
                                Behavior, and the Evolution of our Species
                            </a>{' '}
                            . i-Minds is an exploration of modern culture and
                            the place i-technologies (e.g., computers, cell
                            phones, gaming devices) have in our world. Weaving
                            through the hard and soft sciences, including
                            history, research, and popular literature; media and
                            industry hype; sociology and social psychology;
                            personal observations and tales from over 20 years
                            of clinical practice and research, Dr. Mari Swingle
                            explores the influence of i-technology on children
                            and families, friends and lovers, work and learning,
                            development and brain function as influenced by our
                            ever changing world and the technologies within. In
                            this exploration, Dr. Mari paints a picture of
                            change, giving food for thought on what we should
                            embrace and accept, what we should unequivocally
                            reject, and many aspects of the digital era that are
                            timely to debate.
                        </p>
                    </div>

                    {/* div book 3 */}
                    <div className="py-5 flex flex-col lg:flex-row gap-5 px-3 lg:py-10 lg:px-5 bg-neutral-200 rounded-lg shadow-md">
                        <img
                            className="w-[200px] h-[300px] object-cover  mx-auto"
                            src="https://images.squarespace-cdn.com/content/v1/58938b9fbebafb25099e8c5b/1516299770251-ZY5ONR87CN4IWPMXCWEK/Wired+Child+.jpg?format=300w"
                            alt="Be the Parent Please Book Cover"
                        />

                        <p className="text-base lg:text-xl font-normal text-neutral-700">
                            <a
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                target="_blank"
                                href="https://www.amazon.com/gp/product/150321169X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=150321169X&linkCode=as2&tag=waituntil8th-20&linkId=5afe5dfc2d4637392c93872c0be7e07b"
                                rel="noreferrer"
                            >
                                Wired Child
                            </a>{' '}
                            a practical guide to building your child’s bond with
                            family and fostering school success amid the allure
                            of digital screens. Kids’ obsessive use of video
                            games, social media, and texting is eclipsing their
                            connections with family and school—the two most
                            important contributors to their well-being. The
                            result: a generation of kids who suffer from soaring
                            rates of emotional and academic problems, with many
                            falling prey to an epidemic of video game and
                            internet addictions. <br /> <br />
                            Wired Child gives you the confidence and skills you
                            need to safely navigate your children through a
                            rapidly shifting media landscape. Dr. Freed offers
                            concrete parenting strategies that will help you
                            create the strong family kids need and encourage
                            their school success. You’ll also learn how to
                            protect kids from destructive tech addictions, and
                            instead guide them to use technology productively as
                            a positive force for their future.
                        </p>
                    </div>

                    {/* div book 4 */}
                    <div className="py-5 flex flex-col lg:flex-row gap-5 px-3 lg:py-10 lg:px-5 rounded-lg">
                        <img
                            className="w-[200px] h-[300px] object-cover  mx-auto"
                            src="https://images.squarespace-cdn.com/content/v1/58938b9fbebafb25099e8c5b/1517325922554-R5SSWZZIWTF92BGWZL8G/iGenCover+copy+2.jpg?format=1500w"
                            alt="Be the Parent Please Book Cover"
                        />

                        <p className="text-base lg:text-xl font-normal leading-7 text-neutral-700">
                            In{' '}
                            <a
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                target="_blank"
                                href="https://www.amazon.ca/i-Minds-Constant-Connectivity-Rewiring-Brains-dp-0865719012/dp/0865719012/ref=dp_ob_title_bk"
                                rel="noreferrer"
                            >
                                iGen: Why Today’s Super-Connected Kids Are
                                Growing Up Less Rebellious, More Tolerant, Less
                                Happy--and Completely Unprepared for
                                Adulthood--and What That Means for the Rest of
                                Us
                            </a>
                            , Dr. Jean Twenge offers am alarming portrait of a
                            new generation. Born in the mid-1990s to the
                            mid-2000s and later, iGen is the first generation to
                            spend their entire adolescence in the age of the
                            smartphone. These kids had an instagram account
                            before high school and do not remember a time before
                            the internet. With social media and texting
                            replacing other activities, iGen spends less time
                            with their friends in person—perhaps why they are
                            experiencing unprecedented levels of anxiety,
                            depression, and loneliness. With generational
                            divides wider than ever, parents, educators, and
                            employers have an urgent need to understand today’s
                            rising generation of teens and young adults.
                        </p>
                    </div>

                    {/* div book 5 */}
                    <div className="py-5 flex flex-col lg:flex-row gap-5 px-3 lg:py-10 lg:px-5 bg-neutral-200 rounded-lg shadow-md">
                        <img
                            className="w-[200px] h-[300px] object-cover  mx-auto"
                            src="https://images.squarespace-cdn.com/content/v1/58938b9fbebafb25099e8c5b/1517155236683-3BKQ0XIDZH6YYO1RYKXO/big+disconnect.jpg?format=1500w"
                            alt="Be the Parent Please Book Cover"
                        />

                        <p className="text-base lg:text-xl font-normal text-neutral-700">
                            In{' '}
                            <a
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                target="_blank"
                                href="https://www.amazon.com/gp/product/0062082434/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0062082434&linkCode=as2&tag=waituntil8th-20&linkId=0e7a057ca1d87c93d4bedf84d484b374"
                                rel="noreferrer"
                            >
                                The Big Disconnect{' '}
                            </a>
                            In The Big Disconnect, clinical psychologist
                            Catherine Steiner-Adair takes an in-depth look at
                            how the Internet and the digital revolution are
                            profoundly changing childhood and family dynamics,
                            and offers solutions parents can use to successfully
                            shepherd their children through the technological
                            wilderness. Families are in crisis as they face this
                            issue, and even more so than they realize. Not only
                            do chronic tech distractions have deep and lasting
                            effects but children also desperately need parents
                            to provide what tech cannot: close, significant
                            interactions with the adults in their lives. Drawing
                            on real-life stories from her clinical work with
                            children and parents and her consulting work with
                            educators and experts across the country,
                            Steiner-Adair offers insights and advice that can
                            help parents achieve greater understanding,
                            authority, and confidence as they engage with the
                            tech revolution unfolding in their living rooms.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-neutral-300" />

                    {/* div relevant studies */}

                    <div className="flex flex-col gap-6 py-5 lg:py-10">
                        <h3 className="text-red-500 font-bold text-lg uppercase text-center lg:text-left">
                            Relevant Studies:
                        </h3>

                        <span className="text-center lg:text-left text-neutral-700 font-bold text-lg ">
                            Websites that offer Canadian Research and statistics
                            include:
                        </span>

                        <ul className="list-disc text-blue-600 pl-5">
                            <li>
                                <a
                                    target="_blank"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    href="https://mediasmarts.ca/research-and-evaluation"
                                    rel="noreferrer"
                                >
                                    Media Smarts
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    href="https://ctrl-f.ca/en/the-evidence/"
                                    rel="noreferrer"
                                >
                                    CTRL-F
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    href="https://www.protectchildren.ca/en/resources-research/#resources"
                                    rel="noreferrer"
                                >
                                    Canadian Centre for Child Protection{' '}
                                </a>
                            </li>
                        </ul>
                        {/* Divider */}
                        <div className="w-full h-[1px] bg-neutral-300" />

                        <span className="text-center lg:text-left text-neutral-700 font-bold text-lg ">
                            Global research and studies
                        </span>

                        <ul className="list-disc pl-5 text-blue-600">
                            <li>
                                <a
                                    target="_blank"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    href="https://ncpcr.gov.in/uploads/165650458362bc410794e02_effect1.PDF"
                                    rel="noreferrer"
                                >
                                    Effects (Physical, Behavioural and
                                    Psycho-social) of using Mobile Phones and
                                    other Devices with Internet Accessibility by
                                    Children
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4735240"
                                    rel="noreferrer"
                                >
                                    Smartphone Bans, Student Outcome and Mental
                                    Health
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    href="https://www.cmaj.ca/content/192/6/E136.short"
                                    rel="noreferrer"
                                >
                                    Smartphones, social media use and youth
                                    mental health
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    href="https://pubmed.ncbi.nlm.nih.gov/31193561/"
                                    rel="noreferrer"
                                >
                                    Social Media Use and Adolescent Mental
                                    Health: Findings From the UK Millennium
                                    Cohort Study
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    href="https://www.pewresearch.org/internet/2022/08/10/teens-social-media-and-technology-2022/"
                                    rel="noreferrer"
                                >
                                    Teens, Social Media and Technology 2022
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    href="https://www.hhs.gov/about/news/2023/05/23/surgeon-general-issues-new-advisory-about-effects-social-media-use-has-youth-mental-health.html"
                                    rel="noreferrer"
                                >
                                    Surgeon General Issues New Advisory About
                                    Effects Social Media Use Has on Youth Mental
                                    Health
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
