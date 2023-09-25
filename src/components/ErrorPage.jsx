import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <div className="px-4 h-screen flex flex-col gap-2 items-center justify-center">
        <h1 className="font-bold text-4xl text-slate-900">Oops!</h1>
        <h2 className="font-bold text-2xl text-slate-700 text-center">
          This page does not exist.
        </h2>
        <button className="font-bold text-lg bg-slate-950 text-white px-10 py-1 mt-2">
          <Link to={'/'}>Home page</Link>
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
