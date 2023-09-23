const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="w-full mt-10 bg-[#ffebce3f] h-20
    flex items-center justify-center text-lg font-bold"
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
