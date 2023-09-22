import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <div>
        Oops! This page does not exist.{" let's go back to the "}
        <Link to={'/'}>MAIN PAGE</Link>.
      </div>
    </>
  );
};

export default ErrorPage;
