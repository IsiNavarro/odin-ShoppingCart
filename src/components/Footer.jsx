const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="w-full mt-10 bg-[rgb(250,250,250)] h-20
    flex items-center justify-center font-bold"
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
