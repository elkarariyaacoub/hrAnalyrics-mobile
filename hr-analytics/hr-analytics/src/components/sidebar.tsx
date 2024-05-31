'use client'

import { useState, FC } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet'
import { MdMenu } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import useIsLandscapeMode from '@/hooks/useIsLandscape'
import { MdOutlineSwapHoriz } from "react-icons/md"
import { usePathname } from 'next/navigation'

const Sidebar: FC<{ color?: 'black', fixed?: boolean }> =  ({ color, fixed }) => {

    const t = useTranslations('Sidebar')

    const local = useLocale()
    const path = usePathname()

    const [open, setOpen] = useState(false)

    const MotionLink = motion(Link)

    const isLandscape = useIsLandscapeMode()

    const handleClose = () => {
        setOpen(false)
    }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
            <Button size="icon" variant="ghost" className={ `${fixed ? 'fixed top-8 right-4' : ''} ${color !== 'black' ? 'hover:bg-transparent' : ''}` }>
                <MdMenu size={36} color={ color === 'black' ? '#111' : '#fff' } />
            </Button>
        </SheetTrigger>
        <SheetContent className='w-full h-full border-none' side={isLandscape ? 'bottom' : 'right'}>
            <SheetHeader className='grid grid-cols-12 h-full'>
                <div className='col-span-4'></div>
                <div className='col-span-8 flex flex-col justify-center items-center md:flex-row md:items-start'>
                    <MotionLink
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: .5, type: "linear" }}
                        className='text-5xl text-left text-gray-50 md:mt-8' href={`/${local}/`} onClick={handleClose}>
                        <span className='w-10'>{t('home-link')}</span>
                    </MotionLink>
                    <motion.hr
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: .5, type: "linear", delay: .2 }}
                        className='w-full border border-gray-50 md:w-0 md:h-full mt-16 mb-4 md:m-0 md:mx-8' />
                    <ul className='flex flex-col gap-1'>
                        <motion.li
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, type: "linear", delay: .4 }}
                            className='font-light text-gray-50 text-left list-disc'>
                            <Link
                                href={`/${local}/hr-analytics`} className='text-lg ml-1' onClick={handleClose}>
                                {t('hr-analytis-link')}
                            </Link>
                        </motion.li>
                        <motion.li
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, type: "linear", delay: .5 }}
                            className='font-light text-gray-50 text-left list-disc'>
                            <Link
                                href={`/${local}/engaged`} className='text-lg ml-1' onClick={handleClose}>
                                {t('engaged-link')}
                            </Link>
                        </motion.li>
                        <motion.li
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, type: "linear", delay: .6 }}
                            className='font-light text-gray-50 text-left list-disc'>
                            <Link
                                href={`/${local}/bottom-line`} className='text-lg ml-1' onClick={handleClose}>
                                {t('bottomline-link')}
                            </Link>
                        </motion.li>
                        <motion.li
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, type: "linear", delay: .7 }}
                            className='font-light text-gray-50 text-left list-disc'>
                            <Link
                                href={`/${local}/contact`} className='text-lg ml-1' onClick={handleClose}>
                                {t('contact-link')}
                            </Link>
                        </motion.li>
                        <motion.li
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, type: "linear", delay: .8 }}
                            className='font-light text-gray-50 text-left list-disc'>
                            <Link
                                href={`/${local}/legal-notices`} className='text-lg ml-1' onClick={handleClose}>
                                {t('legal-notice-link')}
                            </Link>
                        </motion.li>
                        <motion.li
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, type: "linear", delay: .9 }}
                            className='font-light text-gray-50 text-left list-disc'>
                            <Link
                                href={`/${local}/confidentiality`} className='text-lg ml-1' onClick={handleClose}>
                                {t('confidentiality-link')}
                            </Link>
                        </motion.li>
                        <motion.li
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, type: "linear", delay: 1 }}
                            className='font-light text-gray-50 text-left list-disc'>
                            <Link
                                href={`/${local}/general-conditions`} className='text-lg ml-1' onClick={handleClose}>
                                {t('conditions-link')}
                            </Link>
                        </motion.li>
                        <motion.li
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: .5, type: "linear", delay: 1.1 }}
                            className='font-light text-gray-50 text-left list-disc cursor-pointer'>
                            <Link
                                href={path.replace(/en|fr/, t('lang-to'))}
                                className='text-lg ml-1 flex items-center gap-2'
                                onClick={handleClose}>
                                {t('lang')} <span><MdOutlineSwapHoriz size={30} /></span>
                            </Link>
                        </motion.li>
                        <li>
                        </li>
                    </ul>
                </div>
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}

export default Sidebar