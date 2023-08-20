import { Testimony } from '@/src/components/Testmony'

const Page = () => {
  return (
    <div className='max-w-[1240px] mx-auto w-full mt-[100px]'>
      <h2 className='w-full text-center text-[25px] font-[700] my-5 text-[#239492] leading-3'>The Impact of Our Program</h2>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 mx-5'>
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