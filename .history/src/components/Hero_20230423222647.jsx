import { logo } from '../assets '


const Hero = () => {
  return (
    <header
    className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center flex-col'>
            <img src={logo} alt='sumz_logo' className='w-28 h-20' />
        </nav>
    </header>
  )
}

export default Hero