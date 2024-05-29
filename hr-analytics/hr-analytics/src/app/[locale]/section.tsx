"use client"

import { FC, Fragment } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import Sidebar from '@/components/sidebar'
import { motion } from 'framer-motion'
import WithLines from '@/components/with-lines'
import useIsLandscapeMode from '@/hooks/useIsLandscape'

interface Props {
  logo: string
  img: string
  titles: string[]
  description: string
  link: string,
  backgroundColor: string,
  colorPrimary: string,
  colorSecondary: string,
  menuColor?: 'black',
  contactText: string,
  learnMore: string,
  logoSize?: number,
  local: string
}

const Section : FC<Props>  = ({ titles, logo, link, img, description, backgroundColor, colorPrimary, colorSecondary, menuColor, contactText, learnMore, logoSize, local }) => {

  const isLandscape = useIsLandscapeMode()

  return (
    <div className={`min-h-screen h-full flex flex-col justify-between px-2 ${menuColor !== 'black' && 'bg-linear-gradient'}`} style={{ backgroundColor: `hsl(var(--${backgroundColor}))` }}>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .5, delay: 0 }}
        className="flex justify-between items-center p-6 px-2 w-full md:p-2 md:px-4">
        <Image src={logo} height={80} width={logoSize || 148} alt="logo" placeholder='empty' />
        <Sidebar color={menuColor} />
      </motion.div>
      <div className='flex flex-col justify-center items-center w-full h-full md:flex-row md:justify-center md:p-2 md:min-h-[80vh]'>
        <div className='md:pl-2'>  
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .5, delay: .2 }}
            className='text-center text-title font-bold mt-4 md:text-start md:mt-0 md:mb-1'
            style={{ lineHeight: isLandscape ? '2rem' :'1.8rem', color: `hsl(var(--${colorPrimary}))` }}>
            {
              titles.map((title, index) => (
                index % 2 === 0 ? (
                  <Fragment key={index}>
                    <WithLines text={title} />{index === titles.length - 1 ? '' : ' '}
                  </Fragment>
                ) : (
                  <span key={index} style={{ color: `hsl(var(--${colorSecondary}))`}}>
                    <WithLines text={title} />{index === titles.length - 1 ? '' : ' '}
                  </span>
                )
              ))
            }
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .5, delay: .4 }}
            className='text-center py-3 text-[.9rem] md:text-start md:mb-1' style={{ color: `hsl(var(--${colorPrimary}))`, lineHeight: '1.2rem' }}>
            <WithLines text={description} />
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .5, delay: .6 }}
            className='flex flex-col justify-center items-center md:flex-row md:justify-start md:gap-4 md:mb-1'>
            <Link href={`/${local}/contact`} className={`px-6 py-2 rounded-3xl text-gray-50`} style={{ backgroundColor: `hsl(var(--${colorSecondary}))` }}>
              {contactText}
            </Link>
            <Link
              href={link}
              className={`text-center opacity-75 text-sm mt-2 border-b-2  md:px-6 md:py-2 md:border-2 md:m-0 md:rounded-3xl`}
              style={{ color: `hsl(var(--${colorPrimary}))`, borderColor: `hsl(var(--${colorPrimary}))` }}>
              {learnMore}
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .5, delay: .8 }}
          className='w-full flex justify-center items-center p-4 max-w-94 md:p-0 md:px-2 md:max-w-72'>
          <Image src={img} width={800} height={800} alt="logo" placeholder='empty' className='w-full bg-opacity-50' priority={true} />
        </motion.div>
      </div>
    </div>
  )
}

export default Section