import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';

export const HeroSection = () => {
  return (
    <div className='grid items-center lg:grid-cols-2 gap-[7.25rem] mt-[4.56rem] mb-[3.375rem]'>
      <HeroContent />
      <HeroImage />
    </div>
  )
}
