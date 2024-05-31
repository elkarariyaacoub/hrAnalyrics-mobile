"use client"

import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import Sidebar from '@/components/sidebar'
import { motion } from 'framer-motion'
import WithLines from '@/components/with-lines'
import useIsLandscapeMode from '@/hooks/useIsLandscape'
import { useLocale } from 'next-intl'


interface Props {
  items: Array<{
    title: string
    description: string
    image: string
  }>
  primaryColor: string
  logo: string
  moreIcon: string
  contactLink: string
  contactText: string
  logoSize?: number
}

const ItemSlide : FC<Props> = ({ items, contactLink, primaryColor, logo, moreIcon, contactText, logoSize }) => {

  const isLandscape = useIsLandscapeMode()
  const local = useLocale()

  const [api, setApi] = useState<CarouselApi | null>(null)

  const handleNext = () => {
    if (api && api.canScrollNext()) {
      api.scrollNext()
    } else if (api && !api.canScrollNext()) {
      // console.log('last !')
    }
  }

  const initial = { y: isLandscape ? 0 : 100, x: isLandscape ? 100 : 0, opacity: 0 }
  const inView = { y: 0, x: 0, opacity: 1 }


  return (
    <Carousel opts={{ loop: false, active: true }} plugins={[ WheelGesturesPlugin() ]} orientation={isLandscape ? 'horizontal' :'vertical'} setApi={setApi}>
      <CarouselContent className='h-[100svh]'>
        {
          items.map((item, index) => (
            <CarouselItem key={index} className='flex flex-col justify-between items-center px-4'>
              <motion.div
                initial={initial}
                whileInView={inView}
                transition={{ duration: .5, type: "linear" }}
                className='flex justify-between items-center p-6 px-0 w-full md:p-0 md:px-6 md:pt-4'>
                <Image src={logo} width={logoSize || 38} height={0} alt="logo" placeholder='empty' />
                <Sidebar color="black" />
              </motion.div>
              <div className='flex flex-col items-center gap-4 md:flex-row'>
                <div className='md:flex-[3] flex flex-col items-center md:px-4 md:border-r-2 md:border-dark-blue'>
                  <motion.div
                    initial={initial}
                    whileInView={inView}
                    transition={{ duration: .5, type: "linear", delay: .4 }}>
                    <Image src={item.image} width={114} height={0} alt='logo' />
                  </motion.div>
                  <motion.h1
                    initial={initial}
                    whileInView={inView}
                    transition={{ duration: .5, type: "linear", delay: .6 }}
                    className='text-title text-center font-black text-nowrap mt-2 md:text-wrap md:text-xl lg:text-title'
                    style={{ lineHeight: '1.8rem', color: `hsl(var(--${primaryColor}))` }}>
                    <WithLines text={item.title} />
                  </motion.h1>
                </div>
                <motion.p
                  initial={initial}
                  whileInView={inView}
                  transition={{ duration: .5, type: "linear", delay: .6 }}
                  className='text-center font-medium text-dark-blue text-nowrap mt-2 md:text-wrap md:flex-[4] md:text-start'
                  style={{ lineHeight: '1.4rem' }}>
                  <WithLines text={item.description} />
                </motion.p>
              </div>
              <motion.div
                initial={initial}
                whileInView={inView}
                transition={{ duration: .5, type: "linear", delay: .8 }}
                className='flex justify-center items-center w-full p-12 md:p-0 md:justify-end md:px-8'>
                {
                  index === items.length - 1 ? (
                    <Link
                      href={`/${local}/contact`}
                      className='px-8 py-2 mb-8 rounded-3xl text-white font-normal'
                      style={{ backgroundColor: `hsl(var(--${primaryColor}))` }}>
                      {contactText}
                    </Link>
                  ) : (
                    <motion.div
                      initial={{ y: isLandscape ? 0 : 5, x: isLandscape ? 5 : 0 }}
                      whileInView={{ y: isLandscape ? 0 : -5, x: isLandscape ? -5 : 0 }}
                      transition={{ 
                        duration: 5,
                        type: "spring",
                        delay: 5,
                        repeat: Infinity,
                        bounce: 1,
                        repeatType: "loop",
                      }}>
                      <a onClick={handleNext} className='w-80'>
                        <Image src={moreIcon} width={64} height={0} alt='more' className='md:rotate-90'/>
                      </a>
                    </motion.div>
                  )
                }
              </motion.div>
            </CarouselItem>
          ))
        }
      </CarouselContent>
    </Carousel>
  )
}

export default ItemSlide