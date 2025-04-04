import { Testimony } from '@/src/components/Testmony';
import { client } from '@/src/lib/sanity.client';

const getData = async () => {
  const query = `*[_type=="testimonial"][0..3]`;
  return await client.fetch(query) as Testimonial[];
};

const Page = async () => {
  const data = await getData()
  return (
    <div className='max-w-[1240px] mx-auto w-full mt-[150px] sm:py-6 lg:py-10'>
      <h2 className='w-full text-center text-[25px] font-[700] my-5 text-[#239492] leading-3'>The Impact of Our Program</h2>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 mx-5 mt-6'>
        {data.map((testimonial, index) => {
          return (
            <Testimony clamped={false} testimonial={testimonial} key={index} />
          )
        })}
      </div>
    </div>
  )
}


export default Page