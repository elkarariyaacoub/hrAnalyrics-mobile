"use client"

import Image from 'next/image'
import Sidebar from '@/components/sidebar'
import hr_analytics_logo from '@/assets/images/hr-analytics-logo-2.png'
import { useTranslations } from 'next-intl'
import WithLines from '@/components/with-lines'

export default function Home() {

  const t = useTranslations('LegalNoticePage')

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
      <div className='px-2 w-full'>
        <h1
          className='text-lg text-left text-[#02B8DF] font-bold mt-8 uppercase'>
            {t('subtitle-1')}
        </h1>
        <p
          className='text-dark-blue'  style={{textAlign: 'justify',maxWidth:'99%'}}>
          <WithLines text={t('description-1')} />
        </p>
        <h1
          className='text-lg text-left text-[#02B8DF] font-bold mt-8 uppercase'>
            {t('subtitle-2')}
        </h1>
        <p
          className='text-dark-blue'>
            {t('description-2')}
        </p>
      </div>
    </div>
  )
}
