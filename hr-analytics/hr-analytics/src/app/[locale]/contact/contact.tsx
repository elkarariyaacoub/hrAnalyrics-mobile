import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet'

const Sidebar =  () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <button className='bg-teal-500 px-6 py-2 rounded-3xl text-white text-lg font-bold'>
                Contact
            </button>
        </SheetTrigger>
        <SheetContent className='w-full'>
            <form className='w-full h-full flex justify-end flex-col items-center gap-4 px-16 py-4'>
                <input type="text" className='w-full py-2 pb-4 rounded-none text-white bg-transparent border-b border-b-white border-solid' placeholder='Name' style={{ outline: 'none' }} />
                <input type="text" className='w-full py-2 pb-4 rounded-none text-white bg-transparent border-b border-b-white border-solid' placeholder='Last Name' style={{ outline: 'none' }} />
                <input type="text" className='w-full py-2 pb-4 rounded-none text-white bg-transparent border-b border-b-white border-solid' placeholder='Position' style={{ outline: 'none' }} />
                <input type="text" className='w-full py-2 pb-4 rounded-none text-white bg-transparent border-b border-b-white border-solid' placeholder='Company' style={{ outline: 'none' }} />
                <input type="text" className='w-full py-2 pb-4 rounded-none text-white bg-transparent border-b border-b-white border-solid' placeholder='Phone' style={{ outline: 'none' }} />
                <input type="text" className='w-full py-2 pb-4 rounded-none text-white bg-transparent border-b border-b-white border-solid' placeholder='Professional email' style={{ outline: 'none' }} />
                <textarea className='w-full py-2 pb-4 rounded-none text-white bg-transparent border-b border-b-white border-solid resize-none mb-8' rows={4} placeholder='Message' style={{ outline: 'none' }}></textarea>
                <button className='bg-teal-500 w-40 py-1.5 rounded-3xl text-white text-lg font-bold' type='submit'>Send</button>
            </form>
        </SheetContent>
    </Sheet>
  )
}

export default Sidebar