'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { setPage } from '@/lib/slice'

const LangagePage = ({ handleClose }: { handleClose: () => void }) => {

    const handleClick = () => {
        localStorage.setItem('first-time', 'true')
        handleClose()
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: .5, type: 'spring' }}
            className='bg-gray-50 flex flex-col justify-center items-center min-h-screen p-8'>
            <div className='w-full bg-[#024d7c] h-96 max-w-xs flex flex-col justify-evenly items-center relative border'>
                <h1 className='text-3xl text-center text-gray-50 font-bold'>
                    Choisissez votre langue
                </h1>
                <h1 className='text-3xl text-center text-gray-50 font-bold'>
                    Choose you language
                </h1>
                <div className='w-full flex justify-evenly items-center'>
                    <Link href="/fr" onClick={handleClick}>
                        <Image width={68} height={68} src="/popup/fr.svg" alt='flas-fr' placeholder='empty' />
                    </Link>
                    <Link href="/en" onClick={handleClick}>
                        <Image width={68} height={68} src="/popup/en.svg" alt='flas-en' placeholder='empty' />
                    </Link>
                </div>
                <a className='absolute -top-5 -right-5' onClick={handleClose}>
                    <Image width={48} height={48} src="/popup/x_icon.svg" alt='close' placeholder='empty' />
                </a>
            </div>
        </motion.div>
    )
}

const NoticePage = ({ handleClose }: { handleClose: () => void }) => {

    const t = useTranslations('popup')
    
    useEffect(() => {
        setTimeout(() => {
            handleClose()
        }, 2000)
    }, [handleClose])

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: .5, type: 'spring' }}
            className='bg-gray-50 flex flex-col justify-center items-center min-h-screen p-8'>
            <div className='w-full bg-[#024d7c] h-96 max-w-xs flex flex-col justify-evenly items-center relative border'>
                <Image width={80} height={80} src="/popup/bell_icon.svg" alt='close'  placeholder='empty' />
                <h1 className='text-xl text-center text-gray-50'>
                    {t("message")}
                </h1>
                <a className='absolute -top-5 -right-5' onClick={handleClose}>
                    <Image width={48} height={48} src="/popup/x_icon.svg" alt='close' placeholder='empty' />
                </a>
            </div>
        </motion.div>
    )
}

export default function Template({ children }: { children: React.ReactNode }) {

    const p = useSelector((state: any) => state.page.value)
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('first-time')){
            dispatch(setPage(1))
            dispatch(setPage(2))
        } 
    }, [dispatch])

    return (
        <AnimatePresence>
            
                {
                    p === 0 ? <LangagePage handleClose={() => dispatch(setPage(1))} />
                    : p === 1 ? <NoticePage handleClose={() => dispatch(setPage(2))} />
                    : (
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: .5, type: 'spring' }}>
                            {children}
                        </motion.div>
                    )
                }
        </AnimatePresence>
    )
}