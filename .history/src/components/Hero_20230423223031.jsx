import { logo } from '../assets '


const Hero = () => {
  return (
    <header
    className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center flex-col'>
            <img src={logo} alt='sumz_logo' className='w-28 h-28 object-contain' />
            <button 
                type='button'
                onClick={() => window.open('https://github.com/AlgoHussle/ai-summarize')}
                className='ora hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >
                    Github
            </button>
        </nav>
    </header>
  )
}

export default Hero