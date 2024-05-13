import React from 'react'
import Nav from '../components/Nav/Nav.tsx'
import Footer from '../components/Footer/Footer.tsx'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../components/ui/Accordion.tsx'

const faqs = [
    {
        question:
            'WHY WAIT UNTIL AGE 14 FOR A SMARTPHONE? DOES IT MATTER THAT MUCH?',
        answer: 'Many experts, from child psychologists to internet safety leaders – and even technology executives – agree that it is best to wait until at least 14 before exposing children to smartphones. Social media and apps are designed to encourage addictive behaviors and studies show that using screens for several hours a day can impair children’s cognitive and language abilities, quality of sleep, and may even thin the cortex of their brain. Constant stimulation from addictive apps, along with exposure to harmful social interactions that children’s developing minds are not ready for, can cause cortisol to rise and has led to an explosion of anxiety and depression in adolescents.',
    },
    {
        question:
            'I WANT MY CHILD TO HAVE A WAY TO CONNECT WITH THEIR FRIENDS OUTSIDE OF SCHOOL. WHAT SHOULD I DO?',
        answer: 'After careful consideration, some families have decided to allow their children to connect with peers via texting and Facetime on a stripped-down iPad kept at home. This can be a nice, slow “on-ramp” where they connect socially with their friends online, but also in a safe space. Everything can be removed on the iPad except iMessage and FaceTime (no App Store, games, internet browser, etc). This way they can easily get by without needing a fully connected smartphone.',
    },
    {
        question: 'WHY ARE iPADS DIFFERENT?',
        answer: "No one walks around with an iPad in their pocket like a smartphone. The smartphone is a mini-computer in your child's hands all day every day, whereas an iPad is more often used within the home or for travel. It’s not used as often as a phone, or for as long.",
    },
    {
        question: 'HOW ELSE CAN MY KID STAY CONNECTED WITH OTHER KIDS?',
        answer: 'An old-school approach is not bad! My sister has used a landline phone at home for a few years, and I have found it super cute when my daughter calls her cousins and grandpa on the landline! My family followed this great idea and have secured a Fongo phone. The cost is only a few dollars a month, and we are hoping our daughter’s close friends and other families will do it too.',
    },
    {
        question:
            'WHAT ABOUT WHEN MY CHILD GETS TO MIDDLE SCHOOL? IT IS SO BIG THERE!',
        answer: 'The truth is that many families have navigated middle school phone-free for decades. The school office phone is available when your child needs to reach you or when you need to reach them. Coaches and teachers have phones the child can use in emergencies. In many districts, students have regular access to school-issued email. Yes, your children are reachable!',
    },
    {
        question:
            'ISN’T IT SAFER TO HAVE A SMARTPHONE? WHAT IF I NEED TO CONTACT MY CHILD?',
        answer: 'Consider buying your child a basic phone that just calls and texts without access to the internet or online apps, or a two-way calling watch. The basic phone avoids many of the distractions and dangers of the smartphone. Most major carriers offer flip phones or other basic phones as low-cost options.',
    },
    {
        question: 'CAN I GET MY CHILD A SMARTWATCH AND STILL SIGN THE PLEDGE?',
        answer: 'Yes. The pledge is for smartphones only. If you get a smartwatch for your child, keep some things in mind. They can be very distracting, especially at school. In addition, a child can access some inappropriate content on some smartwatches. You can turn off notifications on the watch during the school day and disable your child’s ability to download apps onto the watch.',
    },
    {
        question: 'MY CHILD ALREADY HAS A SMARTPHONE. IS IT TOO LATE?',
        answer: 'No! It is never too late to change your mind as a parent. Please share with your child that many families in their grade have decided that it is better to wait to have a smartphone until at least age 14. You can discuss with your child the many reasons families in their community are waiting until their children are older.',
    },
    {
        question:
            "MY CHILD'S SIBLING GOT A SMARTPHONE WHEN THEY WERE YOUNGER. HOW DO I SWITCH GEARS WITH THIS CHILD?",
        answer: 'You can be honest with your children about why you have changed your approach. We know more now than we used to. Circumstances and community constantly shape how parents make decisions for each child. You can reassure them that other children in their grade are following the same path and they will not be the only person without a smartphone.',
    },
    {
        question: 'HOW DOES THE PLEDGE WORK?',
        answer: 'By banding together, we can decrease the social pressure within the child’s grade to have a smartphone. By signing the online pledge, you promise not to give your child a smartphone until at least age 14, as long as at least five families from your child’s grade and school also sign the pledge. As soon as five families have signed, you will be notified that the pledge is in effect! We will not share your information with any third party outside of our organization and your personal information will not be made public.',
    },
    {
        question: 'WHAT HAPPENS AS SOON AS I SIGN THE PLEDGE?',
        answer: "You will receive an email from Unplugged within one to two business days with tips and suggestions on how to rally other parents from your child's school to sign the pledge. If you do not receive an email after a couple of days, please notify us via email at info@unpluggedcanada.com",
    },
    {
        question: 'IS MY PLEDGE ANONYMOUS?',
        answer: 'Only when the Pledge becomes active (when 5 families of the same school grade have signed the Pledge), your surname will be shared with the other parents who signed the Pledge. We will not share your email, your child’s name or their school’s name with anyone, and will never post it publicly. We want to help build a community of like-minded parents that are open to discuss this topic, which is why we believe sharing your family name is important.',
    },
    {
        question: 'HOW DO I BRING THE PLEDGE TO MY SCHOOL?',
        answer: 'Simply sign the pledge yourself and encourage other parents in your school community to sign as well. Once you take the pledge, you will receive an email in one to two business days with suggestions on how to spread the word.',
    },
    {
        question: 'DO YOU HAVE ANY OTHER RESOURCES I COULD SHARE?',
        answer: 'Yes! Please go to our Research page for many materials you may share in your community.',
    },

    {
        question: 'IS THE PLEDGE ONLY IN CANADA?',
        answer: 'Yes, the Unplugged pledge is only in Canada, but we plan to expand it to South America in the future. There is a very similar movement in the US called Wait Until 8th which is gaining traction too.',
    },
]

