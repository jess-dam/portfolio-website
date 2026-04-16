function Footer() {
  return (
    <footer className="relative w-full overflow-clip">
      <div className="relative z-20 grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-4 h-[300px] p-4 pb-6 md:p-10 gap-4 md:gap-10">
        <h1 className="text-2xl md:text-4xl">Jess Dam 2024©</h1>

        <div>
          <h2>Made with</h2>
          <ul className="uppercase">
            <li>Typescript</li>
            <li>React.JS</li>
            <li>Vite</li>
            <li>Vercel</li>
            <li>Framer Motion</li>
          </ul>
        </div>

        <div>
          <h2>Designed with</h2>
          <ul className="uppercase">
            <li>Figma</li>
            <li>Infinite Design</li>
          </ul>
        </div>

        <div className="flex flex-col py-8 md:py-0 md:items-end md:text-right uppercase">
          <a
            className="hover:text-secondary"
            href="https://www.linkedin.com/in/jess-dam-507485165/"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-secondary"
            href="https://github.com/jess-dam"
          >
            Github
          </a>
        </div>
      </div>
      <div className="absolute z-0 bottom-[-150px] left-[-40px] bg-accent rounded-full w-[600px] h-[300px] blur-3xl opacity-80" />
    </footer>
  );
}

export default Footer;
