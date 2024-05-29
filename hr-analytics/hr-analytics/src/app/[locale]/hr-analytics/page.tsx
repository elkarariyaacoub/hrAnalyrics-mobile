"use client"

import { useTranslations } from 'next-intl'
import ItemSlide from '@/components/item-slide'

const imgs = [
  '/hr-analytics/icons/005.png',
  '/hr-analytics/icons/002.png',
  '/hr-analytics/icons/003.png',
  '/hr-analytics/icons/004.png',
]

export default function Home() {

  const t = useTranslations('HRAnalyticsPage')

  return (
    <ItemSlide
      logo='/hr-analytics/logo-mini.png'
      primaryColor='hr-analystics-primary'
      items={imgs.map((img, i) => ({ image: img, title: t(`list.${i}.title`), description: t(`list.${i}.description`) }))}
      moreIcon='/hr-analytics/arrow.svg'
      contactLink='/hr-analytics'
      contactText={t('contact-button')} />
  )
}