export default function FAQs() {
    return (
        <div className="flex flex-col bg-neutral-100">
            <Nav />
            <div className="flex items-center relative justify-center w-full h-[240px] lg:h-[300px]">
                <h2 className="text-2xl lg:text-[40px] z-20 font-bold uppercase text-neutral-100">
                    Here's what you need to know
                </h2>
                <img
                    src={
                        'https://s3-alpha-sig.figma.com/img/2dfc/c39f/a73ec471ba06b07159f7defd5885a3ce?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JMeyaJFsPPi1-HWzavfk5sUXtnPg8DgLMCbTaaZViNz0b8EHzB-WmFqKf0uHdsQ7E49sEDfhbF7j1arx0f-gTPSvR-Q-XTIhUOEnVnQdJsnyglfm8xq6OlnOsewUmUF8qRbgQ75DUBpd3zySKtFJzreZlvwakvYoTD8sOyoPN4XzCezNBzeg-cGghC6ZlEK5bmSK3QaxI5kTY2TseT7UNgiAGWe5DKyg2pidFnTQhghWWKrTm~5-Oh5u0zyOj-Hmr9V-C5dNAfId0Sg~Jj8JKl1M3-gZL2SjXR0vjl4qQesGKdcGyKPP7w~2kIAs-JSjsaf~dinAMFwYZZ8cDdksTw__'
                    }
                    className="w-full h-full object-cover absolute top-0 right-0"
                    alt="FAQs Wallpaper"
                />
            </div>
            <main className="w-full px-4 py-5 lg:px-[180px]  lg:py-16 max-w-[1440px] flex flex-col gap-5 lg:gap-10 mx-auto">
                <span className="text-lg font-bold text-red-500 ">FAQ</span>

                <h2 className="text-2xl font-bold text-gray-700">
                    The main questions about Unplugged.
                </h2>

                <div>
                    <Accordion
                        type="multiple"
                        className="w-full flex flex-col gap-4"
                    >
                        {/* Question 1 */}
                        <AccordionItem value={`item-1`}>
                            <AccordionTrigger className="text-left [&[data-state=open]]:text-green-500 hover:cursor-pointer">
                                WHY WAIT UNTIL AGE 14 FOR A SMARTPHONE? DOES IT
                                MATTER THAT MUCH?
                            </AccordionTrigger>
                            <AccordionContent>
                                Many experts, from child psychologists to
                                internet safety leaders – and even technology
                                executives – agree that it is best to wait until
                                at least 14 before exposing children to
                                smartphones. Social media and apps are designed
                                to encourage addictive behaviors and studies
                                show that using screens for several hours a day
                                can impair children’s cognitive
                                <sup>[1]</sup> and language abilities
                                <sup>[2]</sup>, quality of sleep<sup>[3]</sup>,
                                and may even thin the cortex of their brain.
                                <sup>[2]</sup> Constant stimulation from
                                addictive apps, along with exposure to harmful
                                social interactions that children’s developing
                                minds are not ready for, can cause cortisol to
                                rise and has led to an explosion of anxiety and
                                depression in adolescents.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-2`}>
                            <AccordionTrigger className="text-left [&[data-state=open]]:text-green-500 hover:cursor-pointer">
                                I WANT MY CHILD TO HAVE A WAY TO CONNECT WITH
                                THEIR FRIENDS OUTSIDE OF SCHOOL. WHAT SHOULD I
                                DO?
                            </AccordionTrigger>
                            <AccordionContent>
                                After careful consideration, some families have
                                decided to allow their children to connect with
                                peers via texting and Facetime on a
                                stripped-down iPad kept at home. This can be a
                                nice, slow “on-ramp” where they connect socially
                                with their friends online, but also in a safe
                                space. Everything can be removed on the iPad
                                except iMessage and FaceTime (no App Store,
                                games, internet browser, etc). This way they can
                                easily get by without needing a fully connected
                                smartphone.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-3`}>
                            <AccordionTrigger className="text-left [&[data-state=open]]:text-green-500 hover:cursor-pointer">
                                WHY ARE iPADS DIFFERENT?
                            </AccordionTrigger>
                            <AccordionContent>
                                No one walks around with an iPad in their pocket
                                like a smartphone. The smartphone is a
                                mini-computer in your child's hands all day
                                every day, whereas an iPad is more often used
                                within the home or for travel. It’s not used as
                                often as a phone, or for as long.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-4`}>
                            <AccordionTrigger className="text-left [&[data-state=open]]:text-green-500 hover:cursor-pointer">
                                HOW ELSE CAN MY KID STAY CONNECTED WITH OTHER
                                KIDS?
                            </AccordionTrigger>
                            <AccordionContent>
                                An old-school approach is not bad! My sister has
                                used a landline phone at home for a few years,
                                and I have found it super cute when my daughter
                                calls her cousins and grandpa on the landline!
                                My family followed this great idea and have
                                secured a Fongo phone. The cost is only a few
                                dollars a month, and we are hoping our
                                daughter’s close friends and other families will
                                do it too.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-5`}>
                            <AccordionTrigger className="text-left [&[data-state=open]]:text-green-500 hover:cursor-pointer">
                                WHAT ABOUT WHEN MY CHILD GETS TO MIDDLE SCHOOL?
                                IT IS SO BIG THERE!
                            </AccordionTrigger>
                            <AccordionContent>
                                The truth is that many families have navigated
                                middle school phone-free for decades. The school
                                office phone is available when your child needs
                                to reach you or when you need to reach them.
                                Coaches and teachers have phones the child can
                                use in emergencies. In many districts, students
                                have regular access to school-issued email. Yes,
                                your children are reachable!
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-6`}>
                            <AccordionTrigger className="text-left [&[data-state=open]]:text-green-500 hover:cursor-pointer">
                                ISN’T IT SAFER TO HAVE A SMARTPHONE? WHAT IF I
                                NEED TO CONTACT MY CHILD?
                            </AccordionTrigger>
                            <AccordionContent>
                                Consider buying your child a basic phone that
                                just calls and texts without access to the
                                internet or online apps, or a two-way calling
                                watch. The basic phone avoids many of the
                                distractions and dangers of the smartphone. Most
                                major carriers offer flip phones or other basic
                                phones as low-cost options.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-7`}>
                            <AccordionTrigger className="text-left [&[data-state=open]]:text-green-500 hover:cursor-pointer">
                                CAN I GET MY CHILD A SMARTWATCH AND STILL SIGN
                                THE PLEDGE?
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes. The pledge is for smartphones only. If you
                                get a smartwatch for your child, keep some
                                things in mind. They can be very distracting,
                                especially at school. In addition, a child can
                                access some inappropriate content on some
                                smartwatches. You can turn off notifications on
                                the watch during the school day and disable your
                                child’s ability to download apps onto the watch.{' '}
                                <a
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    target="_blank"
                                    href="https://protectyoungeyes.com/your-complete-guide-to-understanding-the-apple-watch/"
                                    rel="noreferrer"
                                >
                                    Check out this guide
                                </a>{' '}
                                from Protect Young Eyes if you are considering
                                an Apple Watch or something similar.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-8`}>
                            <AccordionTrigger className="text-left [&[data-state=open]]:text-green-500 hover:cursor-pointer">
                                MY CHILD ALREADY HAS A SMARTPHONE. IS IT TOO
                                LATE?
                            </AccordionTrigger>
                            <AccordionContent>
                                No! It is never too late to change your mind as
                                a parent. Please share with your child that many
                                families in their grade have decided that it is
                                better to wait to have a smartphone until at
                                least age 14. You can discuss with your child
                                the many reasons families in their community are
                                waiting until their children are older.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-9`}>
                            <AccordionTrigger className="text-left [&[data-state=open]]:text-green-500 hover:cursor-pointer">
                                MY CHILD'S SIBLING GOT A SMARTPHONE WHEN THEY
                                WERE YOUNGER. HOW DO I SWITCH GEARS WITH THIS
                                CHILD?
                            </AccordionTrigger>
                            <AccordionContent>
                                You can be honest with your children about why
                                you have changed your approach. We know more now
                                than we used to. Circumstances and community
                                constantly shape how parents make decisions for
                                each child. You can reassure them that other
                                children in their grade are following the same
                                path and they will not be the only person
                                without a smartphone.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-10`}>
                            <AccordionTrigger className="text-left [&[data-state=open]]:text-green-500 hover:cursor-pointer">
                                HOW DOES THE PLEDGE WORK?
                            </AccordionTrigger>
                            <AccordionContent>
                                By banding together, we can decrease the social
                                pressure within the child’s grade to have a
                                smartphone. By signing the online pledge, you
                                promise not to give your child a smartphone
                                until at least age 14, as long as at least five
                                families from your child’s grade and school also
                                sign the pledge. As soon as five families have
                                signed, you will be notified that the pledge is
                                in effect! We will not share your information
                                with any third party outside of our organization
                                and your personal information will not be made
                                public.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-11`}>
                            <AccordionTrigger className="text-left [&[data-state=open]]:text-green-500 hover:cursor-pointer">
                                WHAT HAPPENS AS SOON AS I SIGN THE PLEDGE?
                            </AccordionTrigger>
                            <AccordionContent>
                                You will receive an email from Unplugged within
                                one to two business days with tips and
                                suggestions on how to rally other parents from
                                your child's school to sign the pledge. If you
                                do not receive an email after a couple of days,
                                please notify us via email at at{' '}
                                <a
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    href="mailto:info@unpluggedcanada.com"
                                >
                                    info@unpluggedcanada.com
                                </a>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-12`}>
                            <AccordionTrigger className="text-left [&[data-state=open]]:text-green-500 hover:cursor-pointer">
                                IS MY PLEDGE ANONYMOUS?
                            </AccordionTrigger>
                            <AccordionContent>
                                Only when the Pledge becomes active (when 5
                                families of the same school grade have signed
                                the Pledge), your surname will be shared with
                                the other parents who signed the Pledge. We will
                                not share your email, your child’s name or their
                                school’s name with anyone, and will never post
                                it publicly. We want to help build a community
                                of like-minded parents that are open to discuss
                                this topic, which is why we believe sharing your
                                family name is important.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-13`}>
                            <AccordionTrigger className="text-left [&[data-state=open]]:text-green-500 hover:cursor-pointer">
                                HOW DO I BRING THE PLEDGE TO MY SCHOOL?
                            </AccordionTrigger>
                            <AccordionContent>
                                Simply{' '}
                                <a
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    target="_blank"
                                    href="https://unpluggedcanada.com/#/pledge"
                                    rel="noreferrer"
                                >
                                    sign the pledge
                                </a>{' '}
                                yourself and encourage other parents in your
                                school community to sign as well. Once you take
                                the pledge, you will receive an email in one to
                                two business days with suggestions on how to
                                spread the word.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-14`}>
                            <AccordionTrigger className="text-left [&[data-state=open]]:text-green-500 hover:cursor-pointer">
                                DO YOU HAVE ANY OTHER RESOURCES I COULD SHARE?
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes! Please go to our{' '}
                                <a
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    target="_blank"
                                    href="https://unpluggedcanada.com/research"
                                    rel="noreferrer"
                                >
                                    Research page
                                </a>{' '}
                                for many materials you may share in your
                                community.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value={`item-15`}>
                            <AccordionTrigger className="text-left [&[data-state=open]]:text-green-500 hover:cursor-pointer">
                                IS THE PLEDGE ONLY IN CANADA?
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes, the Unplugged pledge is only in Canada, but
                                we plan to expand it to South America in the
                                future. There is a very similar movement in the
                                US called{' '}
                                <a
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    target="_blank"
                                    href="https://www.waituntil8th.org/"
                                    rel="noreferrer"
                                >
                                    Wait Until 8th
                                </a>{' '}
                                which is gaining traction too.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </main>

            <Footer />
        </div>
    )
}
