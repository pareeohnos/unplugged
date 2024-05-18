import React, { useState, useEffect } from 'react'
import Footer from '../../components/Footer/Footer.tsx'
import pledgerBg from '../../assets/images/pledgerBg.jpg'
import Nav from '../../components/Nav/Nav.tsx'
import './Pledge.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ChildForm from '../../components/ChildForm/ChildForm.tsx'
import GuardianForm from '../../components/GuardianForm/GuardianForm.tsx'
import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function Pledge() {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = React.useState(0)

    const [isGuardian, setIsGuardian] = useState(true)
    const [isSchoolForm, setIsSchoolForm] = useState(false)

    useEffect(() => {
        if (loading) {
            const timer = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress >= 100) {
                        navigate('/')
                        window.location.reload()
                        return 0
                    } else return prevProgress + 10
                })
            }, 800)
            return () => {
                clearInterval(timer)
            }
        }
    }, [loading])

    const [guardianData, setGuardianData] = useState({
        id: null,
        first_name: '',
        last_name: '',
        province: '',
        city: '',
        email: '',
    })

    const [childrenData, setChildrenData] = useState([
        {
            first_name: '',
            last_name: '',
            current_school_id: '',
            guardian_id: '',
            grade: '',
            next_school_id: '',
        },
    ])

    function addNewChild() {
        setChildrenData([
            {
                first_name: '',
                last_name: '',
                current_school_id: '',
                guardian_id: '',
                grade: '',
                next_school_id: '',
            },
            ...childrenData,
        ])
    }

    // window.scrollTo(0, 0)

    async function postGuardian() {
        try {
            const response = await axios.post(
                'https://api.unpluggedcanada.com/guardians/',
                guardianData
            )
            if (response.data) {
                setGuardianData(response.data)

                return response.data.id
            }
        } catch (error) {
            return
        }
    }
    //
    async function submitPledge() {
        try {
            setLoading(true)
            const GuardianID = await postGuardian()

            childrenData.map(async (ChildData) => {
                const child = await axios.post(
                    `https://api.unpluggedcanada.com/guardians/${GuardianID}/children/`,
                    ChildData
                )
                console.log('x: ', child.data)

                const pledge = await axios.post(
                    `https://api.unpluggedcanada.com/pledges/${child.data.current_school_id}?grade=${child.data.grade}`
                )

                const signature = await axios.post(
                    `https://api.unpluggedcanada.com/guardians/${GuardianID}/signatures/`,
                    {
                        child_id: child.data.id,
                        pledge_id: pledge.data.id,
                    }
                )
                console.log(signature)
            })
            await axios.post(
                `https://api.unpluggedcanada.com/email_confirmation?name=${
                    guardianData.first_name + ' ' + guardianData.last_name
                }&email=${guardianData.email}`
            )
        } catch (error) {
            console.log(error)
            axios.delete(
                'https://api.unpluggedcanada.com/guardians/' + guardianData.id
            )
        }
    }

    return (
        <div className="flex flex-col bg-neutral-100">
            <Nav />
            <div className="flex items-center relative justify-center w-full h-[240px] lg:h-[300px]">
                <h2 className="text-2xl lg:text-[40px] z-20 font-bold uppercase text-neutral-100">
                    SIGN THE PLEDGE
                </h2>
                <img
                    src={pledgerBg}
                    className="w-full h-full object-cover absolute top-0 right-0"
                    alt="Blue stones wallpaper"
                />
            </div>
            <main className="w-full  px-4 py-5 lg:px-[180px]  lg:py-10 max-w-[1440px] mx-auto">
                <div className=" rounded-lg flex items-center justify-center">
                    <section className="max-w-[1440px] w-full py-8 lg:py-5 px-4 lg:px-8 flex flex-col gap-10">
                        <h1 className="text-gray-700 text-center text-2xl lg:text-[32px] font-bold  ">
                            How To Sign The Pledge?
                        </h1>
                        <ol className="list-decimal ml-5 flex flex-col gap-5 text-base lg:text-xl font-normal text-neutral-700">
                            <li>
                                To sign the pledge, your child must at least be
                                in kindergarten (for now!).
                            </li>
                            <li>
                                Please sign up your children younger than 14. To
                                add another child to a pledge form, simply
                                select “add another child” on the form.
                            </li>
                            <li>
                                Since pledges are organized by school, it is
                                very important to correctly identify your
                                child’s school in our database when filling out
                                the pledge form. To find your child’s school in
                                our database, type one or two key words from the
                                school name and hit the magnifier icon on the
                                form. Avoid words such as “the,” “elementary,”
                                “middle,” “junior,” and “school.”
                            </li>
                            <li>
                                If you cannot find your child’s current school
                                or next school, there is a place on the form to
                                enter the school’s name. Please be as specific
                                as possible here and avoid any acronyms. Please
                                try to enter the school’s name as it appears
                                officially.
                            </li>
                            <li>
                                On the pledge form, we ask for your child’s
                                current school and next school. Please enter the
                                current school your child attends and please
                                list the next school your child will attend,
                                which might be an upper elementary school,
                                intermediate school, junior high school, middle
                                school or high school.
                            </li>
                            <li>
                                Unplugged is only taking pledges from Canada at
                                the moment.
                            </li>
                        </ol>

                        <form className="form">
                            <h1 className="form__title text-[32px] text-[#2e4049]">
                                Unplugged Canada Pledge
                            </h1>
                            <div className="form__stepper">
                                <div
                                    className={
                                        'form__step-orb' +
                                        (isGuardian
                                            ? ' form__step-orb--SELECTED'
                                            : '')
                                    }
                                ></div>
                                <div
                                    className={
                                        'form__step-orb' +
                                        (!isGuardian
                                            ? ' form__step-orb--SELECTED'
                                            : '')
                                    }
                                ></div>
                            </div>
                            {loading && (
                                <Box
                                    position="relative"
                                    display="inline-flex"
                                    sx={{ height: '400px' }}
                                >
                                    <CircularProgress variant="determinate" />
                                    <Box
                                        top={0}
                                        left={0}
                                        bottom={0}
                                        right={0}
                                        position="absolute"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Typography
                                            variant="caption"
                                            component="div"
                                            color="textSecondary"
                                            fontSize="1rem"
                                        >{`${Math.round(progress)}%`}</Typography>
                                    </Box>
                                </Box>
                            )}
                            {!loading && isGuardian && (
                                <GuardianForm
                                    guardianData={guardianData}
                                    setGuardianData={setGuardianData}
                                    postGuardian={() => setIsGuardian(false)}
                                />
                            )}
                            {!loading && !isGuardian && (
                                <ChildForm
                                    childrenData={childrenData}
                                    setChildrenData={setChildrenData}
                                    submitPledge={submitPledge}
                                    addNewChild={addNewChild}
                                />
                            )}
                        </form>
                    </section>
                </div>
                <div className="flex flex-col gap-5">
                    <h3 className="text-gray-700 text-center text-2xl lg:text-[32px] font-bold  ">
                        Pledge Privacy
                    </h3>

                    <span className="text-center text-base lg:text-xl font-normal text-neutral-700">
                        Your surname will be shared with the other parents who
                        sign the Pledge, only when the Pledge becomes active. We
                        will not share your e-mail, child’s name, or their
                        school’s name with anyone and will never
                        post it publicly.
                    </span>
                </div>
            </main>

            <Footer />
        </div>
    )
}
