"use client"

import Link from "next/link"
import { MdArrowBackIos } from "react-icons/md"
import { motion } from "framer-motion"
import { useLocale, useTranslations } from "next-intl"
import { SubmitErrorHandler, useForm } from 'react-hook-form'
import { useToast } from "@/components/ui/use-toast"
import { sendEmailContact } from '@/services/mail'

interface ContactData {
  name: string
  lastname: string
  email: string
  phone: string
  position: string
  company: string
  message: string
}

export default function Home() {

  const t = useTranslations("ContactPage")
  const { register, handleSubmit } = useForm<ContactData>()
  const { toast } = useToast()

  const local = useLocale()

  const MotionLink = motion(Link)

  const onSubmit = async (data: ContactData) => {
    try {
      const resp = await sendEmailContact(data)
      console.log(resp)
      toast({
        title: 'Success',
        description: 'Your message has been sent',
        className: 'bg-green-500 text-white border-green-500 shadow-none',
      })
    } catch (error) {
      console.log(error)
      toast({
        title: 'Success',
        description: 'Your message has been sent',
        className: 'bg-green-500 text-white border-green-500 shadow-none',
      })
    }
  }

  const onError: SubmitErrorHandler<ContactData> = (error) => {
    toast({
      title: 'Error',
      description: error.message?.message || 'Something went wrong',
      variant: 'destructive'
    })
  }

  return (
    <div className='w-full bg-linear-gradient' style={{ minHeight: '100vh' }}>
      <MotionLink
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .5, type: "linear" }}
        href={`/${local}`}
        className="absolute left-5 top-16 rounded-sm opacity-100 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-secondary hover:bg-transparent">
        <MdArrowBackIos size={24} color="#fff" />
        <span className="sr-only">Close</span>
      </MotionLink>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className='w-full h-full flex justify-end flex-col items-center gap-6 px-10 md:px-16 py-4 md:flex-row'
        style={{ minHeight: '100vh' }}>
        <div className="grid grid-cols-12">
          <div className="col-span-12"></div>
          <div className="col-span-12">
            <motion.input
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .5, type: "linear", delay: .2 }}
              type="text"
              {...register("name", { required: { value: true, message: 'fields required!' } })}
              className='w-full py-2 pb-4 rounded-none text-white bg-transparent border-b border-b-white border-solid placeholder:text-gray-50 mb-4'
              placeholder={t('input-first-name')}
              style={{ outline: 'none' }} />

            <motion.input
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .5, type: "linear", delay: .2 }}
              type="text"
              {...register("lastname", { required: { value: true, message: 'fields required!' } })}
              className='w-full py-2 pb-4 rounded-none text-white bg-transparent border-b border-b-white border-solid placeholder:text-gray-50 mb-4'
              placeholder={t('input-last-name')}
              style={{ outline: 'none' }} />
            
            <motion.input
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .5, type: "linear", delay: .2 }}
              type="text"
              {...register("position", { required: { value: true, message: 'fields required!' } })}
              className='w-full py-2 pb-4 rounded-none text-white bg-transparent border-b border-b-white border-solid placeholder:text-gray-50 mb-4'
              placeholder={t('input-post')}
              style={{ outline: 'none' }} />
             
            <motion.input
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .5, type: "linear", delay: .4 }}
              type="text"
              {...register("company", { required: { value: true, message: 'fields required!' } })}
              className='w-full py-2 pb-4 rounded-none text-white bg-transparent border-b border-b-white border-solid placeholder:text-gray-50 mb-4'
              placeholder={t('input-company')}
              style={{ outline: 'none' }} />
            <motion.input
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .5, type: "linear", delay: .5 }}
              type="text"
              {...register("phone", { required: { value: true, message: 'fields required!' } })}
              className='w-full py-2 pb-4 rounded-none text-white bg-transparent border-b border-b-white border-solid placeholder:text-gray-50 mb-4'
              placeholder={t('input-phone')}
              style={{ outline: 'none' }} />
          </div>
          <div className="col-span-12">
            
              <motion.input
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .5, type: "linear", delay: .7 }}
              type="text"
              {...register("email", { required: { value: true, message: 'fields required!' } })}
              className='w-full py-2 pb-4 rounded-none text-white bg-transparent border-b border-b-white border-solid placeholder:text-gray-50 mb-4'
              placeholder={t('input-email')}
              style={{ outline: 'none' }} />
            <motion.textarea
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .5, type: "linear", delay: .8 }}
              className='w-full py-2 pb-4 rounded-none text-white bg-transparent border-b border-b-white border-solid resize-none mb-8 placeholder:text-gray-50'
              rows={4}
              {...register("message", { required: { value: true, message: 'fields required!' } })}
              placeholder={t('input-message')}
              style={{ outline: 'none' }}>
            </motion.textarea>
          </div>
          <div className="col-span-12 flex justify-center items-center py-4 mb-2">
            <button className='bg-teal-500 w-40 py-1.5 rounded-3xl text-white' type='submit'>Send</button>
          </div>
        </div>
      </form>
    </div>
  )
}