import React, { useState, useEffect } from 'react'
import Footer from '../../components/Footer/Footer.tsx'
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
                'https://api.unpluggedcanada.org/guardians/',
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

    async function submitPledge() {
        try {
            setLoading(true)
            // const GuardianID = await postGuardian()

            // childrenData.map(async (ChildData) => {
            //     const child = await axios.post(
            //         `https://api.unpluggedcanada.org/guardians/${GuardianID}/children/`,
            //         ChildData
            //     )
            //     console.log('x: ', child.data)

            //     const pledge = await axios.post(
            //         `https://api.unpluggedcanada.org/pledges/${child.data.current_school_id}?grade=${child.data.grade}`
            //     )

            //     const signature = await axios.post(
            //         `https://api.unpluggedcanada.org/guardians/${GuardianID}/signatures/`,
            //         {
            //             child_id: child.data.id,
            //             pledge_id: pledge.data.id,
            //         }
            //     )
            //     console.log(signature)
            // })
            // await axios.post(
            //     `https://api.unpluggedcanada.org/email_confirmation?name=${
            //         guardianData.first_name + ' ' + guardianData.last_name
            //     }&email=${guardianData.email}`
            // )
        } catch (error) {
            console.log(error)
            axios.delete(
                'https://api.unpluggedcanada.org/guardians/' + guardianData.id
            )
        }
    }

    return (
        <div>
            <Nav logoColor="black" />
            <form className="form">
                <h1 className="form__title text-[32px] text-[#2e4049]">
                    Unplugged Canada Pledge
                </h1>
                <div className="form__stepper">
                    <div
                        className={
                            'form__step-orb' +
                            (isGuardian ? ' form__step-orb--SELECTED' : '')
                        }
                    ></div>
                    <div
                        className={
                            'form__step-orb' +
                            (!isGuardian ? ' form__step-orb--SELECTED' : '')
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
            <Footer />
        </div>
    )
}
