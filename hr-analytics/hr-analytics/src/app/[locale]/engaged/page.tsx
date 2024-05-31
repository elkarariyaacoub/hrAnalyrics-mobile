"use client"

import { useTranslations } from 'next-intl'
import ItemSlide from '@/components/item-slide'

const imgs = [
  '/engaged/icons/001.png',
  '/engaged/icons/002.png',
  '/engaged/icons/003.png',
  '/engaged/icons/004.png',
  '/engaged/icons/005.png',
  '/engaged/icons/006.png'
]

export default function Home() {

  const t = useTranslations('EngagedPage')

  return (
    <ItemSlide
      logo='/engaged/logo-mini.png'
      logoSize={42}
      primaryColor='engaged-primary'
      items={imgs.map((img, i) => ({ image: img, title: t(`list.${i}.title`), description: t(`list.${i}.description`) }))}
      moreIcon='/engaged/arrow.svg'
      contactLink='/engaged'
      contactText={t('contact-button')} />
  )
}