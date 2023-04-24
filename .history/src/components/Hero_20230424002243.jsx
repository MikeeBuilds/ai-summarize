import { logo } from "../assets ";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 h-28 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/AlgoHussle/ai-summarize")
          }
          className="black_btn hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles With <br className="max-md:hidden" />
        <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
          OpenAI GPT-4
        </span>
      </h1>
      <h2 className="desc">
        
         
      </h2>
    </header>
  );
};

export default Hero;
