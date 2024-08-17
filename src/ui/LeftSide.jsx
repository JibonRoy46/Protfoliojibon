
import SocialLinks from './SocialLinks';

const LeftSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-lightText '>
      <SocialLinks/>
      <div className='w-[1px] h-32 bg-darkText' />
      </div>
  )
}

export default LeftSide