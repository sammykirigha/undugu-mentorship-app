import { Testimony } from '@/src/components/Testmony'

const Page = () => {
  return (
    <div className='max-w-[1200px] mx-auto w-full mt-[100px]'>
      <div className=' flex flex-wrap gap-4 py-10'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15].map((item, index) => {
          return (
            <Testimony key={index} />
          )
        })}
      </div>
    </div>
  )
}


export default Page