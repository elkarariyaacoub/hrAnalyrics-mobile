"use client"

import { useEffect, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import AutoPlay from 'embla-carousel-autoplay'
import { MdCircle, MdOutlineCircle } from 'react-icons/md'
import { useLocale, useTranslations } from 'next-intl'
import Section from './section'

export default function Home() {

  const t = useTranslations('HomePage')

  const local = useLocale()

  const [selected, setSelected] = useState(0)
  const [api, setApi] = useState<CarouselApi | null>(null)

  const renderDots = () => {
    if (api) {
      return api.scrollSnapList().map((key: number, index: number) => {
        return (
          <a key={key} onClick={() => api.scrollTo(index)} className='cursor-pointer'>
            {
              index === selected ? <MdCircle className="w-2.5 h-2.5 text-slate-500" /> : <MdOutlineCircle className="w-2.5 h-2.5 text-slate-500" />
            }
          </a>
        );
      });
    }
    return null
  }

  useEffect(() => {
    if (api) {
      api.on('select', () => { setSelected(api.selectedScrollSnap()) })
    }
  }, [api])

  return (
    <div className='bg-background-dark flex flex-col min-h-screen'>
        <Carousel opts={{ loop: true, active: true }} plugins={[ AutoPlay({ delay: 5000, stopOnInteraction: false }) ]} setApi={setApi}>
          <CarouselContent className='h-full'>
            <CarouselItem className='h-full'>
              <Section
                logo="/engaged/logo-full.png"
                img="/landing/engaged.png"
                titles={[t('engaged-title-01'), t('engaged-title-02')]}
                description={t('engaged-description')}
                backgroundColor='background-dark'
                colorPrimary='white'
                colorSecondary='engaged-primary'
                contactText={t('engaged-button')}
                learnMore={t('learn-more')}
                local={local}
                link={`/${local}/engaged`} />
            </CarouselItem>
            <CarouselItem>
            <Section
                logo="/bottomline/logo-full.png"
                img="/landing/bottomline.png"
                titles={[t('bottomline-title-01'), t('bottomline-title-02'), t('bottomline-title-03')]}
                description={t('bottomline-description')}
                backgroundColor='background-dark'
                colorPrimary='white'
                colorSecondary='bottomline-primary'
                contactText={t('bottomline-button')}
                learnMore={t('learn-more')}
                local={local}
                link={`/${local}/bottom-line`} />
            </CarouselItem>
            <CarouselItem>
              <Section
                menuColor='black'
                logo="/hr-analytics/logo-full.png"
                logoSize={228}
                img="/landing/hr-analytics.png"
                titles={[t('hr-analysis-title')]}
                description={t('hr-analysis-description')}
                backgroundColor='white'
                colorPrimary='hr-analystics-dark'
                colorSecondary='hr-analystics-primary'
                contactText={t('hr-analysis-button')}
                learnMore={t('learn-more')}
                local={local}
                link={`/${local}/hr-analytics`} />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className='flex justify-center items-center w-full h-8 fixed bottom-0 left-0 gap-2'>
          {renderDots()}
        </div>
    </div>
  )
}