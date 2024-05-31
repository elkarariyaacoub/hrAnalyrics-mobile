"use client"

import ItemSlide from '@/components/item-slide'
import { useTranslations } from 'next-intl'

const imgs = [
  '/bottomline/icons/001.png',
  '/bottomline/icons/002.png',
  '/bottomline/icons/003.png',
  '/bottomline/icons/004.png',
  '/bottomline/icons/005.png',
  '/bottomline/icons/006.png',
]

export default function Home() {

  const t = useTranslations('BottomlinePage')

  return (
    <ItemSlide
      logo='/bottomline/logo-mini.png'
      primaryColor='bottomline-primary'
      items={imgs.map((img, i) => ({ image: img, title: t(`list.${i}.title`), description: t(`list.${i}.description`) }))}
      moreIcon='/bottomline/arrow.svg'
      contactLink='/bottomline'
      contactText={t('contact-button')} />
  )
}