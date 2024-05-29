"use client"

import Image from 'next/image'
import Sidebar from '@/components/sidebar'
import hr_analytics_logo from '@/assets/images/hr-analytics-logo-2.png'
import { useTranslations } from 'next-intl'
import WithLines from '@/components/with-lines'

const contents = [2, 5, 1, 8, 2, 2]

export default function Home() {

  const t = useTranslations('ConfidentialityPage')

  return (
    <div className='flex h-[100svh] flex-col justify-start items-center px-4'>
      <div
        className='flex justify-between items-center p-6 px-0 w-full'>
        <Image src={hr_analytics_logo} height={54} alt="logo" placeholder='empty' />
        <Sidebar color="black" />
      </div>
      <h1
        className='text-title text-center text-dark-blue font-bold py-8'>
          {t('title')}
      </h1>
      <div className='px-4 w-full mb-2'>
        <p
          className='text- mt-2 text-dark-blue font-normal uppercase'
          style={{ lineHeight: '1.2rem',textAlign: 'justify' }}>
          <WithLines text={t('head-1')} />
        </p>
        <p
          className='text-dark-blue mt-2 font-normal uppercase'
          style={{ lineHeight: '1.2rem',textAlign: 'justify' }}>
          <WithLines text={t('head-2')} />
        </p>
      </div>
      {
        contents.map((content, index) => (
          <div key={index} className='px-4 w-full'>
            <h1 style={{ textAlign: 'justify' }}
              className='text-lg text-left text-[#02B8DF] font-bold mt-8 uppercase'>
                {/* @ts-ignore */}
                {index + 1} - {t(`subtitle-${index + 1}`)}
            </h1>
            {
              new Array(content).fill('').map((_, index2) => (
                <p
                  key={index2}
                  className='text-dark-blue mt-2'
                  style={{ lineHeight: '1.2rem',textAlign: 'justify' }}>
                  {/* @ts-ignore */}
                  <WithLines text={t(`description-${index + 1}-${index2 + 1}`)} />
                </p>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}