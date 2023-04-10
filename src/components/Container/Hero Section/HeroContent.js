import React from 'react'

export const HeroContent = () => {
  return (
    <section className='w-full mx-auto text-center md:w-[32rem] lg:w-full lg:text-left xl:w-[32.3rem]'>
        <p className='font-semibold text-base text-[#6B7280] mb-1'>FULL BODY CHECKUP</p>
        <h1 className='font-extrabold text-[#14532D] text-3xl xl:text-5xl'>Get body tests done from the comfort of your home</h1>
        <p className='mt-4 text-lg text-[#374151]'>Access the best body tests and doctors without leaving home. 
            Need help with booking your test? Our quiz is here to guide you.</p>
        {/* buttons */}
        <div className="mt-12 flex flex-col place-items-center md:flex-row gap-4 text-lg">
            <button className='py-4 w-[11.25rem] md:w-full bg-[#14532D] text-white rounded-[50px] transition hover:text-black hover:bg-white hover:border hover:border-black'>Take Quiz</button>
            <button className='py-4 w-[11.25rem] md:w-full rounded-[50px] border border-black transition hover:bg-[#14532D] hover:text-white hover:border-none'>Book Test</button>
        </div>
    </section>
  )
}
