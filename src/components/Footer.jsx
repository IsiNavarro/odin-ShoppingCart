const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="w-full mt-20 bg-white border-t-[1px] border-slate-300 h-20
    flex items-center justify-center font-bold justify-self-end"
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
