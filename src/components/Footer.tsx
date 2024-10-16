function Footer() {
  return <div className='w-full bg-white text-black'>
    <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-4 h-[300px] p-4 pb-6 md:p-10 gap-4 md:gap-10  uppercase">
      <h1 className='text-2xl md:text-[2.5vw]'>Jess Dam 2024©</h1>

      <div>
        <h2>Made with</h2>
        <ul>Typescript</ul>
        <ul>React.JS</ul>
        <ul>Vite</ul>
        <ul>Vercel</ul>
      </div>

      <div>
        <h2>Designed with</h2>
        <ul>Figma</ul>
        <ul>Infinite Design</ul>
      </div>

      <div className='flex flex-col md:items-end md:text-right'>
        <a className='text-black hover:text-secondary' href='https://www.linkedin.com/in/jess-dam-507485165/'>LinkedIn</a>
        <a className='text-black hover:text-secondary' href='https://github.com/jess-dam'>Github</a>
      </div>
    </div>
  </div>;
}

export default Footer;
