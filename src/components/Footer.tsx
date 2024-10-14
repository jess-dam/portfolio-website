function Footer() {
  return <div className="grid grid-cols-4 grid-rows-4 h-[250px] w-full p-10 gap-10 bg-white text-black uppercase">
    <h1>Jess Dam 2024©</h1>
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
    <div className='flex flex-col items-end text-right'>
      <a className='text-black hover:text-secondary' href='https://www.linkedin.com/in/jess-dam-507485165/'>LinkedIn</a>
      <a className='text-black hover:text-secondary' href='https://github.com/jess-dam'>Github</a>
    </div>
  </div>;
}

export default Footer;
