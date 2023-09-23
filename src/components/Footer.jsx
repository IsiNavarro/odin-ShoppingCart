const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="w-full bg-slate-950 h-28 text-white
    flex items-center justify-center text-lg md:text-xl font-bold"
    >
      <p>
        Copyright © {year}
        {' - '}
        <a
          href="https://github.com/isiNavarro"
          target="_blank"
          rel="noreferrer"
        >
          isiNavarro
        </a>
      </p>
    </footer>
  );
};

export default Footer;
